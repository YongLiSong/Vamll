define(['jquery',], function ($) {


    $('.reg-sendout').on('click', function () {

        var userList = getUserInfo()||[];
        let phoneNumReg = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
        let passwordReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
        let emailReg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
        $country = $('input[name="country"]').val();
        $phoneNum = $('input[name="phoneNum"]').val();

        $massage = $('input[name="massage"]').val();

        $password =($('input[name="password"]').val());

        $repeatPassword = $('input[name="repeatPassword"]').val();
        let result = {
            country: $country,
            phoneNum: $phoneNum,
            massage: $massage,
            password: $password
        };

        
        

        let flag = true;
        for(let i=0;i<userList.length;i++){
            if(userList[i].phoneNum == $phoneNum){
                flag = false;
            }
        }
        if(flag){//新增用户
           
                userList.push(result);
                setUserInfo(userList);
                alert('注册成功');
                window.location.assign('./login.html')
        }else{ //用户重复
            alert('用户名重复')
        }
    })

    function setUserInfo(info){
        window.localStorage.setItem('userInfo',JSON.stringify(info))
    }
    function getUserInfo(){
        return JSON.parse(window.localStorage.getItem('userInfo'))
    }
    // function addUserInfo(result){ //添加cookie
    //     setUserInfo(userList)
    // }
    return{
        getUserInfo
    }

});