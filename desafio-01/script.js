// Função para determinar o nível do herói
function determinarNivel(xp) {
  if (xp < 1000) {
      return "Ferro";
  } else if (xp >= 1001 && xp <= 2000) {
      return "Bronze";
  } else if (xp >= 2001 && xp <= 5000) {
      return "Prata";
  } else if (xp >= 5001 && xp <= 7000) {
      return "Ouro";
  } else if (xp >= 7001 && xp <= 8000) {
      return "Platina";
  } else if (xp >= 8001 && xp <= 9000) {
      return "Ascendente";
  } else if (xp >= 9001 && xp <= 10000) {
      return "Imortal";
  } else {
      return "Radiante";
  }
}

// Variável para armazenar nome e XP do herói
var nomeHeroi = prompt("Digite o nome do herói:");
var xpHeroi = parseInt(prompt("Digite a quantidade de experiência do herói:"));

// Chamada da função para determinar o nível do herói
var nivelHeroi = determinarNivel(xpHeroi);

// Exibição do resultado
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivelHeroi);
