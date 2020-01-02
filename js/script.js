// -----------textarea input----------
// $(document).ready(function() {
//   $("input, textarea").placeholder();
// });

// ----------헤더-----------
// --모바일 서브헤더 --
// $(".m-sub-header ul li").hasClass("font__active__purple"){

// }

// ----------사이드바----------
// --사이드바 고정
$(document).ready(function() {
  var jbOffset = $(".side-bar").offset();
  $(window).scroll(function() {
    if ($(document).scrollTop() > jbOffset.top) {
      $(".side-bar").addClass("sidebar__fixed");
    } else {
      $(".side-bar").removeClass("sidebar__fixed");
    }
  });
});

//----------vote----------
// --찬반투표 탭 클릭시

// --찬반투표 투표버튼 클릭시
let voteGraphBtn = 0;
$(".vote__main .btn ul li").click(function() {
  voteGraphBtn = $(this).index();
  console.log(1);

  if (voteGraphBtn == 0) {
    $(".bgblack-layerpopup").show();
    $(".vote-layerpopup").show();
    console.log(1);
  }
});

// --찬반투표 피드 버튼 클릭시
let voteFeedBtn = 0;
let articleFeedListBtn1 = $(".article-feed__item li.btn__item--1");
let articleFeedListBtn2 = $(".article-feed__item li.btn__item--2");

articleFeedListBtn1.on("click", function() {
  $(this)
    .find("span")
    .toggleClass("font__active__red");
  $(this)
    .find("em")
    .toggleClass("font__active__red");
});

let a = null;
articleFeedListBtn2.on("click", function() {
  a = $(this).parents();

  $(this)
    .parents()
    .find(".feed-comment")
    .toggle();

  $(this)
    .parents()
    .find(".comment-write")
    .toggle();
});

// $(".article-feed__list")
//   .$(this)
//   .find(".btn ul li")
//   .click(function() {
//     console.log(1);

//     let voteFeedBtn = $(this).index();
//     if (voteFeedBtn == 0) {
//       $(this)
//         .find("a span")
//         .toggleClass("font__active__red");
//       $(this)
//         .find("a em")
//         .toggleClass("font__active__red");
//     } else {
//       $(".feed-comment").toggle();
//       $(".comment-write").toggle();
//     }
//   });

// $(".vote__feed .btn ul li").click(function() {
//   let voteFeedBtn = $(this).index();
//   if (voteFeedBtn == 0) {
//     $(this)
//       .find("a span")
//       .toggleClass("font__active__red");
//     $(this)
//       .find("a em")
//       .toggleClass("font__active__red");
//   } else {
//     $(".feed-comment").toggle();
//     $(".comment-write").toggle();
//   }
// });

// --피드 댓글더보기 클릭시
$(".feed-comment__addreply").click(function() {
  $(".feed-comment__relpy").toggleClass("div__flex");
});

// --찬반투표 레이어팝업--
$(".vote-layerpopup a").click(function() {
  $(".vote-layerpopup").hide();
  $(".bgblack-layerpopup").hide();
});

// ------------userinfo---------------
// --메뉴클릭된것 밑줄상태

// if ($(".sub-header__nav ul li a").hasClas("font__active__purple") == true) {
//   console.log(1);
// }
