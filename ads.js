// Displaying 3 scripts on the website
var formdata1 = new FormData();
formdata1.append("type", "Dark Square");
formdata1.append("tags", ""); 
var formdata2 = new FormData();
formdata2.append("type", "Dark Square");
formdata2.append("tags", "");

var formdata3 = new FormData();
formdata3.append("type", "Light Square");
formdata3.append("tags", "");

// Adding multiple ajax
var ajax1 = new XMLHttpRequest();
ajax1.addEventListener("load", completeHandler1, false);
ajax1.open("POST", "https://ad.simaneka.com/api/get");
ajax1.setRequestHeader("authorisation", "HwTHYpCv80Tj8JGFETHdMVJLE73kSeqZ");
ajax1.send(formdata1);

var ajax2 = new XMLHttpRequest();
ajax2.addEventListener("load", completeHandler2, false);
ajax2.open("POST", "https://ad.simaneka.com/api/get");
ajax2.setRequestHeader("authorisation", "HwTHYpCv80Tj8JGFETHdMVJLE73kSeqZ");
ajax2.send(formdata2);

var ajax3 = new XMLHttpRequest();
ajax3.addEventListener("load", completeHandler3, false);
ajax3.open("POST", "https://ad.simaneka.com/api/get");
ajax3.setRequestHeader("authorisation", "HwTHYpCv80Tj8JGFETHdMVJLE73kSeqZ");
ajax3.send(formdata3);



function completeHandler1(event) {
var response = JSON.parse(event.target.responseText);
document.querySelector('.advertIMG1').src = response.link;
document.querySelector('.advertIMG1').alt = response.alt;
document.querySelector('.anchorElement1').href = response.href;
}

function completeHandler2(event) {
var response = JSON.parse(event.target.responseText);
document.querySelector('.advertIMG2').src = response.link;
document.querySelector('.advertIMG2').alt = response.alt;
document.querySelector('.anchorElement2').href = response.href;
}

function completeHandler3(event) {
var response = JSON.parse(event.target.responseText);
document.querySelector('.advertIMG3').src = response.link;
document.querySelector('.advertIMG3').alt = response.alt;
document.querySelector('.anchorElement3').href = response.href;
}

