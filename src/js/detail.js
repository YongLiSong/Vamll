define(["jquery", "../server/main" ,"./modules/detailinfo","./modules/CartStroage"], function ($, { getDetailData },{detailInfo,glassbig},{addCartStroage}) {

    let type = window.location.search.match(/type=([^&]+)/)[1];
    let id = window.location.search.match(/id=([^&]+)/)[1]

    getDetailData(type, id).then((res) => {
        detailInfo(res);
        glassbig();
        chooseColor();
        amount();
        getCartData(res)
    });

    //详情页，商品颜色选择
    function chooseColor(){
        let colorlist = $('.colorchose ul li');
        colorlist.on('click',function() {
            $(this).attr('class','active').siblings().attr('class','');
        })
    }
    //详情页，商品数量选择
    function amount(){
        let $inputvalue = $('.goodnum input')
        let num = 1;
        let $plus = $('.plus')
        let $minus = $('.minus')
        $plus.on('click',function(){
            ++num;
            $inputvalue.val(`${num}`);
        });
        $minus.on('click',function(){
            let $inputvalue = $('.goodnum input')
            if(num == 1){
                num = 1;
            }else{
                --num;
            }
            $inputvalue.val(`${num}`);
        })
    }
    function getCartData(res){
        $('.goodInCart').find('a').on('click',function(){
            let result ={
                goodsColor:$('.colorchose ul').find('li').filter('.active').html(),
                goodsPrice:res.goodsPrice,
                goodsName:res.goodsName,
                goodsNum:Number($('.goodnum').find('input').val()),
                goodsId:res.goodsId,
                goodsImg : res.goodsImg,
                goodsChecked:true
            }
            alert('添加成功')
            addCartStroage(result)

        })
    }
 
});