  function night() {
        document.body.style.backgroundImage='url(fon5.jpg)'
  }
  function light() {
        document.body.style.backgroundImage='url(fon3.jpg)'
  }
  function validator(){
    if (document.getElementById("Name").value.match(/^[A-Za-z0-9]+$/)){
      if (document.getElementById("Password").value.match(/^[A-Za-z0-9]+$/)){
        if (document.getElementById("mail").value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)){
          document.getElementById("error").innerHTML ="";
          JSONtable();}
        else {
            document.getElementById("error").innerHTML ="<b>Please enter a valid email</b>";}}
      else {
          document.getElementById("error").innerHTML ="<b>Please enter a valid password</b>";}}
    else {
        document.getElementById("error").innerHTML ="<b>Please enter a valid name</b>";}}
function JSONtable(){
let obj = { table: [] };
obj.table.push({login:document.getElementById("Name").value, password:document.getElementById("Password").value, email:document.getElementById("mail").value});
var json = JSON.stringify(obj);
console.log(obj)}
