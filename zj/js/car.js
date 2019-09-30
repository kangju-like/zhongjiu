$(function() {





    new Promise(function(resolve, reject) {
            // 渲染数据
            $.ajax({
                type: "get",
                url: "../server/bycar.php",
                // data: "data",
                dataType: "json",
                success: function(response) {
                    let pnum = 0;
                    let moneys = 0;
                    $.each(response.res, function(index, ele) {
                        console.log(ele);

                        let money = ele.price * ele.num;
                        moneys += money;
                        pnum += (ele.num * 1)
                        $("#product-list").append(` <div class="item item_selected" id="${ele.sid}">
    
                   <section class="mj" id="manjian-2536"></section>
                   <div class="item_form cl">
                       <div class="cell p-checkbox">
                           <input class="checkbox" type="checkbox" data-cartid="29262" name="checkItem" checked=""  value="1" sku="2536_0_0_0" data-productid="2536">
                           <input type="hidden" data-disamount="0.00" name="disAmount">
                       </div>
    
    
                       <div class="cell p-goods">
                           <div class="p-img">
                               <a href="" target="_blank"><img src="${ele.img}" alt=""></a>
                           </div>
                           <div class="p-name">
                               <a href="" target="_blank">
                                           ${ele.name}<br>
                                           
                                       </a><br>
    
                           </div>
    
    
                           <div class="p-code">商品货号：${ele.sid}</div>
    
                       </div>
    
                       <div class="cell p-price">
                           <span class="price">¥${ele.price}</span>
                       </div>
    
                       <div class="cell p-quantity">
                           <div class="quantity-form">
                               <a href="javascript:void(0);" class="decrement" sku="2536_0_0_0">-</a>
                               <input type="text" sid="${ele.sid}" class="quantity-text quantity-1"  value="${ele.num}" onblur="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'1'); if(this.value==''){this.value='1'}}).call(this)" οnkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/" name="count " sku="2536_0_0_0 ">
                               <a href="" class="increment" sku="2536_0_0_0 ">+</a>
                           </div>
                       </div>
                       <div class="cell p-remove">
                           <a class="cart-remove" href="javascript:void(0);">删除</a>
                       </div>
                   </div>
               </div>`)

                    })
                    moneyAndNum()
                    resolve();
                }

            });

        })
        .then(function() {
            // 加号

            $(".increment").click(function(e) {
                    e.preventDefault()
                    $(this).parent().find('.quantity-text').val(($(this).parent().find('.quantity-text').val() * 1) + 1)
                    $.ajax({
                        type: "get",
                        url: "../server/setcar.php",
                        data: `sid=${$(this).parent().find('.quantity-text').get(0).getAttribute("sid")}&num=${$(this).parent().find('.quantity-text').val()}`,
                        dataType: "json",
                        success: function(response) {

                            let pnum = 0;
                            let moneys = 0;
                            $.each(response.res, function(index, ele) {
                                // console.log(ele);

                                let money = ele.price * ele.num;
                                moneys += money;
                                pnum += (ele.num * 1)
                            })
                            moneyAndNum()


                        }
                    });

                })
                // 减号
            $(".decrement").click(function() {
                    $(this).parent().find('.quantity-text').val(($(this).parent().find('.quantity-text').val() * 1) - 1)
                    $.ajax({
                        type: "get",
                        url: "../server/setcar.php",
                        data: `sid=${$(this).parent().find('.quantity-text').get(0).getAttribute("sid")}&num=${$(this).parent().find('.quantity-text').val()}`,
                        dataType: "json",
                        success: function(response) {

                            let pnum = 0;
                            let moneys = 0;
                            $.each(response.res, function(index, ele) {
                                // console.log(ele);

                                let money = ele.price * ele.num;
                                moneys += money;
                                pnum += (ele.num * 1)
                            })
                            moneyAndNum()


                        }
                    });

                    if (($(this).parent().find('.quantity-text').val() * 1) < 1) {
                        $(this).parent().find('.quantity-text').val(1)
                            // console.log(this)
                    }
                    // return false;
                })
                // 删除按钮


            $(".cart-remove").click(function() {
                    // console.log(222222);

                    $.ajax({
                        type: "get",
                        url: "../server/remove.php",
                        data: `sid=${$(this).parents(".item").get(0).getAttribute("id")}`,
                        dataType: "json",
                        success: function(response) {

                            let pnum = 0;
                            let moneys = 0;
                            $.each(response.res, function(index, ele) {
                                // console.log(ele);

                                let money = ele.price * ele.num;
                                moneys += money;
                                pnum += (ele.num * 1)
                            })
                            moneyAndNum()


                        }
                    });
                    var us = $(this).parents(".item").get(0).getAttribute("id")
                    console.log(us);

                    $(`#${us}`).remove()
                })
                // 全选
            $.each($(".checkAll"), function() {
                    $(this).click(function() {
                        if ($(this).prop("checked")) {
                            $(".checkAll").prop("checked", true)
                            $(".checkbox").prop("checked", true)
                        } else if ($(this).prop("checked") == false) {
                            $(".checkAll").prop("checked", false)
                            $(".checkbox").prop("checked", false)
                        }
                        // console.log($(".checkAll").prop("checked"))
                    })
                })
                // 单选
            $.each($(".checkbox"), function() {
                    $(this).click(function() {
                        moneyAndNum()
                        if ($(this).prop("checked")) {

                            let n = 0;
                            let nn = 0;
                            $.each($(".checkbox"), function() {
                                nn++
                                if ($(this).prop("checked")) {
                                    n++
                                }
                            })
                            if (n == nn) {
                                $(".checkAll").prop("checked", true)
                            }


                        } else if ($(this).prop("checked") == false) {
                            $(".checkAll").prop("checked", false)

                        }
                    })
                })
                // 筛选删除
            $("#remove-batch").click(function() {
                let ar = []
                $.each($(".item"), function() {
                    if ($(this).find(".checkbox").prop("checked")) {
                        ar.push(this.getAttribute("id"))
                        $(this).remove();
                    }
                })
                var arr = JSON.stringify(ar);

                $.ajax({
                    type: "get",
                    url: "../server/checkedRemove.php",
                    data: `ids=${arr}`,
                    dataType: "dataType",
                    success: function(response) {
                        moneyAndNum()
                    }
                });
            })


            // 监听输入框变化
            $(".quantity-text").on('keydown focus', function() {
                setTimeout(() => {

                    $.ajax({
                        type: "get",
                        url: "../server/setcar.php",
                        data: `sid=${$(this).get(0).getAttribute("sid")}&num=${$(this).val()}`,
                        dataType: "json",
                        success: function(response) {
                            console.log(123);
                            let pnum = 0;
                            let moneys = 0;
                            $.each(response.res, function(index, ele) {
                                // console.log(ele);

                                let money = ele.price * ele.num;
                                moneys += money;
                                pnum += (ele.num * 1)
                            })

                            moneyAndNum()

                        }
                    });

                }, 1)

            })
        })

    function moneyAndNum() {
        let m = 0;
        let n = 0;
        $.each($(".item"), function() {
            if ($(this).find(".checkbox").prop("checked")) {
                n += ($(this).find(".quantity-text").val() * 1);
                m += ($(this).find(".price").text().slice(1) * $(this).find(".quantity-text").val())
            }
        })
        $("#finalPrice").text(m)
        $("#selectedCount").text(n)


    }


})