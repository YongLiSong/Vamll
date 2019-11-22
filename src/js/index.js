define(['jquery','../server/main','./modules/banner','./modules/goods'], function($,{ getbannerData,getGoodsData },{ bannerInit,bannerMenuInit },{ goodsInit }) { 
    
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
    
    $(".banner_menu").on('mouseenter','li',function(){
         aaa = $(this).find('h2').html();
        getGoodsData(`${aaa}`).then(function(res){
            bannerMenuInit(`${aaa}`,res)
        })

    }) 
    var aaa;

    
});

