const toPage = (url) =>{
    window.history.pushState({},"",url)
    getPage(url);
};

window.onpopstate = () =>{
    let url = location.pathname;
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
    getPage(url);




