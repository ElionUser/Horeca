
var CntrBanner = 0
var singleCharts

var data = [
    {"floattitle":"HOTELERIA","image":"./imagenes/banner-belt.png","text":"Dirigido a directivos y profesionales ya actualmente trabajando en el propio sector que quieran profundizar , propietarios y emprendedores que quieran aprender a optimizar su desempeño profesional."},
    {"floattitle":"RESTAURANTE","image":"./imagenes/banner-res.png","text":"Desde ya estamos dispuestos a brindarte las herramientas necesarias a administradores .jefes o encargados sobre la gerencia de bares y restaurantes en áreas que el aspirante sea capaz de diseñar , estructurar , operar y dirigir un negocio gastronómico."},
    {"floattitle":"CAFE","image":"./imagenes/banner-cafe.png","text":"Aprenderás a llamar a cada cosa por su nombre , a conocer la cultura que concierne al café,  a diferenciarlos , a tratarlos con respeto .En definitiva , a tener múltiples excusas por las que tomar un café y disfrutarlo como se merece."}
]

function loadBannerSlide()
{
    //btns 
    btnBannerLeft = document.getElementById('banner-btn-left')
    btnBannerRight = document.getElementById('banner-btn-right')

    // float title 
    floatTitle = document.getElementById('banner-services-text-vert')
    characts = document.getElementById('characts')
    // title
    textBanner = document.getElementById('text-banner')
    singleCharts = document.getElementsByClassName('singleChart')
    //image
    imageBanner = document.getElementById('image-banner')
    imageBanner.setAttribute('src',data[0].image)

    ChangeColor() 
    singleCharts[0].style.color = "#3374bc";
    
    btnBannerRight.addEventListener('click',NextBanner)
    btnBannerLeft.addEventListener('click',BackBanner)
}

function ChangeColor()
{
    for(let i = 0; i < singleCharts.length ; i++)
    {
        singleCharts[i].style.color = "#FFFFFF";
    } 
}

function NextBanner()
{

    CntrBanner++
    if(CntrBanner == 3)
    {
        CntrBanner = 0
        processChange()
        
    }else {
        processChange()
    }
}

function BackBanner()
{
    CntrBanner--
    if(CntrBanner == -1)
    {
        CntrBanner = 2
        processChange()
        
    }else {
        processChange()
    }
}

function processChange()
{
    floatTitle.innerHTML = data[CntrBanner].floattitle  
    ChangeColor() 
    singleCharts[CntrBanner].style.color = "#3374bc"; 
    textBanner.innerHTML = data[CntrBanner].text
    imageBanner.setAttribute('src',data[CntrBanner].image)
}





addEventListener('load',loadBannerSlide)