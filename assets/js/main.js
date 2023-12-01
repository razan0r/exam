
var httpRequest=new XMLHttpRequest ();
var result = [];

function changepizza(q){
    httpRequest.open ("Get", `https://forkify-api.herokuapp.com/api/search?q=${q}`);
    httpRequest.send ();

httpRequest.onreadystatechange = function () { 
    if (httpRequest.readyState==4){
            result=JSON.parse( httpRequest.response).recipes; 
            console.log (result);
            printdata();
    }
}
}

function printdata(){
    var data = "";
    for (var i=0; i<result.length; i++){
        data +=`
        <div class="col-lg-3">
            <div class="recipe">
                <img src="${result[i].image_url}" class="img-fluid" >
                <h2>${result[i].title}</h2>
                <a href="details.html?id=${result[i].recipe_id} " >read more</a>
            </div>
        </div>
        `
    }
document.getElementById("posts").innerHTML =data;
}

var allLinks = document.querySelectorAll(".nav-item");

for (var i=0; i<allLinks.length; i++) {
    allLinks[i].addEventListener("click", function(e){
    changepizza(e.target.innerHTML);
});
}

changepizza("pizza")


var nav = document.getElementById("navbar");
nav.style.position = "fixed";
nav.style.width = "100%";
nav.style.backgroundColor="orange";