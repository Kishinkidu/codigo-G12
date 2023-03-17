const username = document.querySelector("#username");
const btnSearch = document.querySelector("#btn-search");
const avatar = document.querySelector("#avatar");
const fullname = document.querySelector("#name");
const joined = document.querySelector("#joined")
const nickname = document.querySelector("#nickname")
const repositorio = document.querySelector("#repositorio")
const followers = document.querySelector("#followers")
const following = document.querySelector("#following")
const ubicacion = document.querySelector("#ubicacion")
const link = document.querySelector("#link")
const sobrenombre =document.querySelector("#sobrenombre")
btnSearch.onclick = async function () {
  if (!username.value) return;

  const response = await fetch(
    `https://api.github.com/users/${username.value}`
  );
  const data = await response.json();
  username.value = "";
  username.focus();

  console.log(data);
  avatar.src = data.avatar_url;
  fullname.textContent = data.name;
  joined.textContent= data.created_at;
  nickname.textContent = data.login;
  repositorio.textContent = data.public_repos;
  followers.textContent = data.followers;
  following.textContent = data.following;
  ubicacion.textContent = data.location;
  link.textContent = data.html_url
  sobrenombre.textContent = data.login
 
  // const initDate= new Date(data.created_at);
};