'use strice'


let inputOne = '0';
let action = '';
let valueOne = 0;
let valueTwo = 0;
let result = 0;


const refreshDisplay = (value) => {
    console.log({value});
    if(value.toString().endsWith('.')) {
        // Kommazahl aber noch keine Nachkommastellen
        document.getElementById('display').innerHTML = (Number.parseFloat(value)).toLocaleString('de') + ",";
    } else {
        document.getElementById('display').innerHTML = (Number.parseFloat(value)).toLocaleString('de');
    }
}

const adjustWidth = (value)=>{
    document.getElementById('calculator').style.width = value;
}

const resetAll = () => {
    inputOne = '0';
    action = '';
    valueOne = 0;
    valueTwo = 0;
    result = 0;
    refreshDisplay(inputOne);
}

document.getElementById('switch').checked = false;

document.getElementById('switch').addEventListener('change',() =>{
    if(document.getElementById('switch').checked){
        document.getElementById('calculator').innerHTML = extended; 
        adjustWidth('800px');
        resetAll();
    } else {
        document.getElementById('calculator').innerHTML = simple;
        adjustWidth('300px');
        resetAll();
    }
});

const pressEquals = () => {
    toggleAnimation('btn-=', 'animation-3');
    if(action === 'addition'){
        valueOne = Number.parseFloat(inputOne);
        result = valueOne + valueTwo;
    }
    if(action === 'subtract'){
        valueOne = Number.parseFloat(inputOne);
        result = valueTwo - valueOne;
    }
    if(action === 'multiply'){
        valueOne = Number.parseFloat(inputOne);
        result = valueOne * valueTwo;
    }
    if(action === 'divide'){
        valueOne = Number.parseFloat(inputOne);
        result = valueTwo / valueOne;
    }
    inputOne = result;
    // inputOne = result.toLocaleString('de');
    // result=result.toString().replace(".",",");
    refreshDisplay(inputOne);

}

const pressAdd = () => {
    toggleAnimation('btn-+', 'animation-3');
    valueTwo = Number.parseFloat(inputOne);
    inputOne = '0';
    action = 'addition';
}

const pressMinus = () => {
    toggleAnimation('btn--', 'animation-3');
    valueTwo = Number.parseFloat(inputOne);
    inputOne = '0';
    action = 'subtract';
}

const pressMultiply = () => {
    toggleAnimation('btn-*', 'animation-3');
    valueTwo = Number.parseFloat(inputOne);
    inputOne = '0';
    action = 'multiply';
}

const pressDivide = () => {
    toggleAnimation('btn-/', 'animation-3');
    valueTwo = Number.parseFloat(inputOne);
    inputOne = '0';
    action = 'divide';
}

const pressChangeSign = () => {
    toggleAnimation('btn-Change', 'animation-2');
    if(!(inputOne.toString().includes('-'))){
        inputOne = '-' + inputOne;
    } else {
        inputOne = inputOne.toString().replace('-', '');
    }
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

// Input Number

const pressZahl = (id) => {
    toggleAnimation(id, 'animation-1');
    let zahl;
    switch (id) {
        case 'btn-0':
            zahl = '0';
            break;
        case 'btn-1':
            zahl = '1';
            break;
        case 'btn-2':
            zahl = '2';
            break;
        case 'btn-3':
            zahl = '3';
            break;
        case 'btn-4':
            zahl = '4';
            break;
        case 'btn-5':
            zahl = '5';
            break;
        case 'btn-6':
            zahl = '6';
            break;
        case 'btn-7':
            zahl = '7';
            break;
        case 'btn-8':
            zahl = '8';
            break;
        case 'btn-9':
            zahl = '9';
            break;
        default:
            break;
    }
    if(inputOne === '0'){
        inputOne = zahl;
    } else if (inputOne === '-0'){
        inputOne = `-${zahl}`;
    } else {
        inputOne += zahl;
    }
    refreshDisplay(inputOne);
}

const pressComma = () => {
    toggleAnimation('btn-,', 'animation-1');
    // if(inputOne !== '0'){
    //     inputOne += ','; 
    // } else {
    //     inputOne = '0,'
    // }

    if(!(inputOne.includes('.'))){
        inputOne += '.';
    }
    console.log({inputOne});
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
        pressZahl('btn-1');
    }
    if(event.key === '2'){
        pressZahl('btn-2');
    }
    if(event.key === '3'){
        pressZahl('btn-3');
    }
    if(event.key === '4'){
        pressZahl('btn-4');
    }
    if(event.key === '5'){
        pressZahl('btn-5');
    }
    if(event.key === '6'){
        pressZahl('btn-6');
    }
    if(event.key === '7'){
        pressZahl('btn-7');
    }
    if(event.key === '8'){
        pressZahl('btn-8');
    }
    if(event.key === '9'){
        pressZahl('btn-9');
    }
    if(event.key === '0'){
        pressZahl('btn-0');
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
    <button class="btn btn-style-2" tapindex="-1" id="btn-7"  onclick="pressZahl(this.id)">7</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-8"  onclick="pressZahl(this.id)">8</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-9"  onclick="pressZahl(this.id)">9</button>
    <button class="btn btn-style-4" tapindex="-1" id="btn-*"  onclick="pressMultiply()">X</button>
</div>
<div class="row">
    <button class="btn btn-style-2" tapindex="-1" id="btn-4"  onclick="pressZahl(this.id)">4</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-5"  onclick="pressZahl(this.id)">5</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-6"  onclick="pressZahl(this.id)">6</button>
    <button class="btn btn-style-4" tapindex="-1" id="btn--"  onclick="pressMinus()">-</button>
</div>
<div class="row">
    <button class="btn btn-style-2" tapindex="-1" id="btn-1" onclick="pressZahl(this.id)">1</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-2"  onclick="pressZahl(this.id)">2</button>
    <button class="btn btn-style-2" tapindex="-1" id="btn-3"  onclick="pressZahl(this.id)">3</button>
    <button class="btn btn-style-4" tapindex="-1" id="btn-+"  onclick="pressAdd()">+</button>
</div>
<div class="row">
    <button class="btn btn-style-3" tapindex="-1" id="btn-0"  onclick="pressZahl(this.id)">0</button>
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
<button class="btn btn-style-5" tapindex="-1" id="btn-funk5" onclick="funk5()"><</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk6" onclick="funk6()">></button>
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
<button class="btn btn-style-2" tapindex="-1" id="btn-7"  onclick="pressZahl(this.id)">7</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-8"  onclick="pressZahl(this.id)">8</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-9"  onclick="pressZahl(this.id)">9</button>
<button class="btn btn-style-4" tapindex="-1" id="btn-*"  onclick="pressMultiply()">X</button>
</div>
<div class="row">
<button class="btn btn-style-5" tapindex="-1" id="btn-funk13" onclick="funk13()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk14" onclick="funk14()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk15" onclick="funk15()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk16" onclick="funk16()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk17" onclick="funk17()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk18" onclick="funk18()">-_-</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-4"  onclick="pressZahl(this.id)">4</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-5"  onclick="pressZahl(this.id)">5</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-6"  onclick="pressZahl(this.id)">6</button>
<button class="btn btn-style-4" tapindex="-1" id="btn--"  onclick="pressMinus()">-</button>
</div>
<div class="row">
<button class="btn btn-style-5" tapindex="-1" id="btn-funk19" onclick="funk19()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk20" onclick="funk20()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk21" onclick="funk21()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk22" onclick="funk22()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk23" onclick="funk23()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk24" onclick="funk24()">-_-</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-1" onclick="pressZahl(this.id)">1</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-2"  onclick="pressZahl(this.id)">2</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-3"  onclick="pressZahl(this.id)">3</button>
<button class="btn btn-style-4" tapindex="-1" id="btn-+"  onclick="pressAdd()">+</button>
</div>
<div class="row">
<button class="btn btn-style-5" tapindex="-1" id="btn-funk25" onclick="funk25()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk26" onclick="funk26()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk27" onclick="funk27()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk28" onclick="funk28()">-_-</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk29" onclick="funk29()">π</button>
<button class="btn btn-style-5" tapindex="-1" id="btn-funk30" onclick="funk30()">-_-</button>
<button class="btn btn-style-3" tapindex="-1" id="btn-0"  onclick="pressZahl(this.id)">0</button>
<button class="btn btn-style-2" tapindex="-1" id="btn-,"  onclick="pressComma()">,</button>
<button class="btn btn-style-4" tapindex="-1" id="btn-="  onclick="pressEquals()">=</button>
</div>`