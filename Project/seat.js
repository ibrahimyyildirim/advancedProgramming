
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
    
    else alert("Bu koltuğa bilet alamazsınız.")
    
    });
});

function temizle() {                                                       // tarih-film-seans değiştiğinde koltukları sıfırlar             
[].forEach.call(document.querySelectorAll(".seatNumber"), function(el2) {
  var element2 = document.getElementById(el2.id);
  if (element2.classList.contains("seatUnavailable") || element2.classList.contains("seatSelected"))
  //console.log(element)
  element2.classList.remove("seatSelected");
  element2.classList.remove("seatUnavailable");
 //console.log(element2);
      
    });

}

function allSeatUnav() {                                                    // seans kontrolünde koltukların seçilmesini engeller
  [].forEach.call(document.querySelectorAll(".seatNumber"), function(el2) {
    var element2 = document.getElementById(el2.id);

    element2.classList.add("seatUnavailable");

        
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
  
let a =new Array;                                                  //satılan bilet array'i
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


class ticket{                                           // ticket sınıfı  
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
  constructor(){                                          //database uzaktan txt dosyasından çekiliyor
    this.movieDatabase="https://raw.githubusercontent.com/ibrahimyyildirim/deneme/master/film.txt";
    this.tickets=new Map();
    this.readMovie();
  }

readMovie(){                                              //text dosyasının fetch edildiği kısım
  console.log("readMovie "+this.movieDatabase);
  fetch(this.movieDatabase)
  .then(r => r.text())
  .then(r => this.addMovie(r))        
}

addMovie(txt){                                            //satırlar split edilerek film-tarih-seans-koltuk key olarak ekleniyor
  let a = txt.split("\n");
  for (let s of a) {
    let ticket = this.parseMovie(s);
    let keyTicket= ticket.name+" "+ticket.date+" "+ticket.session+" "+ticket.seat;
    this.tickets.set(keyTicket,ticket);
  }
}

parseMovie(line){                                         //split edilen satırlar ile ticket sınıfından yeni bilet oluşturuluyor
  let s = line.split("\t");
   const ticketLine = new ticket(s[0],s[1],s[2],s[3],s[4],s[5])
   return ticketLine
  }

kontrol(){                                       //okunan biletler seçili filmler ile kontrol edilip koltuklar satın alındı olarak değişiyor                             
  var movieName=document.getElementById('movie1').value;
  var movieSession=document.getElementById('session1').value;
  var movieDate=document.getElementById('date').value;

  for(let a of this.tickets){
    
    if(movieName == a[1].name && movieSession == a[1].session && movieDate == a[1].date)
    this.griYap(a[1].seat);

  }

}
griYap(koltuk) {                                              // koltukları satın alınmış hale getiren fonksiyon                 
  
  [].forEach.call(document.querySelectorAll(".seatNumber"), function(el) {
    var element2 = document.getElementById(el.id);
    if(element2.id==koltuk)
    element2.classList.add("seatUnavailable");
  });
}
sat(){                                                      //bilet satın alınma işleminin yapıldığı fonksiyon
  console.log("tiklandi");
  [].forEach.call(document.querySelectorAll(".seatNumber"), function(el2) {
    var element2 = document.getElementById(el2.id);
    if (element2.classList.contains("seatSelected")){
    console.log(element2.id)
    element2.classList.add("seatUnavailable");
    element2.classList.remove("seatSelected");
    var f= element2.id;                                 //seçilen koltuk
    var c=document.getElementById('movie1').value;      //seçilen film
    var e=document.getElementById('date').value;        //seçilen tarih
    var d=document.getElementById('session1').value;    //seçilen seans
    var g=document.getElementById('name').value;        //girilen isim 
    var h=document.getElementById('email').value;       // girilen mail
    const dynamicData = new ticket(c,e,d,f,g,h);        //ticket sınıfından yeni bir nesne üretiliyor
    let dynamicKey= dynamicData.name+" "+dynamicData.date+" "+dynamicData.session+" "+dynamicData.seat;
    db.tickets.set(dynamicKey,dynamicData)              //tickets map'ine film adı-tarih-seans-koltuk key olacak şekilde set ediliyor
  
    let dynamicBilet= "Ad Soyad &emsp;: "+dynamicData.customer
    +"<br>Tarih&emsp;&emsp;&emsp;: "+dynamicData.date
    +"<br>Film    &emsp;&emsp;&emsp;: "+dynamicData.name
    +"<br>Seans&emsp;&emsp;&emsp;: "+dynamicData.session+":00"
    +"<br>Koltuk No &emsp;: "+dynamicData.seat;
    a.push(dynamicBilet);                                 // bilet çıktısı için bilgiler array'e ekleniyor
     //console.log(a)
    //console.log(dynamicKey)

          }
      });
      alert("Biletiniz başarıyla alınmıştır. 'Bilet Çıktısı' butonuna basarak bilet çıktısına ulaşabilirsiniz.");
    }

}
function temizle2(){                                      // form ekranı temizleme fonksiyonu
  document.getElementById("koltukNumara").innerHTML="-";
  document.getElementById("koltukFiyat").innerHTML="-₺";
  document.getElementById("email").innerHTML='';

  list1= [];
  list = [];
}

function kontrolSat(){                                    // satın alma ekranı form bilgileri kontrol fonksiyonu
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
    document.getElementById("name").value='';
    document.getElementById("email").value='';
    temizle2();
   }
}
function makeTable(){                                        // bilet çıktısı için tablo fonksiyonu
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

 function satilanBilet(){                                     // filmin seçili seansına ait bütün bilet bilgileri ve
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
 
 function controlHours(){                             // seans saat kontrolü
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var sessionDate = year + "-" + month + "-" + day;      
  var todayDate = date.getDate();
  var todayHours = date.getHours();
  var sessionHours = document.getElementById("session1").value;
  var seciliTarih = document.getElementById("date").value;
  console.log(todayHours+sessionHours+"gün"+todayDate+sessionDate +"------> "+seciliTarih) 


  todayHours;
  if(sessionDate===seciliTarih&&sessionHours<todayHours ){
      allSeatUnav();
      alert("Önceki bir tarihe bilet alamazsınız.");
  }
  }
  