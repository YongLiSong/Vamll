define(['jquery'],function($){

    var username = window.location.search.match(/username=([^&]+)/)[1]
    function addCartStroage(data){
        console.log(data)
        var cartList = getCartStroage() || [];
        console.log(cartList)
        var flag = true;
        var index = 0;
        for(var i =0 ;i<cartList.length;i++){
            if(cartList[i].goodsId == data.goodsId && cartList[i].goodsColor == data.goodsColor){
                flag = false;
                index = i;
            }
        }

        if(flag){ //新增
            cartList.push(data);
            setCartStroage(cartList)
        }else{ //累加
            cartList[index].goodsNum += data.goodsNum;
            setCartStroage(cartList)
        }
    }
    function setCartStroage(data){
        window.localStorage.setItem(`${username}`,JSON.stringify(data) )
    }

    function getCartStroage(){
        return JSON.parse(window.localStorage.getItem(`${username}`));
    }

    return {
        addCartStroage,
        setCartStroage,
        getCartStroage
    }
})