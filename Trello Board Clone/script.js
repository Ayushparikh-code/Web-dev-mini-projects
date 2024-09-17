let root = document.getElementById("root");


class List {
    constructor(place, title = "To-Do") {
        this.place = place;
        this.title = title;
        this.cardArray = [];
        this.render();
    }

    addToDo() {
        let text = this.input.value;
        if (text.trim() !== "") {
            this.cardArray.push(new Card(text, this.div, this));
            this.input.value = "";
        }
    }

    render() {
        this.createListElement();
        this.place.append(this.listElement);
    }

    createListElement() {
        this.listElement = document.createElement('div');
        this.listElement.classList.add("todoList");

        this.h2 = document.createElement('h2');
        this.h2.innerText = this.title;

        this.input = document.createElement('input');
        this.input.classList.add("comment");

        this.button = document.createElement('button');
        this.button.innerText = 'Add';
        this.button.classList.add("btn-save");
        this.button.addEventListener('click', this.addToDo.bind(this));

        this.div = document.createElement('div');

        this.listElement.append(this.h2, this.input, this.button, this.div);
    }
}

class ToDo extends List {
    constructor(place, title) {
        super(place, title);
    }
}

class Doing extends List {
    constructor(place, title) {
        super(place, title);
    }
}

class Done extends List {
    constructor(place, title) {
        super(place, title);
    }
}


class Card {
    constructor(text, place, list) {
        this.text = text;
        this.place = place;
        this.list = list;
        this.state = {
            description: "Click to write a description...",
            comments: []
        };
        this.render();
    }

    render() {
        this.card = document.createElement('div');
        this.card.classList.add("card");

        this.p = document.createElement('p');
        this.p.innerText = this.text;

        this.deleteButton = document.createElement('button');
        this.deleteButton.innerText = "X";
        this.deleteButton.addEventListener('click', () => {
            this.deleteCard();
        });

        this.card.append(this.p, this.deleteButton);
        this.place.append(this.card);
        this.card.addEventListener('click', this.showMenu.bind(this));
    }

    deleteCard() {
        this.card.remove();
        let index = this.list.cardArray.indexOf(this);
        if (index !== -1) {
            this.list.cardArray.splice(index, 1);
        }
    }

    showMenu() {

        //Create elements
        this.menu = document.createElement("div");
        this.menuContainer = document.createElement("div");
        this.menuTitle = document.createElement("div");
        this.menuDescription = document.createElement("div");
        this.commentsInput = document.createElement("input");
        this.commentsButton = document.createElement('button');
        this.menuComments = document.createElement("div");


        //Add class names
        this.menu.className = "menu";
        this.menuContainer.className = "menuContainer";
        this.menuTitle.className = "menuTitle";
        this.menuDescription.className = "menuDescription";
        this.menuComments.className = "menuComments";
        this.commentsInput.className = "commentsInput comment";
        this.commentsButton.className = "commentsButton btn-save";

        //Add inner Text
        this.commentsButton.innerText = "Add";
        this.commentsInput.placeholder = "Write a comment...";

        //Event listeners
        this.menuContainer.addEventListener('click', (e) => {
            console.log(e.target);
            if (e.target.classList.contains("menuContainer")) {
                this.menuContainer.remove();
            }
        });

        this.commentsButton.addEventListener('click', () => {
            if (this.commentsInput.value != "") {
                this.state.comments.push(this.commentsInput.value);
                this.renderComments();
                this.commentsInput.value = "";
            }
        })

        //Append
        this.menu.append(this.menuTitle);
        this.menu.append(this.menuDescription);
        this.menu.append(this.commentsInput);
        this.menu.append(this.commentsButton);
        this.menu.append(this.menuComments);
        this.menuContainer.append(this.menu);
        root.append(this.menuContainer);

        this.editableDescription = new EditableText(this.state.description, this.menuDescription, this, "description", "textarea");
        this.editableTitle = new EditableText(this.state.text, this.menuTitle, this, "text", "input");

        this.renderComments();
    }

    renderComments() {

        let currentCommentsDOM = Array.from(this.menuComments.childNodes);

        currentCommentsDOM.forEach(commentDOM => {
            commentDOM.remove();
        });

        this.state.comments.forEach(comment => {
            new Comment(comment, this.menuComments, this);
        });
    }
}

class EditableText {
    constructor(text, place, card, property, typeOfInput) {
        this.text = text;
        this.place = place;
        this.card = card;
        this.property = property;
        this.typeOfInput = typeOfInput;
        this.render();
    }

    render() {
        this.div = document.createElement("div");
        this.p = document.createElement("p");

        this.p.innerText = this.text;

        this.p.addEventListener('click', () => {
            this.showEditableTextArea.call(this);
        });

        this.div.append(this.p);
        this.place.append(this.div);
    }

    showEditableTextArea() {
        let oldText = this.text;

        this.input = document.createElement(this.typeOfInput);
        this.saveButton = document.createElement("button");

        this.p.remove();
        this.input.value = oldText;
        this.saveButton.innerText = "Save";
        this.saveButton.className = "btn-save";
        this.input.classList.add("comment");

        this.saveButton.addEventListener('click', () => {
            this.text = this.input.value;
            this.card.state[this.property] = this.input.value;
            if (this.property == "text") {
                this.card.p.innerText = this.input.value;
            }
            this.div.remove();
            this.render();
        });

        function clickSaveButton(event, object) {
            // Number 13 is the "Enter" key on the keyboard
            if (event.keyCode === 13) {
                // Cancel the default action, if needed
                event.preventDefault();
                // Trigger the button element with a click
                object.saveButton.click();
            }
        }

        this.input.addEventListener("keyup", (e) => {
            if (this.typeOfInput == "input") {
                clickSaveButton(e, this);
            }
        });

        this.div.append(this.input);

        if (this.typeOfInput == "textarea") {
            this.div.append(this.saveButton);
        }

        this.input.select();
    }

}

class Comment {
    constructor(text, place, card) {
        this.text = text;
        this.place = place;
        this.card = card;
        this.render();
    }

    render() {
        this.div = document.createElement('div');
        this.div.className = "comment";
        this.div.innerText = this.text;

        this.place.append(this.div);
    }
}



//-------------main------------

let addTodoListInput = document.getElementById("addTodoListInput");
let addTodoListButton = document.getElementById("addTodoListButton");

addTodoListButton.addEventListener('click', () => {
    if (addTodoListInput.value.trim() !== "") {
        new ToDo(root, addTodoListInput.value); // Use user-provided title
        addTodoListInput.value = "";
    }
});

let todoList1 = new ToDo(root); // Default title "To-Do"
let todoList2 = new Doing(root, "Doing"); // Custom title "In Progress"
let todoList3 = new Done(root, "Done"); // Custom title "Completed"