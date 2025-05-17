const loadDisplay = document.querySelector ('.page__level')
const gameDisplay = document.querySelector ('.page')
const start = document.querySelector('#start')
let maxNumber = document.querySelector('.maxLength')
let trySetting = document.querySelector ('.maxLengthTry')
let res = document.querySelector ('.input')
const btn = document.querySelector ('.btn')
const p = document.querySelector ('.p')
const win = document.querySelector('.page__winner')
let tryNum = document.querySelector ('.try')
const restart = document.querySelector ('.button')
let lastNum = document.querySelector('.lastNum')
const looser = document.querySelector('.page__lose')
let trueNum = document.querySelector ('.true')
const reloadBtn = document.querySelector ('#restart')
const factNum = document.querySelector ('.factNum')
const min = 1
let max = maxNumber.value




let i = ''


function beggin () {
    
    max = maxNumber.value
    
  
    res.max = max
    factNum.textContent = max
    let setMaxTry = trySetting.value
    lastNum.textContent = setMaxTry
    i = Math.floor(Math.random() * (max - min +1) + min)

}
start.addEventListener ('click', () => {
    beggin()
     const max = parseInt(maxNumber.value); 
    const maxTries = parseInt(trySetting.value);
    if (max >= 15 && maxTries <= 15 && max > maxTries) {

  
      loadDisplay.style = 'display:none;'
    gameDisplay.style = "display:flex;" 
  
}   if (max < 15) {
        const warnMaxNum = document.querySelector ('.warnMaxNum')
        warnMaxNum.style = 'color:red'
    }
    if (maxTries > 15) {
        const warnMaxTry = document.querySelector ('.warnMaxTry')
        warnMaxTry.style = 'color:red'
    }
    if (max > 15 && maxTries > 15) {
        const warnMaxNum = document.querySelector ('.warnMaxNum')
        warnMaxNum.style = 'color:white'
        const warnMaxTry = document.querySelector ('.warnMaxTry')
        warnMaxTry.style = 'color:red'
    }
      if (max < 15 && maxTries < 15) {
        const warnMaxNum = document.querySelector ('.warnMaxNum')
        warnMaxNum.style = 'color:red'
        const warnMaxTry = document.querySelector ('.warnMaxTry')
        warnMaxTry.style = 'color:white'
    }

})





function clickNum () {
   
    if (lastNum.textContent < 5) {
        lastNum.style = "color: red;"
    } if (lastNum.textContent < 4) {
        lastNum.style ="font-weight: bold; color: red;"
    } if (lastNum.textContent == 0) {
        looser.style = "display: block;"
        win.style = "display: none;"
        gameDisplay.style = "display:none;"
        trueNum.textContent = i
    }
 
}

function randomApp () {
    console.log (i)
    if (res.value < i) {
        p.textContent ='Больше!'
    }
    else if (res.value > i) {
        p.textContent = 'Меньше!'
    } else {
        win.style = "display: block;"
         gameDisplay.style = "display:none;"
         looser.style = "display: none;"
    }

}
btn.addEventListener ('click', () => {
    const userNum = parseInt(res.value)

    if (userNum >= 1 && userNum <= max) {
    btn.style = "background-color:rgb(88, 155, 249);"
    setTimeout(( ) => btn.style = "background-color: rgb(130, 182, 255);", 250)
    ++tryNum.textContent
    --lastNum.textContent
    
    randomApp ()
    clickNum () 
}
else {
    p.textContent =   `Необходимо ввести число от 1 до ${max}`
    return
}
})

restart.addEventListener ('click', () => {
    location.reload();
})

reloadBtn.addEventListener ('click', () => {
    location.reload();
})


