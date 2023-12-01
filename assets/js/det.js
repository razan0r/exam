
var url=document.URL;
var newUrl=new URL(url);
var searchId=newUrl.searchParams;
var recipe_id=searchId.get('id');
var httpRequest=new XMLHttpRequest ();
var result = [];

function getId(recipe_id) {
    httpRequest.open ("Get", `https://forkify-api.herokuapp.com/api/get?rId=${recipe_id}`);
httpRequest.send ();

        httpRequest.onreadystatechange = function () { 
            if (httpRequest.readyState==4){
                result=JSON.parse( httpRequest.response).recipe;
                printdata();
    }
}
}

function printdata(){
    var data = "";
        data =`
            <div class="recipe">
                <img src="${result.image_url}" class="img-fluid" >
                <h2>${result.title}</h2>
                <p>id: ${result.recipe_id}</p>
                <a href="${result.source_url}">recipe</a>
            </div>
        `
document.getElementById("read").innerHTML =data;
}

getId(recipe_id);

