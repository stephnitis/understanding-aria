'use strict';

// index.html alerts

let divAlert = document.querySelector('#divAlert');
let btnSubmit = document.querySelector('#btnSubmit');
let dynamicDivAlert = document.querySelector('#divDynamicAlert');

document.addEventListener('DOMContentLoaded', function(){
  divAlert.setAttribute('role', 'alert');

  btnSubmit.addEventListener('click', function(){
    let newDiv = document.createElement('div');
    newDiv.setAttribute('role', 'alert');
    newDiv.append('DYNAMICALLY ADDED DIV ALERT');
    dynamicDivAlert.append(newDiv);
  })
})

// for alert on landing-page

const btn = document.querySelector('#btn');
const alert = document.querySelector('#alert');
const template = document.querySelector('#notification-template');

btn.onclick = function(){
  const clone = template.content.cloneNode(true);
  alert.appendChild(clone);
}