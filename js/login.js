// Javascript code für die Login Seite

function featureTest() {
    var list = [];

    if (typeof window.XMLHttpRequest === "undefined") {
	list.push("AJAX-Methoden");
    }
    if (typeof window.WebSocket === "undefined") {
	list.push("WebSocket-Verbindungen");
    }
    if (navigator.cookieEnabled !== true) {
	list.push("Cookies");
    }
    if (list.length > 0) {
	var browserList = document.getElementById("browser-test-list");
	browserList.innerHTML = '';
	for (var i=0; i<list.length; i++) {
	    var point = document.createElement("li");
	    point.innerText = list[i];
	    browserList.appendChild(point);
	}
    } else {
	document.getElementById("browser-test").style.display = 'none';
	document.getElementById("login-form").style.display = 'block';
    }
}

featureTest();

function showzert(val) {
    let style = document.getElementById("sec_zert").style;
    if (val == "b") {
	style.width='240px';
	style.height='240px';
    } else {
	style.width='2%';
	style.height='2%';
    }
}

function showPwd() {
    let pwd = document.getElementById('password');
    if (pwd.type === "password") {
	pwd.type = "text";
    } else {
	pwd.type = "password";
    }
}
