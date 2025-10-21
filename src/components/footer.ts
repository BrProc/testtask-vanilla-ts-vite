import "./footer.css";
import typescriptLogo from "/typescript.svg";
import viteLogo from "/vite.svg";

document.querySelector<HTMLDivElement>("#footer")!.innerHTML = /*html*/ `
    <div>
      <div class="logos">
        <a href="https://vite.dev" target="_blank">
          <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
        </a>
      </div>
      <h1>Vite + TypeScript</h1>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
`;
