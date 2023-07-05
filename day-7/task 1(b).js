//Get all the countries with a population of less than 2 lakhs using Filter function

            var xml = new XMLHttpRequest();
            var method = "GET";
            var url = "https://restcountries.com/v3.1/all";
            xml.open(method,url);
            xml.send();
            xml.onload = function (){
                if (xml.status === 200){
                    //console.log(xml.responseText);
                    var arr = JSON.parse(xml.responseText);
                    var fil = arr.filter((element)=>element.population < 200000);
                    var country = fil.map((value)=>value.name.common);
                    console.log(country);

                }
            }
