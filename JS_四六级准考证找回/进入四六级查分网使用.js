//使用前先禁用浏览Cookie以及使用Chrome浏览的无痕浏览模式可以提高查找效率。
window.alert=function(){return false;}
var num=3xx711192100101;//此处更换为推断的模糊准考证号;
var name="赖某某";//此处更换为你的姓名;
var temp=0;
var a = setInterval("t_click()",300);
function t_click(){
while(temp==30){temp=0;num+=70;}

if(document.getElementById("z").innerText==""){
console.log("验证"+num);
document.getElementById("zkzh").value=num;
document.getElementById("name").value=name;
document.getElementById("submitButton").click();
num+=1;
temp+=1;
}
else{
window.clearInterval(a);
console.log("==========查询成功===============");
console.log(name+" 的准考证号为:"+(num-1));
return;
    }
};