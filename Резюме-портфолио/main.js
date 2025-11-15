const btn = document.querySelector('.btn');
btn.classList.add('success');

const btns = document.querySelectorAll('.btn');
console.log(btns[1]);

btns[0].addEventListener('click', function(){
    alert('Меня зовут Диана, мне 24 года и я хочу сделать себя специалистом еще в одной сфере. Поэтому я неустанно учусь и кайфую от того, как все получается! Я придумала данную страницу, чтобы продемонстрировать свои soft skills');
});


const buttons = document.querySelectorAll('.acordion-header');

for (const button of buttons ) {
    button.addEventListener('click', function(){
        const content = button.nextElementSibling;

        button.classList.toggle('active');
        content.classList.toggle('open');

        // вычисл свойства
        const contentComputed = window.getComputedStyle(content);
        const paddingTop = parseFloat(contentComputed.paddingLeft);
        const paddingBottom = parseFloat(contentComputed.paddingRight);

        // console.log(content.style.maxHeight);
        // console.log(content.style.scrollHeight);
        // console.log(content.style.paddingTop);
        // console.log(content.style.paddingBottom);

        if(content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + paddingTop + paddingBottom + "px";
        }
    });
};


document.addEventListener('mousemove', (e) => {
  const cat = document.getElementById('cat');
  const mouseX = e.clientX;
  const windowCenter = window.innerWidth / 2;
  
  if (mouseX < windowCenter - 100) {
    cat.style.transform = 'scaleX(-1)'; 
  } else if (mouseX > windowCenter + 100) {
    cat.style.transform = 'scaleX(1)';
  }
});