// script.js
function appendValue(value) {
    const result = document.getElementById("result");
    if (value === '+/-') {
      result.value = result.value.startsWith('-')
        ? result.value.substring(1)
        : '-' + result.value;
    } else {
      result.value += value;
    }
  }
  
  function clearDisplay() {
    document.getElementById("result").value = '';
  }
  
  function deleteLast() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
  }
  
  function calculateResult() {
    const result = document.getElementById("result");
    try {
      result.value = eval(result.value); // Note: eval() should be used carefully
    } catch (e) {
      result.value = 'Error';
    }
  }
  