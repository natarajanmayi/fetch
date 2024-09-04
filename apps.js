const auth = "9a5oLik2HQkEQlPawsmRENBXa7ftN9XrXTcv2KEkNL9jpzyQqs9bPZdt"
const gallary = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input")
const more = document.querySelector(".more");
const form = document.querySelector(".search-form");
let searchValue;
let page =1;

asyng function fetchApi(url){
    const response = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: auth
        }
    });
    const data = await response.json();
    return data;
}

asyng function

