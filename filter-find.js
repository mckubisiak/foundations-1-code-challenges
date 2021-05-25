// Use the filter or find array methods to solve these problems

/* 
Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {
    
    const dairyProducts = arr.filter(input => input.category === 'dairy');  
    return dairyProducts;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
    const expensiveProducts = arr.filter(input => input.price > 2 && input.category === 'fruit');  
    return expensiveProducts;
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {

    const cheese = arr.find(input => input.id === 'cheese');
    return cheese;

}


/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    const allFruitNames = [];
    const allFruits = arr.filter(input => input.category === 'fruit');  

    allFruits.map(input => allFruitNames.push(input.id))

    return allFruitNames;

}

