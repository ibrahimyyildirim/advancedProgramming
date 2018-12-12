var sayac = new Map();
[].forEach.call(document.querySelectorAll(".seatNumber"), function(el) {
  var element = document.getElementById(el.id);

  el.addEventListener("click", function() {
    console.log(element.id)
    if (!element.classList.contains("seatUnavailable")) {   // eğer satın alınmamışsa içine gir
      
      if(element.classList.contains("seatSelected")){
        element.classList.remove("seatSelected");           // seçili olana tıklandıysa sil
      }
      else 
      element.classList.add("seatSelected");                // tıklanmadıysa seçilmiş olarak işaretle
      sayac.set(element.id).toString()
    }

    else console.log("buraya kayıt atanamaz")
    



});
});

function temizle() {
  console.log("tiklandi");
[].forEach.call(document.querySelectorAll(".seatNumber"), function(el2) {
  var element2 = document.getElementById(el2.id);
  if (element2.classList.contains("seatUnavailable") || element2.classList.contains("seatSelected"))
  //console.log(element)
  element2.classList.remove("seatSelected");
  element2.classList.remove("seatUnavailable");
 //console.log(element2);
      
});

}

function satinAl() {
  console.log("tiklandi");
[].forEach.call(document.querySelectorAll(".seatNumber"), function(el2) {
  var element2 = document.getElementById(el2.id);
  if (element2.classList.contains("seatSelected")){
  console.log(element2.id)
  element2.classList.add("seatUnavailable");
  element2.classList.remove("seatSelected");

}
});

}