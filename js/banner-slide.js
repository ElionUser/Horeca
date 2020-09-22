
var CntrBanner = 0
var singleCharts

var data = [
    {"floattitle":"HOTELERIA","image":"./imagenes/banner-belt.png","text":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolore commodi pariatur inventore fuga, doloremque fugiat est ducimus, similique fugit necessitatibus. Iusto nemo maiores in qui cumque ex aliquam quibusdam."},
    {"floattitle":"RESTAURANTE","image":"./imagenes/banner-res.png","text":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolore commodi pariatur inventore fuga, doloremque fugiat est ducimus, similique fugit necessitatibus. Iusto nemo maiores in qui cumque ex aliquam quibusdam."},
    {"floattitle":"CAFE","image":"./imagenes/banner-cafe.png","text":"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolore commodi pariatur inventore fuga, doloremque fugiat est ducimus, similique fugit necessitatibus. Iusto nemo maiores in qui cumque ex aliquam quibusdam."}
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