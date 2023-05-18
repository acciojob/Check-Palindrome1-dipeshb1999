// complete the given function
function isPalindrome() {
  var input = document.getElementById('input').value.toLowerCase().replace(/[^a-z0-9]/g, '');
  var reversed = input.split('').reverse().join('');

  if (input === reversed) {
    document.getElementById('result').textContent = 'It is a palindrome!';
  } else {
    document.getElementById('result').textContent = 'It is not a palindrome.';
  }
}


