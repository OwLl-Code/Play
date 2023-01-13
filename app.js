const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')

const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const bord = document.querySelector('#bord')

let time = 0
let score = 0

startBtn.addEventListener('click',(e) =>{
    e.preventDefault()
screens[0].classList.add('up')
})


timeList.addEventListener('click',(e) =>{
  if (e.target.classList.contains('time-btn')){
time = parseInt(e.target.getAttribute('data-time'))
      screens[1].classList.add('up')
      startGame()
  }
})
board.addEventListener('click', e =>{
if(e.target.classList.contains('circle')){
score++
    e.target.remove()
    createRandomCircle()
}
})


function startGame(){
    setInterval (decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function decreaseTime (){
    if(time===0){
finishGame()
    }
    else {
        let current = --time
        if (current<10){
            current = `0${current}`
        }
        setTime(current)
    }
}

function setTime (value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    timeEl.parentNode.classList.add('hide')
 board.innerHTML = `<h1>Ваш счет: <span class="primary"> ${score} </span> </h1>`
}

function createRandomCircle(){
    const circle = document.createElement('div')
const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect()
    const  x = getRandomNumber(0, width - size)
    const y = getRandomNumber(0, height - size)

   /* const colors = ['#E6E6FA', '#FFF0F5', '#6495ED', '#00FFFF', '#8470FF', '#7FFFD4',
        '#98FB98','#FFFF00','#FF0000','#FF1493','#FF00FF','#FF6EB4','#FF83FA']
*/
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.position = ('absolute')

    board.append(circle)

 circle.style.backgroundColor = getRandomColor()
}

function getRandomColor(){
    return `rgb(${getRandomNumber(50, 255)},
              ${getRandomNumber(50, 255)},
              ${getRandomNumber(50, 255)},
              ${getRandomNumber(50, 255)})`;
}



function getRandomNumber (min, max){
    return Math.round (Math.random() * (max-min) + min)
}






