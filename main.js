var $li = $('nav li').click(function() {
    $li.removeClass('current');
    $(this).addClass('current');
});