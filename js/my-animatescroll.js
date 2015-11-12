$(document).ready(function () {

    $(window).scroll(function() {

        var verticalScroll = $(this).scrollTop();
            
        if(verticalScroll >= 20) {
            
            $('.navbar-default').addClass('bg-color');
        }

    });
});