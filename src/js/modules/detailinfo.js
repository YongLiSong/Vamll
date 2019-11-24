define(["jquery", "./magnifier"],function($, { glassbig }) {
    function detailInfo(data) {
        var $goodsData = $(".goodInfo")
        var $magnifier = $("#magnifier1")
        var $goodsImgs = $("#goodsImg")
        var tmp = `
        <div class="magnifier-container">
        <div class="images-cover"></div>
        <!--当前图片显示容器-->
        <div class="move-view"></div>
        <!--跟随鼠标移动的盒子-->
    </div>
    <div class="magnifier-assembly">
        <div class="magnifier-btn">
            <span class="magnifier-btn-left">&lt;</span>
            <span class="magnifier-btn-right">&gt;</span>
        </div>
        <!--按钮组-->
        <div class="magnifier-line">
            <ul class="clearfix animation03">
                <li>
                    <div class="small-img">
                        <img src="${data.goodsImg}" />
                    </div>
                </li>
            </ul>
        </div>
        <!--缩略图-->
    </div>
    <div class="magnifier-view"></div>
        `;
        var tmp2 = `
    <h2>${data.goodsName}</h2>
    <p class="goodsprice">价格<span>¥${data.goodsPrice}</span></p>
    <div class="colorchose clearfix">
        <p class="l">颜色选择</p>
        <ul class="l">
            ${
            data.chooseColor.map(function (v, i) {
                if (i == 0) {
                    return `<li class="active">${v}</li>`
                } else {return `<li>${v}</li>`}
            }).join('')
            }
        </ul>
    </div>
    <div class="goodBind">
        <div class="goodnum l">
            <input type="text" value="1">
            <div class="goodbtn l">
                <span class="plus">+</span>
                <span class="minus">-</span>
            </div>
        </div>
        <div class="goodInCart l">
            <a href="#">添加到购物车</a>
        </div>
    </div>
    `;
    var tmp3=`
    <h2>--商品介绍--</h2>
    <div>
        ${
            data.goodsInfo.map(function(v,i){
                return `<img src="${v}" alt=""> ` 
            })            
        }
    </div>

    `;
        $magnifier.html(tmp);
        $goodsData.html(tmp2);
        $goodsImgs.html(tmp3);
       
    }

    return {detailInfo,
            glassbig
    }
})