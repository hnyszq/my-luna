CREATE DATABASE bbbbbbb CHARSET=UTF8;

-- ----------------------------
-- Table structure for `ln_index_carousel`
-- ----------------------------
DROP TABLE IF EXISTS `ln_index_carousel`;
CREATE TABLE `ln_index_carousel` (
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ln_index_carousel
-- ----------------------------
INSERT INTO `ln_index_carousel` VALUES ('1', 'img/1-1PG31J545558.jpg', '轮播广告商品0', 'product_details.html?lid=8');
INSERT INTO `ln_index_carousel` VALUES ('2', 'img/1-1P61QPZT50.jpg', '轮播广告商品1', 'product_details.html?lid=28');
INSERT INTO `ln_index_carousel` VALUES ('3', 'img/1-1P406160R0291.jpg', '轮播广告商品2', 'product_details.html?lid=19');
INSERT INTO `ln_index_carousel` VALUES ('4', 'img/1-1P226143555U5.jpg', '轮播广告商品3', 'lookforward.html');
INSERT INTO `ln_index_carousel` VALUES ('5', 'img/1-1P11G2112GO.jpg', '轮播广告商品4', 'lookforward.html');
INSERT INTO `ln_index_carousel` VALUES ('6', 'img/1-1P6221QF04K.jpg', '轮播广告商品5', 'lookforward.html');
-- ----------------------------
-- Table structure for `ln_index_carousel`
-- ----------------------------
DROP TABLE IF EXISTS `ln_index_carousel_2`;
CREATE TABLE `ln_index_carousel_2` (
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ln_index_carousel_2
-- ----------------------------
INSERT INTO `ln_index_carousel_2` VALUES ('1', 'img/1-1p61915240ev.jpg', '轮播广告商品6', 'product_details.html?lid=28');
INSERT INTO `ln_index_carousel_2` VALUES ('2', 'img/1-1p6031q305194.jpg', '轮播广告商品7', 'product_details.html?lid=19');
INSERT INTO `ln_index_carousel_2` VALUES ('3', 'img/1-1p6031q2031w.jpg', '轮播广告商品8', 'lookforward.html');
INSERT INTO `ln_index_carousel_2` VALUES ('4', 'img/1-1p6031q214964.jpg', '轮播广告商品9', 'lookforward.html');
INSERT INTO `ln_index_carousel_2` VALUES ('5', 'img/1-1p6031q3264a.jpg', '轮播广告商品10', 'lookforward.html');
-- ----------------------------
-- Table structure for `ln_index_carousel_3`
-- ----------------------------
DROP TABLE IF EXISTS `ln_index_carouse_3`;
CREATE TABLE `ln_index_carousel_3` (
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ln_index_carousel_3
-- ----------------------------
INSERT INTO `ln_index_carousel_3` VALUES ('1', 'img/1-1fs11u945351.jpg', '轮播广告商品11', 'product_details.html?lid=28');
INSERT INTO `ln_index_carousel_3` VALUES ('2', 'img/1-1fr915324r40.jpg', '轮播广告商品12', 'product_details.html?lid=19');
INSERT INTO `ln_index_carousel_3` VALUES ('3', 'img/1-16062119542y92.jpg', '轮播广告商品13', 'lookforward.html');
INSERT INTO `ln_index_carousel_3` VALUES ('4', 'img/1-160622154f2546.jpg', '轮播广告商品14', 'lookforward.html');
INSERT INTO `ln_index_carousel_3` VALUES ('5', 'img/1-160622163510u6.jpg', '轮播广告商品15', 'lookforward.html');
