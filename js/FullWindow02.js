$(function(){

  /*
  #1 - 1モジュールずつ、画面サイズに合わせる
  */


  /*
  #2 - 次へボタンを押したら1画面分戻る
  */


  /*
  #3 - 前へボタンを押したら1画面分戻る
  */

  /*
  #4 - 最初のモジュールでは、前へボタンを非表示にする
  */


  /*
  #5 - 最後のモジュールでは、次へボタンを非表示にする
  */


/*------------------------------------------------------------------------------------*/

  // 通常パターン②
  var items = $('.FullWindow__item');
  var itemsCount = items.length;
  var nextButton = $('.FullWindow__button--next');
  var prevButton = $('.FullWindow__button--prev');
  var count = 1;
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();

  items.css({
    'height': windowHeight,
    'width':windowWidth
  });

  var countCheck = function(){
    if(count <= 1){
      prevButton.hide();
    }else if(count == itemsCount-1){
      nextButton.hide();
    }else{
      prevButton.show();
      nextButton.show();
    }
  };

  var nextButtonClick = function(){
    nextButton.on('click', function(){
      count++;
      countCheck();
      $(this).attr('href', '#' + parseInt(count,10) );
    });
  };

  var prevButtonClick = function(){
    prevButton.on('click', function(){
      count--;
      countCheck();
      $(this).attr('href', '#' + parseInt(count,10) );
    });
  };

  var smoothScroll = function(){
    $('a').not(".noScroll").click(function() {
      var speed = 400,
          href = $(this).attr("href"),
          target = $(href == "#" || href == "" ? 'html' : href),
          position = target.offset().top,
          body = 'body';
      $(body).animate({
          scrollTop: position
      }, speed, 'swing');
      return false;
    });
  };
  // set
  countCheck();
  nextButtonClick();
  prevButtonClick();
  smoothScroll();
});
