package com.group.backend.Service;

import com.group.backend.Entity.User;
import com.group.backend.Respository.TokenRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.*;
import java.util.function.Function;

@Service
public class JwtService {

    private final TokenRepository tokenRepo;

    private SecretKey secretKey = Jwts.SIG.HS256.key().build();
    private String secretString = Encoders.BASE64URL.encode(secretKey.getEncoded());

    public JwtService(TokenRepository tokenRepo) {
        this.tokenRepo = tokenRepo;
    }

    public String generateAccessToken(User user) {
        return generateToken(user, 1000 * 60 * 3);
    }

    public String generateRefreshToken(User user) {
        return  generateToken(user, 1000 * 1000 * 60 * 3);
    }

    private String generateToken(User user, long expireTime) {
        return Jwts.builder()
                .subject(user.getUsername())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + expireTime))
                .signWith(getKey())
                .compact();
    }

    private SecretKey getKey(){
        byte[] keyBytes = Decoders.BASE64URL.decode(secretString);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public Claims extractAllClaims(String token){
        return Jwts.parser()
                .verifyWith(getKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver){
        Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }

    public boolean isValidAccessToken(String token, UserDetails userDetails){
        String username = extractUsername(token);
        boolean isValidAccessToken = tokenRepo.findByAccessToken(token).map(t -> !t.isLoggedOut()).orElse(false);
        return userDetails.getUsername().equals(username) && !isTokenExpired(token) && isValidAccessToken;
    }

    public boolean isValidRefreshToken(String token, User user) {
        String username = extractUsername(token);
        boolean isValidRefreshToken = tokenRepo.findByRefreshToken(token).map(t -> !t.isLoggedOut()).orElse(false);
        return user.getUsername().equals(username) && !isTokenExpired(token) && isValidRefreshToken;
    }

    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }
}
