define(["jquery", '../../server/main'], function ($, { getGoodsData }) {

    $banner_imgs = $('#banner').find('.banner_imgs');
    $banner_dots = $('#banner').find('.banner_dots');
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
        })
    }
    function bannerMenuInit(type, res) {
        $bannerMenuContent = $(".banner_menu_list_content")
        let listdata = res.goods_list;
        console.log(listdata)
        let tmp = `
        ${
            listdata.map((v,i)=>{
                return `
                    <li>
                        <a href="#">
                            <div><img src="${v.goodsImg}" alt=""></div>
                                <p>${v.goodsName}</p>
                        </a>
                    </li>
                `
            }).join('').repeat(3)
                }
            `
            $bannerMenuContent.html(tmp)
        }
    return {
                    bannerInit,
                    bannerMenuInit
                }
                })