import type { IUser } from "../interfaces/IUser";
import { Favorites } from "../tools/favorites";

const favorites = new Favorites("-fav.");

export function listUsers(users: IUser[]) {
  document.querySelector<HTMLDivElement>("#list-users")!.innerHTML = /*HTML*/ `
    <div class="card-array">
      ${users
        .map(
          (user) => /*html*/ `
            <div class="user-card">
              <div class="card-body">
                <div class="main-frame">
                  <figure class="profile-logo">
                    <span>${user.name.charAt(0)}<span>
                  </figure>
                  <div>
                    <h4 class="fullname">${user.name}</h4>
                    <p class="city">📍 ${user.address.city}</p>
                  </div>
                </div>
                <hr />
                <p class="email">📧 ${user.email}</p>
                
                ${
                  favorites.get(user.id)
                    ? /*html*/ `
                  <button class="btn btn-fav rm-fav" data-id="${user.id}">★</button>
                  `
                    : /*html*/ `
                  <button class="btn btn-fav add-fav" data-id="${user.id}">☆</button>
                  `
                }
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;

  const AddFavBtn = document.querySelectorAll<HTMLButtonElement>(".add-fav")!;
  const RmFavBtn = document.querySelectorAll<HTMLButtonElement>(".rm-fav")!;

  AddFavBtn.forEach((btn) => favoriteOnClick(btn, true));
  RmFavBtn.forEach((btn) => favoriteOnClick(btn, false));

  function favoriteOnClick(btn: HTMLButtonElement, add: boolean) {
    btn.addEventListener("click", (event) => {
      const target = event.currentTarget as HTMLButtonElement;
      const value = target.dataset.id;

      if (value) {
        if (add) {
          favorites.add(Number(value));
        } else favorites.remove(Number(value));
      }

      listUsers(users);
    });
  }
}
