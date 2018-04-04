console.log('Can I kick it?');



function convertCurrency(event) {



$.ajax({
  // What kind of request
  method: 'GET',

  // The URL for the request
  url: 'http://data.fixer.io/api/latest?access_key=37922329f842dea02c0bae4788509542&symbols=USD,EUR,CNY,GBP,JPY',

  // The type of data we want back
  dataType: 'json',

  // Code to run if the request succeeds; the JSON
  // response is passed to the function as an argument.
  success: function(fixer) {

let amt = $('#money').val();

// exchange rate data is stored in json.rates.country tender

if (event.target.value === 'USD') {
  let converted = amt * (fixer.rates.USD);
  $('#output_amount').append('<p></p>').text(converted);
  $('#output_currency').append('<p></p>').text('USD')

    console.log('converted');
  }else if (event.target.value === 'GBP') {
    let converted = amt * (fixer.rates.GBP);
    $('#output_amount').append('<p></p>').text(converted);
    $('#output_currency').append('<p></p>').text('GBP')


    }





}




    });

};




document.body.addEventListener('click', convertCurrency);
