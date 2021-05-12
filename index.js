let inputBox = document.getElementById("inputBox");
let itemListDiv = document.getElementById("itemList");
let itemCheckBoxes = document.getElementsByClassName("itemCheck");
let itemCrossBoxes = document.getElementsByClassName("itemCross");

let items = [

]

function updateItemList() {

}

function renderList(items) {
    itemListDiv.innerHTML = '';
    for (var index in items) {

        let newElement = document.createElement("div");
        newElement.classList.add("item");

        newElementCheck = document.createElement("img");
        newElementCheck.src = "iconCheck.png";
        newElementCheck.classList.add("itemCheck");

        newElementText = document.createElement("div");
        newElementText.append(items[index].text);
        newElementText.classList.add("itemText");

        newElementCross = document.createElement("img");
        newElementCross.src = "iconCross.png";
        newElementCross.classList.add("itemCross");

        if (items[index].active == false) {
            newElementCheck.classList.add("itemCheckHidden");
        }
        else {
            newElementText.classList.add("itemTextCrossed");
        }

        newElementCheck.classList.add("child" + items[index].id);
        newElementCross.classList.add("child" + items[index].id);

        newElement.appendChild(newElementCheck);
        newElement.appendChild(newElementText);
        newElement.appendChild(newElementCross);

        newElementCheck.addEventListener('click', checkBoxFunction, false);
        newElementCross.addEventListener('click', crossBoxFunction, false);

        itemListDiv.appendChild(newElement);
    }

}

var crossBoxFunction = function (event) {
    for (var index in items) {
        if (event.target.classList.contains("child" + items[index].id)) {
            items.splice(index, 1);
            renderList(items);
        }
    }
}

var checkBoxFunction = function (event) {
    for (var index in items) {
        if (event.target.classList.contains("child" + items[index].id)) {

            if (items[index].active == false)
                items[index].active = true;
            else
                items[index].active = false;
            renderList(items);
        }
    }
}

document.body.onkeyup = (e) => {
    if (e.keyCode == 13) {
        if (inputBox.value.trim().localeCompare("")) {
            items.push({ "text": inputBox.value.trim(), "active": false, "id": items.length + 1 });
            inputBox.value = "";
            renderList(items);
        }
    }
}

