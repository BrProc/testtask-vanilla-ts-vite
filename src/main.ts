import "./style.css";
import { getUsers } from "./api.ts";
import { listUsers } from "./components/userList.ts";
import { mainPanel } from "./components/mainPanel.ts";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = /*html*/ `
<div>
<div id="main-panel"></div>
<div id="list-users"></div>
<div id="load-spinner"></div>
</div>
`;

const spinner = document.querySelector("#load-spinner")!;
const users = await getUsers("https://jsonplaceholder.typicode.com/users");

await new Promise((r) => setTimeout(r, 2000)); //for imitate loading

if (users) {
  spinner.classList.add("hidden");
  listUsers(users);
  mainPanel(users);
} else {
  app.innerHTML = /*html*/ `
    <p style="color:red">Couldn't load users:</p>
  `;
}
