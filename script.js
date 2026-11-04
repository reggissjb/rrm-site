// RRM Advocacia — scripts mínimos: menu do celular, botão fixo do WhatsApp e mapa sob demanda
(function () {
  // Altura real do cabeçalho fixo, usada para o título da seção não ficar escondido embaixo dele
  var cabecalho = document.querySelector(".cabecalho");
  var medirCabecalho = function () {
    if (cabecalho) {
      document.documentElement.style.setProperty("--altura-cabecalho", (cabecalho.offsetHeight + 12) + "px");
    }
  };
  medirCabecalho();
  window.addEventListener("resize", medirCabecalho);

  // Menu de três linhas (celular)
  var menuBotao = document.querySelector(".menu-botao");
  var menu = document.getElementById("menu");
  if (menuBotao && menu) {
    menuBotao.hidden = false;
    menuBotao.addEventListener("click", function () {
      var aberto = menuBotao.getAttribute("aria-expanded") === "true";
      menuBotao.setAttribute("aria-expanded", aberto ? "false" : "true");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        menuBotao.setAttribute("aria-expanded", "false");
        medirCabecalho();
      }
    });
  }

  // O botão fixo do WhatsApp só aparece depois que a pessoa rola além da abertura
  var whatsapp = document.querySelector(".whatsapp-fixo");
  var abertura = document.querySelector(".abertura");
  if (whatsapp && abertura) {
    var atualizar = function () {
      whatsapp.classList.toggle("visivel", abertura.getBoundingClientRect().bottom < 0);
    };
    window.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);
    atualizar();
  }

  // O mapa do Google só é carregado quando o visitante clica em "Mostrar mapa"
  var mapaBotao = document.getElementById("mapa-botao");
  var mapa = document.getElementById("mapa");
  if (mapaBotao && mapa) {
    mapaBotao.hidden = false;
    mapaBotao.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.google.com/maps?q=" +
        encodeURIComponent("Rua Minas Gerais, 670, Centro, São Joaquim da Barra - SP, 14600-033") +
        "&output=embed";
      iframe.title = "Mapa: Rua Minas Gerais, 670, Centro, São Joaquim da Barra/SP";
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer";
      mapa.replaceChild(iframe, mapaBotao);
      mapa.classList.add("mapa-carregado");
    });
  }
})();
