$(function(){
  var FullWindow = function($){
    var items,
        itemsCount,
        nextButton,
        prevButton,
        count,
        windowHeight,
        windowWidth,
        // 初期化
        init = function(){
          items = $('.FullWindow__item');
          itemsCount = items.length;
          nextButton = $('.FullWindow__button--next');
          prevButton = $('.FullWindow__button--prev');
          count = 1,
          windowHeight = $(window).height()
          windowWidth = $(window).width(),
          items.css({
            'height': windowHeight,
            'width':windowWidth
          });

          // set
          countCheck();
          nextButtonClick();
          prevButtonClick();
          smoothScroll();
        },
        countCheck = function(){
          if(count <= 1){
            prevButton.hide();
          }else if(count == itemsCount){
            nextButton.hide();
          }else{
            prevButton.show();
            nextButton.show();
          }
        },
        nextButtonClick = function(){
          nextButton.on('click', function(){
            count++;
            countCheck();
            $(this).attr('href', '#' + parseInt(count,10) );
          });
        },
        prevButtonClick = function(){
          prevButton.on('click', function(){
            count--;
            countCheck();
            $(this).attr('href', '#' + parseInt(count,10) );
          });
        },
        smoothScroll = function(){
          $('a').not(".noScroll").click(function(){
                speed = 400,
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
        // initをセットする
        return init;
  }(jQuery);


});

