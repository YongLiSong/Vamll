define(["jquery", "../server/main" ,"./modules/detailinfo"], function ($, { getDetailData },{detailInfo,glassbig}) {

    let type = window.location.search.match(/type=([^&]+)/)[1];
    let id = window.location.search.match(/id=([^&]+)/)[1]

    getDetailData(type, id).then((res) => {
        detailInfo(res);
        glassbig()
    })

});