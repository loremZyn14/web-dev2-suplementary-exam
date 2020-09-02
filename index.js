// Looping a triangle:

var loopTriangle = () => {
    for (let index = 1; index < 8; index++) {
        console.log('#'.repeat(index));
    }
}
// Bean counting:
var countBs = (string) => {
    let Bs = 0;
    for (let index = 0; index < string.length; index++) {
        if (string[index] == 'B') {
            Bs++
        }
    }
    return Bs
}

var countChar = (string, char) => {
    let numberOfChar = 0;
    for (let index = 0; index < string.length; index++) {
        if (string[index] == char) {
            numberOfChar++
        }
    }
    return numberOfChar;
}

// Reversing an array:

var reverseArray = (arr) => {
    let newArr = [];
    for (let index = arr.length - 1; index > -1; index--) {
        newArr.push(arr[index])
    }

    return newArr;
}
var reverseArrayInPlace = () => {
    
}

loopTriangle()

console.log(countBs("avBBbasdBdb"));
console.log(countChar("avBBbasdBdb", 'a'));
console.log(reverseArray([1, 2, 3, 4, 5, 6]));

// Build a table:

var mountains = [
    { 'name': 'Kilimanjaro', 'height': 5895, 'place': 'Tanzania' },
    { 'name': 'Everest', 'height': 8848, 'place': 'Nepal' },
    { 'name': 'Mayon', 'height': 2463, 'place': 'Philippines' },
    { 'name': 'Denali', 'height': 6190, 'place': 'USA' }
];

var mountainTable = document.getElementById("mountains");

mountains.forEach(mountain => {
    let newRow = mountainTable.insertRow();
    newRow.insertCell().innerHTML = mountain.name;
    newRow.insertCell().innerHTML = mountain.height;
    newRow.insertCell().innerHTML = mountain.place;
});

mountainTable.style.textAlign= "right"