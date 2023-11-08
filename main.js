

const iframe = document.getElementById("myFrame");




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

function iframeload() {
    const iframe = document.getElementById("myFrame");

    const header = document.getElementById("header");
    iframe.height = header.offsetHeight + screen.height



}