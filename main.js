// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let like = document.querySelector('.like-glyph')
// console.log(like);
like.addEventListener('click',function (event) {
  // event.preventDefault();
  mimicServerCall()
  .then( function (serverMessage)  {
    if (like === EMPTY_HEART ) {
      like.innerHTML = FULL_HEART
      like.classList.add('activated-heart') 
    } else {
      like.innerHTML = EMPTY_HEART
      like.classList.remove('activated-heart')
    }
  })
  .catch( function (error) {
    like.classList.remove('hidden')
    let message = document.getElementById('modal-message')
    message.innerText = error;
    setTimeout(() => {
      like.classList.add('hidden')
    }, 3000);
  })  
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
