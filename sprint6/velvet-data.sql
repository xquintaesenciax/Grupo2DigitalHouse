-- CREATE DATABASE  IF NOT EXISTS `velvet_2` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
-- USE `velvet_2`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: velvet_2
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Dumping data for table `carrito_producto`
--

LOCK TABLES `carrito_producto` WRITE;
/*!40000 ALTER TABLE `carrito_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito_producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `carritos`
--

LOCK TABLES `carritos` WRITE;
/*!40000 ALTER TABLE `carritos` DISABLE KEYS */;
/*!40000 ALTER TABLE `carritos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (6,'accesorios'),(2,'camisas'),(4,'chalecos'),(3,'pantalones'),(1,'trajes'),(5,'zapatos');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (9,'/img/product/product1706744076136.webp','TRAJE ELEGANCIA URBANA','Este traje es una mezcla de elegancia clásica y toques modernos y urbanos. Confeccionado en una tela azul de alta calidad, ofrece un ajuste cómodo y estilizado. Perfecto para el hombre contemporáneo que busca versatilidad y estilo en su vestimenta.','Azul claro',3,250.00,225.00,10,75.00,1),(10,'/img/product/product1706744400443.webp','TRAJE NOCHE VERDE','Este traje de color verde oscuro es perfecto para el hombre moderno que busca un estilo sofisticado y elegante. La chaqueta de dos botones y los pantalones a juego están confeccionados con una tela de alta calidad que ofrece un ajuste cómodo y estilizado.','Verde oscuro',6,325.00,276.25,15,46.04,1),(12,'/img/product/product1706746389058.webp','TRAJE CHAMPAGNE','Sumérgete en la elegancia atemporal con nuestro exclusivo traje \"Distinguido Cuadriculado\". Confeccionado en una exquisita tela de color beige y adornado con finos cuadros, este traje de seis botones es la definición misma de sofisticación moderna. Su corte impecable y su atención al detalle te aseguran una apariencia imponente en cualquier ocasión, desde reuniones de negocios hasta eventos formales. Eleva tu estilo con este refinado traje que fusiona la tradición con un toque de vanguardia.','Beige/Gris',6,300.00,NULL,NULL,50.00,1),(13,'/img/product/product1706746623265.webp','TRAJE INDIGO ELEGANTE','Sumérgete en la elegancia casual con nuestro traje \"Indigo Elegante\". Confeccionado en una tela de alta calidad, este clásico traje de dos botones es la elección perfecta para aquellos que buscan un estilo atemporal con un toque de frescura moderna. Su tono de azul versátil, reminiscente del denim, lo convierte en una pieza imprescindible en cualquier guardarropa masculino. Desde reuniones de trabajo hasta ocasiones más informales, este traje te garantiza un aspecto sofisticado y con estilo en cualquier situación.','Azul mediano',3,225.00,202.50,10,67.50,1),(14,'/img/product/product1706746839909.webp','TRAJE NIEBLA','Embárcate en un viaje hacia la elegancia sofisticada con nuestro traje \"Niebla\". Este impecable conjunto de dos botones, acompañado de un chaleco a juego, presenta un tono gris claro que evoca la serenidad de una suave niebla matutina. Confeccionado con los más altos estándares de calidad, este traje es una declaración de estilo refinado y distinción. Ya sea para ocasiones formales o eventos sociales, el traje \"Niebla\" te garantiza una presencia imponente y elegante en cualquier situación.','Gris claro',3,250.00,NULL,NULL,83.33,1),(16,'/img/product/product1706747446033.webp','TRAJE BRISA','Sumérgete en la frescura y la profesionalidad con nuestro traje \"Brisa\". Este traje en un tono celeste opaco, sutil y refinado, es la elección perfecta para destacar en cualquier entorno laboral. Su estilo elegante y discreto te permite expresar tu personalidad con confianza y sofisticación. Confeccionado con los mejores materiales y un ajuste impecable, el traje \"Brisa\" te llevará de la oficina a cualquier evento con estilo y comodidad.','Celeste',NULL,250.00,187.50,25,NULL,1),(17,'/img/product/product1706747566471.webp','TRAJE AZABACHE','Adéntrate en la esencia de la elegancia con nuestro traje \"Azabache\". Este impecable conjunto en negro con un sutil subtono azulado es la personificación del refinamiento y el estilo. Con su corte meticuloso y su ajuste perfecto, este traje de dos botones, complementado con un chaleco a juego, ofrece una presencia imponente y sofisticada en cualquier ocasión. Desde eventos formales hasta ocasiones especiales, el traje \"Azabache\" te asegura destacar con distinción y clase.','Negro',NULL,325.00,276.25,15,NULL,1),(19,'/img/product/product1706767389876.webp','TRAJE VERDE ÉBANO','Sumérgete en la sofisticación discreta con nuestro traje \"Verde Ébano\". Este traje de corte impecable y tono verde oscuro ofrece un equilibrio perfecto entre estilo y elegancia. Su ajuste meticuloso resalta la silueta masculina con gracia y distinción, mientras que su color evoca una sensación de misterio y refinamiento. Ya sea en eventos formales o reuniones importantes, el traje \"Verde Ébano\" te asegura una apariencia impecable y con clase en todo momento.','Verde oscuro',6,300.00,NULL,NULL,50.00,1),(20,'/img/product/product1706806700190.webp','CAMISA CIELO','Eleva tu estilo con nuestra camisa \"Cielo\". Esta camisa slim fit en un encantador tono celeste es la combinación perfecta de comodidad y elegancia. Su corte entallado resalta la figura masculina con sutileza y sofisticación, mientras que el color celeste añade un toque de frescura y modernidad a tu look. Ya sea para una jornada laboral o una salida informal, la camisa \"Cielo\" te brinda un aspecto impecable y con estilo en cualquier ocasión.','Celeste',NULL,100.00,85.00,15,NULL,2),(21,'/img/product/product1706806788299.webp','CAMISA NIEVE','Descubre la elegancia sin esfuerzo con nuestra camisa \"Nieve\". Esta camisa suelta en un impecable tono blanco es un básico imprescindible en cualquier guardarropa masculino. Su diseño atemporal y su corte holgado ofrecen una comodidad inigualable sin sacrificar el estilo. Perfecta para cualquier ocasión, desde reuniones formales hasta salidas informales, la camisa \"Nieve\" es una opción versátil y elegante que nunca pasa de moda.','Blanco',3,75.00,NULL,NULL,25.00,2),(22,'/img/product/product1706806892518.webp','CAMISA AZUL NOCTURNO','Sumérgete en la sofisticación moderna con nuestra camisa \"Azul Nocturno\". Esta camisa en un profundo tono azul oscuro destaca por su ajuste impecable y su atención al detalle. Confeccionada con los mejores materiales, esta prenda ofrece una combinación perfecta de estilo y comodidad. Su corte favorecedor resalta la silueta masculina con elegancia y distinción. Desde el trabajo hasta ocasiones más formales, la camisa \"Azul Nocturno\" es la elección ideal para aquellos que buscan un look impecable en cualquier situación.','Azul',3,95.00,85.50,10,28.50,2),(23,'/img/product/product1706806999688.webp','CAMISA SALMONETE SEDA','Sumérgete en la elegancia sofisticada con nuestra camisa \"Salmonete Seda\". Esta camisa en un cautivador tono salmón destaca por su suavidad incomparable y su textura delicada. Fabricada con una exquisita tela de seda, esta prenda ofrece un confort excepcional y un ajuste impecable. Su color vibrante añade un toque de frescura y originalidad a cualquier conjunto, mientras que su suavidad al tacto proporciona una experiencia de uso inigualable. Desde eventos casuales hasta ocasiones especiales, la camisa \"Salmonete Seda\" es la elección perfecta para aquellos que aprecian la calidad y el estilo.','Salmon',NULL,87.00,82.65,5,NULL,2),(24,'/img/product/product1706807154524.webp','CHALECO ARENA','Completa tu look con nuestro chaleco \"Arena\". Este chaleco en un tono beige clásico es la pieza perfecta para añadir un toque de elegancia a cualquier conjunto. Confeccionado con los mejores materiales y un diseño meticuloso, este chaleco ofrece un ajuste impecable y un estilo refinado. Su color neutro y versátil lo hace ideal para combinar con trajes formales o conjuntos más casuales, añadiendo un toque de sofisticación a tu apariencia en cualquier ocasión.','Beige',3,150.00,135.00,10,45.00,4),(25,'/img/product/product1706807277799.webp','CHALECO AZUL NOCTURNO','Haz una declaración de estilo con nuestro chaleco \"Azul Nocturno\". Este chaleco en un profundo tono azul oscuro presenta finos cuadros que añaden un toque de elegancia y originalidad a tu conjunto. Destacando aún más su sofisticación, una cadenita negra cuelga con gracia de uno de sus lados, agregando un toque de distinción. Confeccionado con los más altos estándares de calidad, este chaleco ofrece un ajuste impecable y un estilo inigualable, perfecto para eventos formales u ocasiones especiales.','Azul oscuro',6,125.00,100.00,20,16.67,4),(26,'/img/product/product1706807383278.webp','CHALECO ÉBANO','Añade un toque de distinción a tu atuendo con nuestro chaleco \"Ébano\". Este chaleco negro, con su diseño minimalista de cinco botones y tres bolsillos, es la elección perfecta para quienes buscan un estilo refinado y versátil. Su color oscuro y su corte impecable lo convierten en una pieza imprescindible en cualquier guardarropa masculino. Ya sea para eventos formales u ocasiones especiales, el chaleco \"Ébano\" te garantiza una apariencia elegante y con clase en todo momento.','Negro',6,135.00,NULL,NULL,22.50,4),(27,'/img/product/product1706807500069.webp','CHALECO GRIS ALUMINIO','Haz una declaración de estilo con nuestro chaleco \"Gris Aluminio\". Este chaleco en un tono gris claro combina elegancia y un toque deportivo con su diseño único. Presenta dos pequeños bolsillos que añaden funcionalidad y un toque informal, mientras que una delicada cadenita a un lado aporta un toque de distinción. Confeccionado con los mejores materiales y un ajuste impecable, este chaleco es perfecto para eventos casuales o salidas informales donde se busca un look sofisticado pero relajado.','Gris claro',3,95.00,NULL,NULL,31.67,4),(28,'/img/product/product1706807626289.webp','PANTALON MOSTAZA','Haz una declaración audaz de estilo con nuestros pantalones \"Mostaza Clásico\". Este pantalón en un vibrante tono mostaza combina a la perfección la audacia del color con la elegancia de un diseño clásico de pinzas. Confeccionado con tela de alta calidad y detalle meticuloso, este pantalón ofrece un ajuste impecable y un estilo distinguido. Perfecto para aquellos que buscan destacar con originalidad y sofisticación, los pantalones \"Mostaza Clásico\" son la elección perfecta para cualquier ocasión que demande un toque de color y estilo.','Mostaza',3,85.00,80.75,5,26.92,3),(29,'/img/product/product1706807723851.webp','PATALÓN NEGRO OBSIDIANA','Experimenta la elegancia moderna con nuestros pantalones \"Negro Obsidiana\". Estos pantalones de corte ajustado en un intenso tono negro son el epítome del estilo contemporáneo. Confeccionados con una tela de alta calidad y un diseño meticuloso, ofrecen un ajuste impecable que realza la silueta masculina con sofisticación y comodidad. Desde reuniones de negocios hasta salidas informales, los pantalones \"Negro Obsidiana\" son una opción versátil y elegante que te acompañará en cualquier ocasión.','Negro',3,90.00,NULL,NULL,30.00,3),(30,'/img/product/product1706807819382.webp','PANTALÓN ARENA','Sumérgete en la sofisticación con nuestros pantalones \"Arena Cuadriculados\". Estos pantalones rectos en un suave tono beige presentan un sutil patrón de finos cuadros que añade un toque de distinción a tu atuendo. Confeccionados con tela de vestir de primera calidad y un diseño meticuloso, ofrecen un ajuste impecable y una comodidad duradera. Perfectos para eventos formales o reuniones de negocios, los pantalones \"Arena Cuadriculados\" te brindan un estilo refinado y elegante en cualquier ocasión.','Beige',NULL,90.00,85.50,5,NULL,3),(31,'/img/product/product1706807919014.webp','PANTALON GRIS ANTRACITA','Añade un toque de sofisticación atemporal a tu guardarropa con nuestros pantalones \"Gris Antracita\". Estos pantalones rectos en un profundo tono gris oscuro son una opción elegante y versátil para cualquier ocasión. Con su diseño clásico y detalles distintivos, como la botamanga, ofrecen un estilo refinado y una comodidad excepcional. Perfectos para eventos formales o reuniones de negocios, los pantalones \"Gris Antracita\" te garantizan un aspecto impecable y con clase en todo momento.','Gris',3,90.00,76.50,15,25.50,3);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Nuria','Abellan','nuria.b.t.r@gmail.com','lasnutrias','$2a$10$QY1ctyJL6ZHaUtOCP7GfVuGe0TJts6QGjONwhFmzO/QfSG0.9KQ7e','/img/users/uploads/profile-pic-1706800493244.jpg',1,NULL),(2,'Eunwoo','Cha','eunwoo@gmail.com','eunwoo','$2a$10$7yRMu6bM/nG4iYy8PcDpDOzKRXar8NWNdXjapnYxFR5VANmA1Z9gi','/img/users/uploads/profile-pic-1704827104118.jpg',0,NULL),(3,'Yeonjun','Choi','yeonjun@gmail.com','yeonjun','$2a$10$9WStu7Y3.SRCnSmPLQ9dvuBoayYnTbheOKgr7IrZEjmBix21owydG','/img/users/perfil-pordefecto.png',0,NULL),(4,'asd','asdasd','asdasdas@asdasd.com','owo','$2a$10$hVPmKBAgvJ5Ts8HYdoeaf.106IzpgV1dpWFbqCtmhgaKiNCgHX/cW','/img/users/perfil-pordefecto.png',0,NULL),(5,'asdasd','asdasd','asdasdasd@asdasd.com','asdasd','$2a$10$PO2zUl.HV/Z5E//JDthtmOzMuYdUSbkb1Z5FK3RHqNGsu.eACzxwK','/img/users/perfil-pordefecto.png',0,NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-01 15:50:24
