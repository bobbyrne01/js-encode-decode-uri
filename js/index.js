// when window loaded (resources etc)
window.onload = function () {

  // declare variables
  var encodeButton = document.getElementById('encode'),
    decodeButton = document.getElementById('decode'),
    encodedField = document.getElementById('encoded'),
    decodedField = document.getElementById('decoded');

  // when 'encode' button clicked, update value in encoded input field
  encodeButton.addEventListener('click', function(){
    if (decodedField.value !== ''){ // ignore if no value provided to encode
      encodedField.value = encodeURIComponent(decodedField.value);
    }
  });

  // when 'decode' button clicked, update value in decoded input field
  decodeButton.addEventListener('click', function(){
    if (encodedField.value !== ''){ // ignore if no value provided to decode
      decodedField.value = decodeURIComponent(encodedField.value);
    }
  });
};
