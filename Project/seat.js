
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
      
    }
    
    else console.log("buraya kayıt atanamaz")
    
    });
});

function temizle() {
[].forEach.call(document.querySelectorAll(".seatNumber"), function(el2) {
  var element2 = document.getElementById(el2.id);
  if (element2.classList.contains("seatUnavailable") || element2.classList.contains("seatSelected"))
  //console.log(element)
  element2.classList.remove("seatSelected");
  //element2.classList.remove("seatUnavailable");
 //console.log(element2);
      
    });

}


let a =new Array;
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

function griYap(asd) {
  
[].forEach.call(document.querySelectorAll(".seatNumber"), function(asd) {
  var element2 = document.getElementById(asd.id);
  element2.classList.add("seatUnavailable");
  });
}

class ticket{
  constructor(name,date,session,seat,customer,mail){
    this.name=name
    this.date=date
    this.session=session
    this.seat=seat
    this.customer=customer
    this.mail=mail
  }
}

class database{
  constructor(){
    this.movieDatabase="https://raw.githubusercontent.com/ibrahimyyildirim/deneme/master/film.txt";
    this.tickets=new Map();
    this.readMovie();
  }

readMovie(){
  console.log("readMovie "+this.movieDatabase);
  fetch(this.movieDatabase)
  .then(r => r.text())
  .then(r => this.addMovie(r))        
}

addMovie(txt){
  let a = txt.split("\n");
  for (let s of a) {
    let ticket = this.parseMovie(s);
    let keyTicket= ticket.name+" "+ticket.date+" "+ticket.session+" "+ticket.seat;
    this.tickets.set(keyTicket,ticket);
  }
}

parseMovie(line){
  let s = line.split("\t");
   const ticketLine = new ticket(s[0],s[1],s[2],s[3],s[4],s[5])
   return ticketLine
  }

kontrol(){

  var movieName=document.getElementById('movie1').value;
  var movieSession=document.getElementById('session1').value;
  var movieDate=document.getElementById('date').value;

  var f=movieName+" "+movieSession+" "+movieDate;

  for(let a of this.tickets){
    
    if(movieName == a[1].name && movieSession == a[1].session && movieDate == a[1].date)
    this.griYap(a[1].seat);

  }

}
griYap(asd) {
  
  [].forEach.call(document.querySelectorAll(".seatNumber"), function(el) {
    var element2 = document.getElementById(el.id);
    if(element2.id==asd)
    element2.classList.add("seatUnavailable");
  });
}
sat(){
  console.log("tiklandi");
  [].forEach.call(document.querySelectorAll(".seatNumber"), function(el2) {
    var element2 = document.getElementById(el2.id);
    if (element2.classList.contains("seatSelected")){
    console.log(element2.id)
    element2.classList.add("seatUnavailable");
    element2.classList.remove("seatSelected");
    var f= element2.id;
    var c=document.getElementById('movie1').value;
    var e=document.getElementById('date').value;
    var d=document.getElementById('session1').value;
    var g=document.getElementById('name').value;
    var h=document.getElementById('email').value;
    const dynamicData = new ticket(c,e,d,f,g,h);
    let dynamicKey= dynamicData.name+" "+dynamicData.date+" "+dynamicData.session+" "+dynamicData.seat;
    db.tickets.set(dynamicKey,dynamicData)
    let dynamicBilet= "Sn. "+dynamicData.customer+" "+dynamicData.date+" tarihli '"+dynamicData.name+"' filmi için " 
    +dynamicData.session+" seansına biletiniz alınmıştır. Koltuk No: "+dynamicData.seat;
    a.push(dynamicBilet);
     //console.log(a)
   // console.log(dynamicKey)

          }
      });
    }

}
function temizle2(){
  document.getElementById("koltukNumara").innerHTML="";
  document.getElementById("koltukFiyat").innerHTML="";
  list1= [];
  list = [];
}
function kontrolSat(){
  var Kname=document.getElementById("name").value;
  var Kemail=document.getElementById("email").value;
  if(Kname==""){
    alert("İsim alanı boş olamaz.")
    }
  else if(list.length==0){
  alert("Koltuk seçimi yapılmadı.")
  }else if(Kemail==""){
  alert("Mail alanı boş olamaz.")
  }
  

  else {
    db.sat();  
    document.getElementById("name").innerHTML='';
    document.getElementById("email").innerHTML='';
    temizle2();
   }
}
function makeTable(){
  var satir="";
  satir+="<tr><th></th></tr>"
  
  for(var i=0;i<a.length;i++){
    satir+="<tr>"
    satir+=  "<td>"+a[i]+"</td>"
    satir+="</tr>"
        }
 //console.log(a)
 document.getElementById("tabloBilet").innerHTML=satir;
 a =[]
 }
 
