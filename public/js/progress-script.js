$(document).ready(function () {
    $.each($('.progress'), function (indexInArray, valueOfElement) {
        value = $(this).data('progress');
        $(this).animate({
            'width' : value + '%'
        },'slow');     
    });
});