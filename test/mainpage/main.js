document.addEventListener("DOMContentLoaded",function(){

    var random1 = "hello:Random1";

    var btn = document.getElementById("btn")
    

    btn.onclick = function(event){

        event
    
    localStorage.setItem("random1",random1);

    console.log("abc")
}



})