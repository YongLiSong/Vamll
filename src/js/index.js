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


    
    var listInfo;
    $(".banner_menu li").hover(function(){
         listInfo = $(this).find('h2').html();
         let $banner_menu_list = $('.banner_menu_list_content li')
        $(".banner_menu_list").css('width',`${250 * Math.ceil($banner_menu_list.length/5)}`).removeClass('dis')
        getGoodsData(`${listInfo}`).then(function(res){
            bannerMenuInit(`${listInfo}`,res)
        })
    }) 
    // $(".banner_menu").on('mouseleave','li',function(){
    //      listInfo = $(this).find('h2').html();
    //     $(".banner_menu_list").addClass('dis')
    // })
    // $(".banner_menu_list").on('mouseenter',function(){
    //     $(this).removeClass('dis')
    // }) 
    // $(".banner_menu_list").on('mouseleave',function(){
    //     $(this).addClass('dis')
    // })     
});

