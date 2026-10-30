// RRM Advocacia — o mapa do Google só é carregado quando o visitante clica em "Mostrar mapa"
(function () {
  var botao = document.getElementById("mapa-botao");
  var mapa = document.getElementById("mapa");
  if (!botao || !mapa) return;

  botao.hidden = false;
  botao.addEventListener("click", function () {
    var iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps?q=" +
      encodeURIComponent("Rua Minas Gerais, 670, Centro, São Joaquim da Barra - SP, 14600-033") +
      "&output=embed";
    iframe.title = "Mapa: Rua Minas Gerais, 670, Centro, São Joaquim da Barra/SP";
    iframe.loading = "lazy";
    iframe.referrerPolicy = "no-referrer";
    mapa.replaceChild(iframe, botao);
    mapa.classList.add("mapa-carregado");
  });
})();
