(function($){
    "use strict"
    //inicializar contador
    $('.contar').counterUp({
        time: 1000,
        delay: 10
    });

    var $doc = $('html,body');
    $('scroll-page').click(function(){
        $doc.animate({
            scrollTop: $($.attr(this,'href')).offsset().top
        },500);
        return false;
    });

})(jQuery);