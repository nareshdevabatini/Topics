Reverse string
var data="hello"
data.split('').reverse().join('')

Pallindrome
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}
