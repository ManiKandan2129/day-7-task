//Print the following details name, capital, flag using forEach function

var xml = new XMLHttpRequest();
var method = "GET";
var url = "https://restcountries.com/v3.1/all";
xml.open(method,url);
xml.send();
xml.onload = function (){
    if (xml.status === 200){
        //console.log(xml.responseText);
        var arr = JSON.parse(xml.responseText);
        arr.forEach((element)=>{
            console.log(element.name.common);
            console.log(element.capital);
            console.log(element.flag);
        });
    }
}