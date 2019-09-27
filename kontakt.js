var ime = document.getElementById("ime");
var posta = document.getElementById("posta");
var info = document.getElementById("info");
var dugme = document.getElementById("btn");

dugme.addEventListener('click', validacija);

ime.addEventListener("focus", clear);
posta.addEventListener("focus", clear);
info.addEventListener("focus", clear);




function validacija () {

	if(ime.value = "") {
		ime.value = "OVO JE OBAVEZNO POLJE";
        ime.style.color = "red";
	};

    

    if(posta.value = "") {
		posta.value = "OVO JE OBAVEZNO POLJE";
        posta.style.color = "red";
	};

    if(info.value = ""){
		info.value = "OVO JE OBAVEZNO POLJE";
        info.style.color = "red";
	};
};



function clear() {
	this.value = "";
	this.style.color = "black";
};