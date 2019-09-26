$(function() {


    $(".categorys").mouseenter(function() {
        $(".category").addClass("block")
    });
    $(".categorys").mouseleave(function() {
        $(".category").removeClass("block")
    });

    function setShop(data) {
        var r = []
        $.each(data, function(index, e) {
            var Imgs = []
            $.each(e.imgs, function(index, ele) {
                // console.log(ele);

                Imgs.push(`<a href="">
                <img class="lazyload" src="${ele}">
            </a>`)
            })
            r.push(`
            <li class="clearfix">
            <div class="lh-wrap">
                <div class="p-img">
                    <a target="_blank" href="">
                        <img class="lazyload" src="${e.pimg}" title="">
                    </a>
                    <div shop_id="0"></div>
                </div>
                <div class="p-price">
                    <strong>${e.price}</strong>

                    <label style="float:right" id="lblOrderCount_3302">成交 <b> ${e.math} </b>笔</label>
                </div>
                <div class="p-name">
                    <a target="_blank" href="">${e.pname} </a>
                </div>
                <div class="p-shop-N">
                    <label class="SN" id="lblShopName_3302"><a href="">${e.pshop}</a></label>

                    <label class="shop-cart" id="addCart_3302"><i></i></label>
                </div>
            </div>
            <div class="scale-img">
                ${Imgs.join("")}

            </div>
        </li>
            `)
        })
        $("#filter").after(`<div class="m psearch prebuy plist-n7 no-preview" id="plist">
        <ul class="list-h cl">
        ${r.join("")}
        </ul>
    </div>`)
    }
    setShop(shops);
    $(".clearfix").mouseenter(function() {
        $(this).find(".scale-img").addClass("block");
        $(this).find(".shop-cart").addClass("block");
        // $(this).siblings().find('.scale-img').removeClass("block")
        // $(this).siblings().find('.shop-cart').removeClass("block")
    })
    $(".clearfix").mouseleave(function() {
            $(this).find('.scale-img').removeClass("block")
            $(this).find('.shop-cart').removeClass("block")
        })
        // $(".scale-img img").mouseenter(function() {
        //         $(this).parents(".scale-img").siblings('.lh-wrap').find('img').get(0).src = this.src;
        //         // console.log($(this).parents(".scale-img").siblings('.lh-wrap').find('img').get(0).src);
        //         console.log(this.index)
        //         var reg = /^\/[0-5]_[0-9]{3}.png$/
        //         var res = '/2_220.png'
        //         console.log(reg.test(res))
        //         let str = "http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103151/2_220.png";
        //         str.replace(/^\/[0-9]_$/g, "/2_368.png");
        //         console.log(str);





    //     })
    // let str = "http://img6.zhongjiu.cn/resourceb2b2c//Storage/Shop/96/Products/103151/2_220.png";
    // str.replace(/\/\d_\d{3}.png/, "/3_220.png");
    // console.log(str);
})