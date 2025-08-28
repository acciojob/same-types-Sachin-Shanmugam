function isSameType(value1, value2) {
  //your js code here
	const isNaN1 = typeof value1 === 'number' && isNaN(value1);
    const isNaN2 = typeof value2 === 'number' && isNaN(value2);

    // If both are NaN (and actual type is number)
    if (isNaN1 && isNaN2) return true;

    // If both are of the same type
    if (typeof value1 === typeof value2) return true;

    return false;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
