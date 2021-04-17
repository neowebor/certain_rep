$(function() {
    $("#c-number").mask ('+38 (099) 999 9999?9')
});

$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>100) {
            $("header").addClass("fixed");
        }else{
            $("header").removeClass("fixed");
        }
    });
});