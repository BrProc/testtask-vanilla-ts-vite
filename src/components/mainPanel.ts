import type { IUser } from "../interfaces/IUser";
import { listUsers } from "./userList";

export function mainPanel(users: IUser[]) {
  document.querySelector<HTMLDivElement>("#main-panel")!.innerHTML = /*html*/ `
    <div class="filter-form" id="filter-form">
        <div class="filter-search-body">
            <label for="name">🔍</label>   
            <input id="search-field" type="text" name="name"/>
        </div>

        <div id="sort-btn-container">
            <button id="sort-button" class="btn btn-sort"></button>
        <div>
    </div>
  `;

  const searchField = document.querySelector<HTMLInputElement>("#search-field")!;
  const sortBtn = document.querySelector<HTMLButtonElement>("#sort-button")!;

  searchField.addEventListener("input", () => {
    modUsersList();
    console.log("button state: " + sortBtn.dataset.value);
  });

  sortBtn.addEventListener("click", () => {
    console.log("Sort button clicked");
    sortBtn.dataset.value == "asc" ? modSortBtn("des") : modSortBtn("asc");
    modUsersList();
  });

  function modSortBtn(value: "asc" | "des") {
    sortBtn.dataset.value = value;
    value == "asc" ? (sortBtn.innerHTML = "sort to asc") : (sortBtn.innerHTML = "sort to des");
  }

  function modUsersList() {
    let modUsers = users;
    const name = searchField.value;
    const ascSort = sortBtn.dataset.value == "asc" ? true : false;

    if (name) modUsers = modUsers.filter((user) => user.name.includes(name));

    if (ascSort) {
      modUsers = modUsers.sort((a, b) => a.name.length - b.name.length);
    } else {
      modUsers = modUsers.sort((a, b) => b.name.length - a.name.length);
    }

    listUsers(modUsers);
  }

  modSortBtn("asc");
}
