//Print the total population of countries using reduce function


var xml = new XMLHttpRequest();
var method = "GET";
var url = "https://restcountries.com/v3.1/all";
xml.open(method,url);
xml.send();
xml.onload = function (){
    if (xml.status === 200){
        //console.log(xml.responseText);
        var arr = JSON.parse(xml.responseText);
        var result = arr.reduce((acc, element)=>acc+element.population);
        console.log(result);
       
      
    }
}