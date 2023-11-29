const r = document.querySelector(':root');
const iframe = document.getElementById("iframe");

var elements;
var elementsButton;

console.log("Start!");
function updatSize(){
    r.style.setProperty('--screenHeight', window.innerHeight + 'px');
    r.style.setProperty('--screenWidht', window.innerWidth + 'px');
}

updatSize();
onload();
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
    
    scrollIntoView(getParameter("element"));
}
function oniframescroll() {
    console.log("s")
}


function scrollIntoView(i) {
    elements[i].scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

function loadside(src) {
    location.search = "?side=" + src;
    iframe.src = side + src;
}
function onload() {
    iframe.src = getParameter("side");
    
}


function getParameter(key) {
    var parameter = location.search;
    var values = parameter.split('?');
    var parameter;
    values.shift();
    values.forEach(e => {
        var value = e.split('=');
        if(value[0] == key){
            parameter = value[1];
        }
    });
    return parameter
}


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

