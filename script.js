function checkPalindrome(event) {
  event.preventDefault();

  const inputString = document.getElementById("inputString").value;

  const isPalindrome = isStringPalindrome(inputString);
  document.getElementById("result").textContent =
    "Is Palindrome: " + isPalindrome;
}

function isStringPalindrome(inputString) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = inputString.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the cleaned string
  const reversedString = cleanedString.split("").reverse().join("");

  // Check if the cleaned string and reversed string are equal
  return cleanedString === reversedString;
}
