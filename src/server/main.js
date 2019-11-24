define(['jquery'], function($) {
    
    function getbannerData(){
        return $.ajax("../mock/banner.json")
    }
    function getGoodsData(type){
        return $.ajax(`../mock/${type}.json`)
    }

    function getDetailData(type,goodsId){
        var proimse = new Promise (function(resolve,reject){
            $.ajax(`../mock/${type}.json`).then((res)=>{    
                var good_list = res.goods_list;
                var result = good_list.filter(function(v,i){
                    return v.goodsId == goodsId
                })
                resolve(result[0])
            })
        })
        return proimse
    }
    return {
        getbannerData,
        getGoodsData,
        getDetailData
    }
});