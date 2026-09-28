// RRM Advocacia — scripts mínimos (menu no celular e mapa sob demanda)
(function () {
  var botao = document.querySelector(".nav-botao");
  var lista = document.getElementById("menu");

  if (botao && lista) {
    botao.addEventListener("click", function () {
      var aberto = lista.classList.toggle("aberta");
      botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    });
    lista.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        lista.classList.remove("aberta");
        botao.setAttribute("aria-expanded", "false");
      }
    });
  }

  // O mapa do Google só é carregado quando o visitante pede,
  // para que o site não envie dados a terceiros sem necessidade.
  var mapaBotao = document.getElementById("mapa-botao");
  var mapa = document.getElementById("mapa");

  if (mapaBotao && mapa) {
    mapaBotao.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.google.com/maps?q=" +
        encodeURIComponent("Rua Minas Gerais, 670, São Joaquim da Barra - SP") +
        "&output=embed";
      iframe.title = "Mapa: Rua Minas Gerais, 670, São Joaquim da Barra/SP";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      mapa.innerHTML = "";
      mapa.appendChild(iframe);
    });
  }
})();
