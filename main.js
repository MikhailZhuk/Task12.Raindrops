let rand = document.querySelector('.random');
let output = document.querySelector('.number1');
let output1 = document.querySelector('.number2');
const volumeMute = document.querySelector('.fa-volume-mute');
const volumeUp = document.querySelector(".fa-volume-up");
const expand = document.querySelector(".fa-expand");
const compress = document.querySelector(".fa-compress");
const play = document.getElementById("start");
const howToPlay = document.getElementById("start_demo");
const container = document.querySelector(".container");
const containerGame = document.querySelector(".container_game");
const back = document.getElementById("back");
const rainVolume = document.querySelector(".rain");


// Volume and Fullscreen
volumeMute.addEventListener( 'click', () => {
    volumeMute.classList.add('none');
    volumeUp.classList.remove('none');
    rainVolume.play();
})

volumeUp.addEventListener( 'click', () => {
    volumeMute.classList.remove('none');
    volumeUp.classList.add('none');
    rainVolume.pause();
})

expand.addEventListener( 'click', () => {
    expand.classList.add('none');
    compress.classList.remove('none');
    document.documentElement.requestFullscreen();
})

compress.addEventListener( 'click', () => {
    expand.classList.remove('none');
    compress.classList.add('none');
    document.exitFullscreen();
})

// button play

play.addEventListener( 'click', () => {
    containerGame.classList.remove('none');
    containerGame.classList.add('flex');
    container.classList.add('none');
})

// button back

back.addEventListener( 'click', () => {
    containerGame.classList.remove('flex');
    container.classList.remove('none');
    containerGame.classList.add('none');
})

// Random number

function getRandomNumber(min,max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result; 
}

function createArrayOfNumbers( start, end) {
    let myArray = [];
    for(let i = start; i <= end; i++){
        myArray.push(i);
    }
    return myArray;
}

let numbersArray = createArrayOfNumbers(1,20);


rand.addEventListener( 'click', () => {
    if( numbersArray.length == 0){
        output.innerText = 'No more number';
        return;
    }
    let randomIndex = getRandomNumber(0, numbersArray.length-1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1);
    output.innerText = randomNumber;

    let numbersArray1 = createArrayOfNumbers(1,randomNumber)

rand.addEventListener( 'click', () => {
    if( numbersArray1.length == 0){
        output1.innerText = 'No more number';
        return;
    }
    let randomIndex1 = getRandomNumber(0, numbersArray1.length-1);
    let randomNumber1 = numbersArray1[randomIndex1];
    numbersArray1.splice(randomIndex1, 1);
    output1.innerText = randomNumber1;
});

})

//water
const water=document.getElementById("water");
let percent = 0;
let interval;

interval=setInterval(function(){ 
  percent++;
  water.style.transform='translate(0'+','+(100-percent)+'%)';
  if(percent==20){
    clearInterval(interval);
  }
},60);

// buttons calculator
const button0 = document.getElementById('0');
const button1 = document.getElementById('1');
const button2 = document.getElementById('2');
const button3 = document.getElementById('3');
const button4 = document.getElementById('4');
const button5 = document.getElementById('5');
const button6 = document.getElementById('6');
const button7 = document.getElementById('7');
const button8 = document.getElementById('8');
const button9 = document.getElementById('9');
const buttonEnter = document.getElementById('Enter');
const buttonDelete = document.getElementById('Delete');
const buttonClear = document.getElementById('Clear');
let displayTools = document.querySelector(".boxOUT");

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
       // console.log(this.value);
        calc(this.value);        
    });
})

document.addEventListener('keydown', event => {
    console.log(event.key);
    if ((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key)
})

function calc(value) {
      // если нажат знак равенства или Enter
    if (value.match(/=|Enter/)) {
        // пробуем выполнить операцию
        try {
            // вычисляем значение строки
            // это возможно благодаря методу "evaluate" объекта "math"
            // Math.trunc используется для округления до целого числа
            displayTools.textContent = Math.trunc(math.evaluate(displayTools.textContent))
            
        // если операцию выполнить невозможно
        } catch {
            // сохраняем значение поля
            let oldValue = displayTools.textContent
            // создаем новую переменную
            let newValue = 'repeat'
            // выводим значение новой переменной в поле
            displayTools.textContent = newValue
            // через полторы секунды возвращаем полю старое значение
            setTimeout(() => {
                displayTools.textContent = oldValue
            }, 1500)
        }
        
    // если нажат символ "C"
    } else if (value === 'Clear' ) {
        // очищаем поле
        displayTools.textContent = ''
    
    // если нажат символ "СЕ" или Backspace
    } else if (value.match(/Backspace|Delete/)) {
        // уменьшаем строку на один символ
        display.textContent = displayTools.textContent.substring(0, displayTools.textContent.length - 1)
        
    // если нажата любая другая (отфильтрованная) кнопка или клавиша
    } else {
        // записываем ее значение в поле
        displayTools.textContent += value
    }
}