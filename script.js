document.getElementById("showButton").addEventListener("click", function() {
    const image = document.getElementById("image");
    const phrase = document.getElementById("phrase");
  
    // Defina a URL da imagem e a frase que deseja exibir
    image.src = 'https://i.pinimg.com/736x/35/10/c5/3510c5f4c7b34b3933548d49f8c4091e.jpg'; // Link da imagem https://museudememes.com.br/wp-content/uploads/2022/05/bf3d6d63d767c049a5073f56581e8275.jpg
    phrase.textContent = "oi jaque :)";
  
    // Adiciona a classe "show" para exibir a imagem e a frase com o efeito de delay
    image.classList.add("show");
    phrase.classList.add("show");
  });
  