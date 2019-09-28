$(function() {
    let l = location.href;

    function urls() {
        let urlB = l.split("=");
        return urlB[1];
    }
    let url = urls();
    let sid = url;
    console.log(url);
    //加载数据

    $.ajax({
        type: "get",
        url: "../server/xq.php",
        data: `url=${url}`,
        dataType: "json",
        success: function(response) {
            let o = response.res[0];
            $("#name h1").get(0).innerText = o.pname;
            $("#jd-price").get(0).innerText = o.price;
            $("#saleCounts").get(0).innerText = o.math;
            $("#mgs").get(0).src = o.pimg;
        },

    });
    // 购物车
    $.ajax({
        type: "get",
        url: "../server/bycar.php",
        // data: "data",
        dataType: "json",
        success: function(response) {
            console.log(response);
            let pnum = 0
            $.each(response.res, function(index, ele) {
                pnum += (ele.num * 1)
                console.log(ele.num);

            })
            $("#right_cart em").text(pnum)

        }
    });
    // 负数检查
    function minus() {
        if (($("#buy-num").val() * 1) < 1) {
            $("#buy-num").val(1)
        }
    }
    // 加号

    $(".btn-add").click(function() {
        $("#buy-num").val(($("#buy-num").val() * 1) + 1)
    })
    $(".btn-reduce").click(function() {
        $("#buy-num").val(($("#buy-num").val() * 1) - 1)
        minus()
    })
    $("#InitCartUrl").click(function() {
        // let arr = [];
        // let o = {};
        let newNum = $("#buy-num").val() * 1;
        let price = $("#jd-price").text() * 1;
        let money = newNum * price;
        let name = $("#name h1").text();
        let img = $("#mgs").get(0).src;
        let num = newNum;
        // console.log(img);

        // o.num = newNum;
        // o.price = price;
        // o.money = money;
        // o.sid = sid;
        // arr.push(o);
        $.ajax({
            type: "get",
            url: "../server/buy.php",
            data: `sid=${sid}&name=${name}&price=${price}&num=${num}&img=${img}`,
            dataType: "json",
            success: function(response) {
                console.log(response)
            }

        });
    })

})