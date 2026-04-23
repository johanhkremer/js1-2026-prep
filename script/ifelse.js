/*
----------------------------------------------------------------
? Falsy
----------------------------------------------------------------
Value	        Type	    Description
null	        Null	    The keyword null — the absence of any value.
undefined	    Undefined	undefined — the primitive value.
false	        Boolean	    The keyword false.
NaN	            Number	    Not a Number (represents an invalid or undefined result from a calculation.)
0	            Number	    The Number zero, also including 0.0, 0x0, etc.
-0	            Number	    The Number negative zero, also including -0.0, -0x0, etc.
0n	            BigInt	    The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
""	            String	    Empty string value, also including '' and ``.
document.all	Object	    The only falsy object in JavaScript is the built-in document.all.

----------------------------------------------------------------
? Truthy
----------------------------------------------------------------
All values are truthy except false values.
*/

//Truthy & falsy examples

/* 
Program = ett komplett system med tydlig struktur, ofta större och mer självständigt.

Script = en mindre kodfil som körs för att göra något specifikt.
*/

//if
const age = 20;
if (age >= 18) {
    console.log("Du är myndig ✅");
}

if (age < 18) {
    console.log("Du är inte myndig 🚨");
}

//if else
if (age >= 18) {
    console.log("Du är myndig ✅");
} else {
    console.log("Du är inte myndig 🚨");
}

const temperature = 25;
if (temperature > 20) {
    console.log("Det är varmt 🥵");
} else {
    console.log("Det är kallt 🥶");
}

// &&
const hasPassword = true;
const isAdmin = true;

if (hasPassword && isAdmin) {
    console.log("Du får tillgång till systemet 🔓");
} else {
    console.log("Du får inte tillgång till systemet 🚨")
}

// ||
const isMember = false;
const hasCoupon = true;

if (isMember || hasCoupon) {
    console.log("Du får rabatt");
}
