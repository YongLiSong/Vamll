define(["jquery", '../../server/main'], function ($, { getGoodsData }) {

    $banner_imgs = $('#banner').find('.banner_imgs');
    $banner_dots = $('#banner').find('.banner_dots');
    $banner = $('#banner')
    $banner_btn_Left = $('.banner_btn_left');
    $banner_btn_Right = $('.banner_btn_right');
    var bannerindex = 0;
    var bannerMove;
    function bannerInit(data) {
        let banner_list = data.banner_list;
        let tmp = `
            ${
            banner_list.map((v, i) => {
                if (i == 0) {
                    return `<li class="active"><a href="${v.imgLink}"><img src="${v.imgUrl}" alt=""></a></li>`
                } else {
                    return `<li><a href="${v.imgLink}"><img src="${v.imgUrl}" alt=""></a></li>`
                }
            }).join('')
            }
        `;
        let tmp_dots = `
            ${
            banner_list.map((v, i) => {
                if (i == 0) {
                    return `<li class="active"></li>`;
                } else {
                    return `<li></li>`;
                }
            }).join('')
            }
        `
        $banner_imgs.html(tmp);
        $banner_dots.html(tmp_dots);
        bannerBind()
    }
    function bannerBind() {
        $banner_dots.on('mouseover', 'li', function () {
            $(this).attr('class', 'active').siblings().attr('class', '');
            $banner_imgs.find('li').eq($(this).index()).fadeIn().siblings().fadeOut()
            bannerindex = $(this).index()
        })
    }

    function bannerMenuInit(type, res) {
        $bannerMenuContent = $(".banner_menu_list_content")
        let listdata = res.goods_list;
        console.log(listdata)
        let tmp = `
        <ul class="banner_menu_list_content">   
        ${
            listdata.map((v, i) => {
                return `
                    <li>
                        <a href="./detail.html?type=${type}&id=${v.goodsId}">
                            <div><img src="${v.goodsImg[0]}" alt=""></div>
                                <p>${v.goodsName}</p>
                        </a>
                    </li>
                `
            }).join('').repeat(2)
            }
                </ul>
            `
        $('.banner_menu_list').html(tmp)
    }

    function bannerPrve() {
        $banner_btn_Left.on('click', function () {
            console.log(bannerindex)
            bannerindex--;
            if (bannerindex < 0) {
                bannerindex = $banner_imgs.find('li').length - 1;
            }
            $banner_imgs.find('li').eq(bannerindex).fadeIn().siblings().fadeOut();
            console.log($banner_dots)
            $banner_dots.find('li').eq(bannerindex).attr('class', 'active').siblings().attr('class', '');
        });


    }

    function bannerNext() {
        $banner_btn_Right.on('click', function bannerNext() {
            console.log(bannerindex)
            bannerindex++;
            if (bannerindex > $banner_imgs.find('li').length - 1) {
                bannerindex = 0;
            }
            $banner_imgs.find('li').eq(bannerindex).fadeIn().siblings().fadeOut();
            console.log($banner_dots)
            $banner_dots.find('li').eq(bannerindex).attr('class', 'active').siblings().attr('class', '');
        })
    };
    function bannerAuto() {
        bannerMove = setInterval(function () {
            bannerindex++;
            if (bannerindex > $banner_imgs.find('li').length - 1) {
                bannerindex = 0;
            }
            $banner_imgs.find('li').eq(bannerindex).fadeIn().siblings().fadeOut();
            console.log($banner_dots)
            $banner_dots.find('li').eq(bannerindex).attr('class', 'active').siblings().attr('class', '');
        }, 2000)
    };
    function bannerStop() {
        $banner.hover(function () {
            clearInterval(bannerMove)
        }, function () {
            bannerAuto()
        })
    }
    return {
        bannerInit,
        bannerMenuInit,
        bannerPrve,
        bannerNext,
        bannerAuto,
        bannerStop
    }
})