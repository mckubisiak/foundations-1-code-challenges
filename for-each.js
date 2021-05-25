// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Output:

const pets = [
    {

        type: 'cat',
        name: 'coco',
    },
    {
        type: 'frog',
        name: 'jumper',
    }
];
['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
    const names = [];
    
    arr.forEach(pet => {
            names.push(pet.name);
            
    });
        return names;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const output = [];

    arr.forEach(pet => {
    output.unshift(pet.type);

    })
    return output;
}


/*
Output:

[
    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },
]
*/

export function makeSpanishLanguageArray(arr) {

    const translate = [];

    arr.forEach(pet => {

        let spanish = { nombre: pet.name, tipo: pet.type }
        translate.push(spanish)
    })

    return translate
}

