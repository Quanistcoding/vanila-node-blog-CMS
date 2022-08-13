const toPage = (url) =>{
    window.history.pushState({},"",url)
    console.log("onpushstate" + url);
    getPage(url);
};

window.onpopstate = () =>{
    let url = location.pathname;
    console.log("onpopstate" + url);
    getPage(url);
};

const getPage = (url) => {
    fetch("/pages/" + url).then(x=>x.text())
    .then(y=>{
        document.getElementById('content').innerHTML = y;
    }).catch(err=>{
        console.log(err)
    })
}

let url = location.pathname;
    console.log(url);
    getPage(url);