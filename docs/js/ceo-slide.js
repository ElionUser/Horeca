
var ceo = new Array()
var CounterCeo = -1

ceo = [
    {"name":"Matthew Adam","expertice":"Presidente y co fundador","text":"Su función en Mundo Horeca incluye la creación de equipos, el marketing estratégico y las iniciativas de desarrollo empresarial, todo con el objetivo de permitir que los socios del mercado sean financieramente independientes y libres de deudas.","image":"./imagenes/ceo_01.jpg"},
    {"name":"MBA Angel chocano ","expertice":"Director Académico Mundo Horeca","text":"Con experiencia en negocios gastronómicos.Le apasiona ayudar a los emprendedores a tener éxito y se centra en apoyar su éxito con un enfoque centrado en el campo.","image":"./imagenes/AngelChocano.jpg"},
]


function loadCEOSlide()
{
    nameBox = document.getElementById('name-ceo')
    experticeBox = document.getElementById('expertice-ceo')
    textBox = document.getElementById('text-ceo')
    imageCeo = document.getElementById('image-Ceo')

    btnBack = document.getElementById('btn-ceo-back')
    btnNext = document.getElementById('btn-ceo-next')

    btnNext.addEventListener('click',NextCeo)
    btnBack.addEventListener('click',NextCeo)

    NextCeo()
}

function NextCeo()
{
    CounterCeo++
    if(CounterCeo == 2)
    {
        CounterCeo = 0
        ChangeCeo()
    } else { ChangeCeo() }
    
    
}

function BackCeo()
{
    CounterCeo--
    if(CounterCeo == -1)
    {
        CounterCeo = 1
        ChangeCeo()
    } else { ChangeCeo() }
    
}

function ChangeCeo()
{
    nameBox.innerHTML = ceo[CounterCeo].name
    experticeBox.innerHTML = ceo[CounterCeo].expertice
    textBox.innerHTML = ceo[CounterCeo].text
    imageCeo.setAttribute('src',ceo[CounterCeo].image) 
}


addEventListener('load',loadCEOSlide)