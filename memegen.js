const memeRequestForm = document.querySelector('form'); //
const imageInput = document.querySelector('input[name=imageURL]');
const topTextInput = document.querySelector('input[name=topText]');
const bottomTextInput = document.querySelector('input[name=bottomText]');


memeRequestForm.addEventListener("submit", function(e) {
  e.preventDefault(); // prevents the page from refreshing

  // Grabs the image
  // ignore these for now
  //const newMeme = document.createElement('img'); // this makes an empty image element for me to put stuff into
  //newMeme.classList.add('theImage'); // adds class for easier css selection
  //newMeme.setAttribute('src', imageInput.value); // inserts link into element

  // Creating div to store the image
  const memeContainer = document.createElement('div'); // this creates the div container to put the image into
  memeContainer.classList.add('memes'); // gives div element 'memes' class for styling
  document.getElementById('memeStorage').append(memeContainer); // finds the memeStorage section and appends div to it

  // the test:
  let myUrl = imageInput.value;
  console.log(typeof myUrl);
  memeContainer.style.height = '500px';
  memeContainer.style.width = '500px';

  memeContainer.style.backgroundImage = `url(${myUrl})`; // should set background to this url

  // memeContainer.backgroundSize = 'auto'; //this didn't work

  // next idea: learn how to retrieve the image size from the url and record the height and width as
  // variables to set in here
  memeContainer.style.backgroundRepeat = 'no-repeat'; // prevents background image from repeating

  console.log(imageInput.value);
  // end of test

  /*
  dont want image to repeat itself
  want to fit div container to sive of image

  do some digging around into that image

  */

  // ignore for now during test
  //memeContainer.append(newMeme); // appends the image to the div

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

  // After storing the values of the meme, reset them for next submission:
  imageInput.value = '';
  topTextInput.value = '';
  bottomTextInput.value = '';

});


/*

document.body.append(newMeme); // this puts the image after the body; I might want to have this in a div, though

// Idk when I was using this stuff:

  // ignore for now:
  //const topText = document.querySelector('#top-text');

  // Note: you are about to deal with this part, but first make sure the event runs
  //const picForMeme = document.querySelector('#image-url');


  // ignore for now:
  //const bottomText = document.querySelector('#bottom-text');
  //alert(`${topText} ${picForMeme} ${bottomText}`); // this is the only line that did not run


  Here is why i didn't set the background property because I didn't want to use CSS in my JS but it looks like i might have to

  ask P why object fill is behaving the way it is

  why dont you take a look first and see how to do css styling in js

*/


/*
Progress!

okay first I made sure the HTML and JS files are properly linked

now I want to work on creating and appending an image based on the url providd
*/