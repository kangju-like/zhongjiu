$(function() {
    function create(data) {
        let tabs = [];

        for (let s = 0; s < data.length; s++) {
            let left_i = `<i class="icon_bj" style=${data[s].left_i}></i>`
            let left_t = `<a href="">${data[s].left_t}</a>`
            var left_A = [];
            for (let a = 0; a < data[s].left_a.length; a++) {
                let aa = `<a href="" target="_blank">${data[s].left_a[a]}</a>`
                left_A.push(aa)
            }
            let left_a = left_A.join("");
            var con = [];
            for (let d = 0; d < data[s].tab_content.length; d++) {
                con.push(`<dt >${data[s].tab_content[d][0]}</dt>`)
                con.push(` <dd class="clearfix"><ul>`)
                let tt = []
                for (let t = 1; t < data[s].tab_content[d].length; t++) {
                    tt.push(`<li><a title="" href="" target="_blank">${data[s].tab_content[d][t]}</a></li>`)
                }
                con.push(tt.join(""))
                con.push(`</ul></dd>`)
            }
            let content = con.join("")
            let right_title = `<h5>${data[s].right_title}</h5>`
            let right_img = `<img style="" src="${data[s].right_img}"  class="lazyload" >`

            let tab = `
        <div class="category">
                        <div class="mc">
        
                               
                                <div class="item">
                                    <span>
                                        <h3>
                                            ${left_i}
                                           ${left_t}
                                        </h3>
                                        <p>
                                                       ${left_a}
                                        </p>
                                    </span>
                                    <div class="category-details">
                                        <div class="subitem">
                                            <dl class="first" style="z-index:99;">
                                                   
                                                   ${content}
        
                                            </dl>
                                        </div>
                                        <div class="cate-right">
                                            ${right_title}
                                            <ul>
                                                ${right_img}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                
                        </div>
                    </div>
                    `
            tabs.push(tab)

        }
        var cat = document.querySelector(".categorys")
        cat.innerHTML = ` <div class="cate-all"><a href="">全部商品分类</a><b></b></div>${tabs.join("")}`
    };
    create(l)
    $(".item").each(function() {
        $(this).mouseenter(function() {
            $(this).children(".category-details").addClass("block")
            $(this).siblings().children(".category-details").removeClass('block')
        });
        $(this).mouseleave(function() {
            $(this).children(".category-details").removeClass("block");
            
        });
    })
})