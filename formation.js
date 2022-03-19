class ShoppingList {
    groceries = [];

    addItem(item) {
        this.groceries = this.groceries.concat({ id: this.genId(), name: item });
    }

    removeItem(item){
        this.groceries = this.groceries.filter(i => i.id !== item);
    }
    findItems(item){
        return this.groceries.filter(element => element.name.includes(item));
    }
    genId() {
        return this.groceries.length === 0 ? 1 : (Math.max(...this.groceries.map(v => v.id)) + 1);
    }
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
    myList.removeItem(item);
    this.render();
}

function back() {
    this.render();
    field.value = "";
    divBack.innerHTML = "";
}

search.onclick = () => {
    if (field.value.length > 0) {
        const list = myList.findItems(field.value);
        if (myList.groceries.length > 0) {
            divBack.innerHTML = "<button type='button' onclick='back()'>back</button>";
            ulElem.innerHTML = "";
            list.forEach(item => {
                const itemView = document.createElement("li");
                itemView.innerHTML = item.name +
                    ` <button type="button" onclick="deleted(${item.id})">Delete</button>`;
                ulElem.appendChild(itemView);
            })
        } else alert("The items cannot be found !");

    } else alert("Field cannot be empty !");
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
        itemView.innerHTML = item.name +
            ` <button type="button" onclick="deleted(${item.id})">Delete</button>`;
        ulElem.appendChild(itemView);
    })
}

this.render();
