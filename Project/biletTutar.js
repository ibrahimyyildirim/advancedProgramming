var list1 = new Array;
                [].forEach.call(document.querySelectorAll(".seatNumber"), function(el) {
                var element = document.getElementById(el.id);
                el.addEventListener("click", function() {
                var str = document.getElementById('koltukFiyat').innerHTML;
                if (!element.classList.contains("seatUnavailable")) { 
                str=element.id;
                    if(!element.classList.contains("seatSelected")){
                    list1.push(str);
                    }
                    else{
                    var index = list1.indexOf(str);
                    if (index > -1) {
                    list1.splice(index, 1);
                            }
                    }
                }
                var b = list1.length;
                    document.getElementById('koltukFiyat').innerHTML=(b*25)+"₺";
                            });
                        
                        });