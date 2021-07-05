//  API USED => https://api.github.com/user/user_name


let input_user = document.querySelector("#input");

const userImg = document.querySelector(".main-info");
// const name = document.querySelector("#name");
// const userName =document.querySelector("#username");
const bio = document.querySelector("#bio")
const repos = document.querySelector("#repo");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");

const fetchUser = (user_name) => {
	fetch(`https://api.github.com/users/${user_name}`)
		.then((data) => data.json())
		.then((jsonData) => {

			if (jsonData.message == "Not found") {
				alert("User Not Found");
				return;
				// console.log("Error" + jsonData.message);
			} else {
				userImg.innerHTML = `
            <img src="${jsonData.avatar_url}" alt="avatar" id="prof-img">
            <span class="name" id="name">${jsonData.name}</span>
            <a href="${jsonData.html_url}" id="username">@${jsonData.login}</a>
            `;
				bio.innerHTML = jsonData.bio;
				repos.innerHTML = jsonData.public_repos;
				followers.innerHTML = jsonData.followers;
				following.innerHTML = jsonData.following;
			}

		})
		.catch((err) => {
			console.log("Catch" + err.message);
		});
}

const getUser = () => {
	let user_name = input_user.value.trim();
	//  trim will replace before and after spaces

	if (user_name.length == 0) {
		alert("Please enter a valid github username");
	} else {
		fetchUser(user_name)
	}

	input_user.value = " ";

}

