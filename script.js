function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") //troca a classe

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png") //adiciona ou modifica o atributo
  } else {
    img.setAttribute("src", "./assets/avatar2.png")
  }
}
