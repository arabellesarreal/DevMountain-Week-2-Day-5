///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1//////////////////// Done
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE
pizza = {
    name: "pizza",
    price: 15.25,
    category: "large",
    popularity: 52,
    rating: 5,
    tags: ["pizza", "cheese", "good"]
}



//////////////////PROBLEM 2//////////////////// Done
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

//CODE HERE
console.log(pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log(pizza.tags[1])

/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/

//CODE HERE
let {price} = pizza

console.log(price)

/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

//CODE HERE
let {category} = pizza

console.log(category)


//////////////////PROBLEM 3//////////////////// Done
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
foodArr = [{
    name: "pizza",
    price: 15.25,
    category: "entree",
    popularity: 52,
    rating: 5,
    tags: ["pizza", "cheese", "pie","for sale"]
},
{
    name: "flan",
    price: 13.20,
    category: "dessert",
    popularity: 92,
    rating: 4,
    tags: ["flan", "sweet", "custard", "for sale"]
},
{
    name: "tacos",
    price: 20.12,
    category: "entree",
    popularity: 23,
    rating: 7,
    tags: ["tacos", "savory", "not a burrito", "sold"]
},
{
    name: "mozzarella sticks",
    price: 18.45,
    category: "appetizer",
    popularity: 87,
    rating: 8,
    tags: ["mozzarella", "sticks", "sauce", "for sale"]
},
{
    name: "pie",
    price: 23.25,
    category: "dessert",
    popularity: 72,
    rating: 9,
    tags: ["pie", "sweet", "fruity", "sale"]
}]


//////////////////PROBLEM 4//////////////////// Done
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter(food => {return food.tags.includes("sweet")})
console.log(filteredFood)


//////////////////PROBLEM 5//////////////////// Done
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE
//type = above or below
//number = rating number threshold
//property = rating property
function filterByProperty(property,number,type){
    switch(property){
        case("rating"):
        if(type === "above"){
            return foodArr.filter(food => {return food.rating > number});
        }else{
            return foodArr.filter(food => {return food.rating < number});
        }
        case("popularity"):
        if(type === "above"){
            return foodArr.filter(food => {return food.popularity > number});
        }else{
            return foodArr.filter(food => {return food.popularity < number});
        }
        case("price"):
        if(type === "above"){
            return foodArr.filter(food => {return food.price > number});
        }else{
            return foodArr.filter(food => {return food.price < number});
        }
    }
}

console.log(filterByProperty("rating", 5, "above"))

/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

//CODE HERE
console.log(filterByProperty("rating", 5, "above"))
console.log(filterByProperty("popularity", 55, "below"))
console.log(filterByProperty("price", 15.10, "above"))