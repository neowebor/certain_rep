$(function(){
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        if($(window).scrollTop()>766) {
            $("header").addClass("fixed");
        }else{
            $("header").removeClass("fixed");
        }
    });
});