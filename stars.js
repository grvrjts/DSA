/*
-----------
****
****
****
****
----------
*/

for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < 4; j++) {
        row = row + "*";
    }
    console.log(row)
}


/*
----------
*
**
***
****
----------
*/
for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
        row = row + "*";
    }
    console.log(row);
}

for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + "*";
    }
    console.log(row);
}

/*
--------
1
12
123
1234
--------
*/
for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (j + 1);
    }
    console.log(row);
}

/*
--------
1
22
333
4444
--------
*/
for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + (i + 1);
    }
    console.log(row);
}

/*
--------
1234
123
12
1
--------
*/
for (let i = 4; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row = row + (j + 1);
    }
    console.log(row)
}
for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < 4 - i; j++) {
        row = row + (j + 1);
    }
    console.log(row)
}

/*
--------
    
*/
for (let i = 0; i < 4; i++) {
    let row = "";
    for (let j = 0; j < 4 - ( i + 1); j++) {
        row = row + " ";
    }
    for (let k = 0; k < i + 1; k++) {
        row = row + "*";
    }
    console.log(row);
}