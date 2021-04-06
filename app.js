const circle = document.querySelector('.circle');
const container = document.querySelector('.container');
const nav = document.querySelector('nav');
const bar = document.querySelector('.bar');
const close = document.querySelector('.close');
const items = document.querySelectorAll('ul li');

function show() {
  document.body.classList.add('active');
}

function hide() {
  document.body.classList.remove('active');
}

items.forEach((item, index) => {
  item.style.marginLeft = `${index * 10}px`;
  item.style.transitionDelay = `0.${index * 10}s`;
});

//Events==============
bar.addEventListener('click', show);
close.addEventListener('click', hide);
