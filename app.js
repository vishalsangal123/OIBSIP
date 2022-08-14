
function convertor()
{
let degree=(document.getElementById("degree").value);
let type = document.getElementById("type").value;

let size=(Number)(degree.length);
console.log(type);
if(type==='0')
{

    let ans="";
let result=document.getElementById("result");
result.value=ans;


}
if(type==='1'  && size>=1)
{

let ans=(degree*9/5) + 32;
let result=document.getElementById("result");
if (!Number.isInteger(ans)) {
    ans = ans.toFixed(4);
}
result.value=ans+'\u00B0 '+"F";


}
 if(type==='2' && size>=1)
{

let ans=(degree- 32)*5/9;
let result=document.getElementById("result");
if (!Number.isInteger(ans)) {
    ans = ans.toFixed(4);
}
result.value=ans+'\u00B0 '+"C";


}
}
