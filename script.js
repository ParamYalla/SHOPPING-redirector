function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// navbar code end
//
//
//

//






// cgpt

let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "images/white shirt.jpg",
      link: { amazon: "#", flipkart: "#" },
    },
    {
      productName: "Beige Short Skirt",
      category: "Bottomwear",
      price: "49",
      image: "images/Beige Short Skirt.jpg",
      link: { amazon: "#", flipkart: "#" },
    },
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "images/Sporty SmartWatch.jpg",
      link: { amazon: "#", flipkart: "#" },
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "images/knitted top.jpg",
      link: { amazon: "#", flipkart: "#" },
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "images/Black Leather Jacket.jpg",
      link: { amazon: "#", flipkart: "#" },
    },
    {
      productName: "Stylish Pink Trousers",
      category: "Bottomwear",
      price: "89",
      image: "images/stylish pink trouser.jpg",
      link: { amazon: "#", flipkart: "#" },
    },
    {
      productName: "Brown Men's Jacket",
      category: "Jacket",
      price: "189",
      image: "images/Brown Men's Jacket.jpg",
      link: { amazon: "#", flipkart: "#" },
    },
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "images/Comfy Gray Pants.jpg",
      link: { amazon: "#", flipkart: "#" },
    },
  ],
};

for (let i of products.data) {
  // Create Card
  let card = document.createElement("div");
  // Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  // Image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  // Image tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // Container
  let container = document.createElement("div");
  container.classList.add("container");
  // Product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  // Price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  // Add Amazon and Flipkart icons
  let links = document.createElement("div");
  links.classList.add("links");
  if (i.link.amazon !== "") {
    let amazonLink = document.createElement("a");
    amazonLink.href = i.link.amazon;
    amazonLink.target = "_blank";
    amazonLink.innerHTML = '<i class="fab fa-amazon"></i>';
    links.appendChild(amazonLink);
  }
  if (i.link.flipkart !== "") {
    let flipkartLink = document.createElement("a");
    flipkartLink.href = i.link.flipkart;
    flipkartLink.target = "_blank";
    flipkartLink.innerHTML = '<i class="fa fa-facebook-official"></i>';
    links.appendChild(flipkartLink);
  }
  container.appendChild(links);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// Parameter passed from button (Parameter same as category)
function filterProduct(value) {
  // Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    // Check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  // Select all cards
  let elements = document.querySelectorAll(".card");
  // Loop through all cards
  elements.forEach((element) => {
    // Display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      // Check if element contains category class
      if (element.classList.contains(value)) {
        // Display element based on category
        element.classList.remove("hide");
      } else {
        // Hide other elements
        element.classList.add("hide");
      }
    }
  });
}

// Search button click
document.getElementById("search").addEventListener("click", () => {
  // Initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  // Loop through all elements
  elements.forEach((element, index) => {
    // Check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      // Display matching card
      cards[index].classList.remove("hide");
    } else {
      // Hide others
      cards[index].classList.add("hide");
    }
  });
});

// Initially display all products
window.onload = () => {
  filterProduct("all");
};