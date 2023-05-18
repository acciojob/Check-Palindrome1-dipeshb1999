// complete the given function
function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare characters from beginning and end of the string
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false; // Characters don't match, not a palindrome
    }
    left++;
    right--;
  }
  return true; // All characters matched, it's a palindrome
}


