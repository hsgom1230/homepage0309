$(function(){
  $(".menu_btn").click(function(e) {
    e.preventDefault();
    // if($("body").hasClass("open_status") == false){
    //   $("body").addClass("open_status");
    //   $(".hamburger_menu").addClass("on");
    //   $(".overlay").addClass("on");
    // }else{
    //   $("body").removeClass("open_status");
    //   $(".hamburger_menu").removeClass("on");
    //   $(".overlay").removeClass("on");
    // }

    $("body").toggleClass("open_status");
    $(".hamburger_menu").toggleClass("on");
    $(".overlay").toggleClass("on");
  });
  $(".overlay").click(function(){
    $("body").removeClass("open_status");
    $(".hamburger_menu").removeClass("on");
    $(".overlay").removeClass("on");
  });
});
