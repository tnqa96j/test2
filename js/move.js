window.onload = function () {
  $(".loading-wrapper").fadeOut();
  $(".banner-gif").fadeIn(2000);
}
/*asidemenu 摺疊選單 */
$(document).ready(function () {
  $(".archives-nav").hide();
  $(".aaa").click(function () {
    $(".nav-list-area-item").toggleClass("active1");
    if ($(".nav-list-area-item").hasClass("active1")) {
      $(".archives-nav").slideDown("ease-in	", "linear");
      $(".bbb").animate({ "top": "70px" }, 100);
    }
    else {
      $(".archives-nav").slideUp("fast", "linear");
      $(".bbb").animate({ "top": "0" }, 200);
    }
  });
  $(".aaa").hover(function(){
    $(".rotatetri").stop().toggleClass('rotatetrihover');
  })

});

//display:sticky
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    //$("span.qScrollTop").text(scrollVal);

    if (scrollVal > 640) {
      $(".nav").addClass("fixed");
      /* $(".nav").animate({ "right": "40" }, 200);*/
      console.log("hello");
      $(".btn-bar").addClass("black");
    }
    else {
      $(".nav").removeClass("fixed");
      $(".btn-bar").removeClass("black");
      console.log("nohello");
    }

  });
})




//animate on scroll
$(document).ready(function () {

  AOS.init({
    duration: 1000,
  });

});

/*按副導覽跳到指定區塊 */
$(document).ready(function () {

  $('a[href=#aboutus]').click(function () {

    $('html,body').animate({

      scrollTop: $('#aboutus').offset().top

    }, 'show');

    return false;

  });

  $('a[href=#sort]').click(function () {

    $('html,body').animate({

      scrollTop: $('#sort').offset().top

    }, 'show');

    return false;

  });

  $('a[href=#discovery]').click(function () {

    $('html,body').animate({

      scrollTop: $('#discovery').offset().top

    }, 'show');

    return false;

  });



});
//按鈕顏色擴展
$(function () {
  $(".aaa").append('<div class="bg-overly"></div>');
});
//modal
$(function () {
  $("#modal-launcher1, #modal-background1, #modal-close1").click(function () {
    $("#modal-content1,#modal-background1").stop().slideToggle("2000");
  });
  $("#modal-launcher2, #modal-background2, #modal-close2").click(function () {
    $("#modal-content2,#modal-background2").stop().slideToggle("2000");
  });
  $("#modal-launcher3, #modal-background3, #modal-close3").click(function () {
    $("#modal-content3,#modal-background3").stop().slideToggle("2000");
  });
  $("#modal-launcher4, #modal-background4, #modal-close4").click(function () {
    $("#modal-content4,#modal-background4").stop().slideToggle("2000");
  });
  $("#modal-launcher5, #modal-background5, #modal-close5").click(function () {
    $("#modal-content5,#modal-background5").stop().slideToggle("2000");
  });
  $("#modal-launcher6, #modal-background6, #modal-close6").click(function () {
    $("#modal-content6,#modal-background6").stop().slideToggle("2000");
  });
  $("#modal-launcher7, #modal-background7, #modal-close7").click(function () {
    $("#modal-content7,#modal-background7").stop().slideToggle("2000");
  });
  $("#modal-launcher8, #modal-background8, #modal-close8").click(function () {
    $("#modal-content8,#modal-background8").stop().slideToggle("2000");
  });
  $("#modal-launcher9, #modal-background9, #modal-close9").click(function () {
    $("#modal-content9,#modal-background9").stop().slideToggle("2000");
  });
  $("#modal-launcher10, #modal-background10, #modal-close10").click(function () {
    $("#modal-content10,#modal-background10").stop().slideToggle("2000");
  });


});
//只顯示那個區域的案件
$(document).ready(function () {
  $("g#taiwan-north").click(function () {
    $("li").not(".t-north").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");
    $("li").filter(".t-north").show(100, "linear");
    $("#t-n").show();
    $("#t-s").hide();
    $("#t-m").hide();
    $("#t-e").hide();
  });
  $("g#taiwan-mid").click(function () {
    $("li").filter(".t-mid").show(100, "linear");
    $("li").not(".t-mid").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");

    $("#t-m").show();
    $("#t-s").hide();
    $("#t-n").hide();
    $("#t-e").hide();
  });
  $("g#taiwan-east").click(function () {
    $("li").not(".t-east").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");
    $("li").filter(".t-east").show(100, "linear");
    $("#t-e").show();
    $("#t-s").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });
  $("g#taiwan-south").click(function () {
    $("li").not(".t-south").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");
    $("li").filter(".t-south").show(100, "linear");
    $("#t-s").show();
    $("#t-e").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });
  $("g#japan-north").click(function () {
    $("li").not(".t-north").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");
    $("li").filter(".t-north").show(100, "linear");
    $("#t-n").show();
    $("#t-s").hide();
    $("#t-m").hide();
    $("#t-e").hide();
  });
  $("g#japan-mid").click(function () {
    $("li").not(".t-mid").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");
    $("li").filter(".t-mid").show(100, "linear");
    $("#t-m").show();
    $("#t-s").hide();
    $("#t-n").hide();
    $("#t-e").hide();
  });
  $("g#japan-east").click(function () {
    $("li").not(".t-east").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");
    $("li").filter(".t-east").show(100, "linear");
    $("#t-e").show();
    $("#t-s").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });
  $("g#japan-south").click(function () {
    $("li").not(".t-south").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");
    $("li").filter(".t-south").show(100, "linear");
    $("#t-s").show();
    $("#t-e").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });
  $("g#usa-north").click(function () {
    $("li").not(".t-north").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");
    $("li").filter(".t-north").show(100, "linear");
    $("#t-n").show();
    $("#t-s").hide();
    $("#t-m").hide();
    $("#t-e").hide();
  });
  $("g#usa-mid").click(function () {
    $("li").not(".t-mid").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");
    $("li").filter(".t-mid").show(100, "linear");
    $("#t-m").show();
    $("#t-s").hide();
    $("#t-n").hide();
    $("#t-e").hide();
  });
  $("g#usa-east").click(function () {
    $("li").not(".t-east").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");
    $("li").filter(".t-east").show(100, "linear");
    $("#t-e").show();
    $("#t-s").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });
  $("g#usa-south").click(function () {
    $("li").not(".t-south").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");
    $("li").filter(".t-south").show(100, "linear");
    $("#t-s").show();
    $("#t-e").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });
  $("#t").click(function () {
    $("li").not(".t-all").not(".nav-list-area-item").not(".archives-nav-item").hide(100, "linear");
    $("li").filter(".t-all").show(100, "linear");
    $("#t-s").hide();
    $("#t-e").hide();
    $("#t-n").hide();
    $("#t-m").hide();
  });

});

/*分類註解 */
/*頁面載入後只會發生一次*/
let a = 0;
$(window).ready(function () {
  let w = window.innerWidth;  /*一開始的判斷 */
  asidechange(w);
  changehei(w);
});

var resizeTimer = null;

$(window).resize(function () {
  if (resizeTimer) {
    clearTimeout(resizeTimer);
  }
  resizeTimer = setTimeout(function () {
    console.log("窗口改變")
    const w = window.innerWidth;
    console.log("最終寬度為" + w);
    asidechange(w);
    changehei(w);
  }, 100)
})

//右側滑單
function asidechange(w) {
  if (w > 768) {
    console.log(">768");
    /*回復原狀 */
    $(".asidemenu").removeClass("active");
    $(".btn-line").removeClass("rotate1");
    $(".btn-line2").removeClass("active");
    $(".btn-line2").css("opacity","1");
    $(".btn-line3").removeClass("rotate2");
    $(".asidemenu").hide();
    /*點擊 */
    $(".btn1").unbind('click').click(function () {
      $(".asidemenu").toggleClass("active");
       
      $(".btn-line").toggleClass("rotate1");
      $(".btn-line3").toggleClass("rotate2");
        if ($(".asidemenu").hasClass("active")) {
        $(".asidemenu").stop().show().animate({ "right": "300px" }, "fast")
        }

      else {
        $(".asidemenu").animate({ "right": "0px" }, "fast")
      }
      $(".btn-line2").toggleClass("active");
      if ($(".btn-line2").hasClass("active")) {
        $(".btn-line2").stop().animate({ "right": "0px", "opacity": "0" }, 400)
      }
      else {
        $(".btn-line2").stop().animate({ "right": "15%", "opacity": "1" }, 400)
      }

    });
  }
  else if (w <= 768) {
    console.log("<=768");
    /*回復原狀 */
    $(".asidemenu").removeClass("active");
    $(".btn-line").removeClass("rotate1");
    $(".btn-line2").removeClass("active");
    $(".btn-line2").css("opacity","1");
    $(".btn-line3").removeClass("rotate2");
    $(".asidemenu").hide();

    $(".btn1").unbind('click').click(function () {
      $(".asidemenu").toggleClass("active");
      $(".btn-line").toggleClass("rotate1");
      $(".btn-line3").toggleClass("rotate2");

      if ($(".asidemenu").hasClass("active")) {
        $(".asidemenu").slideDown();
      }

      else {
        $(".asidemenu").slideUp();
      }
      $(".btn-line2").toggleClass("active");
      if ($(".btn-line2").hasClass("active")) {
        $(".btn-line2").stop().animate({ "right": "0px", "opacity": "0" }, 400)
      }
      else {
        $(".btn-line2").stop().animate({ "right": "15%", "opacity": "1" }, 400)
      }
    })
  }
}

function changehei(w) {
  console.log(w);
  if (w > 500) {
    console.log("height");
    /*1-1 */
    $(".item1-1").stop().removeClass("itemstatechange");
    $(".item1-1").unbind('click').click(function () {
      $(".item1-1").stop().toggleClass("itemstatechange");
      $(".box1-2").stop().toggleClass("height").addClass("transitionh");
      console.log("成功h");
    });
    $(".box1-2").removeClass("width");
    $(".box1-2").removeClass("transitionw");
    /*2-1 */
    $(".item2-1").stop().removeClass("itemstatechange");
    $(".item2-1").unbind('click').click(function () {
      $(".item2-1").toggleClass("itemstatechange");
      $(".box2-2").stop().toggleClass("height").addClass("transitionh");
      console.log("成功h");
    });
    $(".box2-2").removeClass("width");
    $(".box2-2").removeClass("transitionw");
    /*3-1 */
    $(".item3-1").stop().removeClass("itemstatechange");
    $(".item3-1").unbind('click').click(function () {
      $(".item3-1").toggleClass("itemstatechange");
      $(".box3-2").stop().toggleClass("height").addClass("transitionh");
      console.log("成功h");
    });
    $(".box2-2").removeClass("width");
    $(".box3-2").removeClass("transitionw");
    /*4-1 */
    $(".item4-1").stop().removeClass("itemstatechange");
    $(".item4-1").unbind('click').click(function () {
      $(".item4-1").toggleClass("itemstatechange");
      $(".box4-2").stop().toggleClass("height").addClass("transitionh");
      console.log("成功h");
    });
    $(".box4-2").removeClass("width");
    $(".box4-2").removeClass("transitionw");
    /*5-1 */
    $(".item5-1").stop().removeClass("itemstatechange");
    $(".item5-1").unbind('click').click(function () {
      $(".item5-1").toggleClass("itemstatechange");
      $(".box5-2").stop().toggleClass("height").addClass("transitionh");
      console.log("成功h");
    });
    $(".box5-2").removeClass("width");
    $(".box5-2").removeClass("transitionw");
    /*6-1 */
    $(".item6-1").stop().removeClass("itemstatechange");
    $(".item6-1").unbind('click').click(function () {
      $(".item6-1").toggleClass("itemstatechange");
      $(".box6-2").stop().toggleClass("height").addClass("transitionh");
      console.log("成功h");
    });
    $(".box6-2").removeClass("width");
    $(".box6-2").removeClass("transitionw");
    /*7-1*/
    $(".item7-1").stop().removeClass("itemstatechange");
    $(".item7-1").unbind('click').click(function () {
      $(".item7-1").toggleClass("itemstatechange");
      $(".box7-2").stop().toggleClass("height").addClass("transitionh");
      console.log("成功h");
    });
    $(".box7-2").removeClass("width");
    $(".box7-2").removeClass("transitionw");
  }
  if (w <= 500) {
    console.log("width");
    /*1-1 */
    $(".item1-1").stop().removeClass("itemstatechange");
    $(".item1-1").unbind('click').click(function () {
      $(".item1-1").toggleClass("itemstatechange");
      $(".box1-2").stop().toggleClass("width").addClass("transitionw");
      console.log("成功w");
    });
    $(".box1-2").removeClass("height");
    $(".box1-2").removeClass("transitionh");
    /*2-1 */
    $(".item2-1").stop().removeClass("itemstatechange");
    $(".item2-1").unbind('click').click(function () {
      $(".item2-1").toggleClass("itemstatechange");
      $(".box2-2").stop().toggleClass("width").addClass("transitionw");
      console.log("成功w");
    });
    $(".box2-2").removeClass("height");
    $(".box2-2").removeClass("transitionh");
    /*3-1 */
    $(".item3-1").stop().removeClass("itemstatechange");
    $(".item3-1").unbind('click').click(function () {
      $(".item3-1").toggleClass("itemstatechange");
      $(".box3-2").stop().toggleClass("width").addClass("transitionw");
      console.log("成功w");
    });
    $(".box3-2").removeClass("height");
    $(".box3-2").removeClass("transitionh");
    /*4-1*/
    $(".item4-1").stop().removeClass("itemstatechange");
    $(".item4-1").unbind('click').click(function () {
      $(".item4-1").toggleClass("itemstatechange");
      $(".box4-2").stop().toggleClass("width").addClass("transitionw");
      console.log("成功w");
    });
    $(".box4-2").removeClass("height");
    $(".box4-2").removeClass("transitionh");
    /*5-1*/
    $(".item5-1").stop().removeClass("itemstatechange");
    $(".item5-1").unbind('click').click(function () {
      $(".item5-1").toggleClass("itemstatechange");
      $(".box5-2").stop().toggleClass("width").addClass("transitionw");
      console.log("成功w");
    });
    $(".box5-2").removeClass("height");
    $(".box5-2").removeClass("transitionh");
    /*6-1*/
    $(".item6-1").stop().removeClass("itemstatechange");
    $(".item6-1").unbind('click').click(function () {
      $(".item6-1").toggleClass("itemstatechange");
      $(".box6-2").stop().toggleClass("width").addClass("transitionw");
      console.log("成功w");
    });
    $(".box6-2").removeClass("height");
    $(".box6-2").removeClass("transitionh");
    /*7-1*/
    $(".item7-1").stop().removeClass("itemstatechange");
    $(".item7-1").unbind('click').click(function () {
      $(".item7-1").toggleClass("itemstatechange");
      $(".box7-2").stop().toggleClass("width").addClass("transitionw");
      console.log("成功w");
    });
    $(".box7-2").removeClass("height");
    $(".box7-2").removeClass("transitionh");

  }

}

/*載入GASP Scroll trigger */
$(document).ready(function () {
  gsap.registerPlugin(ScrollTrigger);
})
/*tv */
$(document).ready(function () {
  var rule = CSSRulePlugin.getRule("#archives::after");
  var btnbefore = CSSRulePlugin.getRule("#archives::after");

  ScrollTrigger.matchMedia({

    //min-width:到992px
    "(min-width: 992px)": function () {

      let timeLine = new gsap.timeline({
        scrollTrigger: {
          trigger: "#tvzoomin",
          pin: true,
          start: "0 60", /*前:元件開始位置 */
          end: "+=1000",
          scrub: true,
          id: "tvzoomin",
        },
      });
      timeLine.to('#archives img', 1,
        {
          scaleY: 50,
          transformOrigin: "center",
          duration: 0.3,
          ease: "elastic.out(1, 0.3)"
        });
      timeLine.to(rule, 1, {
        opacity: 1,
        duration: 0.01
      })
      timeLine.to('#archives-entry', 1,
        {
          scale: 1.7,
          transformOrigin: "center",
          ease: "power1.out",
        }, "+=1");
      timeLine.to('#entry-btn', 1, {
        display: 'block',
        opacity: 1,
        duration: 3
      })
      return function () {
        timeLine.kill();
        // other cleanup code can go here. 
      };
    },
    //min-width:768px 畫面不小於768px執行
    "(min-width: 768px) and (max-width: 991.9px)": function () {
      let timeLine = new gsap.timeline({
        scrollTrigger: {
          trigger: "#tvzoomin",
          pin: true,
          start: "0 60", /*前:元件開始位置 */
          end: "+=1000",
          scrub: true,
          id: "tvzoomin",
        },
      });
      timeLine.to('#archives img', 1,
        {
          scaleY: 50,
          transformOrigin: "center",
          duration: 0.3,
          ease: "elastic.out(1, 0.3)"
        });
      timeLine.to(rule, 1, {
        opacity: 1,
        duration: 0.01
      })
      timeLine.to('#archives-entry', 1,
        {
          scale: 2,
          transformOrigin: "center",
          ease: "power1.out",
          y: 50
        }, "+=1");
      timeLine.to('#entry-btn', 1, {
        display: 'block',
        opacity: 1,
        duration: 3,
        x: -20,
      })
      return function () {
        timeLine.kill();
      };
    },
    //min-width:576px 畫面不小於576px執行
    "(min-width: 0px) and (max-width: 767.9px)": function () {
      let timeLine = new gsap.timeline({
        scrollTrigger: {
          trigger: "#tvzoomin",
          pin: true,
          start: "0 top", /*前:元件開始位置 */
          end: "+=800",
          scrub: true,
          id: "tvzoomin",
        },
      });

      timeLine.to('#archives img', 1,  //1
        {
          scaleY: 50,
          transformOrigin: "center",
          duration: 0.3,
          ease: "elastic.out(1, 0.3)"
        });

      timeLine.to(rule, 1, {  //2
        opacity: 1,
        duration: 0.01
      });
      timeLine.to('.archives-area', 1, {
        paddingTop: 230,
        duration: 0.1,
      });
      timeLine.to('#archives-entry', 1,  //3
        {
          scale: 5,
          transformOrigin: "center",
          /*width:"100%",
          height:"70%",*/
          ease: "power1.out",
          y: 50
        }, "+=1");
      timeLine.to('#tv', 1,  //4
        {
          opacity: 0,
        }, "+=1");
      timeLine.to(rule, 1,  //5
        {
          opacity: 0,
        }, "+=1");

      timeLine.to('#archives img', 1,  //6
        {
          /*width:"100%",
         height:"50%",*/
          opacity: 0.5,
        }, "+=1");
      timeLine.to('#entry-btn', 1, {  //7
        display: 'block',
        opacity: 1,
        duration: 3
      })
      return function () {
        timeLine.kill();
        // other cleanup code can go here. 
      };
    }


  })


})


$(document).ready(function () {
  $("#entry-btn").hover(function () {
    $(".triangle").toggleClass('btn-hover');
  })
  $("#entry-btn").click(function () {
    $("#entry-btn").toggleClass('bigger');
  })

})


/*smartphone*/

$(document).ready(function () {
  ScrollTrigger.matchMedia({

    // large
    "(min-width: 992px)": function () {
      let timeLine2 = new gsap.timeline({
        scrollTrigger: {
          trigger: "#phonerotate",
          pin: true,
          start: "0 0",
          end: "+=700",
          scrub: true,
          id: "phonerotate",
        },
      });

      timeLine2.to('#smartphone1', 10,
        {
          x: 50,
          y: -60,
          opacity: 1,
          ease: "circ.inOut"
        });
      timeLine2.to('#smartphone2', 10,
        {
          x: -50,
          y: 60,
          opacity: 1,
          ease: "circ.inOut"
        }, "-=10");
      timeLine2.to('.screen', 1,
        {
          opacity: 1,
          duration: 2.5,
          ease: "power4.out"
        });
      timeLine2.to('.comment', 1,   /*comment1出現 */
        {
          opacity: 1,
          y: -120,
          height: '20%',
          duration: 2.5,
          ease: "back.out(1)"
        })
        .addLabel("comment2comeout", "+=0.001")
        .to('.comment', 1,    /*comment1向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2出現 */
          {
            opacity: 1,
            y: -120,
            height: '20%',
            duration: 0.01,
            ease: "back.out(1)"
          })
        .to('.comment', 1,   /*comment1再向上移 */
          {
            opacity: 1,
            y: -320,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment3', 1,    /*comment3出現 */
          {
            opacity: 1,
            y: -120,
            height: '20%',
            duration: 2.5,
            ease: "back.out(1)"
          })
        .to('.comment', 1,   /*comment1再向上移 */
          {
            opacity: 1,
            y: -420,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2向上移 */
          {
            opacity: 1,
            y: -320,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment3', 1,  /*comment3向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment4', 1,    /*comment4出現 */
          {
            opacity: 1,
            y: -120,
            height: '20%',
            duration: 2.5,
            ease: "back.out(1)"
          });
      timeLine2.to('#forum-btn', 5,
        {
          visibility: 'visible',
          duration: 2.5,
          ease: "power4.out"
        });
      return function () {
        timeLine2.kill();
        // other cleanup code can go here. 
      };
    },

    // medium
    "(min-width: 768px) and (max-width: 991.9px)": function () {
      let timeLine2 = new gsap.timeline({
        scrollTrigger: {
          trigger: "#phonerotate",
          pin: true,
          start: "0 0",
          end: "+=700",
          scrub: true,
          id: "phonerotate",
        },
      });
      timeLine2.to('#smartphone1', 10,
        {
          x: 20,
          y: -100,
          opacity: 1,
          ease: "circ.inOut"
        });
      timeLine2.to('#smartphone2', 10,
        {
          x: -20,
          y: 100,
          opacity: 1,
          ease: "circ.inOut"
        }, "-=10");
      timeLine2.to('.screen', 1,
        {
          opacity: 1,
          duration: 2.5,
          ease: "power4.out"
        });
      timeLine2.to('.comment', 1,   /*comment1出現 */
        {
          opacity: 1,
          y: -120,
          height: '20%',
          duration: 2.5,
          ease: "back.out(1)"
        })
        .addLabel("comment2comeout", "+=0.001")
        .to('.comment', 1,    /*comment1向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2出現 */
          {
            opacity: 1,
            y: -120,
            height: '20%',
            duration: 0.01,
            ease: "back.out(1)"
          })
        .to('.comment', 1,   /*comment1再向上移 */
          {
            opacity: 1,
            y: -320,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment3', 1,    /*comment3出現 */
          {
            opacity: 1,
            y: -120,
            height: '20%',
            duration: 2.5,
            ease: "back.out(1)"
          })
        .to('.comment', 1,   /*comment1再向上移 */
          {
            opacity: 1,
            y: -420,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2向上移 */
          {
            opacity: 1,
            y: -320,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment3', 1,  /*comment3向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment4', 1,    /*comment4出現 */
          {
            opacity: 1,
            y: -120,
            height: '20%',
            duration: 2.5,
            ease: "back.out(1)"
          });
      timeLine2.to('#forum-btn', 5,
        {
          visibility: 'visible',
          duration: 2.5,
          ease: "power4.out"
        });
      return function () {
        timeLine2.kill();
        // other cleanup code can go here. 
      };
    },

    // small
    "(min-width:576px) and (max-width: 767.9px)": function () {
      let timeLine2 = new gsap.timeline({
        scrollTrigger: {
          trigger: "#phonerotate",
          pin: true,
          start: "0 0",
          end: "+=700",
          scrub: true,
          id: "phonerotate",
        },
      });
      timeLine2.to('#smartphone1', 10,
        {
          x: 30,
          y: -100,
          opacity: 1,
          ease: "circ.inOut"
        });
      timeLine2.to('#smartphone2', 10,
        {
          x: -30,
          y: 100,
          opacity: 1,
          ease: "circ.inOut"
        }, "-=10");
      timeLine2.to('.screen', 8,
        {
          opacity: 1,
          duration: 2.5,
          ease: "power4.out"
        });
      timeLine2.to('.comment', 1,   /*comment1出現 */
        {
          opacity: 1,
          y: -120,
          height: '20%',
          duration: 2.5,
          ease: "back.out(1)"
        })
        .addLabel("comment2comeout", "+=0.001")
        .to('.comment', 1,    /*comment1向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2出現 */
          {
            opacity: 1,
            y: -120,
            height: '20%',
            duration: 0.01,
            ease: "back.out(1)"
          })
        .to('.comment', 1,   /*comment1再向上移 */
          {
            opacity: 1,
            y: -320,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment3', 1,    /*comment3出現 */
          {
            opacity: 1,
            y: -120,
            height: '20%',
            duration: 2.5,
            ease: "back.out(1)"
          })
        .to('.comment', 1,   /*comment1再向上移 */
          {
            opacity: 1,
            y: -420,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2向上移 */
          {
            opacity: 1,
            y: -320,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment3', 1,  /*comment3向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment4', 1,    /*comment4出現 */
          {
            opacity: 1,
            y: -120,
            height: '20%',
            duration: 2.5,
            ease: "back.out(1)"
          });
      timeLine2.to('#forum-btn', 5,
        {
          visibility: 'visible',
          duration: 2.5,
          ease: "power4.out"
        });
      return function () {
        timeLine2.kill();
        // other cleanup code can go here. 
      };
    },

    "(min-width:450px) and (max-width:575.9px)": function () {
      let timeLine2 = new gsap.timeline({
        scrollTrigger: {
          trigger: "#phonerotate",
          pin: true,
          start: "0 0",
          end: "+=700",
          scrub: true,
          id: "phonerotate",
        },
      });
      timeLine2.to('#smartphone1', 10,
        {
          x: 30,
          y: -100,
          opacity: 1,
          ease: "circ.inOut"
        });
      timeLine2.to('#smartphone2', 10,
        {
          x: -30,
          y: 100,
          opacity: 1,
          ease: "circ.inOut"
        }, "-=10");
      timeLine2.to('.screen', 8,
        {
          opacity: 1,
          duration: 2.5,
          ease: "power4.out"
        });
      timeLine2.to('.comment', 1,   /*comment1出現 */
        {
          opacity: 1,
          y: -120,
          height: '20%',
          duration: 2.5,
          ease: "back.out(1)"
        })
        .addLabel("comment2comeout", "+=0.001")
        .to('.comment', 1,    /*comment1向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2出現 */
          {
            opacity: 1,
            y: -120,
            height: '20%',
            duration: 0.01,
            ease: "back.out(1)"
          })
        .to('.comment', 1,   /*comment1再向上移 */
          {
            opacity: 1,
            y: -320,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment3', 1,    /*comment3出現 */
          {
            opacity: 1,
            y: -120,
            height: '20%',
            duration: 2.5,
            ease: "back.out(1)"
          })
        .to('.comment', 1,   /*comment1再向上移 */
          {
            opacity: 1,
            y: -420,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2向上移 */
          {
            opacity: 1,
            y: -320,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment3', 1,  /*comment3向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment4', 1,    /*comment4出現 */
          {
            opacity: 1,
            y: -120,
            height: '20%',
            duration: 2.5,
            ease: "back.out(1)"
          });
      timeLine2.to('#forum-btn', 5,
        {
          visibility: 'visible',
          duration: 2.5,
          ease: "power4.out"
        });
      return function () {
        timeLine2.kill();
        // other cleanup code can go here. 
      };
    },
    "(min-width:400px) and (max-width:449.9px)": function () {
      let timeLine2 = new gsap.timeline({
        scrollTrigger: {
          trigger: "#phonerotate",
          pin: true,
          start: "0 0",
          end: "+=700",
          scrub: true,
          id: "phonerotate",
        },
      });
      timeLine2.to('#smartphone1', 10,
        {
          x: 30,
          y: -100,
          opacity: 1,
          ease: "circ.inOut"
        });
      timeLine2.to('#smartphone2', 10,
        {
          x: -30,
          y: 100,
          opacity: 1,
          ease: "circ.inOut"
        }, "-=10");
      timeLine2.to('.screen', 8,
        {
          opacity: 1,
          duration: 2.5,
          ease: "power4.out"
        });
      timeLine2.to('.comment', 1,   /*comment1出現 */
        {
          opacity: 1,
          y: -80,
          height: '20%',
          duration: 2.5,
          ease: "back.out(1)"
        })
        .addLabel("comment2comeout", "+=0.001")
        .to('.comment', 1,    /*comment1向上移 */
          {
            opacity: 1,
            y: -140,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2出現 */
          {
            opacity: 1,
            y: -80,
            height: '20%',
            duration: 0.01,
            ease: "back.out(1)"
          })
        .to('.comment', 1,   /*comment1再向上移 */
          {
            opacity: 1,
            y: -200,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2向上移 */
          {
            opacity: 1,
            y: -140,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment3', 1,    /*comment3出現 */
          {
            opacity: 1,
            y: -80,
            height: '20%',
            duration: 2.5,
            ease: "back.out(1)"
          })
        .to('.comment', 1,   /*comment1再向上移 */
          {
            opacity: 1,
            y: -260,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2向上移 */
          {
            opacity: 1,
            y: -200,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment3', 1,  /*comment3向上移 */
          {
            opacity: 1,
            y: -140,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment4', 1,    /*comment4出現 */
          {
            opacity: 1,
            y: -80,
            height: '20%',
            duration: 2.5,
            ease: "back.out(1)"
          });
      timeLine2.to('#forum-btn', 5,
        {
          visibility: 'visible',
          duration: 2.5,
          ease: "power4.out"
        });
      return function () {
        timeLine2.kill();
        // other cleanup code can go here. 
      };
    },
    "(max-width:399.9px)": function () {
      let timeLine2 = new gsap.timeline({
        scrollTrigger: {
          trigger: "#phonerotate",
          pin: true,
          start: "0 0",
          end: "+=700",
          scrub: true,
          id: "phonerotate",
        },
      });
      timeLine2.to('#smartphone1', 10,
        {
          x: 30,
          y: -100,
          opacity: 1,
          ease: "circ.inOut"
        });
      timeLine2.to('#smartphone2', 10,
        {
          x: -30,
          y: 100,
          opacity: 1,
          ease: "circ.inOut"
        }, "-=10");
      timeLine2.to('.screen', 8,
        {
          opacity: 1,
          duration: 2.5,
          ease: "power4.out"
        });
      timeLine2.to('.comment', 1,   /*comment1出現 */
        {
          opacity: 1,
          y: -70,
          height: '20%',
          duration: 2.5,
          ease: "back.out(1)"
        })
        .addLabel("comment2comeout", "+=0.001")
        .to('.comment', 1,    /*comment1向上移 */
          {
            opacity: 1,
            y: -120,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2出現 */
          {
            opacity: 1,
            y: -70,
            height: '20%',
            duration: 0.01,
            ease: "back.out(1)"
          })
        .to('.comment', 1,   /*comment1再向上移 */
          {
            opacity: 1,
            y: -170,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2向上移 */
          {
            opacity: 1,
            y: -120,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment3', 1,    /*comment3出現 */
          {
            opacity: 1,
            y: -70,
            height: '20%',
            duration: 2.5,
            ease: "back.out(1)"
          })
        .to('.comment', 1,   /*comment1再向上移 */
          {
            opacity: 1,
            y: -220,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment2', 1,  /*comment2向上移 */
          {
            opacity: 1,
            y: -170,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment3', 1,  /*comment3向上移 */
          {
            opacity: 1,
            y: -120,
            duration: 0.01,
            ease: "power4.out"
          })
        .to('.comment4', 1,    /*comment4出現 */
          {
            opacity: 1,
            y: -70,
            height: '20%',
            duration: 2.5,
            ease: "back.out(1)"
          });
      timeLine2.to('#forum-btn', 5,
        {
          visibility: 'visible',
          y: 10,
          duration: 2.5,
          ease: "power4.out"
        });
      return function () {
        timeLine2.kill();
        // other cleanup code can go here. 
      };
    }


  });

})

$(document).ready(function () {
  $("#forum-btn").hover(function () {
    $(".triangle-forum").toggleClass('btn-hover2');
  })
})
$(document).ready(function () {
  ScrollTrigger.matchMedia({

    // large
    "(min-width: 992px)": function () {
      let timeLine3 = new gsap.timeline({
        scrollTrigger: {
          trigger: "#windowcomeout",
          pin: true,
          start: "0 0",
          end: "+=800",
          scrub: true,
          id: "windowcomeout",
          invalidateOnRefresh: true,
        },
      });
      timeLine3.scrollTrigger.refresh();
      timeLine3.to('.popup1', 1,
        {
          display: 'block',
        })
        .to('.popup2', 1,
          {
            display: 'block',
          })
        .to('.popup3', 1,
          {
            display: 'block',
          })
        .to('.popup4', 1,
          {
            display: 'block',
          })
        .to('.popup5', 1,
          {
            display: 'block',
          });
      return function () {
        timeLine3.kill();
        // other cleanup code can go here. 
      };
    },

    // medium
    "(min-width: 768px) and (max-width: 991.9px)": function () {
      let timeLine3 = new gsap.timeline({
        scrollTrigger: {
          trigger: "#windowcomeout",
          pin: true,
          start: "0 0",
          end: "+=800",
          scrub: true,
          id: "windowcomeout",
          invalidateOnRefresh: true,
        },
      });
      timeLine3.scrollTrigger.refresh();
      timeLine3.to('.popup1', 1,
        {
          display: 'block',
        })
        .to('.popup2', 1,
          {
            display: 'block',
          })
        .to('.popup3', 1,
          {
            display: 'block',
          })
        .to('.popup4', 1,
          {
            display: 'block',
          })
        .to('.popup5', 1,
          {
            display: 'block',
          });
      return function () {
        timeLine3.kill();
        // other cleanup code can go here. 
      };
    },

    // small
    "(min-width: 576px) and (max-width: 767.9px)": function () {
      /*window */

      // set Timeline
      let timeLine3 = new gsap.timeline({
        scrollTrigger: {
          trigger: "#windowcomeout",
          pin: true,
          start: "0 0",
          end: "+=800",
          scrub: true,
          id: "windowcomeout",
          invalidateOnRefresh: true,
        },
      });
      timeLine3.scrollTrigger.refresh();
      timeLine3.to('.popup1', 1,
        {
          display: 'block',
        })
        .to('.popup2', 1,
          {
            display: 'block',
          })
        .to('.popup3', 1,
          {
            display: 'block',
          })
        .to('.popup4', 1,
          {
            display: 'block',
          })
        .to('.popup5', 1,
          {
            display: 'block',
          });
      return function () {
        timeLine3.kill();
        // other cleanup code can go here. 
      };
    },
    "(min-width: 0px) and (max-width: 575.9px)": function () {
      /*window */

      // set Timeline
      let timeLine3 = new gsap.timeline({
        scrollTrigger: {
          trigger: "#windowcomeout",
          pin: true,
          start: "0 0",
          end: "+=800",
          scrub: true,
          id: "windowcomeout",
          invalidateOnRefresh: true,
        },
      });
      timeLine3.scrollTrigger.refresh();
      timeLine3.to('.popup1', 1,
        {
          display: 'block',
        })
        .to('.popup2', 1,
          {
            display: 'block',
          })
        .to('.popup3', 1,
          {
            display: 'block',
          })
        .to('.popup4', 1,
          {
            display: 'block',
          })
        .to('.popup5', 1,
          {
            display: 'block',
          });
      return function () {
        timeLine3.kill();
        // other cleanup code can go here. 
      };
    }

  });
})


$(document).ready(function () {
  $(".fortunate-btn").hover(function () {
    $(".triangle-forum").toggleClass('btn-hover2');
  })
})
