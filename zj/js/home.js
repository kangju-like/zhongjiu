$(function() {


    function setBK(data) {
        let arr = []
        $.each(data, function(index, ele) {
            let src = `<a href="" target="_blank">
            <img class="lazyload" src="${ele.src}">
        </a>`
            let name = ` <h3 title="42度天佑德青稞酒小黑125ml×4">${ele.name}</h3>`
            let price = `<p><span>${ele.price}</span></p>`
            let li = `<li>${src}${name}${price}</li>`
            arr.push(li)
        })
        $(".content_re").append(
            `<div class="hotrecommend">
<div class="content_recont" name="__recont">
            <ul class="cl" style="display:block">
               ${arr.join("")}            
            </ul>
</div>
</div>`
        )
    }
    setBK(bk)


    function setFloor(data) {
        let result = []
        $.each(data, function(index, ele) {
            let thd = `<h3>${ele.thd}</h3>`
            let topli = []
            $.each(ele.topli, function(index, tele) {
                topli.push(`<li>${tele}<s></s></li>`)
            });
            var top = `<div class="floor-hd">
            ${thd}
            <ul>
             ${topli.join("")}
            </ul>
            </div>`
            let alt = []
            $.each(ele.lt, function(index, lt) {
                alt.push(`<td><a href="" target="_blank">${lt}</a></td>`)
            })
            let alimg = []
            $.each(ele.left_img, function(index, limg) {
                    let alfimg = [];
                    $.each(limg, function(index, lfimg) {
                        alfimg.push(`<li>
                    <a target="_blank"  href=""><img  width="90" height="65" class="lazyload" src="${lfimg}"></a>
                </li>`)
                    })
                    alimg.push(`  <div class="scroll-A">
                <ul>
                  ${alfimg.join("")}  
                </ul>
            </div>`)
                })
                //中间部分
            let right_box = [];
            let right_img = [];
            $.each(ele.right_img, function(index, rimg) {
                right_img.push(`<li class="fore${index+1}">
                <a href="" target="_blank"><img class="lazyload" src="${rimg}"></a>
            </li>`)
            })

            let rt = []
            $.each(ele.right_tab, function(index, rtab) {
                rtt = []
                $.each(rtab, function(index, Rtab) {
                    rtt.push(`<li>
                        <div class="p-img">
                            <a href="" target="_blank"><img class="lazyload" src="${Rtab[0]}"></a>
                        </div>

                        <p><span>${Rtab[1]}</span></p>
                        <h3><a href="" target="_blank">${Rtab[2]}</a></h3>
                    </li>`)
                })
                let tb = `<ul class="content-right-tab" style="display: none;" >${rtt.join("")}</ul>`
                rt.push(tb)
            })


            right_box.push(`<ul class="content-right-img" style="display: none;" >
            ${right_img.join("")}
            </ul>`)
            right_box.push(rt.join(""))
            let bottom = [];
            $.each(ele.bottom_img, function(index, b) {
                bottom.push(`<li>
                <a href="" target="_blank"><img class="lazyload" src="${b}"></a>
            </li>`)
            })
            let res = `
            <div class="floor">
       ${top}

        <div class="floor-bd">
            <div class="floor-content cl" name="__defaultstyle">
                <div class="Content1 clearfix">
                    <div class="content-left">
                        <div class="slide">
           
                        <a href="http://pro.zhongjiu.cn/20160713/yanghe.html" target="_blank"><img class="lazyload" src="${ele.lef_img}"></a>
                        </div>
                        <div class="cata-flo">
                            <table>
                                <tbody>
                                    <tr>
                                       ${alt.join("")}
                                    </tr>

                                </tbody>
                            </table>

                        </div>

                        <div class="content-brand">
                            <b class="prev"></b>
                            <b class="next"></b>
                            <div class="brand-A">

                                <div class="brandA-wrap">

                                   ${alimg.join("")}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="content-right-box" name="__contentrightbox">
                       ${right_box.join("")}
                    </div>
                </div>

                <ul class="Content2 clearfix" name="__content2clearfix">
                    ${bottom.join("")}

                </ul>

            </div>
        </div>
            <div class='ce'></div>
    </div>

            `

            result.push(res)
        })

        let r = `<div class="floors">
            ${result.join("")}
            </div>`

        $(".content").append(r)
        $(".content").append(`<div class='ce'></div>`)
    }
    setFloor(fl);
    //旗舰店
    function setShop(data) {
        let res = []
        $.each(data.content_img, function(index, e) {
            let r = []
            $.each(e, function(index, ele) {
                r.push(`
                <li>
                <a href="" title="茅台" target="_blank"><img class="lazyload" src="${ele}" alt=""></a>
            </li>
                `)
            })
            res.push(`<div class="scroll-brand clearfix" style="left: 0px;">
            <ul>
                ${r.join("")}
            </ul>
        </div>`)
        })
        $(".Brand-shop").append(`<div class="BD-content">
        <div class="BD-left">
            <a href="h" target="_blank"><img class="lazyload" src="${data.left_img}"></a>
        </div>
        <div class="BD-mid">
            <b class="bd-prev"></b>
            <b class="bd-next"></b>
            <div class="BD-wrap">
                <div class="scroll-wrap">
                    ${res.join("")}    
                </div>
            </div>
        </div>
        <div class="BD-right" name="__bdright">
            <a href="" target="_blank"><img class="lazyload" src="${data.right_img}"></a>
        </div>
    </div>`)
    }
    setShop(footer)
        //楼层tab卡效果
    let all = document.querySelectorAll(".floors .floor")


    for (let i = 0; i < all.length; i++) {


        let liss = all[i].querySelectorAll(".floor-hd li")
        let ss = all[i].querySelectorAll(".floor-hd li s")
        let uls = all[i].querySelectorAll(".floor-bd .content-right-box ul")
        $(ss[0]).addClass("block");
        $(uls[0]).addClass("block");
        for (let r = 0; r < liss.length - 1; r++) {
            // console.log(lis[r])
            $(liss[r]).mouseenter(function() {
                // console.log($(ss[r]).parents("ul").siblings("ul").find('s'))

                // $(ss[r]).parents("ul").siblings('ul').find('s').removeClass('block')
                // $(ss[r]).addClass("block");
                $(uls[r]).addClass("block");
                $(uls[r]).siblings().removeClass("block");



            })
        }

    }
    //楼层导航
    function scroll(e) {
        window.scrollTo(0, e - 200)
    }
    let scroll_to = document.querySelectorAll(".floor-nav ul li");
    for (let i = 0; i < scroll_to.length; i++) {
        $(scroll_to[i]).click(function() {
            scroll(all[i].offsetTop)


        })
    }

})