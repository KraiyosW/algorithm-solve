
/// HH loops ex1 ////
let scores = [89, 70, 60, 50, 100, 71]

for (let i= 0 ; i<scores.length ; i ++){
    scores[i] = scores[i] -10
}

console.log(scores)
/// HH loops ex1 ////

/// HH loops ex2 ////
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
let j = 0 ;
while (j< restaurants.length){
    newRestaurants.push(restaurants[j]  = `Restaurant Name: ${restaurants[j]}`);
    j++
}

console.log(newRestaurants);
/// HH loops ex2 ////

/// HH loops ex3 ///
let numbers = [100, 20, 3, 1000];
let minNumber = Infinity;

for (let k=0 ; k<numbers.length ; k++){

    if(numbers[k] < minNumber){
        minNumber = numbers[k]
    }
}
console.log(minNumber);
/// HH loops ex3 ///

/// HH loops ex4 ///

let companyName = "TechUp Thailand";
let reversedCompanyName = "";

for(key of companyName){
    reversedCompanyName = key + reversedCompanyName ;
}

console.log(reversedCompanyName)

/// HH loops ex4 ///

/// HH loops ex5 ///
let orders = [
    {
      id: 1,
      customerName: "Brenn Hugk",
      productName: "Chocolate - Milk, Callets",
      productPrice: 94690,
      productQuantity: 35,
      creditCardType: "solo",
    },
    {
      id: 2,
      customerName: "Celia Dary",
      productName: "Bread - Pumpernickle, Rounds",
      productPrice: 10746,
      productQuantity: 87,
      creditCardType: "jcb",
    },
    {
      id: 3,
      customerName: "Toinette Blindermann",
      productName: "Bar - Granola Trail Mix Fruit Nut",
      productPrice: 94191,
      productQuantity: 31,
      creditCardType: "switch",
    },
    {
      id: 4,
      customerName: "Anjela Joannet",
      productName: "Cheese - Parmesan Cubes",
      productPrice: 5131,
      productQuantity: 96,
      creditCardType: "diners-club-carte-blanche",
    },
    {
      id: 5,
      customerName: "Kennith Bussons",
      productName: "Wine - White, Pinot Grigio",
      productPrice: 94432,
      productQuantity: 75,
      creditCardType: "jcb",
    },
    {
      id: 6,
      customerName: "Birdie Shepland",
      productName: "Tomato Paste",
      productPrice: 5845,
      productQuantity: 65,
      creditCardType: "visa-electron",
    },
    {
      id: 7,
      customerName: "Willyt Helks",
      productName: "Asparagus - Green, Fresh",
      productPrice: 89253,
      productQuantity: 26,
      creditCardType: "laser",
    },
    {
      id: 8,
      customerName: "Bill Champion",
      productName: "Wine - Red, Harrow Estates, Cab",
      productPrice: 922100,
      productQuantity: 40,
      creditCardType: "china-unionpay",
    },
    {
      id: 9,
      customerName: "Cris Druce",
      productName: "Bar Mix - Lemon",
      productPrice: 83104,
      productQuantity: 6,
      creditCardType: "jcb",
    },
    {
      id: 10,
      customerName: "Darnell O'Currine",
      productName: "Lime Cordial - Roses",
      productPrice: 99041,
      productQuantity: 75,
      creditCardType: "visa-electron",
    },
  ];


  // Start coding here
  let maxOrder = Number.MIN_VALUE;
  let idMaxOrder = null;
  
  for (let l = 0; l < orders.length; l++) {
    if (orders[l].productPrice * orders[l].productQuantity > maxOrder) {
      idMaxOrder = orders[l].id;
      maxOrder = orders[l].productPrice * orders[l].productQuantity;
    }
  }
  
  console.log(`Order id: ${idMaxOrder}, Total price: ${maxOrder}`);

  let birdiePay = null ;

  for (let m = 0 ; m<orders.length ; m++){
    if(orders[m].customerName === "Birdie Shepland"){
        birdiePay = orders[m].productPrice * orders[m].productQuantity
    }
}
    console.log(`Total price is : ${birdiePay}`)

    let jcbCredit = [];

    for (let n=0 ; n<orders.length ; n++){
        if(orders[n].creditCardType === "jcb"){
            jcbCredit.push(orders[n])
        }
    }

    console.log(jcbCredit)

    let overAllPay = null ;
    for(let o = 0 ; o<orders.length ; o++){
        overAllPay += orders[o].productPrice * orders[o].productQuantity
    }
    console.log(`Total : ${overAllPay}`);

    let totalPrice = orders.reduce((accumurate,currantvalue)=> {
        return accumurate = accumurate + (currantvalue.productPrice * currantvalue.productQuantity);
    },0);

    console.log(totalPrice);

  /// HH loops ex5 



    /// HH loops ex6 

    let studentsScore = {
        "James": 40,
        "Ann": 80,
        "Joe": 52,
        "Ball": 67,
        "Mick": 89,
        "Ole": 10
    }

    //avg score //
    let totalScore = 0 ;
    let countStudent = 0 ;
    let higtScore = Number.MIN_VALUE;
    let lowestScore = Number.MAX_VALUE;
    let topStudent = null ;
    let lowestStudent = null;
    for(key in studentsScore){
        countStudent ++;
        totalScore = totalScore + studentsScore[key]
        if(studentsScore[key] > higtScore){
            higtScore = studentsScore[key]
            topStudent = key ;
        }else if (studentsScore[key] < lowestScore){
            lowestScore = studentsScore[key]
            lowestStudent = key;
        }
    }
    console.log((totalScore/countStudent).toFixed(2))
    console.log(`${topStudent}  has the highest score, which is ${higtScore} points.`)
    console.log(`${lowestStudent} has the lowest score, which is ${lowestScore} points.`);

  /// HH loops ex6 