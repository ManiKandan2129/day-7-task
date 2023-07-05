//Get all the countries from Asia continent /region using Filter function


            var xml = new XMLHttpRequest();
            var method = "GET";
            var url = "https://restcountries.com/v3.1/all";
            xml.open(method,url);
            xml.send();
            xml.onload = function() {
                if(xml.status === 200){
                    //console.log(xml.responseText);
                    var array = JSON.parse(xml.responseText);
                    //console.log(array);
                    var asiacon = array.filter((element)=>element.continents == "Asia");
                    var country = asiacon.map((ele)=>ele.name.common);
                    console.log(country);

                }
            }