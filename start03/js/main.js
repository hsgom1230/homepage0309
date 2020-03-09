/* $(function(){
  $(".sub").hide();

  $(".main").click(function(e){
    e.preventDefault();
    $(".main").removeClass("on");
    $(this).addClass("on");
    $(".sub").hide();
    $(this).next().show();
    });
  }); */

$(function(){
  $(".sub").hide();

  $(".main").click(function(e){
    e.preventDefault();
    $(".main").removeClass("on");
    $(this).addClass("on");
    $(".sub").slideUp(300);
    $(this).next().slideDown(300);
    });
  });
