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

$(".vote__tab-left .btn__item--3").click(function() {
  console.log(1);
});

//------------------vote----------------

function test1() {
  // var test1 = $("vote__tab-left ul li.btn__item--3 img");

  $("vote__tab-left ul li.btn__item--3 img").attr("src", function(index, attr) {
    if (attr.match("_off.svg")) {
      return attr.replace("_off.svg", "_on.svg");
    } else {
      return attr.replace("_on.svg", "_off.svg");
    }
  });
}

// --탭클릭시

/*
let voteTabList = 0;
$(".vote__tab-left ul li").click(function() {
  voteTabList = $(this).index();

  // 첫번째버튼
  if (voteTabList == 0) {
    $(".vote__tab-left ul li")
      .find("span")
      .removeClass("font__active__purple_400");
    $(this)
      .find("span")
      .addClass("font__active__purple_400");

    //이미지 - 기존것지우기
    $(".vote__tab-left .btn__item--2")
      .find("img")
      .attr("src", "img/ic_tab-yes_off.svg");

    $(".vote__tab-left .btn__item--3")
      .find("img")
      .attr("src", "img/ic_tab-no_off.svg");

    // 이미지 - 클릭시 변경
    $(".vote__tab-left ul li.btn__item--1")
      .find("img")
      .attr(
        "src",
        $(this)
          .find("img")
          .attr("src")
          .replace("_off.svg", "_on.svg")
      );
  }

  // 두번째버튼
  else if (voteTabList == 1) {
    $(".vote__tab-left ul li")
      .find("span")
      .removeClass("font__active__purple_400");
    $(this)
      .find("span")
      .addClass("font__active__purple_400");

    $(".vote__tab-left .btn__item--1")
      .find("img")
      .attr("src", "img/ic_tab-all_off.svg");

    $(".vote__tab-left .btn__item--3")
      .find("img")
      .attr("src", "img/ic_tab-no_off.svg");

    $(".vote__tab-left ul li.btn__item--2")
      .find("img")
      .attr(
        "src",
        $(this)
          .find("img")
          .attr("src")
          .replace("_off.svg", "_on.svg")
      );

    // 세번째버튼
  } else {
    $(".vote__tab-left ul li")
      .find("span")
      .removeClass("font__active__purple_400");
    $(this)
      .find("span")
      .addClass("font__active__purple_400");

    //이미지 - 기존것지우기
    $(".vote__tab-left .btn__item--1")
      .find("img")
      .attr("src", "img/ic_tab-all_off.svg");

    $(".vote__tab-left .btn__item--2")
      .find("img")
      .attr("src", "img/ic_tab-yes_off.svg");

    // 이미지 - 클릭시 변경
    $(".vote__tab-left ul li.btn__item--3")
      .find("img")
      .attr(
        "src",
        $(this)
          .find("img")
          .attr("src")
          .replace("_off.svg", "_on.svg")
      );
  }
});
*/

// --찬반투표 투표버튼 클릭시
let voteGraphBtn = 0;
$(".vote__main .btn ul li").click(function() {
  voteGraphBtn = $(this).index();

  if (voteGraphBtn == 0) {
    $(".bgblack-layerpopup").show();
    $(".vote-layerpopup").show();
    $(".vote-layerpopup em").addClass("font__active__sky");
    $(".vote-layerpopup em").removeClass("font__active__red");
    console.log(1);
  } else {
    $(".bgblack-layerpopup").show();
    $(".vote-layerpopup").show();
    $(".vote-layerpopup em").addClass("font__active__red");
    $(".vote-layerpopup em").removeClass("font__active__sky");
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

// ----------------네비게이션드로어------------

$(".m-header__btn").click(function() {
  console.log(1);
  $(".bgblack-layerpopup").show();
  $(".m-nav-draw").animate({
    marginLeft: "100%"
  });
});

$(".bgblack-layerpopup").click(function() {
  $(".bgblack-layerpopup").hide();
  $(".vote-layerpopup").hide();
  $(".m-nav-draw").animate({
    marginLeft: "0"
  });
});
