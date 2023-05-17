const nextBtn = document.getElementById('next-btn');
const previousBtn = document.getElementById('previous-btn');
const imgStrip = document.querySelector('.images-strip');
const imgDot = document.querySelectorAll('.dot');
let pos = 1;

nextBtn.addEventListener('click', nextImg);
previousBtn.addEventListener('click', previousImg);
imgDot.item(0).classList.toggle('selected');

function nextImg() {
  if (pos > 4) {
    imgStrip.setAttribute('pos', '1');
    pos = 1;
    imgDot.item(0).classList.toggle('selected');
    imgDot.item(4).classList.toggle('selected');
  } else {
    pos+=1;
    imgStrip.setAttribute('pos', pos);
    imgDot.item(pos - 2).classList.toggle('selected');
    imgDot.item(pos - 1).classList.toggle('selected');
  }

}

function previousImg() {
  if (pos < 2) {
    imgStrip.setAttribute('pos', '5');
    pos = 5;
    imgDot.item(4).classList.toggle('selected');
    imgDot.item(0).classList.toggle('selected');
  } else {
    pos-=1;
    imgStrip.setAttribute('pos', pos);
    imgDot.item(pos).classList.toggle('selected');
    imgDot.item(pos - 1).classList.toggle('selected');

  }
}

function selectImg(i) {
  const imgNum = i + 1;
  pos = i + 1;
  imgStrip.setAttribute('pos', imgNum);
  for (let i = 0; i < imgDot.length; i+=1) {
    const dot = imgDot[i]
    dot.classList.remove('selected');
  }
  imgDot.item(i).classList.add('selected');
}

for (let i = 0; i < imgDot.length; i+=1) {
  const dot = imgDot[i]
  dot.addEventListener('click', () => selectImg(i));
}