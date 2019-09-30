$(function() {
    let phone_input = $("#phone");
    let passwordAInput = $("#passwordA");
    let passwordBInput = $("#passwordB");
    let msgCodeBtn = $("#msgbtn");
    let msgCodeInput = $("#msgcord")
    let phoneReg = /^1[3-9]\d{9}$/; /* 第一位：1 第二位不能为012 11位数字 */
    let passwordReg = /^[a-zA-Z0-9]|\S{6,16}$/;
    let num;
    let bs = false;
    let SlideVerifyPlug = window.slideVerifyPlug;
    let slideVerify = new SlideVerifyPlug('#verify-wrap', {
        wrapWidth: '272', //设置 容器的宽度 ,不设置的话，会设置成100%，需要自己在外层包层div,设置宽度，这是为了适应方便点；
        initText: '请按住往右滑', //设置  初始的 显示文字
        sucessText: '验证通过', //设置 验证通过 显示的文字
        getSuccessState: function(res) {
            //当验证完成的时候 会 返回 res 值 true，只留了这个应该够用了 

            bs = res;
            console.log(bs);
        }
    });



    var slideVerify2 = new SlideVerifyPlug('#verify-wrap2', {
        initText: '请按住滑块',
        sucessText: '验证通过',

    });
    phone_input.blur(function() {
        /* 先获取输入框的值，检查和清理(空格|空) */
        let val = $(this).val().trim();
        // console.log(val.length);

        if (val.length == 0) {
            $(this).parents(".phone-box").find("#Phone_error").addClass("block").text("手机号不能为空")
            $(this).parents(".phone-box").find("#Phone_active").removeClass("block")
        } else {
            if (!phoneReg.test(val)) {
                $(this).parents(".phone-box").find("#Phone_error").addClass("block").text("手机号码不正确")
                $(this).parents(".phone-box").find("#Phone_active").removeClass("block");

            } else {
                $(this).parents(".phone-box").find("#Phone_error").removeClass("block");
                $(this).parents(".phone-box").find("#Phone_active").removeClass("block");
            }
        }
    })
    phone_input.focus(function() {
        $(this).parents(".phone-box").find("#Phone_error").addClass("block").text("请输入手机号码");
    });
    passwordAInput.blur(function() {
        /* 先获取输入框的值，检查和清理(空格|空) */
        let val = $(this).val().trim();
        // console.log(val.length);

        if (val.length == 0) {
            $(this).parents(".pas-box").find("#pwd_error").addClass("block")
            $(this).parents(".pas-box").find("#pwd_info").removeClass("block");
        } else {
            if (!passwordReg.test(val)) {
                $(this).parents(".pas-box").find("#pwd_error").addClass("block")
                $(this).parents(".pas-box").find("#pwd_info").removeClass("block");

            } else {
                $(this).parents(".pas-box").find("#pwd_error").removeClass("block")
                $(this).parents(".pas-box").find("#pwd_info").removeClass("block");
            }
        }
    })
    passwordAInput.focus(function() {
        $(this).parents(".pas-box").find("#pwd_info").addClass("block");
    });
    passwordBInput.blur(function() {
        /* 先获取输入框的值，检查和清理(空格|空) */
        /*123456*/


        let val = $(this).val().trim();
        if (val.length == 0) {
            $(this).parents(".pass-box").find("#pwdRepeat_error").addClass("block").text("确认密码不能为空！")
            $(this).parents(".pass-box").find("#pwdRepeat_info").removeClass("block");
        } else {
            if ($("#passwordA").val() != val) {
                $(this).parents(".pass-box").find("#pwdRepeat_error").addClass("block").text("两次密码不一致！")
                $(this).parents(".pass-box").find("#pwdRepeat_info").removeClass("block");
            } else {
                $(this).parents(".pass-box").find("#pwdRepeat_error").removeClass("block");
                $(this).parents(".pass-box").find("#pwdRepeat_info").removeClass("block");
            }
        }
    })

    passwordBInput.focus(function() {
        $(this).parents(".pass-box").find("#pwdRepeat_info").addClass("block");
    });

    /* 监听发送短信验证码 */
    msgCodeBtn.click(function() {
        /* 001-先获取手机号码 */
        phone_input.trigger("blur"); /* 自动触发失去焦点的事件 */
        var flag1 = phone_input.parents(".phone-box").find("#Phone_error").hasClass("block");
        var flag2 = phone_input.parents(".phone-box").find("#Phone_active").hasClass("block");
        if (flag1 || flag2) {
            alert("手机号码不正确！请检查");
            return;
        } else {

            /* 开启倒计时 */
            let timeCount = 60;
            let timer = setInterval(function() {
                timeCount--;
                msgCodeBtn.text(`${timeCount} 秒`);
                if (timeCount == 0) {
                    clearInterval(timer);
                    msgCodeBtn.text(`发送短信验证码`);
                }
            }, 1000);
            // console.log("+++OK+++");
            /* 根据手机号码来发送短信即可！ */

            function getRandom(min, max) {
                return parseInt(Math.random() * (max - min + 1)) + min
            }

            function formatterDateTime() {
                var date = new Date()
                var month = date.getMonth() + 1
                var datetime = date.getFullYear() +
                    "" // "年"
                    +
                    (month >= 10 ? month : "0" + month) +
                    "" // "月"
                    +
                    (date.getDate() < 10 ? "0" + date.getDate() : date
                        .getDate()) +
                    "" +
                    (date.getHours() < 10 ? "0" + date.getHours() : date
                        .getHours()) +
                    "" +
                    (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                        .getMinutes()) +
                    "" +
                    (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                        .getSeconds());
                return datetime;
            }

            // num = getRandom(1000, 9999);
            num = 9999;
            $.ajax({
                type: 'post',
                url: 'http://route.showapi.com/28-1',
                dataType: 'json',
                data: {
                    "showapi_timestamp": formatterDateTime(),
                    "showapi_appid": '105009', //这里需要改成自己的appid
                    "showapi_sign": '51084e3ee1f34d5c86af6e0e3506a8fa', //这里需要改成自己的应用的密钥secret
                    "mobile": phone_input.val().trim(),
                    "content": `{\"name\":\"牛二\",\"code\":\"${num}\",\"minute\":\"3\",\"comName\":\"亚洲最大养猪场\"}`,
                    "tNum": "T150606060601",
                    "big_msg": ""
                },
                error: function(XmlHttpRequest, textStatus, errorThrown) {
                    alert("操作失败!");
                },
                success: function(result) {
                    console.log(result) //console变量在ie低版本下不能用
                    alert(result.showapi_res_code)
                }
            });
        }

    });
    msgCodeInput.blur(function() {



        /* 先获取输入框的值，检查和清理(空格|空) */
        let val = $(this).val().trim();
        if (val.length == 0) {
            $(this).parents(".bt-box").find("#msglab").addClass("block").text("手机验证码不能为空!");
            // console.log(val);

        } else {
            if (num != val) {
                $(this).parents(".bt-box").find("#msglab").addClass("block").text("手机验证码不正确!");

            } else {
                $(this).parents(".bt-box").find("#msglab").removeClass("block")
            }
        }
    })
    msgCodeInput.focus(function() {
        $(this).parents(".bt-box").find("#msglab").removeClass("block")
    })

    // let
    $("#zhuce").click(function() {
        phone_input.trigger("blur");
        passwordAInput.trigger("blur");
        passwordBInput.trigger("blur");
        msgCodeInput.trigger("blur");
        // console.log(!bs || !$(".checkbox").prop("checked") || $("#msglab").hasClass("block") || $("#pwdRepeat_error").hasClass("block") || $("#pwdRepeat_info").hasClass("block") || $("#pwd_info").hasClass("block") || $("#pwd_error").hasClass("block") || $("#Phone_active").hasClass("block") || $("#Phone_error").hasClass("block"));

        if (!(bs && $(".checkbox").prop("checked")) || $("#msglab").hasClass("block") || $("#pwdRepeat_error").hasClass("block") || $("#pwdRepeat_info").hasClass("block") || $("#pwd_info").hasClass("block") || $("#pwd_error").hasClass("block") || $("#Phone_active").hasClass("block") || $("#Phone_error").hasClass("block")) {
            // alert("请完善信息")
            console.log(!(bs && $(".checkbox").prop("checked")));

            // console.log(bs || $(".checkbox").prop("checked") || $("#msglab").hasClass("block") || $("#pwdRepeat_error").hasClass("block") || $("#pwdRepeat_info").hasClass("block") || $("#pwd_info").hasClass("block") || $("#pwd_error").hasClass("block") || $("#Phone_active").hasClass("block") || $("#Phone_error").hasClass("block"));
        } else {
            console.log(11111);

            $.ajax({
                type: "get",
                url: "../server/zhuce.php",
                data: `phone=${$("#phone").val()}&password=${$("#passwordA").val()}`,

                success: function(response) {
                    if (response == "true") {
                        window.location = "../html/dl.html"
                    } else {
                        alert("该用户已注册！")
                    }
                }
            });
        }
    })
})