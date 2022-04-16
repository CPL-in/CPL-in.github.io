
function sayName1(){
  alert("My name is John. Vivian is my daughter. Eh...I know that William likes to have affairs with pretty young women.");
}
function sayName2(){
  alert("My name is Vivian. William has been pursuing me lately, but I know he's married.");
}
function sayName3(){
  alert("My name is Tom. I love Vivian.");
}
function sayName4(){
  alert("My name is Channel. William is my husband, but I don't love him, I only care about money.");
}

function sayName(){
  var response = prompt("你认为谁是凶手？\n John  Vivian  Tom  Channel");
 if (response === "Tom"){
    alert("所指认的嫌疑人 " + response + " 是真正的凶手！恭喜你答对了！ " )
 }
else{
    alert("所指认的嫌疑人 " + response + " 不是真正的凶手，再想一想 " )
 }
}
