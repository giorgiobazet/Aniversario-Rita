/* ==========================================================
   Parabéns, Rita! — comportamento da página
   ========================================================== */

(function () {
  'use strict';

  /* ---------- Os 66 motivos ----------
     Edite os textos abaixo à vontade. A página mostra o número
     do cartão e, ao tocar, vira e revela o motivo.
     Mantenha 66 itens (um por ano de vida). */
  var MOTIVOS = [
    'Porque você me deu a vida.',
    'Pelo seu abraço, que resolve tudo.',
    'Pelo seu sorriso, que ilumina o dia.',
    'Porque você sempre acredita em mim.',
    'Pela sua força em todos os momentos.',
    'Pelo seu jeito de cuidar de todos.',
    'Porque sua risada é contagiante.',
    'Pelos conselhos que só você sabe dar.',
    'Porque você nunca desiste da família.',
    'Pelo seu capricho em tudo que faz.',
    'Pela sua elegância de sempre.',
    'Porque você se cuida com tanto carinho.',
    'Pela sua paciência comigo.',
    'Porque seu colo é o melhor lugar.',
    'Pelos pensamentos carinhosos por mim.',
    'Pela sua generosidade.',
    'Porque você sabe me ouvir.',
    'Pela sua coragem.',
    'Porque você me ensinou a ser honesto.',
    'Pela sua alegria nos dias simples.',
    'Porque você é exemplo de mulher forte.',
    'Pelo seu olhar atento.',
    'Pela sua dedicação à nossa família.',
    'Porque você torna qualquer data especial.',
    'Pelas suas palavras de incentivo.',
    'Porque você me defende sempre.',
    'Pelo seu bom humor.',
    'Pela sua sabedoria.',
    'Porque você me conhece como ninguém.',
    'Pela sua esperança.',
    'Porque você me ensinou a ser esforçado.',
    'Pela sua sensibilidade.',
    'Porque você sempre tem uma palavra de carinho.',
    'Pelo seu jeito de transformar a casa em lar.',
    'Pela sua determinação.',
    'Porque você celebra as minhas conquistas.',
    'Pelo seu jeito único de ser.',
    'Porque você me ensinou a não desistir.',
    'Pela sua lealdade.',
    'Porque você faz todo mundo se sentir bem-vindo.',
    'Pela sua bondade.',
    'Porque você me apoia nas minhas escolhas.',
    'Pelo seu coração enorme.',
    'Pela sua alegria de viver.',
    'Porque você é a minha referência.',
    'Pelo seu amor sem condições.',
    'Porque você me faz sentir seguro.',
    'Pela sua vaidade bonita, que mostra o quanto você se valoriza.',
    'Porque você me mostrou a importância de se cuidar.',
    'Pelos seus conselhos sinceros.',
    'Pela sua serenidade.',
    'Porque você vibra com cada passo meu.',
    'Pela sua história.',
    'Porque você ensina com o exemplo.',
    'Pela sua gratidão.',
    'Porque você faz a vida ter mais cor.',
    'Pela sua companhia.',
    'Porque você é a melhor mãe que eu poderia ter.',
    'Pela sua alegria em estar com a família.',
    'Pela sua resiliência.',
    'Porque você me ensinou a amar.',
    'Pelo seu cuidado comigo desde sempre.',
    'Porque você me faz querer ser melhor.',
    'Porque cada ano seu é motivo de festa.',
    'Porque você merece todo o carinho do mundo.',
    'Simplesmente porque você é você, mãe.'
  ];

  /* ---------- Cartões que viram ---------- */
  function montarMotivos() {
    var grade = document.getElementById('motivos-grid');
    if (!grade) { return; }

    MOTIVOS.forEach(function (texto, indice) {
      var numero = indice + 1;

      var botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'motivo';
      botao.setAttribute('aria-pressed', 'false');

      var num = document.createElement('span');
      num.className = 'motivo__num';
      num.textContent = String(numero);

      var rotulo = document.createElement('span');
      rotulo.className = 'motivo__label';
      rotulo.textContent = 'Motivo';

      botao.appendChild(num);
      botao.appendChild(rotulo);

      botao.addEventListener('click', function () {
        var virado = botao.classList.toggle('is-flipped');
        botao.setAttribute('aria-pressed', String(virado));
        num.hidden = virado;
        rotulo.textContent = virado ? texto : 'Motivo';
      });

      grade.appendChild(botao);
    });
  }

  /* ---------- Só um vídeo toca por vez ---------- */
  function sincronizarVideos() {
    var videos = document.querySelectorAll('.video-card video');

    videos.forEach(function (video) {
      video.addEventListener('play', function () {
        videos.forEach(function (outro) {
          if (outro !== video && !outro.paused) { outro.pause(); }
        });
      });
    });
  }

  montarMotivos();
  sincronizarVideos();
})();
