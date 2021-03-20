'use strict';
let userResult=0;
let Age = document.getElementById('myAge');
let home = document.getElementById('myhome');
let useName = prompt('Please enter your name!');
alert('Hello '+useName +'\n Its nice to see you in my page\n \n lets see if you know me!!!');
function Q1(){
  let myName = prompt('My name is Ammar \n Yes/Y Or No/N?');
  console.log(userResult);
  if(myName.toLowerCase() === 'yes'||myName.toLowerCase() === 'y')
  {
    console.log(userResult);
    alert ('you are wrong!!! \n My name is Amr ');
  }
  else if(myName.toLowerCase() === 'no'||myName.toLowerCase() === 'n')
  {
    userResult++;
    console.log(userResult);
    alert ('you are right!!! \n My name is Amr');
  }
  else
  {
    alert ('wrong input!!!');
  }

}
function Q2(){
  let myAge = prompt('My age is greater than 27 years\n Yes/Y Or No/N?');
  console.log(userResult);
  if(myAge.toLowerCase() === 'yes'||myAge.toLowerCase() === 'y')
  {
    userResult++;
    console.log(userResult);
    alert ('you are right!!! \n My age will be shown in the page ');
    Age.textContent = ('My age is 32 Years and your answer was correct ');
  }
  else if(myAge.toLowerCase() === 'no'||myAge.toLowerCase() === 'n')
  {
    console.log(userResult);
    alert ('you are wrong!!! \n My age will be shown in the page ');
    Age.textContent = 'My age is 32 Years and your answer was wrong !!';
  }
  else
  {
    alert ('wrong input!!!');
  }
}
function Q3(){
  let myHome = prompt('Iam from Syria \n Yes/Y Or No/N?');
  if(myHome.toLowerCase() === 'yes'||myHome.toLowerCase() === 'y')
  {
    userResult++;
    console.log(userResult);
    alert ('you are right!!! \n Great job ');
    home.textContent = ('I am from Syria and your answer was correct ');
  }
  else
  {
    console.log(userResult);
    alert ('you are wrong!!! \n sorry ');
    home.textContent = ('I am from  Syria and your answer was wrong !!');
  }
}
function Q4(){
  let myStudy = prompt('Did I study physics?? \n Yes/Y Or No/N?');
  switch(myStudy.toLowerCase())
  {
  case 'yes':
  case 'y':
    console.log(userResult);
    alert ('OPSSSSS!!! \n That was wrong!! \n I studied Accounting ');
    break;
  case 'no':
  case 'n':
    userResult++;
    console.log(userResult);
    alert ('perfect!!! \nI studied Accounting');
    break;
  default :
    console.log(userResult);
    alert ('wrong input!!!');
    break;
  }
}
function Q5(){
  let carColor = prompt('My car\'s color is Red \n Yes/Y Or No/N?');
  switch(carColor.toLowerCase())
  {
  case 'yes':
  case 'y':
    console.log(userResult);
    alert ('Sorry , You are wrong \n It is Dark Gray');
    break;
  case 'no':
  case 'n':
    userResult++;
    console.log(userResult);
    alert ('You are doing fine !!');
    break;
  default :
    console.log(userResult);
    alert ('wrong input!!!');
    break;
  }
}
/*********************************lab 03**************************************/
function Q6(){
  let randNum = Math.floor(Math.random() * 100) + 1;
  let gNum = prompt('lets play a game \nI picked a random number between(0-100) and you should guess it\nYou have just 4 attempts\nI will help you\n'+(randNum+1));
  let gResult =0;
  for(let i =0;i<4;i++)

  {
    if(Number(gNum) === randNum)
    {
      gResult=1;
      userResult++;
      console.log(userResult);
      break;
    }
    else if (gNum < randNum && i!==3)
    {
      gNum = prompt('Wrong!!\nYou should choose a higher number!  \n\n you have '+(3-i)+' Attempt');
    }
    else if (gNum > randNum && i!==3)
    {
      gNum = prompt('Wrong!!\nYou should choose a smaller number! \n\n you have '+(3-i)+' Attempt');
    }
  }
  if(gResult===0)
  {
    alert('Sorry !!! \n Your 4 answers were wrong!! \n\n\n the answer is : '+randNum);
  }
  else
  {
    {alert('Great Job !!! \n You Could find the answer!!');}
  }
}
/* ***************************************************/
function Q7(){
  let progLang = ['python','javascript','java','c#','c','c++','go','flutter','php','dart'];
  let gProgLang=prompt('Could you give me a name of one of top 10 programing languages??\nYou have 6 attempt ');
  let gAns=0;
  for(let a=0;a<6;a++)
  {
    for(let i=0;i<progLang.length;i++)
    {
      if(gProgLang.toLowerCase()===progLang[i])
      {
        alert('perfect!!\n (('+ gProgLang.toUpperCase()+')) Is Correct Answer');
        userResult++;
        console.log(userResult);
        i=progLang.length;
        a=7;
        gAns=1;
      }
    }
    if(gAns<1)
    {if(a<5){
      gProgLang=prompt('Sorry, Your answer in not in my list \nYou have '+(5-a)+' attempt ');
    }}

  }
  let allLang='';
  for(let i=0;i<progLang.length;i++){
    allLang=allLang+'\n'+progLang[i].toUpperCase();

  }
  alert ('Top 10 Languages are :'+allLang);

  alert('Your correct answers are :\n'+userResult +' out of 7!!');
}
Q1();
Q2();
Q3();
Q4();
Q5();
Q6();
Q7();
