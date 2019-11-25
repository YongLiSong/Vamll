define(['jquery'],function($){

    function addCartStroage(data,cb){
        console.log(data)
        var cartList = getCartStroage() || [];
        console.log(cartList)
        var flag = true;
        var index = -1;
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
        cb()
    }

    function setCartStroage(data){
        window.localStorage.setItem('cart',JSON.stringify(data) )
    }

    function getCartStroage(){
        return JSON.parse(window.localStorage.getItem('cart'))
    }

    return {
        addCartStroage,
        setCartStroage,
        getCartStroage
    }
})