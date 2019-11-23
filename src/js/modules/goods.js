define(['jquery'], function ($) {
    function goodsInit(type, data) {
        var $parent = $(`#${type}`)
        var tmp = `
            <h2>${data.title}</h2>
            <ul>
                ${
            data.goods_list.map((v, i) => {
                return `
                        <li>
                            <a href="./detail.html" target="_blank">
                                <div><img src="${v.goodsImg}" alt=""></div>
                                <p>${v.goodsName}</p>
                                <p>$${v.goodsPrice}</p>
                            </a>
                        </li>
                        `
            }).join('').repeat(3)
            }
            </ul>

        `;
        $parent.html(tmp)
    }
    return {
        goodsInit
    }
});