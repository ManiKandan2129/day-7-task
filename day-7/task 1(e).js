//Print the country which uses US Dollars as currency.


var xml = new XMLHttpRequest();
var method = "GET";
var url = "https://restcountries.com/v3.1/all";
xml.open(method,url);
xml.send();
xml.onload = function (){
    if (xml.status === 200){
        var arr = JSON.parse(xml.responseText);
        let result = arr.filter((element)=>element.currencies.symbol == "$");
        let result1 = result.map((ele)=>ele.name.common);
        console.log(result1);
           
      
    }
}