const r = document.querySelector(':root');
const iframe = document.getElementById("iframe");

var elements;
console.log("Start!");

function updatSize(){
    r.style.setProperty('--screenHeight', window.innerHeight + 'px');
    r.style.setProperty('--screenWidht', window.innerWidth + 'px');
}

updatSize();

window.onresize = updatSize;

function oniframeload(){
    console.log("The iframe is loaded");
    elements = iframe.contentWindow.document.getElementsByTagName("H1");
    document.querySelectorAll('.summeryButton').forEach(e => e.remove());
    var summery = document.getElementById("summery");
    for (let i = 0;i < elements.length; i++) {
        var element = elements[i];
        var text = element.innerHTML;
        var newp = document.createElement("button");
        var newContent = document.createTextNode(text);
        newp.appendChild(newContent);
        newp.classList.add("summeryButton");
        newp.onclick = function() { scrollIntoView(i) };
        summery.appendChild(newp);
    }
}

function scrollIntoView(i) {
    elements[i].scrollIntoView({behavior: "smooth"});
}

function loadside(src) {
    iframe.src = src;
}