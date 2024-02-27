// Complex method
var str = 'This is string';
var length = 0;
while (true) {
    if (str.charAt(length) === '') {
        break;
    }
    else {
        length++;
    }
}
console.log(length);

// Easy method
console.log(str.length);