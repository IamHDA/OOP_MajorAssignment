CREATE TABLE `User` (
  `ID` BIGINT PRIMARY KEY,
  `Name` NVARCHAR(255),
  `Email` VARCHAR(255) UNIQUE,
  `Phone` VARCHAR(11),
  `Pass` VARCHAR(255),
  `Role` VARCHAR(255),
  `UserAdress` NVARCHAR(255)
);

CREATE TABLE `Laptop` (
  `ID` BIGINT PRIMARY KEY,
  `SpecID` BIGINT,
  `Name` VARCHAR(255),
  `Brand` VARCHAR(255),
  `Price` INT,
  `Status` VARCHAR(255),
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
  `Name` NVARCHAR(255)
);

CREATE TABLE `Status` (
  `ID` BIGINT PRIMARY KEY,
  `OrderID` BIGINT,
  `Name` NVARCHAR(255),
  `Description` NVARCHAR(255)
);

CREATE TABLE `Laptop_Comment` (
  `ID` BIGINT PRIMARY KEY,
  `UserID` BIGINT,
  `LaptopID` BIGINT,
  `Comment` NVARCHAR(255),
  `Post_At` TIMESTAMP,
  `Update_At` TIMESTAMP
);

CREATE TABLE `Shipping_Method` (
  `ID` BIGINT PRIMARY KEY,
  `OrderID` BIGINT,
  `Name` NVARCHAR(255),
  `Price` INT
);

CREATE TABLE `Customer_Order` (
  `ID` BIGINT PRIMARY KEY,
  `UserID` BIGINT,
  `Shipping_Address` NVARCHAR(255),
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
  `File_Path` VARCHAR(255)
);

CREATE TABLE `Cart_Detail` (
  `ID` BIGINT PRIMARY KEY,
  `UserID` BIGINT,
  `LaptopID` BIGINT,
  `Quantity` INT
);

CREATE TABLE `Specification` (
  `ID` BIGINT PRIMARY KEY,
  `CPU` VARCHAR(255),
  `RAM` VARCHAR(255),
  `ROM` VARCHAR(255),
  `Sreen` VARCHAR(255),
  `Graphic_Card` VARCHAR(255),
  `Battery` VARCHAR(255),
  `Weight` FLOAT,
  `Webcam` VARCHAR(255),
  `Operating_System` VARCHAR(255),
  `Connection_Port` VARCHAR(500),
  `Mux_Switch` BOOLEAN
);

ALTER TABLE `Laptop_Comment` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

ALTER TABLE `Cart_Detail` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

ALTER TABLE `Customer_Order` ADD FOREIGN KEY (`UserID`) REFERENCES `User` (`ID`);

ALTER TABLE `Cart_Detail` ADD FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);

ALTER TABLE `Order_Detail` ADD FOREIGN KEY (`OrderID`) REFERENCES `Customer_Order` (`ID`);

ALTER TABLE `Status` ADD FOREIGN KEY (`OrderID`) REFERENCES `Customer_Order` (`ID`);

ALTER TABLE `Shipping_Method` ADD FOREIGN KEY (`OrderID`) REFERENCES `Customer_Order` (`ID`);

ALTER TABLE `Laptop_Comment` ADD FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);

ALTER TABLE `Order_Detail` ADD FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);

ALTER TABLE `Specification` ADD FOREIGN KEY (`ID`) REFERENCES `Laptop` (`SpecID`);

ALTER TABLE `Image` ADD FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);

ALTER TABLE `LaptopCategory` ADD FOREIGN KEY (`CateID`) REFERENCES `Category` (`ID`);

ALTER TABLE `LaptopCategory` ADD FOREIGN KEY (`LaptopID`) REFERENCES `Laptop` (`ID`);
