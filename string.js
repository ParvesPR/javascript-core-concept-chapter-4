// String declaration method
var str = 'this is string'; /* String literal */
var str2 = 10;
var str3 = String(str2); /* String constructor */
var str4 = str3.toString(); /* String constructor */
// console.log(str, str4);

/* Escape Notation */
var str = 'This is a \'string\''; /* Print single quote */
var str2 = 'This is a \nstring'; /* A new line */
var str3 = 'This is a \tstring'; /* Horizontal Tabulator */
// console.log(str3);

/*The most commonly used of the many escape notations 
\\ – Backslash.
\' – Single quote.
\" – Double quote.
\n – Newline.
\r – Carriage return.
\t – Tab.
*/

/* String comparison */
var a = 'abcA';
var b = 'abca';
console.log(a > b); /* javaScript uses the lexicographic system to compare string */

// Build in string method
var a = 'I am';
var b = 'Parves';
var c = a.concat(b); /* Joins two or more strings. */
var d = c.substring(4, 7);/* Extract string text and indicate start & ending point */
var e = c.charAt(7); /* Character at a specified index (position) in a string */
var f = c.startsWith('I am') /* Returns true if a string starts with a specified string. Otherwise, it returns false */
var g = c.endsWith('I am') /* Returns true if a string ends with a specified string. Otherwise, it returns false */
console.log(d);
console.log(c.charAt(7));
console.log(f);
console.log(g);