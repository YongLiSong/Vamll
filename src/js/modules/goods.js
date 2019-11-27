define(['jquery','./lazyload'], function ($,{lazyload}) {
    function goodsInit(type, data) {
        var username;
        username = window.location.search.match(/username=([^&]+)/) ? window.location.search.match(/username=([^&]+)/)[1] : "";
        var $parent = $(`#${type}`)
        var longtop = $parent.offset().longtop

        var tmp = `
            <h2>${data.title}</h2>
            <ul>
                ${
            data.goods_list.map((v, i) => {
                return `
                        <li>
                            <a href="./detail.html?type=${type}&id=${v.goodsId}&username=${username}" target="_blank">
                                <div><img data-src="${v.goodsImg[0]}" src="https://res9.vmallres.com/20191020/images/echannel/loading/mask.png" alt=""></div>
                                <p>${v.goodsName}</p>
                                <p>$${v.goodsPrice}</p>
                            </a>
                        </li>
                        `
            }).join('').repeat(3)
            }
            </ul>

        `;
        $parent.html(tmp);
        lazyload()
    }
    return {
        goodsInit
    }
});