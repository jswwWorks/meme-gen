const memeRequestForm = document.querySelector('form'); //

/*
current puzzle: learn how to save and store data from submitted form (what am I missing?)



*/



memeRequestForm.addEventListener("submit", function(e) {
  e.preventDefault(); // prevents the page from loading

  alert('testing image creation');
  const newMeme = document.createElement('img'); // this makes an empty image element for me to put stuff into
  //const imgLink = querySelector('')

  const imgLink = memeRequestForm.getElementById('image-url'); // maybe I need to use some kind of innerText?
  /* I think I see the problem:
    what I'm trying to do is reach into the form's input value for the image url input box and grab that url

    where I'm having trouble is that I want to grab the url but even

  */


  newMeme.setAttribute('src', imgLink); // inserts link into element
  // now to append the element to the code
  // it's not grabbing the right element

  document.getElementById('memeStorage').append(newMeme); // this puts the image into div container


  // ignore for now:
  //const topText = document.querySelector('#top-text');

  // Note: you are about to deal with this part, but first make sure the event runs
  //const picForMeme = document.querySelector('#image-url');



  // ignore for now:
  //const bottomText = document.querySelector('#bottom-text');
  //alert(`${topText} ${picForMeme} ${bottomText}`); // this is the only line that did not run
})


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