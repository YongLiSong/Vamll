define(['jquery','regbyphone'], function($,{getUserInfo}){
    var userList = getUserInfo()
    $regSendout = $('.login-btn');


    
    $regSendout.on('click',function(){
        $username = $('.username').val();
        $password = $('.password').val();
        var flag = false;
        var index = 0;
        for(let i =0;i<userList.length;i++){    
            console.log(i)
            console.log(userList[0])
            console.log(userList[0].password)
            console.log(typeof userList[i])
            if( $username == userList[i].phoneNum && $password == userList[i].password){
                flag = true;
                index = i;
            }
        }

        if(flag){
            alert('登陆成功')
            window.location.assign(`./index.html?username=${userList[index].phoneNum}`);
        }else{
            alert('用户名或者密码错误');
        }




    })
});