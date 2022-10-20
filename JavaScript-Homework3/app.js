// The objects. They will be referred as menu items 
const menu = [
  {
    id: 1,
    title: "Sweet Roll",
    category: "GameFood",
    price: 10.99,
    img:
      "https://staticdelivery.nexusmods.com/mods/1704/images/44077/44077-1610001392-850340476.png",
    desc: `The Sweet Roll is a pastry-like treat found in multiple locations within Skyrim. <br> <strong>Its Origin : The Elder Scrolls V: Skyrim</strong>`,
  },
  {
    id: 2,
    title: "The Cake",
    category: "GameFood",
    price: "is a lie",
    img:
      "https://vanschneider.com/blog/content/images/wp-content/uploads/2017/01/cake.jpg",
    desc: `The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie. The cake is a lie. <br> <strong>The Cake: Is A Lie</strong>`,
  },
  {
    id: 3,
    title: "Eggs Benedict ",
    category: "AnimeFood",
    price: 8.99,
    img:
      "https://animealshome.files.wordpress.com/2019/01/image-1.png",
    desc: `Eggs Benedict is a dish made by Erina Nakiri for the Breakfast Buffet Challenge during the 92nd Tōtsuki Generation's Tōtsuki Friendship and Rapport Training Camp at the Tōtsuki Resort. <br> <strong>Its Origin : Shokugeki No Soma</strong> `,
  },
  {
    id: 4,
    title: "Nuka-Cola",
    category: "GameFood",
    price: 5.99,
    img:
      "https://www.therpf.com/forums/attachments/584672/",
    desc: `Nuka-Cola is the flagship product of the Nuka-Cola Corporation and one of the symbols of United States culture. <br> <strong>Its Origin : Fallout Series </strong>`,
  },
  {
    id: 5,
    title: "Ramen",
    category: "AnimeFood",
    price: 12.99,
    img:
      "https://qph.cf2.quoracdn.net/main-qimg-b11e86dd42cba180731aa1f0a2ab451c.webp",
    desc: `Naruto Uzumaki's favorite food. Made in Ichiraku Ramen in Konoha. <br> <strong>Its Origin : Naruto Series </strong>`,
  },
  {
    id: 6,
    title: "Transforming Furikake Gohan",
    category: "AnimeFood",
    price: 9.99,
    img:
      "https://itadakimasuanime.files.wordpress.com/2015/04/furikake-gohan-transforming-seasoning-shokugeki-no-souma-02-08.png",
    desc: `Transforming Furikake Gohan is a dish made by Sōma Yukihira for Erina Nakiri during his enrollment test at Tōtsuki Culinary Academy. It is Yukihira Diner's 8th dish on the secret menu. <br> <strong>Its Origin : Shokugeki No Soma</strong>`,
  },
  {
    id: 7,
    title: "Goat Cheese Wheel",
    category: "GameFood",
    price: 15.99,
    img:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/04/How-Absurd-Challenges-Help-Keep-the-Skyrim-Community-Alive.jpg",
    desc: `Goat cheese wheels can be found in most houses, castles, pantries, and inns. A considerable amount can be found inside the East Empire Company Warehouse and the Thalmor Embassy. <br> <strong>Its Origin : The Elder Scrolls V: Skyrim</strong>`,
  },
  {
    id: 8,
    title: "Chou Farci",
    category: "AnimeFood",
    price: 12.99,
    img:
      "https://64.media.tumblr.com/a24dfe996617e04fa039dbc24eaf2c11/tumblr_o4qnvuJ46y1t2rr2bo1_1280.png",
    desc: `Chou Farci is a dish made by Kojirō Shinomiya against Sōma Yukihira and Megumi Tadokoro in a Shokugeki during the 92nd Tōtsuki Generation's Tōtsuki Friendship and Rapport Training Camp at the Tōtsuki Resort. <br> <strong>Its Origin : Shokugeki No Soma</strong>`,
  },
  {
    id: 9,
    title: "Iguana On A Stick",
    category: "GameFood",
    price: 3.99,
    img:
      "https://fallout4.wiki.fextralife.com/file/Fallout-4/iguana_on_a_stick_ZH.jpg",
    desc: `The flesh of a small lizard, which has been baked. <br> <strong>Its Origin : Fallout Series </strong>`,
  },
];

let menuItemsDOM = document.querySelector('.section-center.row'); // Get the area where the menu items will be displayed
let buttonContainerDOM = document.querySelector('.btn-container'); // Get the area where the buttons will be displayed

window.addEventListener('load', loadPage); // Call loadPage function when the page loads

// Function for calling the functions displays menu items and buttons when the page loads 
function loadPage() {
  createButtons();
  showItems();
}

// Function for creating the buttons
function createButtons() {
  let categoryArray = []; // An Array to hold different categories

  // Loop through the menu to find every unique category
  for (let i = 0; i < menu.length; i++) {
    const element = menu[i].category; // Getting the value stored in every 'i'th element of the menu's category key
    if (categoryArray.includes(element)) continue; // If there category is in the array already skip this iteration
    categoryArray.push(element); // Add the unique category
  }
  categoryArray.unshift('All'); // Add the 'All' category filter to the beginning of the array

  // Loop through the unique categories to create buttons accordingly
  // The way this set up is when the user adds a new category, a new button will be created 
  for (let i = 0; i < categoryArray.length; i++) {
    let category = categoryArray[i]; // Getting the currently iterated category
    const CATG_BUTTON = document.createElement('button'); // Create a <button></button>
    CATG_BUTTON.classList = "btn btn-outline-dark btn-item"; // Giving the necessary classes to the element
    const BUTTON_ATT = document.createAttribute('id',); // Create an id attribute for the button
    BUTTON_ATT.value = `${category}`; // Create the value for id
    buttonContainerDOM.append(CATG_BUTTON); // Add the button inside the button container
    CATG_BUTTON.setAttributeNode(BUTTON_ATT); // Set the value of id
    // Using outerHTML add onClick event to the element. Therefore when it's clicked it will show the related category's foods.
    // Also adding the button text
    CATG_BUTTON.outerHTML = `
    <button class="btn btn-outline-dark btn-item" id="All" onClick = showItems("${category}")>${category}</button>
    `;
  }
}

// Function for displaying the items on the page according to the category
// Takes the parameter category and its default value is 'All'
function showItems(category = 'All') {
  menuItemsDOM.innerHTML = ""; // Clear the item displaying area
  
  // Loop through the menu to create necessary items
  for (let i = 0; i < menu.length; i++) {
    // If the category is 'All' it will display everything or If the category key of the currently iterated menu item holds the same value as the parameter
    // it will display the matching menu items
    if (category === 'All' || menu[i].category === category) { 

      const MENU_CARD = document.createElement('div'); // Create a <div></div>
      MENU_CARD.classList = "menu-items col-lg-6 col-sm-12"; // Giving the necessary classes to the element
      menuItemsDOM.append(MENU_CARD); // Add it to the menu item displaying area
      // Using innerHTML we set the correct values and create the correct elements inside the menu item
      MENU_CARD.innerHTML = `
          
          <img src="${menu[i].img}" class="photo">
          <div class = "menu-info">
            <div class="menu-title">
              <h4> ${menu[i].title} </h4>
              <h4 class = "price"> ${menu[i].price} </h4>
            </div>
            <div class="menu-text">
              ${menu[i].desc}
            </div>
          </div>
  `;
    }
  }
}


