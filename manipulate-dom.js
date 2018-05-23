// console.log("working");
// var x = document.getElementsByTagName("body");
// for (i=0;i<x.length;i++){
// x[i].innerHTML="dfgfd";
// }

var iFrame  = document.createElement ("iframe");
iFrame.id ="tricon-bot-sigma";
iFrame.src  = chrome.extension.getURL ("index.html");

iFrame= document.body.insertBefore (iFrame, document.body.firstChild);

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById("tricon-bot-sigma-header").addEventListener('click', function(){
//         window.alert("working");
//     });
// });

// toggle = () => {
//     window.alert("ok");
//     window.parent.document.getElementById('tricon-bot-sigma').class = "iframe-collapsed";
// }