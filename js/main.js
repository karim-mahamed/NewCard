
$(document).ready(function(){

var employeeName=document.getElementById("employeeName");
var employeePhone=document.getElementById("employeePhone");
var employeeAge=document.getElementById("employeeAge");
var employeeTitle=document.getElementById("employeeTitle");
var btnClick=document.getElementById("btnClick");
var btnUpdate=document.getElementById("btnUpdate");
var empolyeesCont;
var index;


if(JSON.parse(localStorage.getItem("employessList"))==null)
{
    empolyeesCont=[];
}
else{
empolyeesCont=JSON.parse(localStorage.getItem("employessList"));
displaydata()
}

 btnClick.onclick=function(){
  
  addEmp();
  displaydata()
 
 }
 
 function addEmp(){
   var empolyees={
    employeeName:employeeName.value,
    employeePhone:employeePhone.value,
    employeeAge:employeeAge.value,
    employeeTitle:employeeTitle.value,
  }
//   if(validateData(empolyees)==true){
//   empolyeesCont.push(empolyees);
//   localStorage.setItem("employessList",JSON.stringify(empolyeesCont));}
 
//   else{
//     alert("data not valid")

//  }
//validateData(empolyees);
empolyeesCont.push(empolyees);
localStorage.setItem("employessList",JSON.stringify(empolyeesCont));
}

//  function validateData(emp){
//   var nameRejex=/^[A-Z][a-zA-Z]{2,8}$/;
//   // var phoneRejex=/^01[0-9]{8}/;
//   var ageRejex=/^82/;
//   if((nameRejex.test(emp.employeeName)==true) && (ageRejex.test(emp.employeeAge)==true))
//   {
//     return true
// }
// else{
//    return false
// }
//  }

  $('#btnClick').click(function validateData(e) {
    e.preventDefault();
    var employeeName = $('#employeeName').val();
    var employeePhone = $('#employeePhone').val();
    var employeeAge = $('#employeeAge').val();
    $(".error").remove();
    if (employeeName.length < 1) {
      $('#employeeName').after('<span class="error">This field is required</span>');
    }
    else {
      var regEx=/^[A-Z][a-zA-Z]{2,8}$/;
      var validEmail = regEx.test(employeeName);
      if (!validEmail) {
        $('#employeeName').after('<span class="error">Enter a valid name</span>');
      }}
     if 
     (employeePhone.length < 1) {
      $('#employeePhone').after('<span class="error">This field is required</span>');
    }
    if (employeeAge.length < 1) {
      $('#employeeAge').after('<span class="error">This field is required</span>');
    }
    
  
    });



 function displaydata(){
  var rows='';
  for(var i=0;i<empolyeesCont.length;i++){
    rows+=`<div class="col-md-3">
    <div class="data">
        <img src="images/bg-img/12.jpg " class="img-fluid">
        <h2>`+empolyeesCont[i].employeeName+`</h2>
        <h3>`+empolyeesCont[i].employeePhone+`</h3>
        <span>`+empolyeesCont[i].employeeAge+`</span>
        <span class="badge badge-primary">`+empolyeesCont[i].employeeTitle+`</span>
        <button onclick="deleteDate(`+i+`)" class="btn btn-danger"> delete</button>
         <button onclick="editDate(`+i+`)" class="btn  btn-info"> edit</button>
    </div>
</div>`

  }
  document.getElementById("rowsData").innerHTML=rows
 }



 function deleteDate(ind){
 
  empolyeesCont.splice(ind,1);
  localStorage.setItem("employessList",JSON.stringify(empolyeesCont) )
  displaydata();

}
var x=0;
function editDate(i){
  employeeName.value=empolyeesCont[i].employeeName
  employeePhone.value=empolyeesCont[i].employeePhone
  employeeAge.value=empolyeesCont[i].employeeAge
  employeeTitle.value=empolyeesCont[i].employeeTitle
 x= i;
 btnUpdate.classList.add("show")

}
btnUpdate.onclick=function(){
  upDate()
 }

function upDate(){
 
  empolyeesCont[x].employeeName=employeeName.value
  empolyeesCont[x].employeePhone= employeePhone.value
  empolyeesCont[x].employeeAge= employeeAge.value
  empolyeesCont[x].employeeTitle=employeeTitle.value
 localStorage.setItem("employessList",JSON.stringify(empolyeesCont) )
  displaydata();

  
}



 function searchEmps(text){
  var rows='';
  for(var i=0;i<empolyeesCont.length;i++){
    if(empolyeesCont[i].employeeName.toLowerCase().includes(text.toLowerCase())){
    rows+=`<div class="col-md-3">
    <div class="data">
        <img src="images/bg-img/12.jpg " class="img-fluid">
        <h2>`+empolyeesCont[i].employeeName+`</h2>
        <h3>`+empolyeesCont[i].employeePhone+`</h3>
        <span>`+empolyeesCont[i].employeeAge+`</span>
        <span class="badge badge-primary">`+empolyeesCont[i].employeeTitle+`</span>
        <button onclick="deleteDate(`+i+`)" class="btn btn-danger"> delete</button>
    </div>
</div>`
document.getElementById("rowsData").innerHTML=rows
  }
 }}
})