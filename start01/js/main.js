
//첫번째 것
﻿$(function () {
  $("nav ul ul").css({display:"none"});

  $("nav ul > li").hover(
    function(){
      $(this).find("ul").css({display:"block"});
      $(this).children("a").addClass("on");
    },
    function(){
      $(this).find("ul").css({display:"none"});
      $(this).children("a").removeClass("on");
    }
  );

﻿});


// 2번째 것
// $(function(){
//   $("nav ul ul").css({display:"none"});
//
//   $("nav ul > li").hover(
//     function(){
//       $(this).find("ul").slideDown(300);
//       $(this).children("a").addClass("on");
//     },
//     function(){
//       $(this).find("ul").slideUp(300);
//       $(this).children("a").removeClass("on");
//     }
//   );
// });
