import type { IUser } from "../interfaces/IUser";

export function listUsers(users: IUser[]) {
  document.querySelector<HTMLDivElement>("#list-users")!.innerHTML = /*html*/ `
    <div class="card-array">
      ${users
        .map(
          (user) => /*html*/ `
            <div class="user-card">
            <h4 class="fullname">${user.name}</h4>
            <p class="email">${user.email}</p>
            <p class="city">city: ${user.address.city}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}
