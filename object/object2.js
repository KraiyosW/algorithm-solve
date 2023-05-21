const product = {
    name: "Xiaomi Air Purifier",
    price: 4000,
    ratings: 2.5,
    photo: null,
  };
  
  let socialMediaShare = "facebookShare";
  
  product.ratings = "IT01010110";
  product.price = 6000;
  product.photo = "https://i01.appmifile.com/webfile/globalimg/products/pc/mi-air-purifier-3H/replace_03.jpg";
  product.facebookShare = "socialMediaShare";
  product.facebookShare = 45.5
  
  console.log(product);
  
  delete product.ratings;

  console.log(product)