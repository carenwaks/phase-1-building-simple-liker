// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Selecting the heart 
let likes = document.querySelectorAll('.like-glyph')
// console.log(like);

// Add event listener to all hearts
likes.forEach((like) => {
  like.addEventListener("click", heartClick);
});

const heartClick = function(event) {
  // Invoke mimicServerCall when user clicks on heart
  mimicServerCall()
    // If failure: display error modal
    .catch((message) => {
      // Remove "hidden" class from error modal
      const modal = document.getElementById("modal");
      modal.classList.remove("hidden");

      // Display error message
      const errorMessage = modal.getElementById("modal-message");
      errorMessage.innerHTML = message;

      // Hide modal after 3 seconds
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 3000);
    })
    // Change heart button to full heart if empty heart
    .then(() => {
      if (event.target.innerHTML === EMPTY_HEART) {
        event.target.innerHTML = FULL_HEART;
        event.target.classList.add("activated-heart");
      } else {
        event.target.innerHTML = EMPTY_HEART;
        event.target.classList.remove("activated-heart");
      }
    });
};





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
