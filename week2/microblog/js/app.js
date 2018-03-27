console.log("Can I kick it?");

//Your JS will hold an array of posts that it appends to the HTML list.


// When your user clicks submit, your JS should handle taking the content of the form and putting it in that array, and updating the DOM.

const form1 = document.getElementById('blogform');
form1.addEventListener('submit', function(e) {
  e.preventDefault();
let titleForm = document.getElementById('textBoxHeader1').value;
console.log(form1);


});
