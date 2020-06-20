$('#select').on('click', function () {
    $(this).toggleClass('active');
});

$(document).on('click', '#select li ul li[data-selid]', function () {
    var selid = $(this).attr('data-selid');
    var texid = $(this).text();

    $('#seltext').text(texid);
    $('#quantity').val(selid);

    $('#pro_itms li').removeClass('active_p');
    $('[data-activatep="' + selid + '"]').addClass('active_p');
});


$(document).on('click', '[data-activatep]', function () {
    var that = $(this);
    var activate = that.data('activatep');
    var dtstring = '[data-selid="' + activate + '"]';

    $('#pro_itms li').removeClass('active_p');

    $(this).addClass('active_p');

    $('#seltext').text($(dtstring).text());
    $('#quantity').val(activate);
});