const propertiesArray = [
  {
    name: "Modern City Apartment",
    owner: "Alice Johnson",
    address: "456 Downtown Street, Metropolis",
    description: "A stylish and modern apartment in the heart of the city.",
    sqfeet: 1200,
    nBedrooms: 2,
    nBathrooms: 2,
    buildYear: new Date(2019, 5, 1), // June 1, 2019
    price: 250000,
    homeImage:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2023-11/26/full/1701018131-7486.jpg?im=FeatureCrop,size=(826,465)",
    status: "available",
    pincode: "123456",
    category: "single",
  },
  {
    name: "Suburban Family Home",
    owner: "Bob Smith",
    address: "789 Oak Avenue, Suburbia",
    description: "A spacious family home with a beautiful backyard.",
    sqfeet: 2000,
    nBedrooms: 4,
    nBathrooms: 3,
    buildYear: new Date(2010, 8, 15), // September 15, 2010
    price: 400000,
    homeImage:
      "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg",
    status: "sold",
    pincode: "789101",
    category: "condo",
  },
  {
    name: "Cozy Cottage",
    owner: "Eva Davis",
    address: "123 Pine Lane, Countryside",
    description: "A charming cottage surrounded by nature and tranquility.",
    sqfeet: 800,
    nBedrooms: 1,
    nBathrooms: 1,
    buildYear: new Date(1950, 3, 10), // April 10, 1950
    price: 150000,
    homeImage:
      "https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg",
    status: "off",
    pincode: "675893",
    category: "two",
  },
  {
    name: "Luxury Villa",
    owner: "David Miller",
    address: "101 Palm Road, Exclusive Neighborhood",
    description:
      "An elegant villa with luxurious amenities and a private pool.",
    sqfeet: 3500,
    nBedrooms: 5,
    nBathrooms: 4,
    buildYear: new Date(2015, 11, 20), // December 20, 2015
    price: 800000,
    homeImage:
      "https://d1g60h9yrlz7l3.cloudfront.net/207a91dbcc1b33777ad999eb3ba5f273c347f57e-1-medium.jpeg",
    status: "available",
    pincode: "123654",
    category: "rental",
  },
  {
    name: "Rustic Cabin",
    owner: "Grace Wilson",
    address: "222 Forest Trail, Mountainside",
    description:
      "A cozy cabin nestled in the mountains, perfect for a retreat.",
    sqfeet: 600,
    nBedrooms: 1,
    nBathrooms: 1,
    buildYear: new Date(1980, 6, 5), // July 5, 1980
    price: 120000,
    homeImage:
      "https://www.compass.com/m/66d0bf1bb93ced788fd7b416e7b749f05fb04609_img_0_bd41c/origin.jpg",
    status: "sold",
    pincode: "730811",
    category: "condo",
  },
];

module.exports = propertiesArray;
