function tgwd(){
var arr = document.getElementById("nav-loggout").href.split("=");
var js_xhr = new XMLHttpRequest();
js_xhr.open('GET','http://bbs.mvprpg.com/plugin.php?id=it618_credits:ajax&formhash='+arr[3]+'&ac=qd');
js_xhr.withCredentials = true;
js_xhr.send();
js_xhr.onreadystatechange = function(){
    if(js_xhr.readyState === 4 && js_xhr.status ===200){
        alert(js_xhr.responseText);
    }
};}

function zmq(){
var js_xhr = new XMLHttpRequest();
//js_xhr.open(https://i.ytimg.com/an_webp/iBNtf0qpx8g/mqdefault_6s_480x270.webp?du=3000&sqp=CJCQwYIG&rs=AOn4CLAQ_zNiI7RkaJVIujyKA9slNmBxtw);
js_xhr.open('GET','http://www.map.zhumiquan.com/plugin.php?id=k_misign:sign&operation=qiandao&formhash='+document.querySelector("input[name=formhash]").value+'&from=insign');
js_xhr.withCredentials = true;
js_xhr.send();
js_xhr.onreadystatechange = function(){
    if(js_xhr.readyState === 4 && js_xhr.status ===200){
        alert(js_xhr.responseText);
    }
};}


if(window.location.host==='www.zhumiquan.com') zmq();
else if(window.location.host==='bbs.mvprpg.com') tgwd();