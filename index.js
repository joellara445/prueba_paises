import './container.js';


let url='https://restcountries.eu/rest/v2/lang/es';

window.addEventListener('load',()=>{

    feedtable();

});

var modal = document.getElementById('myModal');
modal.style.display = "none";

var spanc = document.getElementsByClassName("close")[0];

spanc.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



//MODAL

function openmodal(reg){
    modal.style.display = "block";
    var region = document.querySelector('#region');
    region.textContent =reg;
    
}




//FUNCIONES MUESTRA


async function consult_paises(paises_url){

    const response = await fetch(paises_url, {

    });
    return response.json(); 
  }

async function feedtable(){

    var respais = await consult_paises(url)
   

    var paises = document.querySelector("#paisestbody");

    respais.forEach(obj => {

        const tdata = document.createElement('contain-pais');
        tdata.pais = obj;

        paises.appendChild(tdata);
       
    });

    var elementsbtn = document.getElementsByClassName("btn");
    for (var i = 0; i < elementsbtn.length; i++) {

        var data = elementsbtn[i].dataset.region;

      

        elementsbtn[i].addEventListener("click", function() {
          
            
            openmodal(this.dataset.region);
          });
    }
    

  
}