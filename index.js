let inputBox = document.getElementById("inputBox");
let itemList = document.getElementById("itemList");
let itemCheckBoxes = document.getElementsByClassName("itemCheck");
let itemCrossBoxes = document.getElementsByClassName("itemCross");

let items = [

]

function updateItemList() {

}

function renderList(items) {
    //let currentList = 
}

var checkBoxFunction = function () {
    console.log("pipi");
}

for (var i = 0; i < itemCheckBoxes.length; ++i) {
    itemCheckBoxes[i].addEventListener('click', checkBoxFunction, false);
}

document.body.onkeyup = (e) => {
    if (e.keyCode == 13) {
        if (inputBox.value.trim().localeCompare("")) {
            let newElement = document.createElement("div");
            newElement.classList.add("item");

            newElementCheck = document.createElement("img");
            newElementCheck.src = "iconCheck.png";
            newElementCheck.classList.add("itemCheck");
            newElementCheck.classList.add("itemCheckHidden");

            newElementText = document.createElement("div");
            newElementText.append(inputBox.value.trim());
            newElementText.classList.add("itemText");

            newElementCross = document.createElement("img");
            newElementCross.src = "iconCross.png";
            newElementCross.classList.add("itemCross");

            items.push({ "text": inputBox.value.trim(), "active": false, "id": items.length + 1 });

            newElement.appendChild(newElementCheck);
            newElement.appendChild(newElementText);
            newElement.appendChild(newElementCross);
            itemList.appendChild(newElement);
            inputBox.value = "";
        }
    }
}

