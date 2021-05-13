let inputBox = document.getElementById("inputBox");
let itemListDiv = document.getElementById("itemList");
let itemCheckBoxes = document.getElementsByClassName("itemCheck");
let itemCrossBoxes = document.getElementsByClassName("itemCross");
let itemCounter = document.getElementById("itemCounter");
let footer = document.getElementById("footer");
let clearCompleted = document.getElementById("clearCompleted");
let arrow = document.getElementById("arrow");
let allButton = document.getElementById("allButton");
let activeButton = document.getElementById("activeButton");
let completedButton = document.getElementById("completedButton");
let renderType = 0;

let items = [

]

function updateItemList() {

}

function renderFunction(items) {
    if (renderType == 0)
        renderAll(items);
    else if (renderType == 1)
        renderActive(items);
    else if (renderType == 2)
        renderCompleted(items);
}


function renderAll(items) {
    itemListDiv.innerHTML = '';
    let itemsLeft = items.length;
    let activeItems = 0;
    let completedItems = 0;

    if (items.length == 0)
        footer.classList.add("footerHidden");
    else
        footer.classList.remove("footerHidden");

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

        if (items[index].active == true) {
            itemsLeft--;
            completedItems++;
        }
        else activeItems++;
    }

    if (itemsLeft == 1)
        itemCounter.innerText = "1 item" + ' ' + ' ' + "left";
    else
        itemCounter.innerText = itemsLeft + " items left";

    arrow.addEventListener('click', arrowFunction, false);
    if (items.length == 0)
        arrow.classList.add("arrowHidden");
    else if (itemsLeft != 0) {
        arrow.style.backgroundImage = "url('arrow.png')";
        arrow.classList.remove("arrowHidden");
    }
    else {
        arrow.style.backgroundImage = "url('arrowpressed.png')";
        arrow.classList.remove("arrowHidden");
    }

    clearCompleted.addEventListener('click', clearFunction, false);
    clearCompleted.addEventListener('mouseover', footerHover, false);
    clearCompleted.addEventListener('mouseout', footerHoverOut, false);

    if (items.length == 0)
        clearCompleted.classList.add("arrowHidden");
    else if (completedItems > 0)
        clearCompleted.classList.remove("arrowHidden");
    else
        clearCompleted.classList.add("arrowHidden");

    allButton.addEventListener('click', allFilter, false);

    activeButton.addEventListener('click', activeFilter, false);
    activeButton.addEventListener('mouseover', footerHover, false);
    activeButton.addEventListener('mouseout', footerHoverOut, false);

    completedButton.addEventListener('click', completedFilter, false);
    completedButton.addEventListener('mouseover', footerHover, false);
    completedButton.addEventListener('mouseout', footerHoverOut, false);
}

function renderCompleted(items) {
    itemListDiv.innerHTML = '';
    let itemsLeft = items.length;
    let activeItems = 0;
    let completedItems = 0;
    for (var index in items) {
        if (items[index].active == true) {
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
        if (items[index].active == true) {
            itemsLeft--;
            completedItems++;
        }
        else activeItems++;
    }

    if (itemsLeft == 1)
        itemCounter.innerText = "1 item" + ' ' + ' ' + "left";
    else
        itemCounter.innerText = itemsLeft + " items left";

    arrow.addEventListener('click', arrowFunction, false);
    if (items.length == 0)
        arrow.classList.add("arrowHidden");
    else if (itemsLeft != 0) {
        arrow.style.backgroundImage = "url('arrow.png')";
        arrow.classList.remove("arrowHidden");
    }
    else {
        arrow.style.backgroundImage = "url('arrowpressed.png')";
        arrow.classList.remove("arrowHidden");
    }

    clearCompleted.addEventListener('click', clearFunction, false);
    clearCompleted.addEventListener('mouseover', footerHover, false);
    clearCompleted.addEventListener('mouseout', footerHoverOut, false);

    if (items.length == 0)
        clearCompleted.classList.add("arrowHidden");
    else if (completedItems > 0)
        clearCompleted.classList.remove("arrowHidden");
    else
        clearCompleted.classList.add("arrowHidden");

    allButton.addEventListener('click', allFilter, false);
    allButton.addEventListener('mouseover', footerHover, false);
    allButton.addEventListener('mouseout', footerHoverOut, false);

    activeButton.addEventListener('click', activeFilter, false);

    completedButton.addEventListener('click', completedFilter, false);
    completedButton.addEventListener('mouseover', footerHover, false);
    completedButton.addEventListener('mouseout', footerHoverOut, false);

}

function renderActive(items) {
    itemListDiv.innerHTML = '';
    let itemsLeft = items.length;
    let activeItems = 0;
    let completedItems = 0;
    for (var index in items) {
        if (items[index].active == false) {
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
        if (items[index].active == true) {
            itemsLeft--;
            completedItems++;
        }
        else activeItems++;
    }

    if (itemsLeft == 1)
        itemCounter.innerText = "1 item" + ' ' + ' ' + "left";
    else
        itemCounter.innerText = itemsLeft + " items left";

    arrow.addEventListener('click', arrowFunction, false);
    if (items.length == 0)
        arrow.classList.add("arrowHidden");
    else if (itemsLeft != 0) {
        arrow.style.backgroundImage = "url('arrow.png')";
        arrow.classList.remove("arrowHidden");
    }
    else {
        arrow.style.backgroundImage = "url('arrowpressed.png')";
        arrow.classList.remove("arrowHidden");
    }

    clearCompleted.addEventListener('click', clearFunction, false);
    clearCompleted.addEventListener('mouseover', footerHover, false);
    clearCompleted.addEventListener('mouseout', footerHoverOut, false);

    if (items.length == 0)
        clearCompleted.classList.add("arrowHidden");
    else if (completedItems > 0)
        clearCompleted.classList.remove("arrowHidden");
    else
        clearCompleted.classList.add("arrowHidden");

    allButton.addEventListener('click', allFilter, false);
    allButton.addEventListener('mouseover', footerHover, false);
    allButton.addEventListener('mouseout', footerHoverOut, false);

    activeButton.addEventListener('click', activeFilter, false);
    activeButton.addEventListener('mouseover', footerHover, false);
    activeButton.addEventListener('mouseout', footerHoverOut, false);

    completedButton.addEventListener('click', completedFilter, false);
}

var allFilter = function (event) {
    renderType = 0;
    renderFunction(items);
    allButton.classList.add("footerPressed");
    activeButton.classList.remove("footerPressed");
    completedButton.classList.remove("footerPressed");

    allButton.removeEventListener('mouseover', footerHover, false);
    allButton.removeEventListener('mouseout', footerHoverOut, false);
    activeButton.removeEventListener('mouseover', footerHover, false);
    activeButton.removeEventListener('mouseout', footerHoverOut, false);
    completedButton.removeEventListener('mouseover', footerHover, false);
    completedButton.removeEventListener('mouseout', footerHoverOut, false);
}

var activeFilter = function (event) {
    renderType = 1;
    renderFunction(items);
    allButton.classList.remove("footerPressed");
    activeButton.classList.add("footerPressed");
    completedButton.classList.remove("footerPressed");

    allButton.removeEventListener('mouseover', footerHover, false);
    allButton.removeEventListener('mouseout', footerHoverOut, false);
    activeButton.removeEventListener('mouseover', footerHover, false);
    activeButton.removeEventListener('mouseout', footerHoverOut, false);
    completedButton.removeEventListener('mouseover', footerHover, false);
    completedButton.removeEventListener('mouseout', footerHoverOut, false);
}

var completedFilter = function (event) {
    renderType = 2;
    renderFunction(items);
    allButton.classList.remove("footerPressed");
    activeButton.classList.remove("footerPressed");
    completedButton.classList.add("footerPressed");

    allButton.removeEventListener('mouseover', footerHover, false);
    allButton.removeEventListener('mouseout', footerHoverOut, false);
    activeButton.removeEventListener('mouseover', footerHover, false);
    activeButton.removeEventListener('mouseout', footerHoverOut, false);
    completedButton.removeEventListener('mouseover', footerHover, false);
    completedButton.removeEventListener('mouseout', footerHoverOut, false);
}

var footerHover = function (event) {
    event.target.classList.add("footerPressed");
}

var footerHoverOut = function (event) {
    event.target.classList.remove("footerPressed");
}

var clearFunction = function (event) {
    let flag = true;
    while (flag) {
        flag = false;
        for (var index in items)
            if (items[index].active == true) {
                items.splice(index, 1);
                flag = true;
                break;
            }
    }
    renderFunction(items);
}

var arrowFunction = function (event) {
    let flag = true;
    for (var index in items)
        if (items[index].active == false)
            flag = false;

    if (flag == false)
        for (var index in items)
            items[index].active = true;
    else
        for (var index in items)
            items[index].active = false;
    renderFunction(items);
}

var crossBoxFunction = function (event) {
    for (var index in items) {
        if (event.target.classList.contains("child" + items[index].id)) {
            items.splice(index, 1);
            renderFunction(items);
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
            renderFunction(items);
        }
    }
}

document.body.onkeyup = (e) => {
    if (e.keyCode == 13) {
        if (inputBox.value.trim().localeCompare("")) {
            items.push({ "text": inputBox.value.trim(), "active": false, "id": items.length + 1 });
            inputBox.value = "";
            renderFunction(items);
        }
    }
}

