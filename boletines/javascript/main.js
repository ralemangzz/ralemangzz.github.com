
let links = document.querySelectorAll(".close");


links.forEach(function(link)) {

   link.addEventListener("click",function(evento) {
      ev.preventDefault();

     setTimeout(function(){
       location.href = "/";
     },600)


     return false;

   })
});







// DOM
//Queryselector / querySelectorAll
/*let links = document.querySelectorAll("a");


links.forEach(function(link){
  console.log(link);
});



let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
  td.addEventListener('click',function(){
    console.log(this);
  });
});

*/
