/*
SQLyog Ultimate v12.09 (32 bit)
MySQL - 10.1.34-MariaDB : Database - db_mujahiddin
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_mujahiddin` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `db_mujahiddin`;

/*Table structure for table `tb_datadonatur` */

DROP TABLE IF EXISTS `tb_datadonatur`;

CREATE TABLE `tb_datadonatur` (
  `kode_datadonatur` char(11) NOT NULL,
  `nama_datadonatur` varchar(50) DEFAULT NULL,
  `alamat_donatur` varchar(50) DEFAULT NULL,
  `nohp_donatur` int(20) DEFAULT NULL,
  PRIMARY KEY (`kode_datadonatur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_datadonatur` */

insert  into `tb_datadonatur`(`kode_datadonatur`,`nama_datadonatur`,`alamat_donatur`,`nohp_donatur`) values ('',NULL,NULL,NULL);

/*Table structure for table `tb_datainfak` */

DROP TABLE IF EXISTS `tb_datainfak`;

CREATE TABLE `tb_datainfak` (
  `id_datainfak` char(11) NOT NULL,
  `tanggal_datainfak` date DEFAULT NULL,
  `idkatgr_datainfak` char(11) DEFAULT NULL,
  `jumlah_datainfak` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_datainfak`),
  KEY `idkatgr_datainfak` (`idkatgr_datainfak`),
  CONSTRAINT `tb_datainfak_ibfk_1` FOREIGN KEY (`idkatgr_datainfak`) REFERENCES `tb_infak` (`kodkatgr_infak`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_datainfak` */

/*Table structure for table `tb_datakegiatan` */

DROP TABLE IF EXISTS `tb_datakegiatan`;

CREATE TABLE `tb_datakegiatan` (
  `no_datakegtn` int(11) NOT NULL AUTO_INCREMENT,
  `kode_datakegiatan` char(11) DEFAULT NULL,
  `nama_datakegiatan` varchar(50) DEFAULT NULL,
  `hari_datakegiatan` date DEFAULT NULL,
  `waktu_datakegiatan` time DEFAULT NULL,
  `id_datapemateri` char(11) DEFAULT NULL,
  PRIMARY KEY (`no_datakegtn`),
  KEY `kode_datakegiatan` (`kode_datakegiatan`),
  KEY `id_datapemateri` (`id_datapemateri`),
  CONSTRAINT `tb_datakegiatan_ibfk_3` FOREIGN KEY (`kode_datakegiatan`) REFERENCES `tb_kegiatan` (`kode_kegiatan`),
  CONSTRAINT `tb_datakegiatan_ibfk_4` FOREIGN KEY (`id_datapemateri`) REFERENCES `tb_pemateri` (`kode_pemateri`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_datakegiatan` */

insert  into `tb_datakegiatan`(`no_datakegtn`,`kode_datakegiatan`,`nama_datakegiatan`,`hari_datakegiatan`,`waktu_datakegiatan`,`id_datapemateri`) values (0,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `tb_datapenerima` */

DROP TABLE IF EXISTS `tb_datapenerima`;

CREATE TABLE `tb_datapenerima` (
  `id_dataspenerima` char(11) NOT NULL,
  `nama_penerima` varchar(50) DEFAULT NULL,
  `alamat_penerima` varchar(50) DEFAULT NULL,
  `nohp_penerima` int(20) DEFAULT NULL,
  PRIMARY KEY (`id_dataspenerima`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_datapenerima` */

/*Table structure for table `tb_donasimasuk` */

DROP TABLE IF EXISTS `tb_donasimasuk`;

CREATE TABLE `tb_donasimasuk` (
  `id_uangmasuk` char(11) NOT NULL,
  `tanggal_donmasuk` date DEFAULT NULL,
  `iddon_donmasuk` char(11) DEFAULT NULL,
  `jumlah_donmasuk` varchar(100) DEFAULT NULL,
  `ket_donmasuk` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_uangmasuk`),
  KEY `iddon_donmasuk` (`iddon_donmasuk`),
  CONSTRAINT `tb_donasimasuk_ibfk_1` FOREIGN KEY (`iddon_donmasuk`) REFERENCES `tb_datadonatur` (`kode_datadonatur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_donasimasuk` */

/*Table structure for table `tb_infak` */

DROP TABLE IF EXISTS `tb_infak`;

CREATE TABLE `tb_infak` (
  `kodkatgr_infak` char(11) NOT NULL,
  `namakatgr_infak` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`kodkatgr_infak`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_infak` */

/*Table structure for table `tb_informasi` */

DROP TABLE IF EXISTS `tb_informasi`;

CREATE TABLE `tb_informasi` (
  `kode_informasi` char(11) NOT NULL,
  `notelp_informasi` int(15) DEFAULT NULL,
  `norek_informasi` char(50) DEFAULT NULL,
  `bank_rekening` char(50) DEFAULT NULL,
  `id_penanggungjwb` char(11) DEFAULT NULL,
  PRIMARY KEY (`kode_informasi`),
  KEY `id_penanggungjwb` (`id_penanggungjwb`),
  CONSTRAINT `tb_informasi_ibfk_1` FOREIGN KEY (`id_penanggungjwb`) REFERENCES `tb_user` (`kode_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_informasi` */

/*Table structure for table `tb_jenisdonasi` */

DROP TABLE IF EXISTS `tb_jenisdonasi`;

CREATE TABLE `tb_jenisdonasi` (
  `id_jenisdon` char(11) NOT NULL,
  `nama_jenisdon` varchar(50) DEFAULT NULL,
  `jumlah_jenisdon` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_jenisdon`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_jenisdonasi` */

/*Table structure for table `tb_kegiatan` */

DROP TABLE IF EXISTS `tb_kegiatan`;

CREATE TABLE `tb_kegiatan` (
  `kode_kegiatan` char(11) NOT NULL,
  `nama_kegiatan` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`kode_kegiatan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_kegiatan` */

insert  into `tb_kegiatan`(`kode_kegiatan`,`nama_kegiatan`) values ('B001','Jadwal Kultum Harian'),('B002','Tahsin'),('B003','Ta\'lim'),('B004','Kajian Kesehatan'),('B005','Bahasa Arab'),('B006','Ta\'lim Fiqih Jumhur'),('B007','Kajian Anak Muda');

/*Table structure for table `tb_pemateri` */

DROP TABLE IF EXISTS `tb_pemateri`;

CREATE TABLE `tb_pemateri` (
  `kode_pemateri` char(11) NOT NULL,
  `nama_pemateri` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`kode_pemateri`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_pemateri` */

/*Table structure for table `tb_penerimaan` */

DROP TABLE IF EXISTS `tb_penerimaan`;

CREATE TABLE `tb_penerimaan` (
  `iddon_penerima` char(11) NOT NULL,
  `tanggal_penerima` date DEFAULT NULL,
  `id_penerima` char(11) DEFAULT NULL,
  `id_jenispenerima` char(11) DEFAULT NULL,
  PRIMARY KEY (`iddon_penerima`),
  KEY `id_jenispenerima` (`id_jenispenerima`),
  KEY `id_penerima` (`id_penerima`),
  CONSTRAINT `tb_penerimaan_ibfk_2` FOREIGN KEY (`id_jenispenerima`) REFERENCES `tb_jenisdonasi` (`id_jenisdon`),
  CONSTRAINT `tb_penerimaan_ibfk_3` FOREIGN KEY (`id_penerima`) REFERENCES `tb_datapenerima` (`id_dataspenerima`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_penerimaan` */

/*Table structure for table `tb_user` */

DROP TABLE IF EXISTS `tb_user`;

CREATE TABLE `tb_user` (
  `kode_user` char(11) NOT NULL,
  `nama_user` varchar(50) DEFAULT NULL,
  `username_user` varchar(50) DEFAULT NULL,
  `password_user` varchar(50) DEFAULT NULL,
  `level_user` char(11) DEFAULT NULL,
  PRIMARY KEY (`kode_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `tb_user` */

insert  into `tb_user`(`kode_user`,`nama_user`,`username_user`,`password_user`,`level_user`) values ('A001','Ade Zevimarino','ade','12345','Bendahara'),('A002','Dian Nugraha','dian','12345','Sekretaris');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
