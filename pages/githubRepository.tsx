export default function GithubRepository() {
  function requestUserRepos() {
    return fetch("https://api.github.com/users/CristianAfonso/repos");
  }
  function requestUserInfo() {
    return fetch("https://api.github.com/users/CristianAfonso");
  }
  requestUserRepos()
    // parse response into json
    .then((response) => response.json())
    // log response data
    .then((data) => {
      for (let i in data) {
        if (data.message === "Not Found") {
          let ul = document.getElementById("userRepos");
          let li = document.createElement("div");
          li.classList.add("list-group-item");
          ul.appendChild(li);
        } else {
          let container = document.getElementById("userRepos");
          let element = document.createElement("div");
          if (data[i].description == null) {
            element.innerHTML = `<p><strong>Repositorio:</strong> <a href="${data[i].html_url}" target="_blank">${data[i].name}</a></p>
            `;
          } else {
            element.innerHTML = `
          <p><strong>Repositorio:</strong> <a href="${data[i].html_url}" target="_blank">${data[i].name}</a></p>
          <p><strong>Descripción:</strong> ${data[i].description}</p>`;
          }
          container.appendChild(element);
        }
      }
    });
  requestUserInfo()
    .then((response) => response.json())
    .then((data) => {
      let container = document.getElementById("userImage");
      if (container.getElementsByTagName("img").length == 0) {
        let element = document.createElement("img");
        element.src = data.avatar_url;
        container.appendChild(element);
      }
    });
  return (
    <div>
      <h1>Mis repositorios de GitHub</h1>
      <div id="userImage"></div>
      <h4>
        <a target="_blank" href="https://github.com/CristianAfonso/">
          Aquí puedes acceder a mi perfil de GitHub
        </a>
      </h4>
      <p style={{ maxWidth: "1000px" }}>
        Aunque muchos de mis repositorios han sido desarrollados e implementados
        en el transcurso de mi formación universitaria, iré expandiendo esta
        colección conforme mi formación avance
      </p>
      <div id="userRepos"></div>
    </div>
  );
}
