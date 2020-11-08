document.getElementById('submit').addEventListener('click', function() {
  const str = document.getElementById('inputString').value;
  let obj = {};
  let maxVal = 0;
  let mostFreqElem;

  function lettersFreq(str){	
    for (let el of str){
      obj[el] = obj[el] ? ++obj[el] : 1;
    }  
    return obj;
  }
  
  function mostFrequent(callback, arg){
    obj = callback.call(this, arg);
    for (let el of Object.entries(obj)) {
      if (el[1] > maxVal) {
        maxVal = el[1]
        mostFreqElem = el;  
      }
    }
    document.getElementById('result').innerHTML = "The most frequent character is: " + mostFreqElem[0] + " - " + mostFreqElem[1];
  }

  mostFrequent(lettersFreq, str);  
});


document.getElementById('reset').addEventListener('click', function() {
  location.reload();
});