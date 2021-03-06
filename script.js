'use strict';

let num = 0;

document.querySelector('.num').textContent = num;

document.querySelector('.add').addEventListener('click', function() {
  num = document.querySelector('.num').textContent = num + 1;
})

document.querySelector('.sub').addEventListener('click', function() {
  num = document.querySelector('.num').textContent = num - 1;
})

document.querySelector('.reset').addEventListener('click', function() {
  num = document.querySelector('.num').textContent = 0;
})
