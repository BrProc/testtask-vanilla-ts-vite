import "./style.css";
import { getUsers } from "./api.ts";
import { listUsers } from "./components/userList.ts";
import { mainPanel } from "./components/mainPanel.ts";

const users = await getUsers("https://jsonplaceholder.typicode.com/users");

document.querySelector<HTMLDivElement>("#app")!.innerHTML = /*html*/ `
  <div>
    <div id="main-panel"></div>
    <div id="list-users"></div>
  </div>
`;

if (users) {
  listUsers(users);
  mainPanel(users);
}
