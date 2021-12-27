$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>766) {
            $("header").addClass("fixed");
        }else{
            $("header").removeClass("fixed");
        }
    });
});