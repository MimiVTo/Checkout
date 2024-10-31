// VARIABLES ------------------------------------------
    //OBJECTS -----------------------------------------
var items = {
    "689145740844":{
        name: "JavaScript Textbook",
        price: 34.95
    },
    "4549292070248":{
        name: "First Aid Kit",
        price: 20.99
    },
    "X002ELVL3J":{
        name: "Box of Pencils (50ct.)",
        price: 15.99
    },
    "860004186236":{
        name: "N95 Face Masks",
        price: 15.99
    },
    "036000214000":{
        name: "Kleenex",
        price: 3.99
    },
    "8809568749985":{
        name: "Hand Sanitizer",
        price: 7.99
    },
    "036500060480":{
        name: "Printer Paper",
        price: 9.99
    },
    "085014561877":{
        name: "Brush Pens",
        price: 10.99
    },
    "X0032YGP2T":{
        name: "Multiport Adapter",
        price: 25.99
    },
    "9780134682334":{
        name: "iOS Programming Textbook",
        price: 119.99
    },
    "718103230759":{
        name: "Spiral Notebook",
        price: 1.99
    },
    "888462022224":{
        name: "iPad Mini",
        price: 599.99
    }
}

//STORED GLOBAL ITEMS ------------------------------

var cartBtn = document.getElementById("button");
var containedElements = document.getElementById("elementContainer");
var afterStuff = document.getElementById("afterAddedStuff");

//CHECK OUT VARIABLES ------------------------------
var checkOut = document.createElement("button");
checkOut.innerText = "Check Out";
var totalInfo = document.createElement("p");
var total = 0;
var tax = 1.50;
var totalCost = document.createElement("p");

//FUNCTIONS --------------------------------------------

function addToCart(){
    
    //STORED INPUTS ------------------------------
    var itemCode = document.getElementById("item").value;
    var isExisting = checkIfItemExists(itemCode);
    var quantity = document.getElementById("amount").value;
    var collection = document.getElementsByClassName("containerClass");

    if(itemCode ===""){
        return;
    }

    if (isExisting){
        isExisting.querySelector("#quantityAmount").innerText = parseInt(isExisting.querySelector("#quantityAmount").innerText) + parseInt(quantity);
        total += items[itemCode].price * quantity;
        totalInfo.innerText = "Total = $" + total;
    }
    else{
        //ADD ITEMS ----------------------------------------
        if (items.hasOwnProperty(itemCode)){

            //CREATED INFO -------------------------------
            var containedItems = document.createElement("div");

            //ITEM -------------------------------------
            var itemOrdered = document.createElement("p");
            itemOrdered.innerText = items[itemCode].name;
            itemOrdered.classList.add("cartItems");
            itemOrdered.id="itemName";

            //PRICE ------------------------------------
            var price = document.createElement("p");
            price.innerText = items[itemCode].price;
            price.classList.add("cartItems");

            //QUANTITY ---------------------------------
            var quantityOrdered = document.createElement("p");
            quantityOrdered.innerText = quantity;
            quantityOrdered.classList.add("cartItems");
            quantityOrdered.id="quantityAmount";
 
            //PUSH INFO --------------------------------
            containedItems.appendChild(itemOrdered);
            containedItems.appendChild(price);
            containedItems.appendChild(quantityOrdered);

            //CLASS ADD --------------------------------
            containedItems.classList.add("containerClass");

            //APPEND INTO OVERALL CONTAINER ------------
            containedElements.appendChild(containedItems);

            //TOTAL BEING SUMMED UP --------------------
            total += items[itemCode].price * quantity;
            
        }
    }
    
    containedItems.appendChild(totalInfo);
    
    containedItems.appendChild(checkOut);
    checkOut.classList.add("btn");
    totalInfo.innerText = "Total = $" + total;
    checkOut.addEventListener("click", checkOutTime);
}

function checkIfItemExists(itemCode){
    // console.log(itemCode);
    var itemsArray = document.getElementsByClassName("containerClass");
   

    for(var i=0;i<itemsArray.length;i++){
        var names = itemsArray[i].querySelector("#itemName");
        console.log(items[itemCode]);
        if(names.innerText === items[itemCode].name){
            console.log("returning")
            return itemsArray[i];
        }
    }
}

function checkOutTime(){
    afterStuff.appendChild(totalCost);
    totalCost.innerText = "Your grand total, including tax of "+ tax+"%" + " is $"+total*tax;
}

//ON EVENT ----------------------------------------------------

cartBtn.addEventListener("click", addToCart);