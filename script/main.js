$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top-70+"px"});
                return false;
        });
});

$(window).scroll(function(){
        if($(window).scrollTop > 10){
                $("#scroll-top").css("display": "block")
        }
});
