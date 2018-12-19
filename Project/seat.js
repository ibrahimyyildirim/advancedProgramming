
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
  element2.classList.remove("seatUnavailable");
 //console.log(element2);
      
    });

}

function secimleriKaldir() {
  [].forEach.call(document.querySelectorAll(".seatNumber"), function(el2) {
    var element2 = document.getElementById(el2.id);
    if (element2.classList.contains("seatUnavailable") || element2.classList.contains("seatSelected"))
    //console.log(element)
    element2.classList.remove("seatSelected");
   // element2.classList.remove("seatUnavailable");
   //console.log(element2);
        
      });
  
  }
  
let a =new Array;       //satılan bilet array'i
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

  for(let a of this.tickets){
    
    if(movieName == a[1].name && movieSession == a[1].session && movieDate == a[1].date)
    this.griYap(a[1].seat);

  }

}
griYap(koltuk) {
  
  [].forEach.call(document.querySelectorAll(".seatNumber"), function(el) {
    var element2 = document.getElementById(el.id);
    if(element2.id==koltuk)
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
  
    let dynamicBilet= "Ad Soyad &emsp;: "+dynamicData.customer
    +"<br>Tarih&emsp;&emsp;&emsp;: "+dynamicData.date
    +"<br>Film    &emsp;&emsp;&emsp;: "+dynamicData.name
    +"<br>Seans&emsp;&emsp;&emsp;: "+dynamicData.session
    +"<br>Koltuk No &emsp;: "+dynamicData.seat;
    a.push(dynamicBilet);
     //console.log(a)
    //console.log(dynamicKey)

          }
      });
      alert("Biletiniz başarıyla alınmıştır. Bilet Çıktı butonuna basarak bilet çıktısına ulaşabilirsiniz.");
    }

}
function temizle2(){
  document.getElementById("koltukNumara").innerHTML="";
  document.getElementById("koltukFiyat").innerHTML="";
  document.getElementById("email").innerHTML='';

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
    satir+="<td>"+a[i]+"</td>"
    satir+="</tr>"
        }
 //console.log(a)
 document.getElementById("tabloBilet").innerHTML=satir;
 a =[]
 }

 function satilanBilet(){
  var secilenFilm = document.getElementById('movie1').value;
  var secilenTarih = document.getElementById('date').value;
  var secilenSeans = document.getElementById('session1').value;
  var html="";
 
 html+="<tr><th>"+"Film"+"</th><th>"+"İsim"+"</th><th>"+"Koltuk"+"</th><th>"+"Tarih"+"</th><th>"+"Mail"+"</th></tr>"

  for (let a of db.tickets){
     if( secilenFilm == a[1].name && secilenTarih == a[1].date && secilenSeans == a[1].session ){
      html+="<tr>"
         html+="<td>"+a[1].name+"</td>"
         html+="<td>"+a[1].customer+"</td>"
         html+="<td>"+a[1].seat+"</td>"
         html+="<td>"+a[1].date+"</td>"
         html+="<td>"+a[1].mail+"</td>"
         html+="</tr>"
     }

     document.getElementById("satilanTablo").innerHTML=html;
     var x = document.getElementById("satilanTablo").rows.length-1;
     if(x==0){
      document.getElementById("satilanTablo").innerHTML="<caption>Filmin bu seansı için henüz satış olmamıştır. </caption>";
     }
     else{
     document.getElementById("satilanTablo").innerHTML=html+"<caption>Bu seans için toplam " + x + " adet bilet satılmıştır. "
     +(106-x)+ " adet boş koltuk bulunmaktadır.<br>Toplam Bilet Geliri: "+(x*25)+"₺</caption>";}
  }  
 
 }
 
