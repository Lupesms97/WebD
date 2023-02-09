
// Menu Mobile
document.getElementById("hamburguer-icon").onclick = function() {

  document.getElementById("sliding-header-menu-outer").style.right = "0";

};

document.getElementById("sliding-header-menu-close-button").onclick = function() {
  
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";

};




// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unseletected_color = "#646872";
var seletected_color = "#2A2D34";

var about_tags = document.getElementsByClassName("single-tab");

for(var a = 0; a <about_tags.length; a++){

  about_tags[a].onclick = function(){

    for(var b = 0; b <about_tags.length; b++){
      about_tags[b].style["background-color"] = unseletected_color;
      about_tags[b].style["font-weight"] = "normal";
    }

    this.style["background-color"] = seletected_color;
    this.style["font-weight"] = "bold";

    var texto_selecionado = this.innerHTML;
    document.getElementById("box-text").innerHTML =  aboutUs[texto_selecionado] ;

  };


}


// Slider de serviços

var our_services = [
  {
    'title': 'Webdesign',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

var actual_sevice = 0;

document.getElementById("service-previous").onclick = function(){

  if (actual_sevice == 0){
    var previus_service = our_services.length -1;
  } else {
    previus_service = actual_sevice - 1;
  } 

  document.getElementById("service-title").innerHTML = our_services[previus_service].title;
  document.getElementById("service-text").innerHTML = our_services[previus_service].text;

  actual_sevice = previus_service;

}

document.getElementById("service-next").onclick = function() {

  if (actual_sevice == our_services.length -1){
    var next_service = 0;
  }else next_service = actual_sevice + 1;

  document.getElementById("service-title").innerHTML = our_services[next_service].title;
  document.getElementById("service-text").innerHTML = our_services[next_service].text;

  actual_sevice = next_service;

}




// Data Footer

var current_year = new Date;
current_year = current_year.getFullYear();
document.getElementById("current_year").innerHTML = current_year;



  
   


   