CREATE TABLE `User` (
  `ID` BIGINT,
  `Name` NVARCHAR(100),
  `Email` VARCHAR(50),
  `Phone` VARCHAR(11),
  `Username` VARCHAR(50),
  `Pass` VARCHAR(50),
  `RoleID` BIT,
  `UserAdress` NVARCHAR(100),
  PRIMARY KEY (`ID`, `Username`)
);

CREATE TABLE `Role` (
  `ID` BIT PRIMARY KEY,
  `Name` VARCHAR
);

CREATE TABLE `Laptop` (
  `ID` BIGINT PRIMARY KEY,
  `SpecID` BIGINT,
  `Name` VARCHAR(100),
  `Brand` VARCHAR(50),
  `Price` INT,
  `Release_Date` DATE,
  `Status` VARCHAR(30),
  `Sale` SMALLINT,
  `Available` BOOLEAN
);

CREATE TABLE `LaptopCategory` (
  `CateID` BIGINT,
  `LaptopID` BIGINT,
  PRIMARY KEY (`CateID`, `LaptopID`)
);

CREATE TABLE `Category` (
  `ID` BIGINT PRIMARY KEY,
  `Name` NVARCHAR(100)
);

CREATE TABLE `Status` (
  `ID` BIGINT PRIMARY KEY,
  `Name` NVARCHAR(50),
  `Description` NVARCHAR(100)
);

CREATE TABLE `Feedback` (
  `ID` BIGINT PRIMARY KEY,
  `UserID` BIGINT,
  `OrderLapID` BIGINT,
  `Comment` NVARCHAR(255),
  `RatingValue` SMALLINT,
  `Post_At` TIMESTAMP,
  `Update_At` TIMESTAMP
);

CREATE TABLE `Shipping_Method` (
  `ID` BIGINT PRIMARY KEY,
  `Name` NVARCHAR(50),
  `Price` INT
);

CREATE TABLE `Order` (
  `ID` BIGINT PRIMARY KEY,
  `UserID` BIGINT,
  `Shipping_Address` NVARCHAR(100),
  `Status` BIGINT,
  `Shipping_Method` BIGINT,
  `Total_Price` INT
);

CREATE TABLE `Order_Detail` (
  `ID` BIGINT PRIMARY KEY,
  `OrderID` BIGINT,
  `LaptopID` BIGINT,
  `Unit_Price` INT,
  `Quantity` INT
);

CREATE TABLE `Image` (
  `ID` BIGINT PRIMARY KEY,
  `LaptopID` bigint,
  `Name` VARCHAR(100),
  `File_Path` VARCHAR(50)
);

CREATE TABLE `Cart_Detail` (
  `ID` BIGINT PRIMARY KEY,
  `UserID` BIGINT,
  `LaptopID` BIGINT,
  `Quantity` INT
);

CREATE TABLE `Specification` (
  `ID` BIGINT PRIMARY KEY,
  `CPU` VARCHAR(30),
  `RAM` VARCHAR(30),
  `ROM` VARCHAR(30),
  `Sreen` VARCHAR(30),
  `GPU` VARCHAR(30),
  `Battery` VARCHAR(20),
  `Weight` FLOAT,
  `Webcam` VARCHAR(30),
  `Operating_System` VARCHAR(20),
  `Connection_Port` VARCHAR(255),
  `Mux_Switch` BOOLEAN
);

ALTER TABLE `Feedback` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

ALTER TABLE `Cart_Detail` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

ALTER TABLE `Order` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

ALTER TABLE `Role` ADD FOREIGN KEY (`ID`) REFERENCES `User` (`RoleID`);

ALTER TABLE `Cart_Detail` ADD FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);

ALTER TABLE `Order_Detail` ADD FOREIGN KEY (`OrderID`) REFERENCES `Order` (`ID`);

ALTER TABLE `Status` ADD FOREIGN KEY (`ID`) REFERENCES `Order` (`Status`);

ALTER TABLE `Shipping_Method` ADD FOREIGN KEY (`ID`) REFERENCES `Order` (`Shipping_Method`);

ALTER TABLE `Feedback` ADD FOREIGN KEY (`OrderLapID`) REFERENCES `Order_Detail` (`ID`);

ALTER TABLE `Order_Detail` ADD FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);

ALTER TABLE `Specification` ADD FOREIGN KEY (`ID`) REFERENCES `Laptop` (`SpecID`);

ALTER TABLE `Image` ADD FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);

ALTER TABLE `Category` ADD FOREIGN KEY (`ID`) REFERENCES `LaptopCategory` (`CateID`);

ALTER TABLE `LaptopCategory` ADD FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);
