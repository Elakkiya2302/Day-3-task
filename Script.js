var request = new XMLHttpRequest();
request.open("Get","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    for (var i=0;i<result.length;i++){
        var countryName = result[i].name.common;
        var flag = result[i].flag;
        console.log("countryName"+countryName);
        console.log("flag"+flag);
    }
    
}