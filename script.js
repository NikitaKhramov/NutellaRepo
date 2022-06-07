$(function () {

    let hidden__poster = $('#hidden__poster'),
        poster__first = $('#poster__first'),
        close_x = $('#close__x');

    $(window).scroll(function() {
    var hT = $('#main__img').offset().top,
        hH = $('#main__img').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
            $(hidden__poster).fadeIn(1500).css('display', 'flex');
            $(poster__first).fadeIn(1800);
        }
    })
    /* close poster */
    $(close_x).on('click touch', function (event) {
        $(hidden__poster).fadeIn(1000).css('display', 'none');
        event.preventDefault();
        event.stopPropagation();
    });

});

$(function () {

    let hidden__poster = $('#hidden__poster2'),
        poster__first = $('#poster__first2'),
        close_x = $('#close__x2');

    $(window).scroll(function() {
        var hT = $('#main__img2').offset().top,
            hH = $('#main__img2').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            $(hidden__poster).fadeIn(1500).css('display', 'flex');
            $(poster__first).fadeIn(1800);
        }
    })

    /* close poster */
    $(close_x).on('click touch', function (event) {
        $(hidden__poster).fadeIn(1000).css('display', 'none');
        event.preventDefault();
        event.stopPropagation();
    });

});

$(function () {

    let hidden__poster = $('#hidden__poster3'),
        poster__first = $('#poster__first3'),
        close_x = $('#close__x3');
        
    $(window).scroll(function() {
        var hT = $('#main__img3').offset().top,
            hH = $('#main__img3').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            $(hidden__poster).fadeIn(1500).css('display', 'flex');
            $(poster__first).fadeIn(1800);
        }
    })
    /* close poster */
    $(close_x).on('click touch', function (event) {
        $(hidden__poster).fadeIn(1000).css('display', 'none');
        event.preventDefault();
        event.stopPropagation();
    });

});
$(function () {

    let hidden__poster = $('#hidden__poster4'),
        poster__first = $('#poster__first4'),
        close_x = $('#close__x4');
        
    $(window).scroll(function() {
        var hT = $('#main__img4').offset().top,
            hH = $('#main__img4').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS > (hT+hH-wH)){
            $(hidden__poster).fadeIn(1500).css('display', 'flex');
            $(poster__first).fadeIn(1800);
        }
    })
    /* close poster */
    $(close_x).on('click touch', function (event) {
        $(hidden__poster).fadeIn(1000).css('display', 'none');
        event.preventDefault();
        event.stopPropagation();
    });

});