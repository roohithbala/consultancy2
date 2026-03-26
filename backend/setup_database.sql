-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: lara_knitwear_db
-- ------------------------------------------------------
-- Server version	8.0.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accessories`
--

DROP TABLE IF EXISTS `accessories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accessories` (
  `accessory_id` int NOT NULL AUTO_INCREMENT,
  `po_id` int NOT NULL,
  `supplier_id` int NOT NULL,
  `accessory_type` enum('Label','Button','Thread','Zipper') NOT NULL,
  `quantity` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`accessory_id`),
  KEY `po_id` (`po_id`),
  KEY `supplier_id` (`supplier_id`),
  CONSTRAINT `accessories_ibfk_1` FOREIGN KEY (`po_id`) REFERENCES `purchase_orders` (`po_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `accessories_ibfk_2` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`supplier_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `accessories_chk_1` CHECK ((`quantity` > 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `buyers`
--

DROP TABLE IF EXISTS `buyers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buyers` (
  `buyer_id` int NOT NULL AUTO_INCREMENT,
  `buyer_name` varchar(100) NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `country` varchar(50) NOT NULL,
  `contact_number` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `address` text NOT NULL,
  PRIMARY KEY (`buyer_id`),
  UNIQUE KEY `unique_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buyers`
--

LOCK TABLES `buyers` WRITE;
/*!40000 ALTER TABLE `buyers` DISABLE KEYS */;
INSERT INTO `buyers` VALUES (1,'John Smith','Global Garments','USA','123456789','john@global.com','New York'),(3,'SARAVANAN','SARAVANAN KNITTING','INDIA','3456778901','swethashree586@gmail.com','hello'),(8,'Vasudev M','Rainbow Textiles','India','9858345676','rainbowtextiles@gmail.com','21, Boyampalayam, tiruppuer'),(9,'Karl Green','Disney World mearch ltd','USA','+1 4534239','disneyworldmearch.com','123, brooklyn Newyork,USA'),(10,'thiluk ranjan','SSA Textiles','INDIA','3456778901','thiluk.ssat@gmail.com','near new bus stand, godown road, tiruppur,641607');
/*!40000 ALTER TABLE `buyers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dyeing`
--

DROP TABLE IF EXISTS `dyeing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dyeing` (
  `dyeing_id` int NOT NULL AUTO_INCREMENT,
  `fabric_id` int NOT NULL,
  `dyeing_type` enum('Visible','Invisible') NOT NULL,
  `dyeing_unit_name` varchar(100) NOT NULL,
  `dyeing_date` date NOT NULL,
  `status` enum('Pending','In Process','Completed') DEFAULT 'Pending',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `supplier_id` int NOT NULL,
  PRIMARY KEY (`dyeing_id`),
  KEY `fabric_id` (`fabric_id`),
  KEY `fk_dye_supplier` (`supplier_id`),
  CONSTRAINT `dyeing_ibfk_1` FOREIGN KEY (`fabric_id`) REFERENCES `fabric` (`fabric_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `fk_dye_supplier` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`supplier_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `employee_id` int NOT NULL AUTO_INCREMENT,
  `employee_name` varchar(100) NOT NULL,
  `gender` enum('Male','Female','Other') DEFAULT NULL,
  `department` enum('Accounts','Production','Buyer Handling') NOT NULL,
  `designation` varchar(100) DEFAULT NULL,
  `salary` decimal(10,2) NOT NULL,
  `contact_number` varchar(10) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `address` text NOT NULL,
  `hire_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`employee_id`),
  UNIQUE KEY `contact_number` (`contact_number`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `employees_chk_1` CHECK ((`salary` >= 0)),
  CONSTRAINT `employees_chk_2` CHECK (regexp_like(`contact_number`,_utf8mb4'^[0-9]{10}$'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `fabric`
--

DROP TABLE IF EXISTS `fabric`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fabric` (
  `fabric_id` int NOT NULL AUTO_INCREMENT,
  `yarn_id` int NOT NULL,
  `roll_count` int NOT NULL,
  `fabric_type` varchar(100) NOT NULL,
  `quantity` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`fabric_id`),
  UNIQUE KEY `roll_count` (`roll_count`),
  KEY `yarn_id` (`yarn_id`),
  CONSTRAINT `fabric_ibfk_1` FOREIGN KEY (`yarn_id`) REFERENCES `yarn` (`yarn_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `chk_roll_count` CHECK ((`roll_count` > 0)),
  CONSTRAINT `fabric_chk_1` CHECK ((`quantity` > 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `packaging`
--

DROP TABLE IF EXISTS `packaging`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `packaging` (
  `packaging_id` int NOT NULL AUTO_INCREMENT,
  `po_id` int NOT NULL,
  `ironing_status` enum('Pending','Completed') DEFAULT 'Pending',
  `packaging_date` date NOT NULL,
  `packaged_quantity` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`packaging_id`),
  KEY `po_id` (`po_id`),
  CONSTRAINT `packaging_ibfk_1` FOREIGN KEY (`po_id`) REFERENCES `purchase_orders` (`po_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `packaging_chk_1` CHECK ((`packaged_quantity` > 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `production_process`
--

DROP TABLE IF EXISTS `production_process`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `production_process` (
  `process_id` int NOT NULL AUTO_INCREMENT,
  `po_id` int NOT NULL,
  `fabric_id` int DEFAULT NULL,
  `cutting_date` date DEFAULT NULL,
  `dyeing_date` date DEFAULT NULL,
  `combing_date` date DEFAULT NULL,
  `inspection_date` date DEFAULT NULL,
  `testing_date` date DEFAULT NULL,
  `dyeing_type` enum('Visible','Invisible') DEFAULT NULL,
  `cutting_quantity` int DEFAULT NULL,
  `dyeing_input` int DEFAULT NULL,
  `dyeing_output` int DEFAULT NULL,
  `final_output` int DEFAULT NULL,
  `status` enum('Pending','In Progress','Completed') DEFAULT 'Pending',
  `remarks` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `dyeing_id` int DEFAULT NULL,
  PRIMARY KEY (`process_id`),
  UNIQUE KEY `po_id` (`po_id`),
  KEY `fabric_id` (`fabric_id`),
  KEY `fk_dyeing` (`dyeing_id`),
  CONSTRAINT `fk_dyeing` FOREIGN KEY (`dyeing_id`) REFERENCES `dyeing` (`dyeing_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `production_process_ibfk_1` FOREIGN KEY (`po_id`) REFERENCES `purchase_orders` (`po_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `production_process_ibfk_2` FOREIGN KEY (`fabric_id`) REFERENCES `fabric` (`fabric_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `production_process_chk_1` CHECK ((`cutting_quantity` >= 0)),
  CONSTRAINT `production_process_chk_2` CHECK ((`dyeing_input` >= 0)),
  CONSTRAINT `production_process_chk_3` CHECK ((`dyeing_output` >= 0)),
  CONSTRAINT `production_process_chk_4` CHECK ((`final_output` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `purchase_orders`
--

DROP TABLE IF EXISTS `purchase_orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase_orders` (
  `po_id` int NOT NULL AUTO_INCREMENT,
  `buyer_id` int NOT NULL,
  `order_date` date NOT NULL,
  `delivery_date` date NOT NULL,
  `total_quantity` int NOT NULL,
  `order_status` varchar(50) NOT NULL,
  PRIMARY KEY (`po_id`),
  KEY `buyer_id` (`buyer_id`),
  CONSTRAINT `purchase_orders_ibfk_1` FOREIGN KEY (`buyer_id`) REFERENCES `buyers` (`buyer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase_orders`
--

LOCK TABLES `purchase_orders` WRITE;
/*!40000 ALTER TABLE `purchase_orders` DISABLE KEYS */;
INSERT INTO `purchase_orders` VALUES (1,1,'2026-03-04','2026-06-30',10000,'Pending'),(3,3,'2025-09-11','2026-02-13',50000,'Completed'),(4,3,'2026-03-06','2026-07-24',5000,'Processing');
/*!40000 ALTER TABLE `purchase_orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suppliers`
--

DROP TABLE IF EXISTS `suppliers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `suppliers` (
  `supplier_id` int NOT NULL AUTO_INCREMENT,
  `supplier_name` varchar(100) NOT NULL,
  `supplier_type` enum('Yarn','Label','Button','Thread','Dye','Zipper') NOT NULL,
  `contact_number` varchar(15) NOT NULL,
  `address` text NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`supplier_id`),
  UNIQUE KEY `contact_number` (`contact_number`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suppliers`
--

LOCK TABLES `suppliers` WRITE;
/*!40000 ALTER TABLE `suppliers` DISABLE KEYS */;
INSERT INTO `suppliers` VALUES (1,'Jai Zip Industries','Zipper','9269348332','Tiruppur','2026-03-15 13:11:27');
/*!40000 ALTER TABLE `suppliers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `yarn`
--

DROP TABLE IF EXISTS `yarn`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yarn` (
  `yarn_id` int NOT NULL AUTO_INCREMENT,
  `yarn_type` varchar(100) NOT NULL,
  `gsm` int NOT NULL,
  `color` varchar(50) NOT NULL,
  `supplier_id` int NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`yarn_id`),
  KEY `supplier_id` (`supplier_id`),
  CONSTRAINT `yarn_ibfk_1` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`supplier_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `yarn_chk_1` CHECK ((`gsm` > 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
