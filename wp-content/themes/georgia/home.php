<?php

/* Template Name:Home page*/

?>


<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
<script
  src="https://code.jquery.com/jquery-3.3.1.min.js"
  integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
  crossorigin="anonymous"></script>


<style>
body, html {
    height: 100%;
    margin: 0;
}
.bg {
    background-image: url(http://georgia.link-in.co.il/wp-content/themes/georgia/images/Georgia_map_new.png);
    /*background-image: url(http://georgia.link-in.co.il/wp-content/themes/georgia/images/Georgia_map_numbers.png);*/
    width: 1050px;
    height: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 110px;
    left: 140px;
    opacity: 0.7;
}

.bg-slider {
    background-image: url(http://georgia.link-in.co.il/wp-content/themes/georgia/images/Georgia1.jpg);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
}

.search-hp {
    position: absolute;
    top: 40px;
    left: 390px;
}

.search-hp input {
 width: 440px;
    text-align: right;
    padding: 16px 56px;
    border-radius: 6px;
    border: none;
}
.area {
    position: absolute;
    width: 50px;
    height: 50px;
    text-align: center;
}

.area-12 {
    top: 110px;
    left: 180px;
   -webkit-animation: bounce-in 0.5s ease 5.5s 1 normal ;
 animation: bounce-in 0.5s ease 5.5s 1 normal ; 
  opacity: 0;
}

.area-11 {
    bottom: 150px;
    left: 310px;
   -webkit-animation: bounce-in 0.5s ease 5s 1 normal ;
 animation: bounce-in 0.5s ease 5s 1 normal ; 
  opacity: 0;
}

.area.area-10 {
    right: 150px;
    bottom: 150px;
   -webkit-animation: bounce-in 0.5s ease 4.5s 1 normal ;
 animation: bounce-in 0.5s ease 4.5s 1 normal ; 
  opacity: 0;
}

.area.area-9 {
    bottom: 120px;
    right: 290px;
   -webkit-animation: bounce-in 0.5s ease 4s 1 normal ;
 animation: bounce-in 0.5s ease 4s 1 normal ; 
  opacity: 0;
}

.area.area-8 {
    bottom: 120px;
    right: 350px;
   -webkit-animation: bounce-in 0.5s ease 3.5s 1 normal ;
 animation: bounce-in 0.5s ease 3.5s 1 normal ; 
  opacity: 0;
}

.area.area-7 {
    bottom: 130px;
    left: 500px;
   -webkit-animation: bounce-in 0.5s ease 3s 1 normal ;
 animation: bounce-in 0.5s ease 3s 1 normal ; 
  opacity: 0;
}

.area.area-6 {
    right: 290px;
    top: 290px;
   -webkit-animation: bounce-in 0.5s ease 2.5s 1 normal ;
   animation: bounce-in 0.5s ease 2.5s 1 normal ; 
   opacity: 0;
}

.area.area-5 {
    top: 320px;
    right: 410px;
  -webkit-animation: bounce-in 0.5s ease 2s 1 normal ;
  animation: bounce-in 0.5s ease 2s 1 normal ; 
  opacity: 0;
}

.area.area-4 {
    top: 310px;
    left: 450px;
   -webkit-animation: bounce-in 0.5s ease 1.5s 1 normal ;
    animation: bounce-in 0.5s ease 1.5s 1 normal ;     
   opacity: 0;
}

.area.area-3 {
  top: 340px;
  left: 320px;
  opacity: 0;
  -webkit-animation: bounce-in 0.5s ease 1s 1 normal ;
  animation: bounce-in 0.5s ease 1s 1 normal ;    
}

.area.area-2 {
  top: 200px;
  left: 475px;
  opacity: 0;
  -webkit-animation: bounce-in 0.5s ease 0.5s 1 normal ;
  animation: bounce-in 0.5s ease 0.5s 1 normal ;
}

.area-1 {
    top: 200px;
    left: 330px;
  -webkit-animation: bounce-in 0.5s ease 0s 1 normal ;
  animation: bounce-in 0.5s ease 0s 1 normal ;
/*   -webkit-animation: change-opacity 0.5s linear 0s 1 normal ;
   animation: change-opacity 0.5s linear 0s 1 normal ;*/

}


i.fas.fa-map-marker-alt {
    font-size: 24px;
}

/*
http://angrytools.com/css/animation/
 -webkit-animation: bounce-in 1s ease 0s 1 normal ;
 animation: bounce-in 1s ease 0s 1 normal ;
*/

/*https://www.image-map.net/*/
@-webkit-keyframes change-opacity {
  0%{
  opacity:0;
  }
  100%{
  opacity:1;
  }
}

@keyframes change-opacity {
  0%{
  opacity:0;
  }
  100%{
  opacity:1;
  }
}


@-webkit-keyframes bounce-in {
  0%{
 opacity: 0;
 -webkit-transform: scale(.3);
 transform: scale(.3);
  }
  50%{
 opacity: 1;
 -webkit-transform: scale(1.0);
 transform: scale(1.0);
  }
  70%{
 -webkit-transform: scale(0.9);
 transform: scale(0.9);
  }
  100%{
 -webkit-transform: scale(1);
 transform: scale(1);
  }
}

@keyframes bounce-in {
  0%{
 opacity: 0;
 transform: scale(.3);
  }
  50%{
 opacity: 1;
 transform: scale(1.0);
  }
  70%{
 transform: scale(0.9);
  }
  100%{
 transform: scale(1);
  }
}

</style>
</head>
<body>

<div class="bg-slider">
  <div class="search-hp">
   <input type="text" name="search-hp" placeholder="םכליבשב אצמא רבכ ינא">
   <i class="fas fa-search"></i>
  </div> 
 <div class="bg">
   <div class="area area-1">
    <i class="fas fa-map-marker-alt"></i>
    סמגרלו וסוואנתי עילית
   </div>
   <div class="area area-2">
    <i class="fas fa-map-marker-alt"></i>
    רצ'ה-לצ'חומי וסוואנתי תחתית
   </div>
   <div class="area area-3">
    <i class="fas fa-map-marker-alt"></i>
    גוריה
   </div>
   <div class="area area-4">
    <i class="fas fa-map-marker-alt"></i>
    אימרתי
   </div>
   <div class="area area-5">
    <i class="fas fa-map-marker-alt"></i>
    כארתלי הפנימית
   </div>
   <div class="area area-6">
    <i class="fas fa-map-marker-alt"></i>
    מצחתה מתיאנתי
   </div>
   <div class="area area-7">
    <i class="fas fa-map-marker-alt"></i>
    סאמצחה-ג'אוואחתי
   </div>
   <div class="area area-8">
    <i class="fas fa-map-marker-alt"></i>
    כארתלי תחתית
   </div>
   <div class="area area-9">
    <i class="fas fa-map-marker-alt"></i>
    כארתלי תחתית
   </div>
   <div class="area area-10">
    <i class="fas fa-map-marker-alt"></i>
    קאחתי
   </div>
   <div class="area area-11">
    <i class="fas fa-map-marker-alt"></i>
    אג'ריה
   </div>
   <div class="area area-12">
    <i class="fas fa-map-marker-alt"></i>
    אבחזיה
   </div>


 </div>
</div>


<p>This example creates a full page background image. Try to resize the browser window to see how it always will cover the full screen (
when scrolled to top), and that it scales nicely on all screen sizes.</p>
<script type="text/javascript">
  
setTimeout(function(){
  $(".area-2").css("opacity", "1");
}, 1000);
setTimeout(function(){
  $(".area-3").css("opacity", "1");
}, 1500);
setTimeout(function(){
  $(".area-4").css("opacity", "1");
}, 2000);
setTimeout(function(){
  $(".area-5").css("opacity", "1");
}, 2500);
setTimeout(function(){
  $(".area-6").css("opacity", "1");
}, 3000);
setTimeout(function(){
  $(".area-7").css("opacity", "1");
}, 3500);
setTimeout(function(){
  $(".area-8").css("opacity", "1");
}, 4000);
setTimeout(function(){
  $(".area-9").css("opacity", "1");
}, 4500);
setTimeout(function(){
  $(".area-10").css("opacity", "1");
}, 5000);
setTimeout(function(){
  $(".area-11").css("opacity", "1");
}, 5500);
setTimeout(function(){
  $(".area-12").css("opacity", "1");
}, 6000);



</script>

</body>
</html>
