async function ajax(url) {
    let content = document.getElementById("content-body");
    content.classList.add("trans-out");  //  播放移除动画
    
    let html_wait = fetch(url).catch(() => {location.reload();});

    setTimeout(async () => {  //延迟0.25s执行以确保动画完整播放
        let html = await (await html_wait).text();
        const parser = new DOMParser();  
        const content_body = parser.parseFromString(html, 'text/html');  // 解析DOM树

        document.title = content_body.title; // 更新标题
        content.classList.remove("trans-out");  // 移除动画
        content.innerHTML = content_body.getElementById("content-body").innerHTML; 

        document.querySelectorAll("#content-body > script").forEach((script) => {
            eval(script.innerHTML);  // 重新执行js
        })
        topFunction();  // 返回顶部

        ajax_addlistener(["#content-body h1 > a", ".archive-article-link", "#article-nav > a", "#page-nav > a", ".meta-info-bar a"]);  // 给替换后的html添加事件
    }, 250)
}

let selector_list = ["#content-body h1 > a", "#main-nav > a", ".archive-article-link", "#article-nav > a", ".category-box > a", "#dropdown-link-list > a", "#page-nav > a", "#title-nav > a", ".meta-info-bar a"];

let ajax_addlistener = (selector_list) => {
    for (let index in selector_list) {
        document.querySelectorAll(selector_list[index]).forEach((a) => {
            if (!a.listener) { 
                a.addEventListener("click", (e) => {
                    e.preventDefault();
                    const url = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + a.getAttribute('href');
                    ajax(url);
                    window.history.pushState(url, '', url);  // 更新url
                });
                a.listener = "ture";
            }
        })
    }
    let banner = document.getElementById("banner");
    let nav = document.getElementById("nav");
    if(window.location.pathname == "/" && banner) {
        banner.classList.add("is_home");
        nav.classList.add("is_home");
    }else{
        banner.classList.remove("is_home");
        nav.classList.remove("is_home");
    }
}

ajax_addlistener(selector_list);

window.addEventListener('popstate',(url) => {
    ajax(url.state);
})
