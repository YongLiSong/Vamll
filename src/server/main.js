define(['jquery'], function($) {
    
    function getbannerData(){
        return $.ajax("../mock/banner.json")
    }
    function getGoodsData(type){
        return $.ajax(`../mock/${type}.json`)
    }
    return {
        getbannerData,
        getGoodsData
    }
});