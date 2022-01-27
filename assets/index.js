$('.sub-menu ul').hide();
$('nav li').hover(
    function () {
        $('ul', this).stop().slideDown(300);
    },
    function () {
        $('ul', this).stop().slideUp(200);
    },
    $('nav li').hover( function(){
        $(this).find('i').toggleClass('fa-angle-down fa-angle-up')
    })
);
