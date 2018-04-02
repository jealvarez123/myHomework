console.log("Can I kick it?");

//Your JS will hold an array of posts that it appends to the HTML list.


// When your user clicks submit, your JS should handle taking the content of the form and putting it in that array, and updating the DOM.

// This pushes the text entered in the form.
let form1 = document.getElementById('blogform');
form1.addEventListener('submit', function(e) {
  e.preventDefault();
let titleForm = document.getElementById('textBoxHeader1').value;
let bodyForm = document.getElementById('textBoxBody1').value;


console.log(form1);
});

//this is gathering the form
let formHeader = document.getElementById("textBoxHeader1").value;
document.getElementById('textBoxBody1').value;

let blogArray = [];

function submit() {
  blogArray.push(formHeader.value);
  console.log(blogArray);
}



// const blogArray = [];
//
//
// blogArray.title =
// blogArray.push(document.getElementById('textBoxHeader1').value)
//
// blogArray.body = blogArray.push(document.getElementById('textBoxHeader1').value)
//
// console.log(blogArray);

//
// const form2 = document.getElementById('blogform');
// form1.addEventListener('submit', function(e) {
//   e.preventDefault();
// let bodyForm = document.getElementById('textBoxBody1').value;



// });

// this array will hold all of the information submitted.

// let blogArray = [];
// blogArray.title = document.getElementById('textBoxHeader1').value;
// blogArray.body = document.getElementById('textBoxBody1').value;
