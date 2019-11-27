define([
    'jquery',
], function($) {
    lazyload()
    function lazyload(){
        let docT = $(document).scrollTop();
        let winH = $(window).height();
        $('img').each(function(i,elemt){
            if(($(elemt)).offset().top < winH + docT){
                var $src = $(elemt).attr('data-src');
                $(elemt).attr('src',$src);
            }
        })
    }

    return{
        lazyload
    }
});