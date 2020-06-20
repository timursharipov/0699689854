/**
 * Created by Alexei Seremet on 1/6/15.
 */

// $(document).ready(function() {



//     if (answer){
//         answer.hide();
//     }
//     upTimer();
// });

// -------------------------
// Plugin ScrollTo, <button data-goto="#name">text</button>
// -------------------------
(function scrollTo() {
    $('[data-goto]').click(function(event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $($(this).data('goto')).offset().top}, 400);
    });
})();



// -------------------------
// Pgugin Cownt Down, <span data-timerHH>00</span>, <span data-timerMM>00</span>, <span data-timerSS>00</span>
// -------------------------
var now = new Date();

var hour_s = 24-now.getHours();
var minutes_s = 60-now.getMinutes();
var seconds_s = 60-now.getSeconds();

function upTimer() {
    seconds_s--;
    if (seconds_s == -01) {
        seconds_s = 59;
        minutes_s = minutes_s - 1;
    } else {
        minutes_s = minutes_s
    }
    if (seconds_s <= 9) {
        seconds_s = "0" + seconds_s
    }
    if (minutes_s == '00' && seconds_s == '00') {
        minutes_s = 20;
        seconds_s = 00;
    }
    minutes_sh = minutes_s;
    if (minutes_s < 10) minutes_sh = '0' + minutes_s;

    if ($('[data-timer]')) {
        $('[data-timerHH]').text(hour_s);
        $('[data-timerMM]').text(minutes_sh);
        $('[data-timerSS]').text(seconds_s);
    }

    setTimeout('upTimer()', 1000);
}
(function(UI){
    var message;
    var messageRu = '*************************************************************** \n' +
        'ВНИМАНИЕ!!! СКИДКА 50%! \n' +
        '*************************************************************** \n' +
        'Только СЕЙЧАС в течение дня у Вас есть шанс получить скидку 50%!';

    var messageRo = '*************************************************************** \n' +
        'PROMOTIE!!! REDUCERI 50%! \n' +
        '*************************************************************** \n' +
        'Doar astazi ai reducere la preturi, comanda acum!';

    // if (container.hasClass('lang-ro')) {
    //     message = messageRo;
    // } else if (container.hasClass('lang-ru')) {
    //     message = messageRu;
    // }
    UI.preventNavigation = false;
    UI.message =  message;
    UI.browser = {
        mozilla : /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase()) && ! /msie/.test(navigator.userAgent.toLowerCase()),
        webkit : /webkit/.test(navigator.userAgent.toLowerCase()),
        opera : /opera/.test(navigator.userAgent.toLowerCase()),
        msie : /msie/.test(navigator.userAgent.toLowerCase())
    };
    UI.Loader = null;
    UI.init = function() {
        $(window).bind('beforeunload', function(event) {
            if (UI.preventNavigation) {
                UI.preventNavigation = false;
                if (UI.browser.mozilla || UI.browser.msie) {
                    alert(UI.message);
                }
                return UI.message;
            }
        });
    };
    $(document).ready(function(){
        UI.init();

        $(document).on('click', 'a', function(event){
            UI.preventNavigation = false;
        });

    });
})(window.UI || (window.UI={}));