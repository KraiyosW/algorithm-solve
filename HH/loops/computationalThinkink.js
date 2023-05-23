let numbers = [10, 20, 30];
let anotherNumbers = [2, 4, 6];

function addNumber(numbers, amount) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] += amount;
  }
  return numbers;
}

console.log(addNumber(numbers, 10));
console.log(addNumber(anotherNumbers,2))





function countVowels(words) {
    let wordsCounter = 0; 
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (let key of words.toLowerCase()) {
      if (vowels.includes(key)) {
        wordsCounter++;
      }
    }
    
    return wordsCounter;
  }
  
  console.log(countVowels("Hello World")); // Output: 3
  console.log(countVowels("TechUp")); // Output: 2



  const products = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 700 },
    { name: "Tablet", price: 500 },
    { name: "Headphones", price: 300 },
    { name: "Keyboard", price: 50 }
  ];
  
  function getMostExpensiveProduct(products) {
    let highestPrice;
    let priceHighest = 0;
    for (const product of products) {
      if (product.price > priceHighest) {
        priceHighest = product.price;
        highestPrice = product;
      }
    }
    return highestPrice;
  }
  
  console.log(getMostExpensiveProduct(products));



  const movies = [
    {
      title: "The Shawshank Redemption",
      releaseDate: "1994-10-14",
      genre: "Drama",
    },
    { title: "The Godfather", releaseDate: "1972-03-24", genre: "Crime" },
    {
      title: "The Godfather: Part II",
      releaseDate: "1974-12-20",
      genre: "Crime",
    },
    { title: "The Dark Knight", releaseDate: "2008-07-16", genre: "Action" },
    { title: "Pulp Fiction", releaseDate: "1994-10-14", genre: "Crime" },
  ];
  
  function findMoviesByYear(movies, year) {
    // Start coding here
    let movieRelease =[];
      
      for (let i=0 ; i<movies.length ; i++){
          let getYear = new Date(movies[i].releaseDate);
          let fuctionYear = getYear.getFullYear();
          if(fuctionYear === year){
              movieRelease.push(movies[i]);                
          }
      }
      return movieRelease;
  }
  
  console.log(findMoviesByYear(movies, 1994));


  const str = "Techupth";

  function getLetterFrequency(words) {
    let wordCount = {};
    let lowerCase = words.toLowerCase();

    for (let i=0 ; i<lowerCase.length ;i++){
        if(wordCount[lowerCase[i]]){
            wordCount[lowerCase[i]]++;
        }else{
            wordCount[lowerCase[i]] = 1 ;
        }
    }
    return wordCount;
  }
   const words= "Techupth";

  console.log(getLetterFrequency(words))
  
 