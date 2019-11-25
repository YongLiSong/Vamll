define(['jquery', 'modules/cartStroage'], function ($, { setCartStroage, getCartStroage }) {
    cartInfo();
    var cart_list = $('.cartListBody').find('li');
    cartBind();
    var carList;

    function cartInfo() {
        carList = getCartStroage() || [];
        console.log(111111111)
        let $ul = $('.cartListBody').find('ul')
        let tmp = `
            ${
            carList.map((v, i) => {
                return `
                <li>
                    <div class="checkAll">
                        ${v.goodsChecked ? `<input type="checkbox" checked>` : `<input type="checkbox">`}
                        <img src="${v.goodsImg}" alt="">
                    </div>
                    <div>${v.goodsName}(${v.goodsColor})</div>
                    <div class="price">¥${v.goodsPrice}</div>
                    <div>${v.goodsNum}</div>
                    <div class="priceAll">¥${v.goodsPrice * v.goodsNum}.00</div>
                    <div>操作</div>
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
            console.log(2222222)

            if ($(elem).prop('checked') == false) {
                allFlag = false
            } else {
                computedNumber += carList[i].goodsNum;
                computedPrice = carList[i].goodsPrice;
            }
        });
        checkAllChecked(allFlag);
        cartComputedPrice(computedNumber, computedPrice);
    }
    function checkAllChecked(allFlag) {
        $('.headCheckAll input').prop('checked', allFlag)
        console.log(333333)
    }

    function cartComputedPrice(computedNumber, computedPrice) {
        console.log(444444444)

        var tmp = `
        <p>总计:¥${computedPrice * computedNumber}.00</p>
        <p>已选择${computedNumber}件商品</p>
        `;
        $('.cart_computed_price').html(tmp)
    };

    function cartBind() {
        cart_list.on('click', 'input[type="checkbox"]', function () {
            var index = $(this).closest('li').index()
            console.log(index)
            carList[index].goodsChecked = $(this).prop('checked');
            setCartStroage(carList);
            cartInfo();
            location.reload();

        })
        console.log(55555555)
    }
}); 