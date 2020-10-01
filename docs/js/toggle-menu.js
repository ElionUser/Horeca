
var power = true

function loadToggle()
{
    btnMenu = document.getElementById('box-menu')
    menu = document.getElementById('menu')

    if(screen.width < 993 )
    {
        power = false
        menu.style.display = 'none'
    }

    btnMenu.addEventListener('click',toggleMenu) 

    
}

function toggleMenu()
{
    

    if(power == false)
    {
        menu.style.display = 'block'
        power = true

    } else {
        menu.style.display = 'none'
        power = false
    }
}


addEventListener('load',loadToggle)