function displayHomes(homes) {
  const homesListContainer = document.getElementById("house_list");
  homesListContainer.innerHTML = "";

  homes.forEach((home) => {
    const homeCard = document.createElement("div");
    homeCard.classList.add("home_card");

    homeCard.innerHTML = `
                    <h3>${home.name}</h3>
                    <div class="home_img_container">
                      <img src=${home.homeImage} alt=${home.name}/>
                    </div>
                    <div>Id: <p>${home._id}</p></div>
                    <div>Owner: <p>${home.owner}</p></div>
                    <div>Address: <p>${home.address}</p></div>
                    <div>Pincode: <p>${home.pincode}</p></div>
                    <div>Area (sqFeet): <p>${home.sqfeet}</p></div>
                    <div>No. of Bedrooms: <p>${home.nBedrooms}</p></div>
                    <div>No. of Bathrooms: <p>${home.nBathrooms}</p></div>
                    <div>Build Year: <p>${home.buildYear}</p></div>
                    <div>Price: <p>${home.price}</p></div>
                    <div>Status: <p>${home.status}</p></div>
                    <div>Category: <p>${home.category}</p></div>
                    <div>Description: <p>${home.description}</p></div>
                `;

    homesListContainer.appendChild(homeCard);
  });
}

function fetchAllHomes() {
  fetch("http://localhost:3001/api/v1/homes")
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched Homes:", data.data);
      displayHomes(data.data);
    })
    .catch((error) => {
      console.error("Error fetching homes:", error);
      alert("Error fetching homes. Please try again.");
    });
}

function addHome() {
  const homeID = document.getElementById("homeID").value;
  const name = document.getElementById("name").value;
  const owner = document.getElementById("owner").value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const description = document.getElementById("description").value;
  const sqfeet = parseInt(document.getElementById("sqfeet").value);
  const nBedrooms = parseInt(document.getElementById("nBedrooms").value);
  const nBathrooms = parseInt(document.getElementById("nBathrooms").value);
  const buildYear = document.getElementById("buildYear").value;
  const price = parseInt(document.getElementById("price").value);
  const homeImage = document.getElementById("homeImage").value;
  const status = document.getElementById("status").value;

  const formData = {
    name,
    owner,
    address,
    pincode,
    description,
    sqfeet,
    nBedrooms,
    nBathrooms,
    buildYear,
    price,
    homeImage,
    status,
  };

  const apiURL = homeID
    ? `http://localhost:3001/api/v1/homes/${homeID}`
    : "http://localhost:3001/api/v1/homes";

  fetch(apiURL, {
    method: homeID ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
      fetchAllHomes();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error adding home. Please try again.");
    });
}

function deleteHome() {
  const homeID = document.getElementById("deleteHomeId").value;

  fetch(`http://localhost:3001/api/v1/homes/${homeID}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log("Success: Home deleted successfully.");
        fetchAllHomes();
      } else {
        console.error("Error:", response.statusText);
        alert("Error deleting home. Please check the Home ID and try again.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Error deleting home. Please try again.");
    });

  document.getElementById("deleteHomeId").value = "";
}

function filterCategory() {
  const filter_category = document.getElementById("filter_category").value;

  fetch(`http://localhost:3001/api/v1/homes/category/${filter_category}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched Homes:", data.data);
      displayHomes(data.data);
    })
    .catch((error) => {
      console.error("Error fetching homes:", error);
      alert("Error fetching homes. Please try again.");
    });

  document.getElementById("deleteHomeId").value = "";
}

function filterBySearch() {
  const maxPrice = document.getElementById("maxPrice").value;
  const minSqfeet = document.getElementById("minSqfeet").value;
  const nBedrooms = document.getElementById("nBedrooms_search").value;
  const nBathrooms = document.getElementById("nBathrooms_search").value;

  const params = new URLSearchParams({
    maxPrice,
    minSqfeet,
    nBedrooms,
    nBathrooms,
  });

  const apiUrl = `http://localhost:3001/api/v1/homes/search?${params.toString()}`;

  console.log(apiUrl);

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched Homes:", data.data);
      displayHomes(data.data);
    })
    .catch((error) => {
      console.error("Error fetching homes:", error);
      alert("Error fetching homes. Please try again.");
    });
}

document.addEventListener("DOMContentLoaded", fetchAllHomes);
document.getElementById("add_home_btn").addEventListener("click", addHome);
document
  .getElementById("delete_house_btn")
  .addEventListener("click", deleteHome);
document
  .getElementById("filter_category_btn")
  .addEventListener("click", filterCategory);
document
  .getElementById("filter_search_btn")
  .addEventListener("click", filterBySearch);
