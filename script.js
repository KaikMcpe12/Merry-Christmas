const navMenu = document.getElementById('nav__menu'),
    navToggle = document.getElementById('nav__toggle'),
    navClose = document.getElementById('nav__close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=========================================================*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () => {
    const navMenu = document.getElementById('nav__menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=========================================================*/
const titleData = document.getElementById('title-data'),
    numberData = document.getElementById('number-data'),
    textData = document.getElementById('text-data'),
    msgChristmas = document.getElementById('msg-christmas')

const christmasCountdown = () => {
    let now = new Date(),
        currentMoth = now.getMonth() + 1,
        currentDay = now.getDate()

    let nextChristmasYear = now.getFullYear()
    if(currentMoth == 12 && currentDay > 25){
        nextChristmasYear += 1
    }

    let nextChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`,
        christmasDay = new Date(nextChristmasDate)
        timeLeft = christmasDay - now

    let days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0

    if(currentMoth != 12 || (currentMoth == 12 && currentDay != 25)){
        days = Math.floor(timeLeft / 1000 / 60 / 60 / 24)
        hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24
        minutes = Math.floor(timeLeft / 1000 / 60) % 60
        seconds = Math.floor(timeLeft / 1000) % 60
    }

    numberData.innerHTML = days < 10 ? `0${days}` : days
    textData.innerHTML = 'Dias'

    //Hours
    if(currentDay == 24 && currentMoth == 12){
        numberData.innerHTML = hours < 10 ? `0${hours}` : hours
        textData.innerHTML = 'Horas'
    }

    //Minutes
    if(currentDay == 24 && hours === 0 && currentMoth == 12){
        numberData.innerHTML = minutes < 10 ? `0${minutes}` : minutes
        textData.innerHTML = 'Minutos'
    }

    //Seconds
    if(currentDay == 24 && hours === 0 && minutes === 0 && currentMoth == 12){
        numberData.innerHTML = seconds < 10 ? `0${seconds}` : seconds
        textData.innerHTML = 'Segundos'
    }

    //Message
    if(currentMoth == 12 && currentDay == 25){
        titleData.style.display = 'none'
        msgChristmas.style.display = 'block'
        msgChristmas.innerHTML = 'Hoje é 25 de dezembro, Feliz Natal!'
    }

    //Remove message
    if(currentMoth == 12 && currentDay == 26){
        titleData.style.display = 'block'
        msgChristmas.style.display = 'none'
    }

    console.log(currentMoth)
}

setInterval(christmasCountdown,1000)