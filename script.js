// complete the given function

// function palindrome(str){

// }
// module.exports = palindrome
function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Compare characters from both ends
  for (let i = 0, j = cleanString.length - 1; i < j; i++, j--) {
    if (cleanString[i] !== cleanString[j]) {
      return false;
    }
  }

  return true;
}

