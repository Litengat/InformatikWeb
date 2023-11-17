const r = document.querySelector(':root');
const iframe = document.getElementById("iframe");
var elements;
console.log("Start!")

function updatSize(){
    r.style.setProperty('--screenHeight', window.innerHeight + 'px');
    r.style.setProperty('--screenWidht', window.innerWidth + 'px');
}
updatSize();
window.onresize = updatSize;

function onscroll() {
    var buttons = document.getElementById("summery").getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        const element = buttons[i];
        if(isInViewport(elements[i])){
            element.classList.add("Viewed");
        }else{
            element.classList.remove("Viewed");
        }
        
    }
}

window.onscroll = onscroll();




function oniframeload(){
    console.log("The iframe is loaded");
    elements = iframe.contentWindow.document.getElementsByTagName("H1");
    var summery = document.getElementById("summery");
    for (let i = 0;i < elements.length; i++) {
        var element = elements[i];
        var text = element.innerHTML;
        var newp = document.createElement("button");
        var newContent = document.createTextNode(text);
        newp.appendChild(newContent);
        newp.onclick = function() { scrollIntoView(i) };
        summery.appendChild(newp);
    }
}

function scrollIntoView(i) {
    elements[i].scrollIntoView({behavior: "smooth"});
}

function isInViewport(el) {
    if (el.style.display === 'none') return false
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document. documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document. documentElement.clientWidth)
    );
  }