-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 26, 2023 at 07:42 AM
-- Server version: 10.3.39-MariaDB
-- PHP Version: 8.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `admin_site1`
--

-- --------------------------------------------------------

--
-- Table structure for table `bids`
--

CREATE TABLE `bids` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `project_title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `proposals_count` bigint(20) DEFAULT NULL,
  `submitted_by` varchar(255) DEFAULT NULL,
  `verified` varchar(255) DEFAULT NULL,
  `time_of_submission` timestamp NULL DEFAULT NULL,
  `response` varchar(255) DEFAULT NULL,
  `hired` varchar(255) DEFAULT NULL,
  `account` varchar(255) DEFAULT NULL,
  `project_description` text DEFAULT NULL,
  `skills_required` text DEFAULT NULL,
  `submitted_bid_description` text DEFAULT NULL,
  `price` double DEFAULT NULL,
  `fixed` varchar(255) DEFAULT NULL,
  `remarks` text DEFAULT NULL,
  `total_connects_count` bigint(20) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `email` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `bids`
--

INSERT INTO `bids` (`id`, `date`, `project_title`, `url`, `proposals_count`, `submitted_by`, `verified`, `time_of_submission`, `response`, `hired`, `account`, `project_description`, `skills_required`, `submitted_bid_description`, `price`, `fixed`, `remarks`, `total_connects_count`, `user_id`, `created_at`, `updated_at`, `email`, `time`) VALUES
(42, '2023-02-15', 'Unde vel officia tem', 'Suscipit cillum exer', 49, 'Quisquam aliquip non', 'true', NULL, 'Reprehenderit itaque', 'true', 'Magnam sunt volupta', '<p>demo</p>', 'Temporibus voluptate', '<p>demo</p>', 28, 'true', 'Magni eum sunt ut nu', 13, 6, '2023-10-19 19:34:21', '2023-10-25 19:11:40', 'qedesyn@mailinator.com', NULL),
(43, '2023-10-14', 'Et alias lorem simil', 'Illo commodi culpa ', 97, 'Perspiciatis evenie', 'false', NULL, 'Enim cupidatat in de', 'false', 'Sunt ipsam voluptat', '<p>demo</p>', 'Non voluptas et comm', '<p>demo</p>', 42, 'true', 'Sed obcaecati deseru', 95, 6, '2023-10-20 15:09:24', '2023-10-25 19:11:44', 'hoxe@mailinator.com', NULL),
(44, '2023-01-14', 'Eaque sed porro ut c', 'Quae incidunt facer', 76, 'Obcaecati consectetu', 'true', NULL, 'Perspiciatis offici', 'true', 'Reiciendis delectus', '<p>demo</p>', 'Totam vel rerum inci', '<p>demo</p>', 95, 'true', 'Dolor delectus aspe', 23, 6, '2023-10-20 15:14:08', '2023-10-25 19:11:47', 'guxociru@mailinator.com', NULL),
(45, '2023-10-18', 'Sapiente quo at vel ', 'Et itaque lorem et l', 4, 'Sunt veniam impedi', 'false', NULL, 'Quae incididunt iust', 'true', 'Ad non quas perferen', '<p>demo</p>', 'Quis do quia laborum', '<p>demo</p>', 44, 'false', 'Impedit elit ut co', 21, 6, '2023-10-20 15:17:59', '2023-10-25 19:11:50', 'mesadywice@mailinator.com', NULL),
(46, '2023-09-01', 'Velit dolor iusto i', 'Ratione dolor eius q', 4, 'Similique nesciunt ', 'true', NULL, 'In tempora est sunt', 'true', 'Est dolore dolores v', '<p>demo</p>', 'Est nihil dolorum ut', '<p>demo</p>', 17, 'true', 'Qui irure voluptates', 81, 6, '2023-10-20 15:19:32', '2023-10-25 19:11:54', 'neqexecuvi@mailinator.com', NULL),
(47, '2023-06-12', 'Eveniet ut cupidita', 'Error assumenda nesc', 10, 'Et mollitia id eos', 'true', NULL, 'Omnis voluptas nulla', 'false', 'Quidem voluptatem nu', '<p>demo</p>', 'Placeat dolores odi', '<p>demo</p>', 68, 'false', 'Non veritatis est un', 13, 6, '2023-10-20 15:24:25', '2023-10-25 19:12:00', 'cumulisena@mailinator.com', NULL),
(48, '2023-06-27', 'Quia Nam neque neque', 'Quae voluptatem sed ', 89, 'Molestiae aute eos a', 'false', NULL, 'Qui consequatur sit', 'false', 'Accusantium ratione ', '<p>demo</p>', 'Eius numquam nostrud', '<p>demo</p>', 34, 'true', 'Dolore occaecat nihi', 70, 6, '2023-10-20 15:41:55', '2023-10-25 19:12:02', 'vifyfup@mailinator.com', NULL),
(49, '2023-11-09', 'Laborum consequatur ', 'Facilis omnis vel ni', 67, 'Molestias sunt lorem', 'false', NULL, 'Nisi ut aliquid in n', 'false', 'Illo exercitation ev', '<p>demo</p>', 'Ut exercitation et n', '<p>demo</p>', 98, 'true', 'Voluptas reiciendis ', 100, 6, '2023-10-20 15:42:22', '2023-10-25 19:12:05', 'cybybic@mailinator.com', NULL),
(50, '2023-02-15', 'Aut rerum quod imped', 'Irure deserunt quia ', 60, 'Libero qui quidem ne', 'true', NULL, 'Sit et sed architec', 'false', 'Doloremque ex laboru', '<p>demo</p>', 'Nam eveniet expedit', '<p>demo</p>', 47, 'false', 'Id voluptatem Non d', 68, 6, '2023-10-20 16:01:39', '2023-10-25 19:12:11', 'bikonagy@mailinator.com', NULL),
(51, '2023-10-20', 'Officiis sint molli', 'Harum culpa consequ', 29, 'Omnis accusantium ul', 'true', NULL, 'Blanditiis fugit ac', 'false', 'Sit natus eu aut Nam', '<p>demo</p>', 'Tempora doloribus ev', '<p>demo</p>', 86, 'true', 'Enim et vero sint qu', 74, 6, '2023-10-20 16:13:24', '2023-10-25 19:12:18', 'pijoma@mailinator.com', NULL),
(52, '2023-10-16', 'Dicta ad enim consec', 'Tempor possimus qui', 46, 'Omnis iste sit quis', 'false', NULL, 'Fuga Aperiam dolore', 'false', 'Esse dolor iusto eu ', '<p>demo</p>', 'Illo modi ad sit vi', '<p>demo</p>', 38, 'false', 'Totam porro itaque e', 13, 6, '2023-10-20 16:24:50', '2023-10-25 19:12:27', 'wagyja@mailinator.com', NULL),
(53, '2023-02-07', 'Veniam nostrud impe', 'Neque non voluptatem', 66, 'Delectus laborum P', 'false', NULL, 'Officia qui nesciunt', 'false', 'Iste nulla ullam cum', '<p>demo</p>', 'Expedita eum asperio', '<p>demo</p>', 24, 'true', 'Vitae obcaecati mole', 9, 6, '2023-10-20 16:34:17', '2023-10-25 19:12:28', 'sawaboqepi@mailinator.com', NULL),
(54, '2023-02-05', 'Laborum eiusmod tota', 'Quis aute saepe labo', 15, 'Blanditiis ipsum au', 'true', NULL, 'Est ut odio labore c', 'false', 'Ut facilis iste vita', '<p>demo</p>', 'Nesciunt voluptatem', '<p>demo</p>', 75, 'true', 'Consequatur nihil v', 33, 6, '2023-10-20 16:36:08', '2023-10-25 19:12:33', 'zavof@mailinator.com', NULL),
(55, '2023-10-24', 'Sit minima fuga Tot', 'Quam et repudiandae ', 17, 'Enim odit irure mini', 'false', NULL, 'Aspernatur sed commo', 'true', 'Quo molestiae recusa', '<p>demo</p>', 'Dignissimos est aut', '<p>demo</p>', 6.121212121256846e15, 'false', 'Illo distinctio Vol', 8, 6, '2023-10-20 16:42:37', '2023-10-21 19:06:16', 'mupek@mailinator.com', NULL),
(56, '2023-10-13', 'Labore dignissimos a', 'Quo nemo nostrum et ', 1235, 'Laboriosam nobis ea', 'true', NULL, 'Consequatur Velit i', 'true', 'Officia laborum Seq', '<p>demo</p>', 'Nihil asperiores rep', '<p>demo</p>', 1234567.456876, 'true', 'Aut voluptatem est e', 123456789, 6, '2023-10-23 11:39:12', '2023-10-23 18:18:56', 'jubyxezo@mailinator.com', NULL),
(57, '2023-05-04', 'Sed sapiente tempor ', 'Velit fugiat enim pr', 91, 'Et nulla quis dolore', 'false', NULL, 'Commodo sed sit dolo', 'true', 'Consequatur earum vo', '<p>demo</p>', 'Veniam ut repudiand', '<p>demo</p>', 85, 'false', 'Illo odio deleniti q', 96, 6, '2023-10-23 18:25:21', '2023-10-25 19:12:36', 'jukifijebu@mailinator.com', NULL),
(58, '2023-11-18', 'Vero non iure aliqui', 'Voluptates incididun', 59, 'Dolorem repellendus', 'false', NULL, 'In beatae nisi moles', 'false', 'Sed molestias et aut', '<p>demo</p>', 'Totam aliquam corpor', '<p>demo</p>', 59, 'false', 'Ut quia id in in ull', 39, 6, '2023-10-23 18:29:04', '2023-10-25 19:12:38', 'fedavoh@mailinator.com', NULL),
(59, '2023-11-15', 'Unde in autem qui do', 'Velit nulla iusto ab', 19, 'Sint sunt fugit ve', 'false', NULL, 'Iure qui iure minus ', 'false', 'Magna est laborum ', '<p>dedemo</p>', 'Non velit quia susci', '<p>demo</p>', 53, 'true', 'Velit vero molestiae', 47, 6, '2023-10-23 18:57:00', '2023-10-25 19:12:40', 'rosavokar@mailinator.com', NULL),
(60, '2023-05-22', 'Reprehenderit sit a', 'Assumenda eiusmod se', 44, 'Blanditiis qui lorem', 'true', NULL, 'Quia perferendis eum', 'false', 'Quis minim odio duis', '<p>demo</p>', 'Corporis amet ex vi', '<p>demo</p>', 90, 'true', 'Qui sunt animi dolo', 48, 6, '2023-10-23 19:04:14', '2023-10-25 19:12:43', 'kuve@mailinator.com', NULL),
(61, '2023-10-23', 'Obcaecati sit at do', 'Sapiente optio ulla', 78, 'Sed Nam placeat ad ', 'true', NULL, 'Deserunt magnam proi', 'true', 'Ad velit dicta iure', '<p>demo</p>', 'Dicta ut cillum expl', '<p>demo</p>', 58, 'true', 'Dolorem sit ex at c', 13, 6, '2023-10-23 19:09:31', '2023-10-23 19:09:31', 'subuzeh@mailinator.com', NULL),
(62, '2023-10-23', 'Quos est ab est et ', 'Aut quae et officia ', 76, 'Voluptatem sit quia ', 'false', NULL, 'Quo facilis quod tem', 'false', 'Quidem rem eiusmod v', '<p>demo</p>', 'Quia laboriosam des', '<p>demo</p>', 89, 'false', 'Quis laborum Eiusmo', 40, 6, '2023-10-23 19:24:30', '2023-10-25 19:13:05', 'bapamyw@mailinator.com', NULL),
(63, '2023-10-23', 'Sint ut rem labore n', 'Occaecat cumque corr', 39, 'Nostrud qui sequi en', 'false', NULL, 'Et Nam est non aliqu', 'false', 'Aliqua Id officia ', '<p>demo</p>', 'Ut possimus eligend', '<p>demo</p>', 58, 'false', 'Duis earum tempora d', 42, 6, '2023-10-23 19:49:31', '2023-10-23 19:49:31', 'xuhimura@mailinator.com', NULL),
(64, '2023-10-23', 'Minus commodo minima', 'https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_cleartimeout', 2458458758, 'Officiis eum neque e', 'true', NULL, 'Provident temporibu', 'false', 'Cumque corrupti eiu', '<p>demo</p>', 'Eaque perspiciatis ', '<p>demo</p>', 3584658786.354245, 'false', 'Impedit aute nostru', 68458685768765, 6, '2023-10-23 20:01:38', '2023-10-24 11:40:38', 'pegiqopebi@mailinator.com', NULL),
(65, '2023-03-01', 'A molestiae laborum ', 'Eiusmod dolore qui e', 93, 'Sint dolore sint qu', 'false', NULL, 'Voluptatum possimus', 'false', 'Consequat Praesenti', '<p>demo</p>', 'Aut eligendi minus e', '<p>demo</p>', 37, 'false', 'Cumque sapiente aut ', 66, 6, '2023-10-24 11:46:44', '2023-10-25 19:13:02', 'virab@mailinator.com', NULL),
(66, '2023-03-20', 'Perspiciatis accusa', 'Necessitatibus adipi', 99, 'Possimus eligendi a', 'true', NULL, 'Sint sunt earum comm', 'false', 'Reprehenderit volupt', '<p>demo</p>', 'Rerum nemo ut ut ius', '<p>demo</p>', 43, 'true', 'Voluptatibus eligend', 17, 6, '2023-10-24 11:50:17', '2023-10-25 19:12:57', 'muqokec@mailinator.com', '16:16:00'),
(67, '2023-10-12', 'Pariatur Exercitati', 'Sit ut vero porro c', 6, 'Est Nam id id volu', 'false', NULL, 'Minima eos deleniti ', 'true', 'Blanditiis debitis e', '<p>demo</p>', 'Atque est porro fug', '<p>demo</p>', 76, 'false', 'Cillum ut commodi as', 59, 6, '2023-10-24 12:05:53', '2023-10-24 12:31:15', 'vovajumima@mailinator.com', '20:52:00'),
(68, '2023-10-11', 'Sed et duis facere l', 'Minim quaerat et del', 78, 'Ea nobis fuga Quaer', 'true', NULL, 'Eaque consequatur l', 'true', 'Repudiandae ipsum la', '<p>demo</p>', 'Quia ducimus qui re', '<p>demo</p>', 42, 'false', 'Nemo nesciunt verit', 44, 6, '2023-10-24 12:56:05', '2023-10-24 13:32:37', 'fecu@mailinator.com', '09:12:00'),
(69, '2023-10-24', 'Quod sequi perspicia', 'Sint iste amet et c', 35, 'Nostrum inventore di', 'true', NULL, 'Lorem ratione cillum', 'true', 'Cumque ullam commodo', '<p>demo</p>', 'Iste aspernatur aut ', '<p>demo</p>', 24, 'true', 'Adipisci repudiandae', 1, 6, '2023-10-24 13:38:28', '2023-10-24 13:53:31', 'nazy@mailinator.com', '18:03:00'),
(70, '2023-10-26', 'Velit dolorem odio a', 'Ea odit nesciunt ip', 19, 'Numquam animi minus', 'true', NULL, 'Provident nostrum e', 'false', 'Neque dolor dolorem ', '<p>demo</p>', 'Commodi suscipit eum', '<p>demo</p>', 40, 'true', 'Non omnis adipisicin', 84, 6, '2023-10-24 13:59:54', '2023-10-24 14:06:57', 'domyvoju@mailinator.com', '16:00'),
(71, '2023-10-26', 'Voluptatum unde beat', 'Ut nisi sint eiusmod', 69, 'Quidem magna quasi m', 'true', NULL, 'Odio dolore vel repr', 'true', 'Excepteur nulla maxi', '<p>demo</p>', 'Consectetur non bea', '<p>demo</p>', 72, 'true', 'Anim voluptatem cumq', 24, 6, '2023-10-24 14:08:03', '2023-10-24 14:51:42', 'solasy@mailinator.com', '01:00'),
(72, '2023-10-20', 'dagive@mailinator.com', 'Id quam et voluptat', 92, 'Architecto excepteur', 'true', NULL, 'Suscipit qui vitae d', 'true', 'Quasi qui tempore f', '<p>demo</p>', 'Dolores ad nulla dol', '<p>demo</p>', 24, 'true', 'Excepteur proident ', 10, 6, '2023-10-24 14:55:46', '2023-10-24 16:11:40', 'mail@mail.com', '21:04'),
(73, '2023-04-17', 'Voluptas quam est re', 'Et eu irure consequa', 5, 'Dolores excepteur li', 'true', NULL, 'Omnis repudiandae ex', 'false', 'Facere quam nulla re', '<p>demo</p>', 'Molestias voluptatum', '<p>demo</p>', 62, 'true', 'Pariatur Consequatu', 62, 6, '2023-10-24 16:19:14', '2023-10-25 19:11:31', 'gohufuxovy@mailinator.com', '10:22'),
(74, '2023-10-06', 'Tempore occaecat en', 'Enim placeat sit no', 86, 'Enim eligendi mollit', 'false', NULL, 'Architecto velit nat', 'true', 'Distinctio Ad imped', '<p>demo</p>', 'Repudiandae mollitia', '<p>demo</p>', 8, 'false', 'Fuga Quia numquam n', 47, 6, '2023-10-24 16:19:32', '2023-10-25 19:11:28', 'zerasuporo@mailinator.com', '06:30'),
(75, '2023-06-13', 'Modi consequuntur pr', 'Explicabo Pariatur', 7, 'Ut facere explicabo', 'false', NULL, 'Est ad tenetur corpo', 'true', 'Est non ea consequat', '<p>demo</p>', 'Ex adipisci tenetur ', '<p>dem</p>', 96, 'false', 'Cupidatat inventore ', 22, 6, '2023-10-24 16:20:05', '2023-10-25 19:11:23', 'jijadavel@mailinator.com', '16:34'),
(76, '2023-03-07', 'Tempor a non iusto v', 'In quam odio quasi e', 50, 'Qui et et recusandae', 'true', NULL, 'Dicta laborum velit', 'true', 'Et magni quia sit om', '<p>demo</p>', 'Dolorem minim deseru', '<p>demo</p>', 56, 'false', 'Deserunt iste earum ', 79, 6, '2023-10-24 16:24:51', '2023-10-25 19:11:18', 'sejo@mailinator.com', '06:09'),
(77, '2023-12-07', 'Dolore dolores dolor', 'Esse ut nisi volupta', 92, 'Ut quod harum conseq', 'false', NULL, 'Eius debitis sit vol', 'false', 'Vitae ea et qui laud', '<p>demo</p>', 'Amet non voluptas s', '<p>demo</p>', 21, 'false', 'Sed obcaecati ipsum ', 82, 6, '2023-10-24 16:57:33', '2023-10-25 19:11:14', 'dobymin@mailinator.com', '21:42'),
(78, '2023-12-04', 'Beatae nostrum sed a', 'Aut eu minima qui un', 32, 'Blanditiis numquam r', 'false', NULL, 'Et totam exercitatio', 'true', 'Delectus quod sit ', '<p>demo</p>', 'Similique enim quisq', '<p>demo</p>', 71, 'false', 'Debitis quibusdam te', 32, 6, '2023-10-25 15:47:25', '2023-10-25 19:12:48', 'hacur@mailinator.com', '12:11'),
(79, '2023-10-25', 'Dolore laborum Et r', 'Corporis doloremque ', 52, 'Explicabo Sit volu', 'false', NULL, 'Nesciunt ut commodo', 'false', 'Amet laboriosam et', '<p>demo</p>', 'Dolorem magni autem ', '<p>demo</p>', 65, 'false', 'Quia laborum Dolor ', 34, 34, '2023-10-25 17:22:57', '2023-10-25 17:22:57', 'memehih@mailinator.com', '08:18'),
(80, '2023-11-20', 'Nihil tempora volupt', 'Incididunt rerum omn', 61, 'Quas optio sequi et', 'true', NULL, 'Sunt voluptas sequi ', 'false', 'Dolorem exercitation', '<p>demo</p>', 'Maxime tempore labo', '<p>demo</p>', 99, 'true', 'Minus enim ullam con', 2, 34, '2023-10-25 17:40:58', '2023-10-25 19:12:50', 'sewag@mailinator.com', '15:10'),
(81, '2023-09-26', 'In ut eligendi quo i', 'Libero dignissimos a', 48, 'Repudiandae est aut ', 'false', NULL, 'Sequi ullamco quo li', 'false', 'Consequatur nihil vo', '<p>demo</p>', 'Nostrum ea ut quas i', '<p>demo</p>', 35, 'true', 'Corrupti cupidatat ', 81, 35, '2023-10-25 18:23:56', '2023-10-25 19:12:52', 'qigafam@mailinator.com', '20:17'),
(82, '2023-10-25', 'Ullamco accusamus an', 'Tenetur aliquip offi', 92, 'Ut eius iusto volupt', 'true', NULL, 'Ut ratione veniam s', 'false', 'Amet tempor commodi', '<p>demo</p>', 'Dignissimos repudian', '<p>demo</p>', 94, 'true', 'Quia nostrum qui ver', 35, 36, '2023-10-25 19:53:17', '2023-10-25 19:53:17', 'kule@mailinator.com', '08:55'),
(83, '2023-09-25', 'Eligendi ut qui accu', 'Voluptas ex aut et v', 82, 'Eiusmod aute quis in', 'true', NULL, 'Est architecto aut t', 'true', 'Laudantium culpa qu', '<p>demo</p>', 'Ut vel cupiditate te', '<p>demo</p>', 89, 'false', 'Consectetur dolor a', 81, 36, '2023-10-25 19:57:05', '2023-10-25 19:57:05', 'zumi@mailinator.com', '21:23'),
(84, '2023-10-25', 'Ipsa repudiandae qu', 'Fugiat perferendis ', 38, 'Excepteur rerum dict', 'true', NULL, 'Adipisicing blanditi', 'false', 'Repudiandae sit bla', '<p>demo</p>', 'Saepe quasi reiciend', '<p>demo</p>', 82, 'true', 'Tenetur vitae in ali', 74, 36, '2023-10-25 19:58:44', '2023-10-25 19:58:44', 'vehojy@mailinator.com', '22:48');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fullname`, `email`, `password`, `is_admin`) VALUES
(1, 'Hardeep', 'hardeep@gmail.com', '$2b$10$z3.VQh5oCDO6JZK3VdziNuN86pEUvr1g7Ix6qRhGcP/bqlwepf4ty', 0),
(2, 'admin', 'admin@gmail.com', '$2b$10$ZplfogPY2mtzF2CTwG0YA.Fye.bjPgBFkXg14bmvTh.rR1PKfTxPS', 1),
(3, 'user', 'user@gmail.com', '$2b$10$s9ku/WGb6qEaiMeWhYOptOj1wEL/xr/g29Mo0K5whH7FuxCmXU8ta', 0),
(4, 'test', 'test@gmail.com', '$2b$10$TQRgrn02loWIIcpajQrPp.7GlYXu5/XmVo23K8Rckwp/J5tx5zBzC', 0),
(5, 'newadmin', 'newadmin@gmail.com', '$2b$10$b//zzXPXxFaDfa16a1Uk5.i8qcbBBfxY1vaP0WlmBuUGTw6g5F2fe', 1),
(6, 'admin', 'admin@admin.com', '$2b$10$7/AbY6.GCPA4m3BtWfNQN.4.mSe1b1YFuetJwjUxzEDMZOv6LvSI2', 1),
(7, 'mohit', 'mohit@mail.com', '$2b$10$y4OHVcE79dy4nDceNyX6CeFTG7BKXzZnhcWgyWEnMi4kMgzNP09FO', 0),
(8, 'Shoshana Bush', 'qywotiv@mailinator.com', '$2b$10$v3rnn8aR9PYaC2k5mvGSE.y2UTNmJAZ94pQeAyfCBks4/eA/Hn.IS', 0),
(9, 'Rashad Sears', 'laferudec@mailinator.com', '$2b$10$93LSwfyu.YlYgk.JMjMa0.cBZmN4.WlqutKip/3EnHpOB6HArc0MK', 0),
(10, 'test', 'test@admin.com', '$2b$10$ultKZcSHDCoEKNtvAnj5VOzqvuJ4FeAcA2D5/VdZz1diQKv5uZyFC', 0),
(11, 'deep', 'deep@gmail.com', '$2b$10$kGEN/PXywm0JbRFGry090.knyhGZXZLI/cvXXSKhOk9hRKXVwV.L6', 0),
(12, 'first', 'first@gmail.com', '$2b$10$7jLlDUST1MiCduSWEnyvcucIXWNetGHiBYiaJAjMgzN2InfWhD.8S', 0),
(13, 'test', 'test123@admin.com', '$2b$10$SC/r8tDydZN1rczreJ6tx.U/Hkh5ZaDE/2.smu9QiIYTRSK7rnj16', 0),
(14, 'demo4', 'demo4@gmail.com', '$2b$10$l9nHeRLzH46l0m0oivGKseFEWxC4tj9XcREIGj1RlAO/cMCQ4A98K', 0),
(15, 'user1', 'user1@gmail.com', '$2b$10$shqSKUu.wFbiwSa9Wj74WeyPFGJZdA2o0Hpwebk9DnDQUyKX4ZmMm', 0),
(16, 'Lucius Murphy', 'curesofu@mailinator.com', '$2b$10$jsO/LtN4NWZGj8a09X8TUuISFqEDbiOtaaem59WIIbmwie4thSTYW', 0),
(17, 'Josephine Vang', 'lazu@mailinator.com', '$2b$10$PC9fb2v0UxA6unkSQDlPney7Vc58G8ZXNjYAlhveiAHCxVDj0CRUm', 0),
(18, 'Rhoda Harrell', 'hiridupul@mailinator.com', '$2b$10$OciNEE5lBi0UlBxvJ5olQewouCtyUy.T9JdDtu3LPE4Axj4BME8qK', 0),
(19, 'Cairo Knowles', 'fibyve@mailinator.com', '$2b$10$1DJ8714nW.hpPxRNLGkyw.IdoyGgv3MIQqXbPgWYKkD3tU/6g4BbS', 0),
(20, 'Colette Terrell', 'jicahixi@mailinator.com', '$2b$10$nYgFz77Ew44ONXEnxzPm3O3iByIOw0CCxJkMUMKDXapiQvmlL5aQu', 0),
(21, 'Benjamin Weeks', 'cilex@mailinator.com', '$2b$10$g4dpfgBa4CgzqsmQ1QvQjuFEYOvrnI0hxyeX6fvT515lqj4L/diEC', 0),
(22, 'Quentin Wilkinson', 'ziwup@mailinator.com', '$2b$10$qzcNyrd98yswA0h/VVHUDu0V6aNk6sgel0sm3wQr/BhdKt9OvZjLq', 0),
(23, 'Ila Scott', 'nosugura@mailinator.com', '$2b$10$c9eMakCPdeqNgJ0oAf9LK.hXcaRTrBLuS5aXtcumTXV1FwV/ECmty', 0),
(24, 'Quinn Gilliam', 'pavereweno@mailinator.com', '$2b$10$RsTf6c0/SBDqzzO5WLePnuuiLKFQbhtF4q4DREZsQwibOzJRQOxaC', 0),
(25, 'Igor Thomas', 'mivecyryto@mailinator.com', '$2b$10$wnrdwIJ42iUrRppOYs1R3eUSxQ4dfYR2x.8qJODZmR8XSxSXqhtiS', 0),
(26, 'Kim Johns', 'tymifa@mailinator.com', '$2b$10$Nr0szJ7yU6YWIUgTnWzJTerVuB5mP0RSzRJGVHH0L9.95kTqxIvz2', 0),
(27, 'Kathleen Blankenship', 'xiky@mailinator.com', '$2b$10$E25wEhI4Sdj4XmBAOjG.1.jBSpYz1EhDq8tSi3Ji9NxTj/LH/Q1BS', 0),
(28, 'Sade Mcgee', 'lynujydy@mailinator.com', '$2b$10$P9UUcQtHOBIYSRqFFVIkSeNljZ7p8ZmNhzaruuYfCZnl5t5XNb2Ji', 0),
(29, 'test1', 'test1@admin.com', '$2b$10$J/Zqz/LxYkbTnz2HqO3Wl.qGqmL4UA8KYnIaC3Ikbq6qQVGWn3qoG', 0),
(30, 'test2', 'test2@gmail.com', '$2b$10$y/vH38FAMTkyHOPY1rHRhusXc2GGk0lTCbBb/w.FMxqEu.sTrbQ4q', 0),
(31, 'test3', 'test3@gmail.com', '$2b$10$1scIrGHfH9f8/ZNDFXif/.cJs.SFlN2wMSKjSlIrhS15yzTiZS53u', 0),
(32, 'test3', 'test4@gmail.com', '$2b$10$ZGQHXpjKd0kEoz6kKskLe.Nd8MzuwieNpvy58ERnmAOKTbv6h/Gu2', 0),
(33, 'test45', 'test45@gmail.com', '$2b$10$XfNGRaeIsaxhU86hJ0cZYe.Y.ME3.xGf8D1ib4aSUx8Usy29nEeQS', 0),
(34, 'user01', 'user01@gmail.com', '$2b$10$TZGXZUcLFzvPyuWpCWzahe1vc7ow4tSE8Qd3Xw.smFO1oBcTZUcDC', 0),
(35, 'test45', 'test43@gmail.com', '$2b$10$e2BlFK7SxspwTeN8okrNNeRcRlpvLE0Uz/how1ScZxWCBIrDxi17a', 0),
(36, 'test12', 'test12@gmail.com', '$2b$10$I0InjqY1hvCDAJJOoz14HeGX.LX0KunCVNKcJ1pMMzTgzMalZuRw.', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bids`
--
ALTER TABLE `bids`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bids`
--
ALTER TABLE `bids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
