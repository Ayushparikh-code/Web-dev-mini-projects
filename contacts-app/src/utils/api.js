const BASE_URL = "https://contact-api.dicoding.dev/v1";

function getAccessToken() {
    return localStorage.getItem("accessToken");
}

function putAccessToken(accessToken) {
    return localStorage.setItem("accessToken", accessToken);
}

async function fetchWithToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });
}

async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function getUserLogged() {
    const response = await fetchWithToken(`${BASE_URL}/users/me`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        return { error: true, data: null };
    }

    return { error: false, data: responseJson.data };
}

async function addContact({ name, tag }) {
    const response = await fetchWithToken(`${BASE_URL}/contacts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, tag }),
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

async function getContacts() {
    const response = await fetchWithToken(`${BASE_URL}/contacts`);
    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true, data: [] };
    }

    return { error: false, data: responseJson.data };
}

async function deleteContact(id) {
    const response = await fetchWithToken(`${BASE_URL}/contacts/${id}`, {
        method: "DELETE",
    });

    const responseJson = await response.json();

    if (responseJson.status !== "success") {
        alert(responseJson.message);
        return { error: true };
    }

    return { error: false };
}

export {
    getAccessToken,
    putAccessToken,
    login,
    register,
    getUserLogged,
    addContact,
    getContacts,
    deleteContact,
};
