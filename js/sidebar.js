function auto_close_sidebar(){
  if ($("#copyright").css("display") == "none") {
    $("#sidebar").hide();
  }
}



$(document).ready(function(){

  $(".close-menu").click(function(){
    $("#sidebar").hide();
  });

  $(".open-menu").click(function(){
    $("#sidebar").show();
  });


  $(window).resize(auto_close_sidebar);
});
