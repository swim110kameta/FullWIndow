$(function(){

  /* #1 - 1モジュールずつ、画面サイズに合わせる */
  var module = $('.FullWindow__item');
  var windowHeight = $(window).height();
  module.css('height', windowHeight);

  var nextButton = $('.FullWindow__button--next');
  var prevButton = $('.FullWindow__button--prev');
  var count = 1;

  if( count <= 1){
    prevButton.hide();
  }else if(count == module.length){
    nextButton.hide();
  }else{
    prevButton.show();
    nextButton.show();
  }


  /* #2 - 次へボタンを押したら1画面分戻る */
  nextButton.on('click',function(){
    count = count + 1;
    if( count <= 1){
      prevButton.hide();
    }else if(count == module.length){
      nextButton.hide();
    }else{
      prevButton.show();
      nextButton.show();
    }
    $(this).attr('href','#' + count);
    console.log(count);
  });
  /* #3 - 前へボタンを押したら1画面分戻る */
  prevButton.on('click',function(){
    count = count - 1 ;
    if( count <= 1){
      prevButton.hide();
    }else if(count == module.length){
      nextButton.hide();
    }else{
      prevButton.show();
      nextButton.show();
    }
    $(this).attr('href', '#' + count);
    console.log(count);
  });

  /* #4 - 最初のモジュールでは、前へボタンを非表示にする */
  /* #5 - 最後のモジュールでは、次へボタンを非表示にする */


/*------------------------------------------------------------------------------------*/

  // 通常パターン
  // var items = $('.FullWindow__item');
  // var itemsCount = items.length;
  // var nextButton = $('.FullWindow__button--next');
  // var prevButton = $('.FullWindow__button--prev');
  // var count = 1;
  // var windowHeight = $(window).height();
  // var windowWidth = $(window).width();

  // items.css({
  //   'height': windowHeight,
  //   'width':windowWidth
  // });
  // console.log(count);

  // if(count <= 1){
  //   prevButton.hide();
  // }else if(count == itemsCount-1){
  //   nextButton.hide();
  // }else{
  //   prevButton.show();
  //   nextButton.show();
  // }

  // nextButton.on('click', function(){
  //   count++;
  //   if(count <= 1){
  //     prevButton.hide();
  //   }else if(count == itemsCount){
  //     nextButton.hide();
  //   }else{
  //     prevButton.show();
  //     nextButton.show();
  //   }
  //   $(this).attr('href', '#' + parseInt(count,10) );
  // });

  // prevButton.on('click', function(){
  //   count--;
  //   if(count <= 1){
  //     prevButton.hide();
  //   }else if(count == itemsCount){
  //     nextButton.hide();
  //   }else{
  //     prevButton.show();
  //     nextButton.show();
  //   }
  //   $(this).attr('href', '#' + parseInt(count,10) );
  // });
  // $('a').not(".noScroll").click(function() {
  //   var speed = 400,
  //       href = $(this).attr("href"),
  //       target = $(href == "#" || href == "" ? 'html' : href),
  //       position = target.offset().top,
  //       body = 'body';
  //   $(body).animate({
  //       scrollTop: position
  //   }, speed, 'swing');
  //   return false;
  // });



  var Hogehoge = function(HOGE){

  alert(HOGE);

  };

  // 実行する
  Hogehoge('これは引数だよ');


});
