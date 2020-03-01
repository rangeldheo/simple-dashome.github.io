$(document).ready(function () {
    $.each($('.progress'), function () {
        let value = $(this).data('progress');
        $(this).animate({
            'width': value + '%'
        }, 'slow');
    });
    $.each($('.item-bar'), function () {
        let range = $('.verticalBars').data('range');
        let multiple = $('.verticalBars').height();
        let value = $(this).data('value');
        let height = (value * 100) / range;       
        $(this).animate({
            'height': height + '%'
        }, 'slow');
    });
});