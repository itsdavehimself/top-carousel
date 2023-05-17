const nextBtn = document.getElementById('next-btn');
const previousBtn = document.getElementById('previous-btn');
const imgStrip = document.querySelector('.images-strip');
const imgDot = document.querySelectorAll('.dot');
console.log(imgDot);
let pos = 1;

nextBtn.addEventListener('click', nextImg);
previousBtn.addEventListener('click', previousImg);

function nextImg() {
  if (pos > 4) {
    imgStrip.setAttribute('pos', '1');
    pos = 1;
  } else {
    pos+=1;
    imgStrip.setAttribute('pos', pos);
  }
}

function previousImg() {
  if (pos < 2) {
    imgStrip.setAttribute('pos', '5');
    pos = 5;
  } else {
    pos-=1;
    imgStrip.setAttribute('pos', pos);
  }
}