'use strict';
let Age = document.getElementById('myAge');
let home = document.getElementById('myhome');
let useName = prompt('Please enter your name!');
alert('Hello '+useName +'\n Its nice to see you in my page\n \n lets see if you know me!!!');
let myAge = prompt('My age is greater than 27 years\n Yes/Y Or No/N?');
console.log(myAge);
let x=myAge==='yes';
console.log(x);
if(myAge.toLowerCase() === 'yes'||myAge.toLowerCase() === 'y')
{
  console.log(myAge);
  alert ('you are right!!! \n My age will be shown in the page ');
  Age.textContent = ('My age is 32 Years and your answer was correct ');
}
else
{
  console.log(myAge);
  alert ('you are wrong!!! \n My age will be shown in the page ');
  Age.textContent = 'My age is 32 Years and your answer was wrong !!';
}
let myHome = prompt('Iam from Syria \n Yes/Y Or No/N?');
if(myHome.toLowerCase() === 'yes'||myHome.toLowerCase() === 'y')
{
  console.log(home);
  alert ('you are right!!! \n Great job ');
  home.textContent = ('I am from Syria and your answer was correct ');
}
else
{
  console.log(home);
  alert ('you are wrong!!! \n sorry ');
  home.textContent = ('I am from  Syria and your answer was wrong !!');
}
let myStudy = prompt('Did I study physics?? \n Yes/Y Or No/N?');
switch(myStudy.toLowerCase())
{
case 'yes':
case 'y':
  console.log(myStudy);
  alert ('OPSSSSS!!! \n That was wrong!! \n I studied Accounting ');
  break;
case 'no':
case 'n':
  console.log(myStudy);
  alert ('perfect!!! \nI studied Accounting');
  break;
default :
  console.log(myStudy);
  alert ('wrong input!!!');
  break;
}

let weMet = prompt('Did we met before?? \n Yes/Y Or No/N?');
switch(weMet.toLowerCase())
{
case 'yes':
case 'y':
  console.log(weMet);
  alert ('It was great chance to know you 😊');
  break;
case 'no':
case 'n':
  console.log(weMet);
  alert ('It will be a pleasure to meet you soon 😊');
  break;
default :
  console.log(weMet);
  alert ('wrong input!!!');
  break;
}
