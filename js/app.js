/* 하트 클릭시 feed에 나옴
$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function() {
    var hasHeartClass = $(this).hasClass("heart-clicked");
    if (hasHeartClass) {
      $(this).removeClass("fa-heart");
      $(this).removeClass("heart-clicked");
      $(this).addClass("fa-heart-o");
    } else {
      $(this).removeClass("fa-heart-o");
      $(this).addClass("fa-heart");
      $(this).addClass("heart-clicked");
    }
  });
});

*/

/* 하트클릭 샘 코딩
$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function() {
    var hasHeartClass = $(this).hasClass("heart-clicked");
    if (hasHeartClass) {
      $(this).removeClass("fa-heart");
      $(this).removeClass("heart-clicked");
      $(this).addClass("fa-heart-o");
    } else {
      $(this).removeClass("fa-heart-o");
      $(this).addClass("fa-heart");
      $(this).addClass("heart-clicked");
    }
  });
});
*/


/* 위 하트 클릭 심플 코드로 */

$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function() {
    $(this).toggleClass("heart-clicked fa-heart fa-heart-o");
  });
});
