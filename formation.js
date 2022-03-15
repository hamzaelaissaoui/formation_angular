class ShoppingList {
    groceries = [];
}

ShoppingList.prototype.addItem = function (item) {
    this.groceries = this.groceries.concat(item);
}
ShoppingList.prototype.removeItem = function (item) {
    this.groceries = this.groceries.filter(i => i !== item);
}
ShoppingList.prototype.findItems = function (item) {
    return this.groceries.filter(element => element.includes(item));
}
const myList = new ShoppingList();

//init data
myList.addItem("banana");
myList.addItem("pear");
myList.addItem("banana");

let ulElem = document.getElementById("list-item");
const field = document.getElementById("field");
const btn = document.getElementById("btn-add");
const search = document.getElementById("btn-search");
const divBack = document.getElementById("back");

function deleted(item) {
    myList.removeItem(item.value);
    this.render();
}

function back(){
    this.render();
    field.value = "";
    divBack.innerHTML ="";
}

search.onclick = () => {
    if (field.value.length > 0) {
        const list = myList.findItems(field.value);
        if (myList.groceries.length > 0) {
            divBack.innerHTML ="<button type='button' onclick='back()'>back</button>";
            ulElem.innerHTML = "";
            list.forEach(item => {
                const itemView = document.createElement("li");
                itemView.innerHTML = item +
                    ` <button type="button" id="${item}" value="${item}" onclick="deleted(${item})">Delete</button>`;
                ulElem.appendChild(itemView);
            })
        } else alert("The items cannot be found !");

    } else alert("Field cannot be empty !");
    console.log(myList.groceries);
}

btn.onclick = () => {
    if (field.value.length > 0) {
        myList.addItem(field.value);
        field.value = "";
        this.render();
    } else alert("The item cannot be empty !");
}

render = () => {
    ulElem.innerHTML = "";
    myList.groceries.forEach(item => {
        const itemView = document.createElement("li");
        itemView.innerHTML = item +
            ` <button type="button" id="${item}" value="${item}" onclick="deleted(${item})">Delete</button>`;
        ulElem.appendChild(itemView);
    })
}

this.render();
