let pageOne = true;
const navn = document.getElementById('navn');
const email = document.getElementById('email');
const submitBtn = document.getElementById('submit');
const leftArrow = document.getElementById('leftBtn');
const rightArrow = document.getElementById('rightBtn');

const recipeArray = [
  {
    src: './assets/images/instagram_01.jpg',
    alt: 'Blabla1',
    recipe: '1BLABLALBLABLALBALBLABLA JAJAJAJAJAJAJAJ',
  },
  {
    src: './assets/images/instagram_02.jpg',
    alt: 'Blabla2',
    recipe: '2BLABLALBLABLALBALBLABLA JAJAJAJAJAJAJAJ',
  },
  {
    src: './assets/images/instagram_03.jpg',
    alt: 'Blabla3',
    recipe: '3BLABLALBLABLALBALBLABLA JAJAJAJAJAJAJAJ',
  },
  {
    src: './assets/images/instagram3.jpg',
    alt: 'Blabla4',
    recipe: '4BLABLALBLABLALBALBLABLA JAJAJAJAJAJAJAJ',
  },
  {
    src: './assets/images/instagram5.jpg',
    alt: 'Blabla5',
    recipe: '5BLABLALBLABLALBALBLABLA JAJAJAJAJAJAJAJ',
  },
  {
    src: './assets/images/instagram7.jpg',
    alt: 'Blabla6',
    recipe: '6BLABLALBLABLALBALBLABLA JAJAJAJAJAJAJAJ',
  },
];

const validateName = (navn) => {
  const str = navn.value;
  const regex = /^[a-z ,.'-]+$/i;
  return str.length > 5 && regex.test(str);
};
const validateEmail = (email) => {
  const str = email.value;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(str);
};

function submit(e) {
  e.preventDefault();

  const isEmailValid = validateEmail(email);
  const isNameValid = validateName(navn);

  if (isEmailValid && isNameValid) {
    alert('Thank you!');
  } else if (!isEmailValid && !isNameValid) {
    alert('Navn og email er forkert');
  } else if (!isEmailValid && isNameValid) {
    alert('Email er forkert');
  } else {
    alert('Navn er forkert!');
  }
}
function swap() {
  const images = document.getElementsByClassName('recipeImg');
  const afterImg = document.querySelectorAll('#recipe-grid li figure');

  if (pageOne) {
    images[0].src = recipeArray[3].src;
    images[0].alt = recipeArray[3].alt;
    afterImg[0].setAttribute('data-recipe', recipeArray[3].recipe);

    images[1].src = recipeArray[4].src;
    images[1].alt = recipeArray[4].alt;
    afterImg[1].setAttribute('data-recipe', recipeArray[4].recipe);

    images[2].src = recipeArray[5].src;
    images[2].alt = recipeArray[5].alt;
    afterImg[2].setAttribute('data-recipe', recipeArray[5].recipe);

    pageOne = !pageOne;
  } else {
    images[0].src = recipeArray[0].src;
    images[0].alt = recipeArray[0].alt;
    afterImg[0].setAttribute('data-recipe', recipeArray[0].recipe);

    images[1].src = recipeArray[1].src;
    images[1].alt = recipeArray[1].alt;
    afterImg[1].setAttribute('data-recipe', recipeArray[1].recipe);

    images[2].src = recipeArray[2].src;
    images[2].alt = recipeArray[2].alt;
    afterImg[2].setAttribute('data-recipe', recipeArray[2].recipe);

    pageOne = !pageOne;
  }
}

leftArrow.addEventListener('click', swap);
rightArrow.addEventListener('click', swap);
submitBtn.addEventListener('click', submit);
