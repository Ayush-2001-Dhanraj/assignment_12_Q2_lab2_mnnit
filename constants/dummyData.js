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
    homeImage: "apartment_image_url_1.jpg",
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
    homeImage: "house_image_url_1.jpg",
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
    homeImage: "cottage_image_url_1.jpg",
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
    homeImage: "villa_image_url_1.jpg",
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
    homeImage: "cabin_image_url_1.jpg",
    status: "sold",
    pincode: "730811",
    category: "condo",
  },
];

module.exports = propertiesArray;
