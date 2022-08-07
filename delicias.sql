-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 03-11-2021 a las 07:36:56
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `delicias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `titulo`, `cuerpo`) VALUES
(19, 'Pan dulce Navideño', 'Exquisito pan dulce con frutas abrillantadas, bañado en glasé. '),
(20, 'Volcán de chocolate', 'El volcán de chocolate es un postre ideal para el invierno. Se consume tibio para que su corazón de chocolate quede casi líquido. Probalo!'),
(21, 'Torta frutal', 'La torta de frutas es todo un clásico de la repostería y una forma estupenda de que los más peques coman fruta, porque nadie puede resistirse ante esta. Está compuesta por una base de tarta dulce, un relleno de crema diplomata y una superficie de frutas cortadas. Una delicia!'),
(22, 'Torta delicia', 'Dejate sorprender por la torta de la casa. Nuestra especialidad, a base de bizcochuelos de naranja y canela, relleno de dulce de leche y ganache de cholate.'),
(23, 'Torta de cumpleaños', 'Brownies rellenos de dulce de leche y crema, con mas crema y frutillas por arriba. UNA BOMBA'),
(24, 'Torta elegante', 'Ideal para cualquier evento que tengas. La realizamos a pedido y gusto del cliente. Deja volar tu imaginación y disfruta'),
(25, 'Torta matera', 'Una torta simple pero llena de sabores. Rellena de crema de limon. Muy buen acompañante de tus meriendas'),
(26, 'Torta berries', 'Torta de chocolate blanco con frutos rojos. Rellena de crema y bañada con frutas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(60) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'rocio', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
