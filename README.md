[Uploading<!Doctype html>
<html lang="en uk">
	<head>
		<title>Людина мураха 3</title>[Uploading робота.css…]([Uplo/* стилізація картинок і назв */
.g4 {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	color: red;
}
/* body */
body {
	margin: 0;
	font-family: "Raleway", "Helvetica", "Arial",sans-serif;
	height:100vh;
	width:100vw;
	overflow-x: hidden;
}
.overflow {
	overflow: hidden;
}
/*Задній фон */
.background-image-1 {
	background-image: url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRDe5CDWswLu9CkHeF4Yzia5PU2E3gzXAZqhovggKArcWxFkRoJ");
	background-size: cover;
}
.background-image-2 {
	background-image: url("https://gamerwall.pro/uploads/posts/2021-11/1637854663_5-gamerwall-pro-p-geroi-marvel-muravei-oboi-na-rabochii-stol-5.jpg");
	background-size: cover;
}
.background-image-3 {
	background-image: url("https://gamerwall.pro/uploads/posts/2021-11/1637854649_9-gamerwall-pro-p-geroi-marvel-muravei-oboi-na-rabochii-stol-9.jpg");
	background-size: cover;
}
.center {
	margin: 0;
	list-style-type: none;
}
.header {
	position: relative;
	z-index: 500;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	padding-top: 0;
	height: 155px;
	background-color: black;
	width: 97vw;
}
.nav li  {
	display: inline-block;
	color: white;
	font-weight: bold;
	font-size: 14px;
	padding-right: 10px;
	padding-left: 10px;
}
.nav-list_scrolled {
	position: fixed;
	top: 0;
	left: 0;
	animation-name: show-header;
	animation-duration: 1s;
	transform: tranlateY(-155px);
}
@keyframes show-header {
	0% {
		opacity: 0;
		top: -160px;
	}
	100% {
		opacity: 1;
		top: 0px;
	}
}
.hide__op {
	display: none;
}
.style-button a{
	display: block;
	height: 30px;
	line-height: 30px;
	padding: 0 10px;
	background-color: #dd3d53;
	border-radius: 3px;
	transition: all .25s ease;
}
.style-button :hover{
	background-color: #c9233a;
}
.style-button li {
	padding-right: 0;
}
::selection {
	color: white;
	background: red;
}
.logo {
	height: 140px;
}
.bor-1 {
	text-decoration: none;
	color: inherit;
}
.bor-1:hover {
	background-color: #fff;
	color: black;
	transition: all .25s ease;
}
.bor-5 {
	font-size: 14px;
	text-decoration: none;
	color: #bfbfbf;
}
.div-decor {
	font-size: 14px;
	text-decoration: none;
	color: inherit;
	cursor: pointer;
}
.bor {
	text-decoration: none;
	color: inherit;
}
.bor-4 {
	text-decoration: none;
	color: inherit;
	bottom: -30px;
}
.bor-4:hover {
	background-color: #fff;
	color: black;
	transition: all .25s ease;
}
.bor-2 {
	text-decoration: none;
	color: inherit;
	bottom: -60px;
}
.bor-2:hover {
	background-color: #fff;
	color: black;
	transition: all .25s ease;
}
.bor-3 {
	text-decoration: none;
	color: inherit;
	bottom: -90px;
}
.bor-3:hover {
	background-color: #fff;
	color: black;
	transition: all .25s ease;
}
.none {
	display: none;
}
.content-check:checked ~ .none-ul-1{
	display: none
}
.nav-list li:hover > .none{
	display: block;
}
.line {
	width: 100%;
	height: 2px;
	background-color: red;
	margin-top: 20px;
	position: relative;
	z-index: 1;
}
.abuse{
	color: #bfbfbf;
}
.abuse:hover {
	color: red;
	transition: all .2s ease;
}
.abuse-1:hover {
	color: red;
	transition: all .2s ease;
}
.abuse-1{
	color: #ff4d4d;
}
.margin-bottom {
	margin-bottom: 3px;
}
.white {
	color: white;
}
.red {
	color: red;
}
.green {
	color: green;
}
.styl {
	position: relative;
	z-index: 1;
}
.style-1 {
	position: relative;
	z-index: 1;
}
.block-1 {
	padding-top: 15px;
	background-color: grey;
	border: 2px solid black;
	width: 30vw ;
}
.none-ul {
	padding: 0;
	list-style-type: none;
}
.remow {
	padding: 5px 15px 5px 25px;
	line-height: 1.25em;
}
.padding-1 {
	padding: 0 0 0 25px;
}
.padding-2 {
	padding: 0 0 0 15px;
}
.padding-3 {
	padding: 0 0 0 15px;
	margin-top: 0
}
.padding-4 {
	padding: 0 0 0 85px;
}
.margin-1 {
	margin-bottom: 0;
	margin-top: 0;
}
.margin-2 {
	margin-bottom: 0;
}
.margin-3 {
	margin-top: 0;
}
.margin-6 {
	margin-bottom: 30px;
}
.picture-center {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}
.underline-decoration:hover {
	cursor: pointer;
	text-decoration: underline;
}
.underline-decoration {
	text-decoration: none;
}
.content {
	background-color:#f2f2f2;
	width: 170px;
	height: 50px;
	color: #0041ad;
	z-index: 3;
	position: relative;
	padding: 10px;
}
.content b {
	color: #333;
	padding-left: 60px;
	font-size: 16px;
	width: 30%;
}
.content label {
	color: #0041ad;
}
.content-check {
	padding-left: 50px;
}
.pad-1 {
	padding-right: 5px;
}
.content-element {
	margin: 15px 15px 0;
}
/*drop-list*/
.drop-list {
	position: absolute;
	left: 600px;
	height: 120px;
	display: block;
	line-height: 2;
	top: 80px;
	background-color: grey;
}
.drop-list-2 {
	position: absolute;
	left: 690px;
	height: 90px;
	display: block;
	line-height: 2;
	top: 80px;
	background-color: grey;
}
.drop-list-3 {
	position: absolute;
	left: 780px;
	width: 150px;
	height: 120px;
	display: block;
	line-height: 2;
	top: 80px;
	background-color: grey;
}
.a-style {
	display: block;
}
.border {
	width: 160px;
	border-top: 1px solid #333;
}
.ul-style {
	list-style: none;
}
/*burger-icon*/
#checkbox_toggle {
	display: none;
}
.humburger {
	display: none;
	font-size: 24px;
	cursor: pointer;
	z-index: 2;
}
.humburger-line {
	background-color: #fff;
	display: block;
	height: 2px;
	position: relative;
	width: 24px;
	z-index: 2;
}
.none {
	display: none;
}
.humburger-line::before,
.humburger-line::after {
	background-color: #fff;
	content: "";
	display: block;
	position: absolute;
	transition: all .3s;
	width: 100%;
	height: 100%;
}
.humburger-line::before {
	top: 7px;
}
.humburger-line::after {
	top: -7px;
}
/*more-info*/
.more-info {
	border: 1px solid #aaa;
    background-color: #f9f9f9;
    color: black;
	width: 300px;
	height: 1000px;
	padding: 0.2em;
}
.more-item {
    text-align: center;
    font-size: 125%;
    font-weight: bold;
    background-color: #95BEDB;
    text-align: center;
    font-weight: bold;
    font-style: italic;
    font-size: 100%;
    padding: 0 1px 0 1px;
    width: 18.5em;
    height: 36px;
    vertical-align: middle;
	float: right;
}
.more-img {
	margin: 20px 40px 10px 40px;
}
.more-content {
	font-weight: 700;
}
.more-content-title {
	font-size: 14px;
	padding-left: 40px;
	padding-right: 10px;
}
.more-content-title-1 {
	font-size: 14px;
	padding-left: 25px;
	padding-right: 10px;
}
.more-a {
	font-size: 12px;
}
/*footer*/
.footer-content {
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
footer {
	background-color: #111;
	height: auto;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100vw;
	padding-top: 40px;
}
.footer-content h3{
	font-size: 1.8rem;
	font-weight: 400;
	text-transform: capitalize;
	line-height: 3rem;
}
.footer-content p{
	font-size: 14px;
	margin: 10px auto;
	max-width: 500px;
	line-height: 28px;
}
.social {
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1rem 0 3rem 0;
}
ion-icon {
	text-decoration: none;
	color: #fff;
}
.social li{
	margin: 0 10px;
}
.social a ion-icon{
	font-size: 1.1rem;
	transition: color .4s ease;
}
.social a:hover ion-icon{
	color: aqua;
}
.footer-bottom {
	background-color: #000;
	width: 100vw;
	padding: 20px 0;
	text-align: center;
}
.footer-bottom p {
	font-size: 14px;
	word-spacing: 2px;
	text-transform: capitalize;
}
/*media запити */
@media screen and (max-width: 1100px) {
	.picture {
		max-width: 1020px;
	}
}
@media screen and (max-width: 960px) {
	/*header*/
	h1,h2,h3,h4,h5 {
		font-size: 26px;
	}
	.header {
		height: 130px;
	}
	.logo {
		height: 130px;
	}
	.nav {
		position: fixed;
		display: none;
		height: 100%;
		width: 100%;
		background-color: black;
		transition: transform .5s;
		z-index: 1000;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		overflow-y: auto;
		padding: 50px 40px;
	}
	
	.nav li {
		display: flex;
		padding-bottom: 15px;
		justify-content: center;
	}
	
	.nav li:last-of-type a{
		margin-top: 30px;
	}
	.nav a {
		height: 30px;
	}
	#checkbox_toggle:checked ~ .nav{
		display: block;
		transition: all .5s;
	}
	#checkbox_toggle:checked ~ .humburger .humburger-line {
		background-color: transparent;
	}
	#checkbox_toggle:checked ~ .humburger .humburger-line::before{
		transform: rotate(-45deg);
		top: 0;
	}
	#checkbox_toggle:checked ~ .humburger .humburger-line::after{
		transform: rotate(45deg);
		top: 0;
	}
	.humburger {
		z-index: 9999;
		display: flex;
		padding: 0 40px;
	}
	.content-element {
		position: relative;
		z-index: 0;
	}
	.p {
		padding-left: 10px;
	}
}
@media screen and (max-width: 770px) {
	h1,h2,h3,h4,h5 {
		font-size: 20px;
	}
	.header {
		height: 100px;
	}
	.logo {
		height: 100px;
	}	
	/*картинки і назви*/
	.g5 {
		font-size: 16px;
	}
	.font-size {
		font-size: 14px;
	}
	.content-element {
		display: flex;
		justify-content: center;
	}
}
@media screen and (max-width: 570px) {	
	h1,h2,h3,h4,h5{
		font-size: 16px;
	}
	.header {
		height: 70px;
	}
	.logo {
		height: 70px;
	}
	/*картинки і назви*/
	.g5 {
		font-size: 14px;
	}
	.b5 {
		height: 100px;
		width: 100px;
	}
	.picture {
		padding-left: 130px;
	}
	.font-size {
		font-family: 12px;
	}
	.content-element {
		display: flex;
		justify-content: center;
	}
	.picture-center {
		justify-content: center;
	}
	.g4 {
		justify-content: center;
		align-items: center;
	}
	.media-label {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
}ading робота.css…]()


		<link rel="stylesheet" href ="./Фото/робота.css">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="htts://fonts.googleapis.com/css2?family=Raleway 400, 700&display=swap" rel="stylesheet">
		<link rel="apple-touch-icon" sizes="180x180" href="./Богдан/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="./Богдан/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="./Богдан/favicon-16x16.png">
		<link rel="manifest" href="./Богдан/site.webmanifest">
		<meta charset="utf-8"/>
		<meta name = "viewport" content = "width=device-width, inital-scale=1.0"/>
	</head>
<body>
	<div class="overflow">
	<div class="background-image-1">
	<div class="">
	<div class="header" >
	<div class="logo">
	<a href="Людина мураха 3.html" >
	<img class="logo" src="./Фото./56_ua.jpg" alt="Лого дуже класне">
	</a>
	</div>
	<input type="checkbox" id="checkbox_toggle">
	<label for="checkbox_toggle" class="humburger"><span class="humburger-line"></span></label>
<nav class="nav">
	<ul class="ul">
	<li>
		<a class="div-decor abuse " href="Хто ми.html" ><span claas="media-burger">Про нас</span></a>
	</li>
		<li>
			<a class="div-decor abuse-1" href="Кіноафіша фільмів.html">Афіша <span>&bigwedge;</span></a>
		<ul class="none">
			<li class="drop-list">
				<a class="bor-1 style-1 a-style" href="Кіноафіша фільмів.html">Кіноафіша фільмів</a>
			</li>
			<li class="drop-list">
				<a class="bor-2 style-1 border a-style" href="">Кінотеатри</a>
			<li class="drop-list">
				<a class="bor-4 style-1 border a-style" href="">Світові прем'єри</a>
			</li>
			<li class="drop-list">
				<a class="bor-3 style-1 border a-style" href="">Прeм'єри в Україні</a>
			</li>
			</li>
		</ul>
	<li>
	<a class="div-decor abuse " href="">Фільми &bigwedge;</a>
	<ol class="none">
		<li class="drop-list-2">
			<a class="bor-1 style-1 a-style" href="">Фільми</a>
		</li>
		<li class="drop-list-2">
			<a class="bor-4 style-1 border a-style" href="">Мультфільми</a>
		</li>
		<li class="drop-list-2">
			<a class="bor-2 style-1 border a-style" href="">Серіали</a>
		</li>
	</ol>
		</li>
	</li>
	<li>
	<a class="div-decor abuse" href="" >Відео &bigwedge;</a>
	<ul class="none">
		<li class="drop-list-3">
			<a class="bor-1 style-1 a-style" href="">Трейлери</a>
		</li>
		<li class="drop-list-3">
			<a class="bor-4 style-1 a-style border" href="">Українські трейлери</a>
		</li>
		<li class="drop-list-3">
			<a class="bor-2 style-1 a-style border" href="">Фрагменти</a>
		</li>
		<li class="drop-list-3">
			<a class="bor-3 style-1 a-style border" href="">Інтерв'ю</a>
		</li>
	</ul>
	</li>
	<li>
	<a class=" div-decor abuse" href="" >Фото</a>
	</li>
	<li>
	<a class="div-decor abuse " href="" >Новини</a>
	</li>
	<li>
	<a class="div-decor abuse" href="" >Форум</a>
	</li>
	<li class="style-button">
	<a class="bor-5" href="Зареєстуватися.html">Зареєструватися</a>
	</li>
	</ul>
	</div><!--header!-->
	</div><!--nav-list_scrolled!-->
</nav>
	<h1 class="white style margin-2">Цікава інформація про Людину мураху 3</h1>
<span class="font-size">
<div class="line"></div>
<div class="content-element">
<div class="content">
		<b>Зміст</b>
		<div class="content-check">
			<a href="">
				<label class="underline-decoration " for="checkbox-content">[сховати]</label>
			</a>
		</div>
	<ul class="none-ul none-ul-1 hide__op">
		<li class="margin-bottom">
			<a href="#Iнформація">
				<span class="pad-1 underline-decoration">1</span>
				<span class="a-style-1 underline-decoration " >Iнформація</span>
			</a>
		</li>
		<li class="margin-bottom">
			<a href="#У ролях ">
				<span class="pad-1 underline-decoration">2</span>
				<span class="a-style-1 underline-decoration">У ролях </span>
			</a>
		</li>
		<li class="margin-bottom">
			<a href="#Інформація про персонажів">
				<span class="pad-1 underline-decoration">3</span>
				<span class="a-style-1 underline-decoration">Інформація про персонажів </span>
			</a>
		</li>
		<li class="margin-bottom">
			<a href="#Сюжет">
				<span class="pad-1 underline-decoration">4</span>
				<span class="a-style-1 underline-decoration" >Сюжет </span>
			</a>
		</li>
		<li class="margin-bottom">
			<a href="#Виберіть найкращого персонажа в фільмі">
				<span class="pad-1 underline-decoration">5</span>
				<span class="a-style-1 underline-decoration">Виберіть найкращого персонажа в фільмі</span>
			</a>
		</li>
		<li>
			<a href="#Фотографії головних персонажів">
				<span class="pad-1 underline-decoration">6</span>
				<span class="a-style-1 underline-decoration" >Фотографії головних персонажів</span>
			</a>
		</li>
	</ul>
</div>
</div>
<div class="more-info">
	<div class="more-item">
		<div class="more-item-title">
			Людина-мураха та Оса: Квантоманія
		</div>
	</div>
	<div>
		<a href="Людина мураха 3.html" >
			<img class="more-img" src="./Фото./56_ua.jpg" alt="Людина мураха 3">
		</a>
	</div>
	<div class="more-content">
		<big class="more-content-title">Жанр</big>
		<a class="more-a underline-decoration" href="https://uk.wikipedia.org/wiki/Супергеройський_фільм">Супергеройський</a>
		<a class="more-a underline-decoration" href="https://uk.wikipedia.org/wiki/Екшн">екшн</a>
		<br>
		<big class="more-content-title-1">Режисер</big>
		<a class="more-a underline-decoration" href="https://uk.wikipedia.org/wiki/Пейтон_Рід">Пейтон Рід</a>
		<br>
		<big class="more-content-title-1">Продюсер</big>
		<a class="more-a underline-decoration" href="https://uk.wikipedia.org/wiki/Кевін_Файгі">Кевін Файгі</a>
	</div>
</div>
<br> <br>
<div id="Інформація">
<big class="white style">«Людина-мураха та Оса: Квантоманія» (англ. Ant-Man and the Wasp: Quantumania) — американський художній фільм режисера Пейтона Ріда заснований на персонажах Marvel Comics Скота Ленґ / Людину-мураху і Гоуп ван Дайн / Осі.
<p class="style"> Спродюсований Marvel Studios з Walt Disney Studios Motion Pictures у ролі дистриб'ютора. Тридцять друга стрічка в рамках Кіновсесвіту Marvel (КВМ) і перша стрічка п'ятої фази. Картина стане сиквелом до фільмів «Людина-мураха» (2015) і «Людина-мураха і Оса» (2018).</p> Сценарій до фільму напише Джефф Лавнесс. У центрі сюжету знову виявиться Скотт Ленґ у виконанні Пола Радда і Гоуп ван Дайн у виконанні Еванджелін Ліллі, а також персонажі Майкла Дуґласа, Мішель Пфайффер, Кетрін Ньютон і Джонатана Мейджорса.
Плани на третій фільм про Людину-мураху були підтверджені в листопаді 2019 року. Лавнесс став сценаристом в квітні 2020 року, виробництво картини почалося під час пандемії коронавіруса. У грудні 2020 року було офіційно оголошено назву фільму і нових членів акторського складу.
<p class="style">Під час перебування в пастці в Квантовому вимірі Джанет ван Дайн зустрічає Канґа - мандрівника-вигнанця, який стверджує, що вони обидва зможуть втекти з Квантового виміру, якщо вона допоможе йому відновити його Мультиверсальне ядро сили[en]. </p>Після того, як їм вдається його відремонтувати, Джанет бачить видіння,у якому Канґ завойовує та руйнує цілі часові лінії. Джанет використовує свої частинки Піма, щоб збільшити Ядро і зробити його непридатним для використання.
У наш час, після Битви за Землю, Скотт Ленґ стає успішним мемуаристом і живе щасливо зі своєю дівчиною Гоуп ван Дайн. Донька Скотта, Кессі, стала політичною <div class="opacity-1">активісткою, у результаті чого вона провела деякий час у в’язниці</p>У гостях в Генка Піма та Джанет, Кессі розповідає, що вона працювала над пристроєм, який може встановити контакт з Квантовим виміром.Дізнавшись про це, Джанет панікує та силоміць вимикає пристрій, але повідомлення отримано, в результаті чого відкривається портал, який затягує їх у Квантову сферу. Скотта та Кессі знаходять тубільці, які повстали проти свого правителя, а Гоуп, Джанет і Генк досліджують розгалужене місто, щоб отримати відповіді.</big>
<big><p class="white style">Гоуп, Джанет і Генк зустрічаються з лордом Кріларом, колишнім союзником Джанет, який розповідає, що все змінилося після її відходу, і що він тепер працює на Канґа, який тепер є правителем королівства. Ці троє змушені тікати та викрасти корабель Крілара. Лідер повстанців Дженторра каже Ленґам, що зв'язок Джанет з Канґом опосередковано відповідає за його прихід до влади. Невдовзі повстанці зазнають нападу сил Канґа на чолі з М.О.Д.О.Ком , який, як виявилося, є Дарреном Кросом , який пережив свою смерть від рук Скотта.</big></div>
</div>
<div class="line"></div>
<div id="У ролях">
<h2 class="white padding-2 style">У ролях</h2>
<ol class="white style">
<li>
<a class="red style underline-decoration" href ="https://uk.wikipedia.org/wiki/Скотт_Ленґ_(персонаж)"> <big>Скотт Ленґ</big> </a>
</li>
<li>
<a class="red style underline-decoration" href ="https://uk.wikipedia.org/wiki/Пол_Радд"><big> Пол Радд </big></a>
</li>
<li>
<a class="red style underline-decoration" href ="https://uk.wikipedia.org/wiki/Мішель_Пфайффер"><big>Мішель Прайфер</big></a>
</li>
<li>
<a class="red style underline-decoration" href ="https://uk.wikipedia.org/wiki/Еванджелін_Ліллі"><big> Еванджелін Ліллі </big></a>
</li>
<li>
<a class="red style underline-decoration" href ="https://uk.wikipedia.org/wiki/Майкл_Дуглас"><big> Майкл Дуглас </big></a>
<li>
<a class="red style underline-decoration" href ="https://uk.wikipedia.org/wiki/Джонатан_Мейджорс"><big> Джонатан Мейджорс </big></a>
</li>
<li>
<a class="red style underline-decoration"  href ="https://uk.wikipedia.org/wiki/Кетрін_Ньютон"><big>Кетрін Ньютон</big></a>
</li>
</ol>
</div><!--У ролях!-->
<div class="line"></div>
<div id="Інформація про персонажів">
<h2 class="white padding-2 style">Інформація про персонажів</h2>
<ul class="red style none-ul padding-2">
<li>
<a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Пол_Радд"><big> Пол Радд </big></a> —
 <a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Скотт_Ленґ_(персонаж)"> <big>Скотт Ленґ/Людина Мураха:</big></a>
<big class="red style">Колишній дрібний злочинець, який викрав костюм, що дозволяє йому зменшуватися або збільшуватися, а також збільшуватися в силі.</big>
</li>
<li>
<a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Еванджелін_Ліллі"><big> Еванджелін Ліллі </big></a> —
 <a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Гоуп_Пім"><big> Гоуп ван Дайн / Оса:</big></a>
<big class="red style" >Дочка Генка Піма і Джанет ван Дайн, яка передала аналогічний костюм і мантію Оси від її матері. Її стосунки з Ленґом переросли в романтичні</big>
</li>
<li>
<a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Майкл_Дуглас"><big> Майкл Дуглас </big></a> —
 <a class="green style underline-decoration" href = "https://uk.wikipedia.org/wiki/Генк_Пім"><big>Генк Пім:</big></a>
<big class="red style">Колишній агент <a class="green" href ="https://uk.wikipedia.org/wiki/Щ.И.Т.">Щ.И.Т.</a><div class="red">ентомолог і фізик, який став оригінальною людиною-мурахою після виявлення субатомних частинок, які роблять можливе зменшення. Пім став набагато ближче до своєї дочки Гоуп з часу першого фільму.</div>
</li>
<li>
<a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Мішель_Пфайффер">Мішель Прайфер</a> —
 <a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Оса_(персонаж)">Джанет ван Дайн:</a>
<div class="red style">Дружина Генка Піма, яка є першою Осою.</div>
</li>
<li>
<a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Кетрін_Ньютон">Кетрін_Ньютон</a> —
 Кессі Ленґ:Дочка Ленґа і Меґґі.
</li>
<li>
<a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Джонатан_Мейджорс"> Джонатан Мейджорс </a> —
  <a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Канґ_Завойовник"> Канґ Завойовник </a>
</li>
<li>
<a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Білл_Мюррей"> Білл Мюррей</a>
 —<big class="red style"> Крілар:</big>
</li>
<li>
<a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Рендалл_Парк">Рендалл Парк</a> —
  <a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Джиммі_Ву_(персонаж)">Джиммі Ву</a>
</li>
<li>
<a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/Корі_Столл">Корі Столл</a> —
<a class="green style underline-decoration" href ="https://uk.wikipedia.org/wiki/МОДОК">МОДОК</a>
</li>
<li>
<a class="red style underline-decoration" href ="https://uk.wikipedia.org/wiki/Девід_Дастмалчян">Девід Дастмалчян</a>
 —<big class="red padding-2 style">Веб</big>
</li>
</ul>
</div><!--Інформація про персонажів!-->
<div class="line"></div>
</div>
<div class="background-image-2">
<div id="Сюжет">
<h2 class="white padding-3 style margin-2">Сюжет</h2>
<big class="white style margin-3"><p class="white style margin-3 font-size">Під час перебування в пастці в Квантовому вимірі <a class="red style underline-decoration" href ="https://uk.wikipedia.org/wiki/Гоуп_Пім">Джанет ван Дайн</a> зустрічає Канґа - мандрівника-вигнанця, який стверджує, що вони обидва зможуть втекти з Квантового виміру, якщо вона допоможе йому відновити його<a class="red style underline-decoration" href ="https://uk.wikipedia.org/w/index.php?title=Мультивсесвіт_(кінематографічний_всесвіт_Marvel)&action=edit&redlink=1"> Мультиверсальне ядро сили</a> Після того, як їм вдається його відремонтувати, Джанет бачить видіння,у якому Канґ завойовує та руйнує цілі часові лінії.</p> <p class="font-size">Джанет використовує свої частинки Піма, щоб збільшити Ядро і зробити його непридатним для використання.
У наш час, після Битви за Землю, Скотт Ленґ стає успішним мемуаристом і живе щасливо зі своєю дівчиною Гоуп ван Дайн. Донька Скотта, Кессі, стала політичною активісткою, у результаті чого вона провела деякий час у в’язниці. У гостях в Генка Піма та Джанет, Кессі розповідає, що вона працювала над пристроєм, який може встановити контакт з Квантовим виміром.<p class="style font-size"> Дізнавшись про це, Джанет панікує та силоміць вимикає пристрій, але повідомлення отримано, в результаті чого відкривається портал, який затягує їх у Квантову сферу. Скотта та Кессі знаходять тубільці, які повстали проти свого правителя, а Гоуп, Джанет і Генк досліджують розгалужене місто, щоб отримати відповіді.
</p><p class="font-size">Гоуп, Джанет і Генк зустрічаються з лордом Кріларом, колишнім союзником Джанет, який розповідає, що все змінилося після її відходу, і що він тепер працює на Канґа, який тепер є правителем королівства. Ці троє змушені тікати та викрасти корабель Крілара.<p class="font-size"> Лідер повстанців Дженторра каже Ленґам, що зв'язок Джанет з Канґом опосередковано відповідає за його прихід до влади. Невдовзі повстанці зазнають нападу сил Канґа на чолі з М.О.Д.О.Ком , який, як виявилося, є Дарреном Кросом , який пережив свою смерть від рук Скотта.
</p><p class="font-size">Ленґів доставляють до Канґа, який вимагає, щоб Скотт допоміг повернути його<a class="red style underline-decoration" href ="https://uk.wikipedia.org/w/index.php?title=Мультивсесвіт_(кінематографічний_всесвіт_Marvel)&action=edit&redlink=1"> Мультиверсальне ядро сили</a> накше він уб’є Кессі. Скотт опиняється в місці розташування ядра та зменшується.<p class="style margin-2 font-size"> Він ледь не потонув у морі варіантів самого себе, але приходить Гоуп і допомагає йому отримати Ядро. Однак Канґ відмовляється від угоди, захоплюючи Джанет і знищує її корабель з Генком. Після того, як його врятували його мурахи, які також були залучені в Квантовий всесвіт, швидко еволюціонували та стали надрозумними, Генк допомагає Скотту та Гоуп, коли вони йдуть до Канґа. Кессі рятує Дженторру, і вони починають повстання проти Канґа та його армії. Під час бою Кессі звертається до персонажа Кроса, який переконує його повернутися на бік і битися з <div class="opacity-1 margin-3 font-size">Канґом, хоча це коштує йому життя.
</p><p class="font-size">Джанет лагодить Ядро, Генк, Гоуп і Кессі стрибають через портал додому, але Канґ атакує Скотта. Гоуп повертається і разом зі Скоттом знищує Ядро ​​та вбивають Канґа. Кессі знову відкриває портал зі свого боку, щоб Скотт і Гоуп повернулися додому. <p>Коли Скотт щасливо повертається до свого життя, він починає переосмислювати те, що йому сказали про те, що смерть Канґа є початком чогось жахливого, але відкидає це.</big>
<big class="white style">У сцені після титрів численні варіанти Канґа зустрічаються , щоб обговорити смерть Завойовника та спланувати своє повстання, стурбовані зростанням інтересу до Мультивсесвіту з боку героїв Землі-616. У сцені після титрів <a class="red style underline-decoration" href ="https://uk.wikipedia.org/wiki/Локі_(Кіновсесвіт_Marvel)">Локі</a> та Мобіус М. Мобіус бачать інший варіант Канґа на ім’я Віктор Таймлі у 1900-х роках.</big>
<div class="line margin-2"></div>
</div>
</div>
</span>
</div><!--Сюжет!-->
</div>
<div class="background-image-3">
<div class="line margin-3"></div>
<div id="Виберіть найкращого персонажа в фільмі">
<h2 class="white padding-2 style">Виберіть найкращого персонажа в фільмі</h2>
<div class="media-label">
<label class="white style" for="permonage-Рендалл Парк"> Рендалл Парк </label>
<input name="permonage" class="style" id="permonage-Рендалл Парк" type="radio">
<label class="white style" for="permonage-Пола Радда"> Пол Радд </label>
<input name="permonage" class="style" id="permonage-Пола Радда" type="radio">
<label class="white style" for="permonage-Еванджелін Ліллі"> Еванджелін Ліллі</label>
<input name="permonage" class="style" id="permonage-Еванджелін Ліллі" type="radio">
<label class="white style" for="permonage-Майкл Дуглас"> Майкл Дуглас </label>
<input name="permonage" class="style" id="permonage-Майкл Дуглас" type="radio">
<label class="white style" for="permonage-Мішель Пфайффер"> Мішель Пфайффер </label>
<input name="permonage" class="style" id="permonage-Мішель Пфайффер" type="radio">
<label class="white style" for="permonage-Кетрін Ньютон"> Кетрін Ньютон </label>
<input name="permonage" class="style" id="permonage-Кетрін Ньютон" type="radio">
<label class="white style" for="permonage-Білл Мюррей"> Білл Мюррей </label>
<input name="permonage" class="style" id="permonage-Білл Мюррей" type="radio">
<label class="white style" for="permonage-Корі Столл"> Корі Столл </label>
<input name="permonage"class="style" id="permonage-Корі Столл" type="radio">
</div>
</div><!--Виберіть найкращого персонажа в фільмі!-->
<div class="line"></div>
<div id="Фотографії головних персонажів">
<h2 class="white padding-2 style">Фотографії головних персонажів</h2>
<div class="g4">
<div class="picture-center">
<div class="style">
<h3 class="style"><a class="bor underline-decoration g4-center" href=""><big>Полл Радд</big></a></h3>
<img src="./Богдан./нн.jpg" width=200 height=190 alt="Картинка дуже пізнавальна">
</div>
<div class=" style">
<h3 class="style"><a class="bor underline-decoration" href=""><big>Мішель Пфайффер</big></a></h3>
<img src="./Богдан./завантажання.jpg" width=200 height=190 alt="Картинка дуже пізнавальна">
</div>
<div class="style">
<h3 class="style"><a class="bor underline-decoration" href=""><big>Кетрін Ньютон</big></a></h3>
<img src="./Фото./2023.jpg"  width=200 height=190 alt="Картинка дуже пізнавальна">
</div>
<div class="style">
<h3 class="style"><a class="bor underline-decoration" href=""><big>Майкл Дуглас</big></a></h3>
<img src="./Фото./44.jpg" width=200 height=190 alt="Картинка дуже пізнавальна">
</div>
<div class="style">
<h3 class="style"><a class="bor underline-decoration" href=""><big> Еванджелін Ліллі</big></a></h3>
<img src="./Фото./63.jpg" width=200 height=190 alt="Картинка дуже пізнавальна">
</div><!--style!-->
</div><!--picture-center!-->
</div><!--g4!-->
</div><!--Фотографії головних персонажів!-->
<footer>
	<div class="footer-content">
		<h3>Кіноафіша.com</h3>
		<p class="p">
			Інформація, розміщена на сайті KinoFilms,
			не може бути використана <br> іншими ресурсами без
			письмового дозволу адміністрації KinoFilms.ua
		</p>
		<ul class="social">
		<li>
			<a href="#">
				<ion-icon name="logo-facebook"></ion-icon>
			</a>
		</li>
		<li>
			<a href="#">
				<ion-icon name="logo-instagram"></ion-icon>
			</a>
		</li>
		<li>
			<a href="#">
				<ion-icon name="logo-tumblr"></ion-icon>
			</a>
		</li>
		<li>
			<a href="#">
				<ion-icon name="logo-youtube"></ion-icon>
			</a>
		</li>
		<li>
			<a href="#">
				<ion-icon name="logo-tiktok"></ion-icon>
			</a>
		</li>
		</ul>
	</div>
	<div class="footer-bottom white">
		<p>
			Написаний сайт з 2022-2023 рік
		</p>
	</div>
</footer>
</div><!--background-image-3!-->
</div><!--overflow!-->
<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
<script src="./Фото/script.js"></script>
 </body>
</html>
 Людина мураха 3.html…]()
