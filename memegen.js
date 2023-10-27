const memeRequestForm = document.querySelector('form'); //
const imageInput = document.querySelector('input[name=imageURL]');
const topTextInput = document.querySelector('input[name=topText]');
const bottomTextInput = document.querySelector('input[name=bottomText]');

memeRequestForm.addEventListener("submit", function(e) {
  e.preventDefault(); // prevents the page from refreshing
  // Creating div to store the image
  const memeContainer = document.createElement('div'); // this creates the div container to put the image into
  memeContainer.classList.add('memes'); // gives div element 'memes' class for styling
  document.getElementById('memeStorage').append(memeContainer); // finds the memeStorage section and appends div to it

  let myUrl = imageInput.value;
  memeContainer.style.backgroundImage = `url(${myUrl})`; // should set background to this url
  memeContainer.style.backgroundSize = 'contain';
  memeContainer.style.height = '400px';
  memeContainer.style.width = '400px';
  memeContainer.style.backgroundPosition = 'center center';
  memeContainer.style.backgroundRepeat = 'no-repeat'; // prevents background image from repeating

  // Top text
  const newTopText = document.createElement('p');
  newTopText.classList.add('memeText'); // gives it memeText class
  newTopText.classList.add('top'); // gives it top class for specific positioning
  newTopText.innerText = topTextInput.value; // puts proper text into element
  memeContainer.append(newTopText); // appends text to same div as image

  // Bottom text
  const newBottomText = document.createElement('p');
  newBottomText.classList.add('memeText'); // gives it memeText class
  newBottomText.classList.add('bottom'); // gives it bottom class for specific positioning
  newBottomText.innerText = bottomTextInput.value; // puts proper text into element
  memeContainer.append(newBottomText); // appends text to same div as images

  // Delete button
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('del'); // gives it this class
  deleteButton.innerText = 'Delete this Meme';
  memeContainer.append(deleteButton);
  deleteButton.addEventListener('click', e => {removeMe(deleteButton) })

  // After storing the values of the meme, reset them for next submission:
  imageInput.value = '';
  topTextInput.value = '';
  bottomTextInput.value = '';

});

function removeMe(button) {
  button.parentElement.remove();
}
