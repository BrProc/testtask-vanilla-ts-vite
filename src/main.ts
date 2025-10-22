import "./style.css";
import { getUsers } from "./api.ts";
import { listUsers } from "./components/userList.ts";

const users = await getUsers("https://jsonplaceholder.typicode.com/users");

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
  <div>
    <form class="filter-form" id="filter-form">
      <label for="name">name:</label>   
      <input type="text" name="name"/>

      <label for="sort-by-length">Sort by length</label>
      <input type="checkbox" name="sort-by-length"/>

      <input type="submit" class="btn" value="filtering">
    </form>

    <div id="list-users"></div>
    </div>
  </div>
`;

users ? listUsers(users) : null;

const form = document.querySelector<HTMLFormElement>("#filter-form")!;
form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  let modUsers = users;
  const formData = new FormData(form);
  const name = formData.get("name") as string;
  const sortByLength = formData.get("sort-by-length") as string;

  if (modUsers) {
    if (name) {
      modUsers = modUsers.filter((user) => user.name.includes(name));
    }

    if (sortByLength) {
      console.log("sortByL" + sortByLength);
      modUsers = modUsers.sort((a, b) => b.name.length - a.name.length);
    } else {
      modUsers = modUsers.sort((a, b) => a.name.length - b.name.length);
    }

    listUsers(modUsers);
  }
});
