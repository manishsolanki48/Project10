 if (screen.width < 960) {
  $(".top-header").hide();

   $(".show-btn").click(function(){
    $(".top-header").slideToggle();
  });
}
AOS.init({
  duration: 1000
});
 
$(".close-btn").click(function(){
  $(".form-section").hide();
});
$(".menu span").click(function(){
  $(".form-section").show();
});
