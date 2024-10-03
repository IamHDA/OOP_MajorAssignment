CREATE TABLE `User` (
  `ID` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `Name` NVARCHAR(100),
  `Email` VARCHAR(50),
  `Phone` VARCHAR(11),
  `Username` VARCHAR(50) UNIQUE,
  `Pass` VARCHAR(50),
  `RoleID` BIT,
  `UserAddress` NVARCHAR(100)
);

CREATE TABLE `Role` (
  `ID` BIT PRIMARY KEY,
  `Name` VARCHAR(9)
);

CREATE TABLE `Laptop` (
  `ID` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `SpecID` BIGINT,
  `Name` VARCHAR(100),
  `Brand` VARCHAR(50),
  `Price` INT,
  `Release_Date` DATE,
  `Status` BIGINT,
  `Sale` SMALLINT,
  `Available` BOOLEAN
);

CREATE TABLE `LaptopCategory` (
  `CateID` BIGINT,
  `LaptopID` BIGINT,
  PRIMARY KEY (`CateID`, `LaptopID`)
);

CREATE TABLE `Category` (
  `ID` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `Name` NVARCHAR(100)
);

CREATE TABLE `Status` (
  `ID` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `Name` NVARCHAR(50),
  `Description` NVARCHAR(100)
);

CREATE TABLE `Comment` (
  `ID` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `UserID` BIGINT,
  `LaptopID` BIGINT,
  `Content` NVARCHAR(255),
  `RatingValue` SMALLINT,
  `Post_At` TIMESTAMP,
  `Update_At` TIMESTAMP
);

CREATE TABLE `Shipping_Method` (
  `ID` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `Name` NVARCHAR(50),
  `Price` INT
);

CREATE TABLE `Order` (
  `ID` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `UserID` BIGINT,
  `Shipping_Address` NVARCHAR(100),
  `Status` BIGINT,
  `Shipping_Method` BIGINT,
  `Total_Price` INT
);

CREATE TABLE `Order_Detail` (
  `ID` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `OrderID` BIGINT,
  `LaptopID` BIGINT,
  `Unit_Price` INT,
  `Quantity` INT
);

CREATE TABLE `Image` (
  `ID` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `LaptopID` BIGINT,
  `Name` VARCHAR(100),
  `File_Path` VARCHAR(100)
);

CREATE TABLE `Cart_Detail` (
  `ID` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `UserID` BIGINT,
  `LaptopID` BIGINT,
  `Quantity` INT
);

CREATE TABLE `Specification` (
  `ID` BIGINT AUTO_INCREMENT PRIMARY KEY,
  `CPU` VARCHAR(30),
  `RAM` VARCHAR(30),
  `ROM` VARCHAR(30),
  `Screen` VARCHAR(50),
  `GPU` VARCHAR(30),
  `Battery` VARCHAR(50),
  `Weight` FLOAT,
  `Webcam` VARCHAR(50),
  `Operating_System` VARCHAR(20),
  `Connection_Port` VARCHAR(255),
  `Mux_Switch` BOOLEAN,
  `Touch` BOOLEAN
);


ALTER TABLE `User`
ADD CONSTRAINT FK_UserRole FOREIGN KEY (`RoleID`) REFERENCES `Role` (`ID`);

ALTER TABLE `Comment`
ADD CONSTRAINT FK_CommentUser FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

ALTER TABLE `Comment`
ADD CONSTRAINT FK_CommentProduct FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);

ALTER TABLE `Cart_Detail`
ADD CONSTRAINT FK_CartUser FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

ALTER TABLE `Cart_Detail`
ADD CONSTRAINT FK_CartLaptop FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);

ALTER TABLE `Order`
ADD CONSTRAINT FK_OrderUser FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

ALTER TABLE `Order`
ADD CONSTRAINT FK_OrderStatus FOREIGN KEY (`Status`) REFERENCES `Status` (`ID`);

ALTER TABLE `Order`
ADD CONSTRAINT FK_OrderShippingMethod FOREIGN KEY (`Shipping_Method`) REFERENCES `Shipping_Method` (`ID`);

ALTER TABLE `Order_Detail`
ADD CONSTRAINT FK_OrderDetailOrder FOREIGN KEY (`OrderID`) REFERENCES `Order` (`ID`);

ALTER TABLE `Order_Detail`
ADD CONSTRAINT FK_OrderDetailLaptop FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);

ALTER TABLE `Laptop`
ADD CONSTRAINT FK_SpecLaptop FOREIGN KEY (`SpecID`) REFERENCES `Specification` (`ID`);

ALTER TABLE `Image`
ADD CONSTRAINT FK_ImageLaptop FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);

ALTER TABLE `LaptopCategory`
ADD CONSTRAINT FK_LaptopCategoryLaptop FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);

ALTER TABLE `LaptopCategory`
ADD CONSTRAINT FK_LaptopCategoryCategory FOREIGN KEY (`CateID`) REFERENCES `Category` (`ID`);





