document.getElementById("showButton").addEventListener("click", function() {
    const image = document.getElementById("image");
    const phrase = document.getElementById("phrase");
  
    // Defina a URL da imagem e a frase que deseja exibir
    image.src = 'https://museudememes.com.br/wp-content/uploads/2022/05/bf3d6d63d767c049a5073f56581e8275.jpg'; // Link da imagem
    phrase.textContent = "mucha sdds :(";
  
    // Adiciona a classe "show" para exibir a imagem e a frase com o efeito de delay
    image.classList.add("show");
    phrase.classList.add("show");
  });
  