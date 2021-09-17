"use strict";

console.log(1);


let number = 5;
const lefBoderWidth = 1;

number = 10;
console.log(number);

const obj={
a: 50
};

obj.a=100;
console.log(obj);




alert('hello#1');

const result = confirm("haii#2");
console.log(result);

const ansver1 = prompt("вам 28?","18");
console.log (ansver1);

const ansver2 = prompt("вам 28?","24");
console.log (typeof(ansver2));

const ansver3 = +prompt("вам 28?","31");
console.log (typeof(ansver3));

const ansver4 = +prompt("вам 28?","31");
console.log (ansver4 + 5);



//урок 7
const answer = [];
answer[0] = prompt('имя','');
answer[1] = prompt('фомилия','');
answer[2] = prompt('возрост','');
document.write(answer);


console.log(typeof(answer));
console.log(typeof(null));



//урок 8
const categoty = 'toys';
console.log(`https://someurl.com/${categoty}/5`);

const user = "ivan";
alert(`haii,${user}`);



//урок 9
console.log('arry' + " - odject");
console.log(4 +  " - odject");
console.log(4 + + " - odject");
console.log(4 + + " 5");


let incr = 10,
    decro = 10;
//++incr;
//--decro;

console.log(++incr);  //incr++  = 10
console.log(--decro); //decro-- = 10


console.log(5%2);

console.log(2*4 ==  8);
console.log(2*4 == '9');
console.log(2*4 == '8');
console.log(2*4 === 8);  
console.log(2*4 === '8');

// && и
// || или
// ! отрицание  0(не 0 а 1 )   true(не true а false )
//

// && и
const isChecked = true,
      isClose   = true;
console.log(isChecked && isClose);

const isChecked = true,
      isClose   = false;
console.log(isChecked && isClose);

// || или
const isChecked = true,
      isClose   = true;
console.log(isChecked || isClose);

const isChecked = true,
      isClose   = false;
console.log(isChecked || isClose);

const isChecked = false,
      isClose   = false;
console.log(isChecked || isClose);

// ! отрицание  0(не 0 а 1 )   true(не true а false )
const isChecked = false,
      isClose   = false;
console.log(isChecked || !isClose);

console.log( 2+2*2 != "6" );  //false
console.log( 2+2*2 !== "6" ); //true