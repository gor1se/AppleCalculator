'use strice'

let inputOne = '';
let action = '';
let valueOne = 0;
let valueTwo = 0;
let result = 0;

const display = document.getElementById('display');

const refreshDisplay = (value) => {
    display.innerHTML = value;
}

// const addDots = (str) => {
//     if(str.includes(",")){
//         let first = str.split(",");
//         let length = first[0].length;
//         let left = length % 3;
//         let newString = '';
//         for(let i = left; i < length; i++) {
//             newString+=first[0][i];
//             console.log(i%3);
//             if((i%3)===0){
//                 newString+='.'
//             }
//         }
//         return newString;
//     } else {
//         return str;
//     }
// }

const pressEquals = () => {
    toggleAnimation('btn-=', 'animation-3');
    if(action === 'addition'){
        inputOne = inputOne.replace(',','.');
        valueTwo = Number.parseFloat(inputOne);
        result = valueOne + valueTwo;
    }
    if(action === 'subtract'){
        inputOne = inputOne.replace(',','.');
        valueTwo = Number.parseFloat(inputOne);
        result = valueOne - valueTwo;
    }
    if(action === 'multiply'){
        inputOne = inputOne.replace(',','.');
        valueTwo = Number.parseFloat(inputOne);
        result = valueOne * valueTwo;
    }
    if(action === 'divide'){
        inputOne = inputOne.replace(',','.');
        valueTwo = Number.parseFloat(inputOne);
        result = valueOne / valueTwo;
    }
    inputOne = result.toString();
    result=result.toString().replace(".",",");
    refreshDisplay(result);

    //refreshDisplay(addDots(result));

    // Teile den String am Komma und beachte nur den ersten Teil
    // Ermittle die Länge
    // Mache Modulo 3
    // Das Ergebnis wird übersprüngen, dann folgt der erste "." und dann alle Drei werte ein Punkt
}

const pressAdd = () => {
    toggleAnimation('btn-+', 'animation-3');
    inputOne = inputOne.replace(',','.');
    valueOne = Number.parseFloat(inputOne);
    inputOne = '0';
    action = 'addition';
}

const pressMinus = () => {
    toggleAnimation('btn--', 'animation-3');
    inputOne = inputOne.replace(',','.');
    valueOne = Number.parseFloat(inputOne);
    inputOne = '0';
    action = 'subtract';
}

const pressMultiply = () => {
    toggleAnimation('btn-*', 'animation-3');
    inputOne = inputOne.replace(',','.');
    valueOne = Number.parseFloat(inputOne);
    inputOne = '0';
    action = 'multiply';
}

const pressDivide = () => {
    toggleAnimation('btn-/', 'animation-3');
    inputOne = inputOne.replace(',','.');
    valueOne = Number.parseFloat(inputOne);
    inputOne = '0';
    action = 'divide';
}

const pressChangeSign = () => {
    toggleAnimation('btn-Change', 'animation-2');
    inputOne = '-' + inputOne;
    refreshDisplay(inputOne);
}

const pressPercent = () => {
    toggleAnimation('btn-%', 'animation-2');
    if(inputOne !== '0'){
        inputOne = (Number.parseFloat(inputOne)/100);
    }
    refreshDisplay(inputOne);
}

const pressAC = () => {
    toggleAnimation('btn-AC', 'animation-2');
    action = '';
    result = '0';
    inputOne = '0';
    valueOne = 0;
    valueTwo = 0;
    refreshDisplay(inputOne);
}

const press1 = () => {
    toggleAnimation('btn-1', 'animation-1');
    if(inputOne !== '0'){
        inputOne += '1'; 
    } else {
        inputOne = '1';
    }
    refreshDisplay(inputOne);
}

const press2 = () => {
    toggleAnimation('btn-2', 'animation-1');
    if(inputOne !== '0'){
        inputOne += '2'; 
    } else {
        inputOne = '2';
    }
    refreshDisplay(inputOne);
}

const press3 = () => {
    toggleAnimation('btn-3', 'animation-1');
    if(inputOne !== '0'){
        inputOne += '3'; 
    } else {
        inputOne = '3';
    }
    refreshDisplay(inputOne);
}

const press4 = () => {
    toggleAnimation('btn-4', 'animation-1');
    if(inputOne !== '0'){
        inputOne += '4'; 
    } else {
        inputOne = '4';
    }
    refreshDisplay(inputOne);
}

const press5 = () => {
    toggleAnimation('btn-5', 'animation-1');
    if(inputOne !== '0'){
        inputOne += '5'; 
    } else {
        inputOne = '5';
    }
    refreshDisplay(inputOne);
}

const press6 = () => {
    toggleAnimation('btn-6', 'animation-1');
    if(inputOne !== '0'){
        inputOne += '6'; 
    } else {
        inputOne = '6';
    }
    refreshDisplay(inputOne);
}

const press7 = () => {
    toggleAnimation('btn-7', 'animation-1');
    if(inputOne !== '0'){
        inputOne += '7'; 
    } else {
        inputOne = '7';
    }
    refreshDisplay(inputOne);
}

const press8 = () => {
    toggleAnimation('btn-8', 'animation-1');
    if(inputOne !== '0'){
        inputOne += '8'; 
    } else {
        inputOne = '8';
    }
    refreshDisplay(inputOne);
}

const press9 = () => {
    toggleAnimation('btn-9', 'animation-1');
    if(inputOne !== '0'){
        inputOne += '9'; 
    } else {
        inputOne = '9';
    }
    refreshDisplay(inputOne);
}

const press0 = () => {
    toggleAnimation('btn-0', 'animation-1');
    if(inputOne !== '0'){
        inputOne += '0'; 
    } else {
        inputOne = '0';
    }
    refreshDisplay(inputOne);
}

const pressComma = () => {
    toggleAnimation('btn-,', 'animation-1');
    if(inputOne !== '0'){
        inputOne += ','; 
    } else {
        inputOne = '0,'
    }
    refreshDisplay(inputOne);
}

document.addEventListener('keydown', (event) => {
    document.activeElement.blur();
    // console.log(event.key);
    // https://keycode.info/
    if(event.key === '1'){
        press1();
    }
    if(event.key === '2'){
        press2();
    }
    if(event.key === '3'){
        press3();
    }
    if(event.key === '4'){
        press4();
    }
    if(event.key === '5'){
        press5();
    }
    if(event.key === '6'){
        press6();
    }
    if(event.key === '7'){
        press7();
    }
    if(event.key === '8'){
        press8();
    }
    if(event.key === '9'){
        press9();
    }
    if(event.key === '0'){
        press0();
    }
    if(event.key === ','){
        pressComma();
    }
    if(event.key === 'Backspace'){
        if(inputOne.length > 1){
        inputOne = inputOne.substring(0, inputOne.length-1);
        refreshDisplay(inputOne);
        } else {
            inputOne = '0';
            refreshDisplay(inputOne);
        }
    }
    if(event.key === '+'){
        pressAdd();
    }
    if(event.key === '-'){
        pressMinus();
    }
    if(event.key === '*'){
        pressMultiply();
    }
    if(event.key === '/'){
        pressDivide();
    }
    if(event.key === '%'){
        pressPercent();
    }
    if(event.key === 'Enter'){
        pressEquals();
    }
    if(event.key === 'Escape'){
        pressAC();
    }
})

const toggleAnimation = (id,kind) =>{
    document.getElementById(id).classList.toggle(kind);
    setTimeout(() => {
        document.getElementById(id).classList.toggle(kind);
    },150);
}