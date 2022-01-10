'use strice'


let inputOne = '';
let action = '';
let valueOne = 0;
let valueTwo = 0;
let result = 0;


const refreshDisplay = (value) => {
    document.getElementById('display').innerHTML = value;
}

const adjustPadding = (value)=>{
    document.getElementById('display').style.paddingRight = value;
}

const resetAll = () => {
    inputOne = '0';
    action = '';
    valueOne = 0;
    valueTwo = 0;
    result = 0;
    refreshDisplay(inputOne);
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

document.getElementById('switch').checked = false;

document.getElementById('switch').addEventListener('change',() =>{
    if(document.getElementById('switch').checked){
        document.getElementById('calculator').innerHTML = extended; 
        adjustPadding('4rem');
        resetAll();
    } else {
        document.getElementById('calculator').innerHTML = simple;
        adjustPadding('9rem');
        resetAll();
    }
});

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

// Function keys

const funk1 = () => {
    toggleAnimation('btn-funk1', 'animation-4');
}

const funk2 = () => {
    toggleAnimation('btn-funk2', 'animation-4');
}

const funk3 = () => {
    toggleAnimation('btn-funk3', 'animation-4');
}

const funk4 = () => {
    toggleAnimation('btn-funk4', 'animation-4');
}

const funk5 = () => {
    toggleAnimation('btn-funk5', 'animation-4');
}

const funk6 = () => {
    toggleAnimation('btn-funk6', 'animation-4');
}

const funk7 = () => {
    toggleAnimation('btn-funk7', 'animation-4');
}

const funk8 = () => {
    // x hoch 2
    toggleAnimation('btn-funk8', 'animation-4');
    if(inputOne !== '0'){
         inputOne = Number.parseFloat(inputOne)*Number.parseFloat(inputOne)
    } else {
        inputOne = '0';
    }
    refreshDisplay(inputOne);
}

const funk9 = () => {
    // x hoch 3
    toggleAnimation('btn-funk9', 'animation-4');
    if(inputOne !== '0'){
         inputOne = Number.parseFloat(inputOne)*Number.parseFloat(inputOne)*Number.parseFloat(inputOne)
    } else {
        inputOne = '0';
    }
    refreshDisplay(inputOne);
}

const funk10 = () => {
    toggleAnimation('btn-funk10', 'animation-4');
}

const funk11 = () => {
    toggleAnimation('btn-funk11', 'animation-4');
}

const funk12 = () => {
    toggleAnimation('btn-funk12', 'animation-4');
}

const funk13 = () => {
    toggleAnimation('btn-funk13', 'animation-4');
}

const funk14 = () => {
    toggleAnimation('btn-funk14', 'animation-4');
}

const funk15 = () => {
    toggleAnimation('btn-funk15', 'animation-4');
}

const funk16 = () => {
    toggleAnimation('btn-funk16', 'animation-4');
}

const funk17 = () => {
    toggleAnimation('btn-funk17', 'animation-4');
}

const funk18 = () => {
    toggleAnimation('btn-funk18', 'animation-4');
}

const funk19 = () => {
    toggleAnimation('btn-funk19', 'animation-4');
}

const funk20 = () => {
    toggleAnimation('btn-funk20', 'animation-4');
}

const funk21 = () => {
    toggleAnimation('btn-funk21', 'animation-4');
}

const funk22 = () => {
    toggleAnimation('btn-funk22', 'animation-4');
}

const funk23 = () => {
    toggleAnimation('btn-funk23', 'animation-4');
}

const funk24 = () => {
    toggleAnimation('btn-funk24', 'animation-4');
}

const funk25 = () => {
    toggleAnimation('btn-funk25', 'animation-4');
}

const funk26 = () => {
    toggleAnimation('btn-funk26', 'animation-4');
}

const funk27 = () => {
    toggleAnimation('btn-funk27', 'animation-4');
}

const funk28 = () => {
    toggleAnimation('btn-funk28', 'animation-4');
}

const funk29 = () => {
    // pi
    toggleAnimation('btn-funk29', 'animation-4');
    if(inputOne !== '0'){
        inputOne = Math.PI;
   } else {
       inputOne = '0';
   }
   inputOne = Math.PI.toString();
   refreshDisplay(inputOne);
}


const funk30 = () => {
    toggleAnimation('btn-funk30', 'animation-4');
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

const simple = `    <div id="calculator">
<div class="row">
    <div id="display">0</div>
</div>
<div class="row">
    <button class="btn btn-style-1" tapindex="-1" focusable="false" id="btn-AC"  onclick="pressAC()">AC</button>
    <button class="btn btn-style-1" tapindex="-1" id="btn-Change"  onclick="pressChangeSign()">+/-</button>
    <button class="btn btn-style-1" tapindex="-1" id="btn-%"  onclick="pressPercent()">%</button>
    <button class="btn btn-style-4" tapindex="-1" id="btn-/"  onclick="pressDivide()">/</button>
</div>
<div class="row">
    <button class="btn btn-style-2" tapindex="-1" id="btn-7"  onclick="press7()">7</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-8"  onclick="press8()">8</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-9"  onclick="press9()">9</button>
    <button class="btn btn-style-4" tapindex="-1" id="btn-*"  onclick="pressMultiply()">X</button>
</div>
<div class="row">
    <button class="btn btn-style-2" tapindex="-1" id="btn-4"  onclick="press4()">4</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-5"  onclick="press5()">5</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-6"  onclick="press6()">6</button>
    <button class="btn btn-style-4" tapindex="-1" id="btn--"  onclick="pressMinus()">-</button>
</div>
<div class="row">
    <button class="btn btn-style-2" tapindex="-1" id="btn-1" onclick="press1()">1</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-2"  onclick="press2()">2</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-3"  onclick="press3()">3</button>
    <button class="btn btn-style-4" tapindex="-1" id="btn-+"  onclick="pressAdd()">+</button>
</div>
<div class="row">
    <button class="btn btn-style-3" tapindex="-1" id="btn-0"  onclick="press0()">0</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-,"  onclick="pressComma()">,</button>
    <button class="btn btn-style-4" tapindex="-1" id="btn-="  onclick="pressEquals()">=</button>
</div>
</div>`;

const extended = `        <div class="row">
<div id="display">0</div>
</div>
<div class="row">
<button class="btn btn-style-5" tapindex="-1" id="btn-funk1" onclick="funk1()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk2" onclick="funk2()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk3" onclick="funk3()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk4" onclick="funk4()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk5" onclick="funk5()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk6" onclick="funk6()">-_-</button>
<button class="btn btn-style-1" tapindex="-1" id="btn-AC" onclick="pressAC()">AC</button>
<button class="btn btn-style-1" tapindex="-1" id="btn-Change"  onclick="pressChangeSign()">+/-</button>
<button class="btn btn-style-1" tapindex="-1" id="btn-%"  onclick="pressPercent()">%</button>
<button class="btn btn-style-4" tapindex="-1" id="btn-/"  onclick="pressDivide()">/</button>
</div>
<div class="row">
<button class="btn btn-style-5" tapindex="-1" id="btn-funk7" onclick="funk7()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk8" onclick="funk8()">x²</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk9" onclick="funk9()">x³</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk10" onclick="funk10()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk11" onclick="funk11()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk12" onclick="funk12()">-_-</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-7"  onclick="press7()">7</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-8"  onclick="press8()">8</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-9"  onclick="press9()">9</button>
<button class="btn btn-style-4" tapindex="-1" id="btn-*"  onclick="pressMultiply()">X</button>
</div>
<div class="row">
<button class="btn btn-style-5" tapindex="-1" id="btn-funk13" onclick="funk13()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk14" onclick="funk14()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk15" onclick="funk15()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk16" onclick="funk16()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk17" onclick="funk17()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk18" onclick="funk18()">-_-</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-4"  onclick="press4()">4</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-5"  onclick="press5()">5</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-6"  onclick="press6()">6</button>
<button class="btn btn-style-4" tapindex="-1" id="btn--"  onclick="pressMinus()">-</button>
</div>
<div class="row">
<button class="btn btn-style-5" tapindex="-1" id="btn-funk19" onclick="funk19()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk20" onclick="funk20()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk21" onclick="funk21()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk22" onclick="funk22()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk23" onclick="funk23()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk24" onclick="funk24()">-_-</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-1" onclick="press1()">1</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-2"  onclick="press2()">2</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-3"  onclick="press3()">3</button>
<button class="btn btn-style-4" tapindex="-1" id="btn-+"  onclick="pressAdd()">+</button>
</div>
<div class="row">
<button class="btn btn-style-5" tapindex="-1" id="btn-funk25" onclick="funk25()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk26" onclick="funk26()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk27" onclick="funk27()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk28" onclick="funk28()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk29" onclick="funk29()">π</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk30" onclick="funk30()">-_-</button>
<button class="btn btn-style-3" tapindex="-1" id="btn-0"  onclick="press0()">0</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-,"  onclick="pressComma()">,</button>
<button class="btn btn-style-4" tapindex="-1" id="btn-="  onclick="pressEquals()">=</button>
</div>`