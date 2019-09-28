$(function() {
    $("#right_cart").click(function() {
        $(".side-content").toggleClass("block");
        // console.log(3333);

        $.ajax({
            type: "get",
            url: "../server/bycar.php",
            // data: "data",
            dataType: "json",
            success: function(response) {
                console.log(response);
                let pnum = 0;
                let moneys = 0;
                $.each(response.res, function(index, ele) {

                    let money = ele.price * ele.num;
                    moneys += money;
                    pnum += (ele.num * 1)
                    console.log(ele.num);
                    $("#side-cart-list li").append(`<div class="cart-list-goods cl"> <input class="checkbox" type="checkbox" data-cartid="${ele.sid}" name="checkItem" value="1" checked="">
                    <a href="" title="${ele.name}" target="_blank"><img src="${ele.img}" alt=""></a>
                    <div class="s-num"><span>${ele.num}</span></div>
                    <div class="s-g-price">￥${money}</div>
                </div>`)
                    $("#s-total-money").text(moneys)
                    $("#s-total-num").text(pnum)
                })


            }

        });
        hasclass()
    })
    $("body").click(function() {

    })

    function hasclass() {
        if ($(".side-content").hasClass("block")) {

        } else {
            $("div").remove(".cart-list-goods")

        }
    }
})