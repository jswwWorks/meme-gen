const memeRequestForm = document.querySelector('form'); //
const imageInput = document.querySelector('input[name=imageURL]');
const topTextInput = document.querySelector('input[name=topText]');
const bottomTextInput = document.querySelector('input[name=bottomText]');

memeRequestForm.addEventListener("submit", function(e) {
  e.preventDefault(); // prevents the page from loading

  // Shows the image
  const newMeme = document.createElement('img'); // this makes an empty image element for me to put stuff into
  newMeme.setAttribute('src', imageInput.value); // inserts link into element
  document.getElementById('memeStorage').append(newMeme); // this puts the image into div container


  // top text
  // this and the bottom text will change soon for when I attach it to image
  // all I'm doing rn is proving I can display each value. Baby steps!


  const newTopText = document.createElement('p');
  newTopText.innerText = topTextInput.value;
  document.getElementById('memeStorage').append(newTopText);

  const newBottomText = document.createElement('p');
  newBottomText.innerText = bottomTextInput.value;
  document.getElementById('memeStorage').append(newBottomText);

  // After storing the values of the meme, reset them for next submission:
  imageInput.value = '';
  topTextInput.value = '';
  bottomTextInput.value = '';

  // ignore for now:
  //const topText = document.querySelector('#top-text');

  // Note: you are about to deal with this part, but first make sure the event runs
  //const picForMeme = document.querySelector('#image-url');



  // ignore for now:
  //const bottomText = document.querySelector('#bottom-text');
  //alert(`${topText} ${picForMeme} ${bottomText}`); // this is the only line that did not run
});


/*
code that might be useful:

const newMeme = document.createElement('img'); // creates the image
newMeme.setAttribute('src', linkHere); // put link here (you'll have a variable name for this, don't worry)

document.body.append(newMeme); // this puts the image after the body; I might want to have this in a div, though

*/


/*
Progress!

okay first I made sure the HTML and JS files are properly linked

now I want to work on creating and appending an image based on the url providd
*/