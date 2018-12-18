                
                var list =new Array;
                [].forEach.call(document.querySelectorAll(".seatNumber"), function(el) {
                
                var element = document.getElementById(el.id);
                el.addEventListener("click", function() {
                var str = document.getElementById('koltukNumara').innerHTML;
                
                if (!element.classList.contains("seatUnavailable")) { 
                str=element.id;
                    if(!element.classList.contains("seatSelected")){
                    list.push(str);
                    }
                    else{
                    var index = list.indexOf(str);
                    if (index > -1) {
                    list.splice(index, 1);
                            }
                    }
                }

                    document.getElementById('koltukNumara').innerHTML=list;
                            });
                        
                        });