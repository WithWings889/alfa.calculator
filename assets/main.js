const btn = document.querySelector('#btn');
const text = document.querySelector('#text');
const label = document.querySelector('#length-label')

btn.addEventListener('click', () => {
    label.innerText = "length is : " + text.value.length;
    setTimeout(() => label.innerText = "", 2000);
})