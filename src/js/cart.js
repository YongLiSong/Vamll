define(['jquery', 'modules/cartStroage'], function ($, { setCartStroage, getCartStroage }) {
    var username = window.location.search.match(/username=([^&]+)/)[1]
    cartInfo();
    var cart_list = $('.cartListBody').find('li');
    cartBind();
    var carList;
    var $ul;
    cartDel();

    function cartInfo() {
        carList = getCartStroage() || [];
        $ul = $('.cartListBody').find('ul');
        let tmp = `
            ${
            carList.map((v, i) => {
                return `
                <li>
                    <div class="checkAll">
                        ${v.goodsChecked ? `<input type="checkbox" checked>` : `<input type="checkbox">`}
                        <img src="${v.goodsImg[0]}" alt="">
                    </div>
                    <div>${v.goodsName}(${v.goodsColor})</div>
                    <div class="price">¥${v.goodsPrice}</div>
                    <div>${v.goodsNum}</div>
                    <div class="priceAll">¥${v.goodsPrice * v.goodsNum}.00</div>
                    <div class="det">
                        <a href="javascript:;">删除订单</a>
                    </div>
                </li>
                    `
            }).join('')
            }
        `
        $ul.html(tmp)
        var checkList = $ul.find('input[type="checkbox"]');
        var allFlag = true;
        var computedNumber = 0;
        var computedPrice = 0;
        checkList.each(function (i, elem) {
            if ($(elem).prop('checked') == false) {
                allFlag = false
            } else {
                computedNumber += carList[i].goodsNum;
                computedPrice = carList[i].goodsPrice;
            }
            console.log(allFlag)
        });
        checkAllChecked(allFlag);
        cartComputedPrice(computedNumber, computedPrice);
    }
    function checkAllChecked(allFlag) {
        $('.headCheckAll input').prop('checked', allFlag)
    }
    function cartComputedPrice(computedNumber, computedPrice) {
        var tmp = `
        <p>总计:¥${computedPrice * computedNumber}.00</p>
        <p>已选择${computedNumber}件商品</p>
        `;
        $('.cart_computed_price').html(tmp)
    };
    function cartBind() {
        $ul.on('click', 'li input[type="checkbox"]', function () {
            var index = $(this).closest('li').index()
            console.log(11111)
            carList[index].goodsChecked = $(this).prop('checked');
            setCartStroage(carList);
            cartInfo();
        })
    };
    //删除购物车内容
    function cartDel(){
        $ul.on('click','li .det',function(){
            let index = $(this).closest('li').index()
            let stroage = window.localStorage.getItem(`${username}`);
            let carList = JSON.parse(stroage);
            carList.splice(index,1);
            setCartStroage(carList);
            cartInfo();
        })
    }
}); 