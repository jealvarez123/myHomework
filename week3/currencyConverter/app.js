console.log('Can I kick it?');



$.ajax({
  // What kind of request
  method: 'GET',

  // The URL for the request
  url: 'http://data.fixer.io/api/latest?access_key=37922329f842dea02c0bae4788509542&symbols=USD,EUR,CNY,GBP,JPY',

  // The type of data we want back
  dataType: 'json',

  // Code to run if the request succeeds; the JSON
  // response is passed to the function as an argument.
  success: onSuccess
});

// defining the callback function that will happen
// if the request succeeds.
function onSuccess(responseData) {
var rates = responseData.rates
console.log(rates);
    // console.log(responseData.rates);
    // celebrate!
};

function convertCurrency(event) {
  if ('type' in event.target && event.target.type === 'button') {
  let convert = responseData.rates * 'money';
    return convert;
    console.log('convert');
  }if ('type' in event.target && event.target.type === 'button') {
    console.log('handle currency conversion here');
  }
}

document.body.addEventListener('click', convertCurrency);
  console.log('Click!');
