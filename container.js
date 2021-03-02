class Container extends HTMLElement{

    constructor (){
        super();
      
    }

    set pais(pais){

        this.innerHTML ='<div class="container"><div class="col" >'+pais.name+'</div><div class="col" >'+pais.capital+'</div><div class="col" >'+pais.population+'</div><div class="col" ><button class="btn" data-region="'+pais.region+ '"> Ver Region </button></div> </div>'
    }

}

customElements.define('contain-pais',Container);