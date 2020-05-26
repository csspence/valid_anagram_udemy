/*
Problem from Udemy Algorithms Course
Anagrams

Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram(' ', ' ') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('qwerty', 'qeywrt') // true
*/

const validAnagram = (str1, str2) => {
  if(str1.length !== str2.length) {
    return false;
  }
  const counter = {};
  for(let i = 0; i < str1.length; i++) {
    if(counter[str1[i]] === undefined) {
      counter[str1[i]] = 1;
    } else {
      counter[str1[i]]++;
    }
  }
  for(let h = 0; h < str2.length; h++) {
    if(counter[str2[h]] === undefined) {
      return false;
    }
    if(counter[str2[h]] === 0) {
      return false;
    }
    counter[str2[h]]--;
  }

  return true;
}