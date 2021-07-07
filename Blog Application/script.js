// targeting the parent element
const blogContainer = document.querySelector('.blog__container');
const blogModal = document.querySelector(".blog__modal__body");
// global 
let globalStore = [];

// -----------------------------------------------------
// a function for creating a new card
const newCard = ({
	id,
	imageUrl,
	blogTitle,
	blogType,
	blogDescription
}) => `<div class="col-lg-4 col-md-6" id=${id}>
<div class="card m-2">
  <div class="card-header d-flex justify-content-end gap-2">
    <button type="button" class="btn btn-outline-success" id="${id}" onclick="editCard.apply(this, arguments)"><i class="fas fa-pencil-alt" id="${id}" onclick="editCard.apply(this, arguments)"></i></button>
    <button type="button" class="btn btn-outline-danger" id="${id}" onclick="deleteCard.apply(this, arguments)"><i class="fas fa-trash-alt" id="${id}" onclick="deleteCard.apply(this, arguments)"></i></button>
  </div>
  <img
    src=${imageUrl}
    class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${blogTitle}</h5>
    <p class="card-text">${blogDescription}</p>
    <span class="badge bg-primary">${blogType}</span>
  </div>
  <div class="card-footer text-muted">
    <button type="button" id="${id}" class="btn btn-outline-primary float-end" data-bs-toggle="modal"
    data-bs-target="#showblog" onclick="openBlog.apply(this, arguments)">Open Blog</button>
  </div>
</div>
</div>`;

// --------------------------------------------------
const loadData = () => {

	// access localstorage
	// localStorage.getItem("blog") ===  localStorage.blog
	const getInitialData = localStorage.blog; // if null, then
	if (!getInitialData) return;

	// convert stringified-object to object
	const {
		cards
	} = JSON.parse(getInitialData);

	// map around the array to generate HTML card and inject it to DOM
	cards.map((blogObject) => {
		const createNewBlog = newCard(blogObject);
		blogContainer.insertAdjacentHTML("beforeend", createNewBlog);
		globalStore.push(blogObject);
	});
};

const updateLocalStorage = () => {
	localStorage.setItem("blog", JSON.stringify({
		cards: globalStore
	}))
}

//  function for save changes----------------------------------------

// create a function which will trigerred on clicking on save changes in the modal
const saveChanges = () => {
	const blogData = {
		id: `${Date.now()}`, // generating a unique id for each card
		imageUrl: document.getElementById('imageurl').value,
		blogTitle: document.getElementById('title').value,
		blogType: document.getElementById('type').value,
		blogDescription: document.getElementById('description').value
	};

	const createNewBlog = newCard(blogData);
	blogContainer.insertAdjacentHTML("beforeend", createNewBlog);

	globalStore.push(blogData);

	//  API  -> add t localStorage
	updateLocalStorage()
	// provide some unique identification, i.e key, here key is "blog", 

};

// function for deleting a card -------------------

const deleteCard = (event) => {
	// id
	event = window.event;
	const targetID = event.target.id;
	const tagname = event.target.tagName; // BUTTON OR I

	// assign the same id of card to button also

	// search the globalStore, remove the object which matches with the id
	globalStore = globalStore.filter((blogObject) => blogObject.id !== targetID);

	updateLocalStorage();

	// access DOM to remove them

	if (tagname === "BUTTON") {
		// task__container
		return blogContainer.removeChild(
			event.target.parentNode.parentNode.parentNode // col-lg-4
		);
	}

	// else
	// blog__container
	return blogContainer.removeChild(
		event.target.parentNode.parentNode.parentNode.parentNode // col-lg-4
	);
};

// function for editing
const editCard = (event) => {

	event = window.event;
	const targetID = event.target.id;
	const tagname = event.target.tagName;

	let parentElement;
	if (tagname === "BUTTON") {
		parentElement = event.target.parentNode.parentNode;

	} else {
		parentElement = event.target.parentNode.parentNode.parentNode;
	}

	let blogTitle = parentElement.childNodes[5].childNodes[1];
	let blogDescription = parentElement.childNodes[5].childNodes[3];
	let blogType = parentElement.childNodes[5].childNodes[5];
	let submitBtn = parentElement.childNodes[7].childNodes[1];
	// console.log(taskTitle, taskDescription, taskType);

	// setAttributes
	blogTitle.setAttribute("contenteditable", "true");

	blogDescription.setAttribute("contenteditable", "true");
	blogType.setAttribute("contenteditable", "true");
	submitBtn.setAttribute(
		"onclick",
		"saveEditChanges.apply(this, arguments)"
	);
	submitBtn.innerHTML = "Save Changes";

	//  modal removed
	submitBtn.removeAttribute("data-bs-toggle");
	submitBtn.removeAttribute("data-bs-target");

}

const saveEditChanges = (event) => {

	event = window.event;
	const targetID = event.target.id;
	const tagname = event.target.tagName;

	let parentElement;
	if (tagname === "BUTTON") {
		parentElement = event.target.parentNode.parentNode;

	} else {
		parentElement = event.target.parentNode.parentNode.parentNode;
	}

	let blogTitle = parentElement.childNodes[5].childNodes[1];
	let blogDescription = parentElement.childNodes[5].childNodes[3];
	let blogType = parentElement.childNodes[5].childNodes[5];
	let submitBtn = parentElement.childNodes[7].childNodes[1];

	const updatedData = {

		blogTitle: blogTitle.innerHTML,
		blogDescription: blogDescription.innerHTML,
		blogType: blogType.innerHTML,
	}

	// console.log(updatedData);
	globalStore = globalStore.map((blog) => {
		if (blog.id === targetID) {
			return {
				id: blog.id,
				imageUrl: blog.imageUrl,
				blogTitle: updatedData.blogTitle,
				blogType: updatedData.blogType,
				blogDescription: updatedData.blogDescription,
			};
		}
		return blog; // important statement
	});

	updateLocalStorage();

	blogTitle.setAttribute("contenteditable", "false");

	blogDescription.setAttribute("contenteditable", "false");
	blogType.setAttribute("contenteditable", "false");

	// modal added
	submitBtn.setAttribute("onclick", "openBlog.apply(this, arguments)");
	submitBtn.setAttribute("data-bs-toggle", "modal");
	submitBtn.setAttribute("data-bs-target", "#showblog");

	submitBtn.innerHTML = "Open Blog";

}

const htmlModalContent = ({
	id,
	blogTitle,
	blogDescription,
	imageUrl,
	blogType
}) => {
	const date = new Date(parseInt(id));
	return ` <div id=${id}>
   <img
   src=${imageUrl}
   alt="bg image"
   class="img-fluid place__holder__image mb-3 p-4"
   />
   <div class="text-sm text-muted ">Created on ${date.toDateString()}</div>
   <h2 class="my-5 mt-5" style="display:inline;">${blogTitle}</h2>
   <span class="badge bg-primary">${blogType}</span>
   <p class="lead mt-2">
   ${blogDescription}
   </p></div>`;
};

const openBlog = (event) => {

	event = window.event;
	const targetID = event.target.id;

	const getBlog = globalStore.filter(({
		id
	}) => id === targetID);
	// console.log(getBlog[0]);
	blogModal.innerHTML = htmlModalContent(getBlog[0]);
};


