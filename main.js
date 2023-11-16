const r = document.querySelector(':root');
const iframe = document.getElementById("iframe");


function updatSize(){
    r.style.setProperty('--screenHeight', window.innerHeight + 'px');
}

updatSize();
/*

function oniframeload(){
    console.log("The iframe is loaded");
    var titles = iframe.contentWindow.document.getElementsByTagName("H1");
    var summery = document.getElementById("summery");
    for (var title of titles) {
        var text = title.innerHTML;
        var newp = document.createElement("p");
        var newContent = document.createTextNode(text);
        newp.appendChild(newContent);
        summery.appendChild(newp);
    }
}

*/
window.onresize = updatSize;


/*
document.getElementById("divFirst").scrollIntoView();
*/