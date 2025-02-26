document.addEventListener("DOMContentLoaded",function(){
    var name;
    var pw;

    let btn = document.getElementById("registerBtn");

    btn.onclick = function(event){
        event.preventDefault();    
        
         name = document.getElementById("nameid").value;
         pw = document.getElementById("pwid").value;
    
        if(name === "" || pw === ""){
          console.log("no space")
        }
        else{
            localStorage.setItem("name",name);
            localStorage.setItem("pw",pw);
            console.log("no enter")
            window.location.reload(true);
            window.alert("successfully register")
        }
    };

    console.log(name)
})
