$(function() {
    let phone_input = $("#phone");
    let passwordAInput = $("#passwordA");
    let passwordBInput = $("#passwordB");
    let msgCodeBtn = $("#msgbtn");
    let msgCodeInput = $("#msgcord")
    let phoneReg = /^1[3-9]\d{9}$/; /* 第一位：1 第二位不能为012 11位数字 */
    let passwordReg = /^[a-zA-Z0-9]{6,16}$/;

    phone_input.blur(function() {
        /* 先获取输入框的值，检查和清理(空格|空) */
        let val = $(this).val().trim();
        console.log(val.length);

        if (val.length == 0) {
            $(this).parents(".phval").next().addClass("block")
            $(this).parents(".phval").next().next().removeClass("block");
        } else {
            if (!phoneReg.test(val)) {
                $(this).parents(".phval").next().addClass("block")
                $(this).parents(".phval").next().next().removeClass("block");

            } else {
                $(this).parents(".phval").next().removeClass("block");
            }
        }
    })
    phone_input.focus(function() {
        $(this).parents(".phval").next().next().addClass("block");
    });
    passwordAInput.blur(function() {
        /* 先获取输入框的值，检查和清理(空格|空) */
        let val = $(this).val().trim();
        console.log(val.length);

        if (val.length == 0) {
            $(this).parents(".pasval").next().addClass("block")
            $(this).parents(".pasval").next().next().removeClass("block");
        } else {
            if (!passwordReg.test(val)) {
                $(this).parents(".pasval").next().addClass("block")
                $(this).parents(".pasval").next().next().removeClass("block");

            } else {
                $(this).parents(".pasval").next().removeClass("block");
                $(this).parents(".pasval").next().next().removeClass("block");
            }
        }
    })
    passwordAInput.focus(function() {
        $(this).parents(".pasval").next().next().addClass("block");
    });
    passwordBInput.blur(function() {
        /* 先获取输入框的值，检查和清理(空格|空) */
        /*123456*/


        let val = $(this).val().trim();
        if (val.length == 0) {
            $(this).parents(".passval").next().addClass("block").text("确认密码不能为空！")
            $(this).parents(".passval").next().next().removeClass("block");
        } else {
            if (passwordVal != val) {
                $(this).parents(".passval").next().addClass("block").text("两次密码不一致！")
                $(this).parents(".passval").next().next().removeClass("block");
            } else {
                $(this).parents(".passval").next().removeClass("block");
                $(this).parents(".passval").next().next().removeClass("block");
            }
        }
    })

    passwordBInput.focus(function() {
        $(this).parents(".passval").next().next().addClass("block");
    });

    /* 监听发送短信验证码 */
    msgCodeBtn.click(function() {
        /* 001-先获取手机号码 */
        phone_input.trigger("blur"); /* 自动触发失去焦点的事件 */
        var flag1 = phone_input.parents(".phval").next().hasClass("block");
        var flag2 = phone_input.parents(".phval").next().hasClass("block");
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
            $(this).parent().next().addClass("block").text("手机验证码不能为空!");

        } else {
            if (num != val) {
                $(this).parent().next().addClass("block").text("手机验证码不正确!");

            } else {
                $(this).parent().next().removeClass("block")
            }
        }
    })
    msgCodeInput.focus(function() {
        $(this).parent().next().removeClass("block")
    })
    let

})