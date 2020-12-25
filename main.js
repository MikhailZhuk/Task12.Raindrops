let rand = document.querySelector('.random');
let output = document.querySelector('.number1');
let output1 = document.querySelector('.number2');
const volumeMute = document.querySelector('.fa-volume-mute');
const volumeUp = document.querySelector(".fa-volume-up");

volumeMute.addEventListener( 'click', () => {
    volumeMute.classList.add('none');
    volumeUp.classList.remove('none')
})

volumeUp.addEventListener( 'click', () => {
    volumeMute.classList.remove('none');
    volumeUp.classList.add('none')
})





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
  if(percent==10){
    clearInterval(interval);
  }
},60);