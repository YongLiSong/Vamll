define(['jquery','../server/main','./modules/banner','./modules/goods'], function($,{ getbannerData,getGoodsData },{ bannerInit,bannerMenuInit ,bannerPrve,bannerNext,bannerAuto,bannerStop},{ goodsInit }) { 
    // username = window.location.search.match(/username=([^&]+)/)[1] ?window.location.search.match(/username=([^&]+)/)[1] : "";
    getbannerData().then(function(res){
        bannerInit(res)
    })
    getGoodsData('phone').then(function(res){
        goodsInit('phone',res)
    })
    getGoodsData('book').then(function(res){
        goodsInit('book',res)
    })
    getGoodsData('pad').then(function(res){
        goodsInit('pad',res)
    })
    bannerPrve();
    bannerNext();
    bannerAuto();
    bannerStop();
    var listInfo;
    $(".banner_menu li").hover(function(){
         listInfo = $(this).attr('name');
        $(".banner_menu_list").removeClass('dis')
        getGoodsData(`${listInfo}`).then(function(res){
            bannerMenuInit(`${listInfo}`,res);
            let $banner_menu_list = $('.banner_menu_list_content li')
            $(".banner_menu_list").css('width',`${250 * Math.ceil($banner_menu_list.length/5)}`).removeClass('dis')
        
        })
    }) 
    $(".banner_menu_list").on('mouseleave',function(){
        $(this).addClass('dis')
    });

    let indexUserName = window.location.search.match(/username=([^&]+)/);

    
});

