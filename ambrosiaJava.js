
var shopList = [];

function addToShopList(){ //adds a new item from the user to the shopping list
  currfood = document.getElementById("foodName").value// finds the value that the user typed
  shopList.push(currfood); //adds the item to the list
  console.log(shopList); //prints to the console to test the function
}

function loopThruShopList() {//loops through the shopping list and makes all of the checklist
  for (i = 0; i < shopList.length; i++) {


  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
