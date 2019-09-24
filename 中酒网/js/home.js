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
                let tb = `<ul class="content-right-tab" >${rtt.join("")}</ul>`
                rt.push(tb)
            })


            right_box.push(`<ul class="content-right-img" >
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
    console.log($('.floors .floor .floor-hd li'))

    //楼层tab卡效果

    let lis = document.querySelectorAll(".floors .floor .floor-hd li")
    let s = document.querySelectorAll(".floors .floor .floor-hd li s")
    let uls = document.querySelectorAll(".floors .floor .floor-bd .content-right-box ul")
    $(s[0]).addClass("block");
    $(uls[0]).addClass("block");
    for (let i = 0; i < lis.length - 1; i++) {
        console.log(lis[i]);

        $(lis[i]).mouseenter(function() {
                $(s[i]).addClass("block");
                $(uls[i]).removeClass("block");
                $(uls[i]).addClass("block");
                console.log(this);

            })
            // $(lis[i]).mouseleave(function() {
            //     $(s[i]).removeClass("block");
            //     $(uls[i]).removeClass("block");
            // })
    }
})