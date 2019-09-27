var imee = document.getElementById("ime");
var posta = document.getElementById("posta");
var infoo = document.getElementById("info");
var dugme = document.getElementById("btn");

dugme.addEventListener("click", validacija)

imee.addEventListener("focus", clear);
posta.addEventListener("focus", clear);
infoo.addEventListener("focus", clear);


function validacija () {



if (posta.value == "") {

    	posta.value="obavezno";
    	
    };


   

	
    

    
};



function clear() {
	this.value = "";
	
};