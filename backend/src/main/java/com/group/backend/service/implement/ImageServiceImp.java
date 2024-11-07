package com.group.backend.service.implement;

import com.group.backend.entity.Image;
import com.group.backend.entity.Laptop;
import com.group.backend.repository.ImageRepository;
import com.group.backend.service.ImageService;
import com.group.backend.service.FormatService;
import com.group.backend.service.LaptopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Service
public class ImageServiceImp implements ImageService {

    private String FolderPath = "D:\\OOP_MajorAssignment\\frontend\\image\\laptop\\";
    @Autowired
    private ImageRepository imageRepo;
    @Autowired
    private LaptopService laptopService;
    @Autowired
    private FormatService formatService;

    @Override
    public String uploadImages(List<MultipartFile> images) throws IOException {
        Laptop laptop = laptopService.getLastLaptop();
        for(int i = 0; i < images.size(); i++){
            Image newImage = new Image();
            String imageType = formatService.imgTypeFormat(images.get(i).getContentType());
            System.out.println(images.get(i).getContentType());
            String filePath = "image/laptop/" + formatService.laptopNameFormat(laptop.getName()) + "_" + (i + 1) + imageType;
            FolderPath += formatService.laptopNameFormat(laptop.getName()) + "_" + (i + 1) + imageType;
            System.out.println(filePath);
            newImage.setLaptop(laptop);
            newImage.setFilePath(filePath);
            imageRepo.save(newImage);
            images.get(i).transferTo(new File(FolderPath));
        }
        return "File uploaded successfully";
    }
}
