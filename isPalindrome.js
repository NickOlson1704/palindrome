function isPalindrome(word) {
    return word === word.split('').reverse().join('');
  }

  console.log(isPalindrome("racecar")); 
  console.log(isPalindrome("hello")); 
  console.log(isPalindrome("level")); 
  console.log(isPalindrome("deified")); 