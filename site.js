/* FLUXO VIII — site de vendas.
 * Tudo que muda com frequência fica neste bloco: endereço do CRM, links do Asaas e textos por área. */
"use strict";

// ===== Endereço do CRM (login, termos, formulário de contato) =====
var CRM_URL = "https://fluxo-vii-crm--gen-lang-client-0285512077.us-east4.hosted.app";

// ===== Planos e links de pagamento do Asaas =====
var PLANS = [
  { id: "start", name: "Magnet Start", users: "Até 2 usuários (1 administrador + 1)", ai: "300 créditos de IA por mês", bonus: 1100,
    mensal: { price: 66.90, url: "https://www.asaas.com/c/5t7o14q3kdi5t4lk" }, anual: { perMonth: 50.90, total: 610.80, url: "https://www.asaas.com/c/3lug36pfnr2hth0q" } },
  { id: "pro", name: "Magnet Pro", tag: "Mais escolhido", users: "Até 4 usuários (2 administradores + 2)", ai: "1.000 créditos de IA por mês", bonus: 1650,
    mensal: { price: 99.90, url: "https://www.asaas.com/c/4bvhzc5a6iu3ald9" }, anual: { perMonth: 76.40, total: 916.80, url: "https://www.asaas.com/c/pzev1aubal2jigpw" } },
  { id: "gold", name: "Magnet Gold", users: "Até 6 usuários (2 administradores + 4)", ai: "2.000 créditos de IA por mês", bonus: 2800,
    mensal: { price: 167.00, url: "https://www.asaas.com/000/c/bcdi9ol829a68rdy" }, anual: { perMonth: 127.90, total: 1534.80, url: "https://www.asaas.com/000/c/x4cjirokdf5vs10m" } },
  { id: "black", name: "Magnet Black", users: "Até 20 usuários (5 administradores + 15)", ai: "3.000 créditos de IA por mês", bonus: 4950,
    mensal: { price: 297.00, url: "https://www.asaas.com/000/c/r87eff0n9l749i51" }, anual: { perMonth: 226.90, total: 2722.80, url: "https://www.asaas.com/000/c/lh0cveg97nvjrcug" } }
];

// ===== Textos por área (as mesmas áreas do CRM) =====
// {c} cliente · {cs} clientes · {C}/{Cs} com maiúscula · {a} atendimento · {as} atendimentos · {As} com maiúscula
var NICHES = {
  geral: {
    label: "Todas as áreas",
    c: "cliente", cs: "clientes", a: "atendimento", as: "atendimentos",
    title: "Nenhum contato fica sem resposta.",
    lead: "O CRM de quem atende e vende pelo WhatsApp e pelo Instagram. Cada mensagem chega organizada no funil, a IA faz o primeiro atendimento e você acompanha o que entrou, quem fechou e onde a conversa parou.",
    howSub: "Para consultórios, clínicas, escritórios e negócios digitais que atendem pelo celular.",
    roles: "Atendimento, vendas, recepção",
    ai: "Responde dúvidas nos horários que você escolher, agenda o atendimento e chama a equipe quando o assunto pede uma pessoa.",
    team: "Sua equipe assume",
    track: "Faturamento, conversão, tempo de resposta e desempenho da equipe. Mande o painel para o sócio sem dar acesso ao CRM.",
    who: ["Para quem atende sozinho ou em dupla", "Para equipes de 2 a 4 pessoas", "Para equipes de 3 a 6 pessoas", "Para operações com mais de 10 pessoas"],
    back: "{C} que volta depois de comprar ganha um card novo, ligado ao histórico anterior.",
    privacy: "Cada empresa só vê os próprios dados."
  },
  terapias: {
    label: "Psicologia & Terapias",
    c: "paciente", cs: "pacientes", a: "sessão", as: "sessões",
    title: "Nenhum paciente fica sem resposta.",
    lead: "O CRM do consultório que atende pelo WhatsApp e pelo Instagram. As mensagens chegam organizadas, a IA responde com acolhimento e oferece horários, e você acompanha sessões, pagamentos e retornos num só lugar.",
    howSub: "Para psicólogos, psicanalistas, terapeutas e consultórios com secretária.",
    roles: "Secretária, recepção, outros terapeutas",
    ai: "Responde dúvidas com acolhimento, oferece horários de sessão e chama você quando o assunto pede o terapeuta. Nunca faz diagnóstico por mensagem.",
    team: "Você ou a secretária assume",
    track: "Sessões da semana, pagamentos em aberto e pacientes que não voltaram, tudo no mesmo painel.",
    who: ["Para quem atende sozinho ou com uma secretária", "Para consultórios com 2 a 4 pessoas", "Para clínicas com até 6 terapeutas e recepção", "Para clínicas e institutos com equipe grande"],
    back: "Paciente que retoma depois de um tempo ganha um card novo, ligado ao histórico anterior.",
    privacy: "Sigilo do consultório: cada pessoa da equipe vê só o que você liberar."
  },
  odontologia: {
    label: "Odontologia",
    c: "paciente", cs: "pacientes", a: "consulta", as: "consultas",
    title: "Da primeira mensagem ao tratamento aprovado.",
    lead: "Cada contato entra no funil da clínica, a IA tira dúvidas e agenda a avaliação, e a recepção acompanha os orçamentos em aberto até o paciente aprovar.",
    howSub: "Para dentistas, clínicas odontológicas, ortodontia e estética dental.",
    roles: "Recepção, ASB, dentistas",
    ai: "Tira dúvidas, agenda a avaliação e confirma a consulta. Chama a recepção quando o paciente pede orçamento.",
    team: "A recepção assume",
    track: "Avaliações, orçamentos aprovados, faturamento e pacientes que não voltaram para continuar o tratamento.",
    who: ["Para o dentista que atende com uma recepção", "Para clínicas com 2 a 4 pessoas", "Para clínicas com recepção e até 6 pessoas", "Para redes e clínicas grandes"],
    back: "Paciente que volta para um novo tratamento ganha um card novo, ligado ao histórico anterior.",
    privacy: "Cada pessoa da equipe vê só o que você liberar."
  },
  saude: {
    label: "Saúde & Clínicas",
    c: "paciente", cs: "pacientes", a: "consulta", as: "consultas",
    title: "Consulta marcada, paciente que volta.",
    lead: "As mensagens do WhatsApp e do Instagram chegam organizadas, a IA agenda consultas e lembra os retornos, e você vê quanto entrou e quem precisa de acompanhamento.",
    howSub: "Para médicos, nutricionistas, fisioterapeutas, fonoaudiólogos e clínicas.",
    roles: "Recepção, profissionais, financeiro",
    ai: "Tira dúvidas, agenda consultas e confirma horários. Não dá orientação clínica: conduz o paciente para a consulta.",
    team: "A recepção assume",
    track: "Consultas, faturamento, retornos pendentes e tempo de resposta da recepção.",
    who: ["Para o profissional que atende com uma secretária", "Para clínicas com 2 a 4 pessoas", "Para clínicas com recepção e até 6 pessoas", "Para clínicas multidisciplinares e redes"],
    back: "Paciente que volta para um novo tratamento ganha um card novo, ligado ao histórico anterior.",
    privacy: "Cada pessoa da equipe vê só o que você liberar."
  },
  arquitetura: {
    label: "Arquitetura & Interiores",
    c: "cliente", cs: "clientes", a: "reunião", as: "reuniões",
    title: "Do briefing ao projeto assinado.",
    lead: "Cada contato vira uma oportunidade no funil, a IA faz o primeiro atendimento e marca a reunião, e você acompanha propostas, visitas técnicas e o que falta receber.",
    howSub: "Para arquitetos, designers de interiores, engenharia e reformas.",
    roles: "Atendimento, projetistas, sócios",
    ai: "Entende o que o cliente procura, marca a reunião de briefing e chama você na hora da proposta.",
    team: "Você assume a proposta",
    track: "Propostas enviadas, projetos fechados, o que falta receber e de onde vêm os clientes.",
    who: ["Para escritórios enxutos", "Para escritórios com 2 a 4 pessoas", "Para escritórios com equipe de projeto de até 6", "Para escritórios grandes e construtoras"],
    back: "Cliente que volta para um novo projeto ganha um card novo, ligado ao histórico anterior.",
    privacy: "Cada pessoa da equipe vê só o que você liberar."
  },
  imobiliaria: {
    label: "Imobiliárias & Corretores",
    c: "cliente", cs: "clientes", a: "visita", as: "visitas",
    title: "Nenhum interessado no imóvel fica sem resposta.",
    lead: "O CRM da imobiliária que recebe contatos pelo WhatsApp, pelo Instagram e pelos anúncios. Cada interessado vira um card, a IA responde sobre o imóvel e agenda a visita, e o corretor acompanha até a proposta e o contrato.",
    howSub: "Para imobiliárias, corretores autônomos, incorporadoras e administradoras de aluguel.",
    roles: "Corretores, captação, atendimento",
    ai: "Responde sobre o imóvel, pergunta o que a pessoa procura (bairro, quartos, valor) e agenda a visita. Chama o corretor na hora da proposta ou do financiamento.",
    team: "O corretor assume",
    track: "Visitas marcadas, propostas em andamento, contratos fechados e os corretores que mais convertem.",
    who: ["Para o corretor autônomo ou em dupla", "Para imobiliárias com 2 a 4 corretores", "Para imobiliárias com até 6 pessoas", "Para imobiliárias e incorporadoras com equipe grande"],
    back: "Cliente que volta para comprar ou alugar outro imóvel ganha um card novo, ligado ao histórico anterior.",
    privacy: "Cada corretor vê só os clientes que você liberar."
  },
  digital: {
    label: "Mercado Digital",
    c: "lead", cs: "leads", a: "call", as: "calls",
    title: "Todo lead que chega, fica.",
    lead: "O CRM de quem vende pelo WhatsApp e pelo Instagram com time de closers. Cada mensagem vira card, a IA qualifica e agenda a call, e o painel mostra quanto entrou, quem vendeu e onde o lead esfriou.",
    howSub: "Para infoprodutores, mentores, criadores de conteúdo e agências com time comercial.",
    roles: "Closer, SDR, social media",
    ai: "Responde na hora, qualifica o lead e agenda a call com o closer certo.",
    team: "O closer fecha",
    track: "Faturamento, conversão, tempo de resposta e ranking dos closers. Mande o painel para o sócio sem dar acesso ao CRM.",
    who: ["Para quem vende sozinho ou com um closer", "Para times de 2 a 4 pessoas", "Para times de até 6 closers e SDRs", "Para operações com equipe comercial grande"],
    back: "Quem já comprou e volta para outro produto ganha um card novo de recompra.",
    privacy: "Cada closer vê só as abas que você liberar."
  },
  servicos: {
    label: "Serviços & Consultoria",
    c: "cliente", cs: "clientes", a: "atendimento", as: "atendimentos",
    title: "Do primeiro contato ao contrato fechado.",
    lead: "As mensagens viram oportunidades no funil, a IA responde e agenda o atendimento, e você acompanha propostas, cobranças e o desempenho da equipe.",
    howSub: "Para consultores, advogados, contadores e prestadores de serviço.",
    roles: "Comercial, atendimento, financeiro",
    ai: "Responde dúvidas nos horários que você escolher, agenda o atendimento e chama a equipe quando precisa de uma pessoa.",
    team: "Sua equipe assume",
    track: "Propostas, contratos fechados, cobranças em aberto e desempenho da equipe.",
    who: ["Para quem atende sozinho ou em dupla", "Para escritórios com 2 a 4 pessoas", "Para escritórios com até 6 pessoas", "Para operações com mais de 10 pessoas"],
    back: "Cliente que volta para um novo serviço ganha um card novo, ligado ao histórico anterior.",
    privacy: "Cada pessoa da equipe vê só o que você liberar."
  }
};
var NICHE_ORDER = ["terapias", "odontologia", "saude", "imobiliaria", "arquitetura", "digital", "servicos"];

// ---------------------------------------------------------------------------
var $ = function (id) { return document.getElementById(id); };
var esc = function (s) { return String(s).replace(/[&<>"']/g, function (ch) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]; }); };
var cap = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
var brl = function (n) { return n.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
var store = {
  get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
  set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} }
};
var isAsaas = function (u) { return /^https:\/\/www\.asaas\.com\/(?:000\/)?c\/[A-Za-z0-9]+$/.test(u); };

function fill(t, n) {
  return t.replace(/\{(Cs|C|cs|c|As|as|a)\}/g, function (_, k) {
    if (k === "C") return cap(n.c); if (k === "Cs") return cap(n.cs); if (k === "As") return cap(n.as);
    return n[k];
  });
}

// Links para o CRM: "Entrar" vai direto para a tela de login
document.querySelectorAll("[data-login]").forEach(function (a) { a.href = "/login"; });
document.querySelectorAll("[data-crm]").forEach(function (a) { a.href = CRM_URL + a.getAttribute("data-crm"); });

// ---------------------------------------------------------------------------
// Área escolhida
var params = new URLSearchParams(location.search);
var current = NICHES[params.get("para")] ? params.get("para") : (NICHES[store.get("fluxo-area")] ? store.get("fluxo-area") : "geral");

function renderNiche(id) {
  current = id;
  var n = NICHES[id];
  document.querySelectorAll("#niche-chips button").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.id === id)); });
  if ($("hero-title")) {
    $("hero-title").textContent = n.title;
    $("hero-lead").textContent = n.lead;
    $("how-sub").textContent = n.howSub;
  }
  if ($("steps")) renderSections(n);
  renderPlans();
  if ($("faq")) renderFaq();
  var sel = $("f-niche");
  if (sel && id !== "geral" && !sel.value) sel.value = id;
}

// Acende cada etapa da linha do tempo quando ela aparece na tela
function watchFlow() {
  var nodes = document.querySelectorAll("#flow .node");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) { nodes.forEach(function (el) { el.classList.add("on"); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("on"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -18% 0px" });
  nodes.forEach(function (el) { io.observe(el); });
}

function renderSections(n) {

  var steps = [
    [fill("O {c} chama", n), "Pelo WhatsApp, pelo Instagram ou por um formulário com link na bio. O contato entra no funil sozinho, sem ninguém digitar."],
    ["A IA faz o primeiro atendimento", n.ai],
    [n.team, n.roles + ": cada pessoa vê só o que precisa. Quem responde primeiro fica como responsável pelo " + n.c + "."],
    ["Você acompanha", n.track]
  ];
  var STEP_ICONS = [
    '<path d="M4 5h16v11H8l-4 4z"/><path d="M8 10h8"/>',
    '<path d="M12 3l1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3z"/><path d="M18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
    '<circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.2A4.5 4.5 0 0 1 21 18.5"/>',
    '<path d="M4 20V10"/><path d="M10 20V4"/><path d="M16 20v-7"/><path d="M22 20H2"/>'
  ];
  $("steps").innerHTML = steps.map(function (s, i) {
    return '<li class="pstep"><span class="pnode" aria-hidden="true"><svg viewBox="0 0 24 24">' + STEP_ICONS[i] + '</svg></span>' +
      '<span class="pnum" aria-hidden="true">0' + (i + 1) + '</span><h3>' + esc(s[0]) + "</h3><p>" + esc(s[1]) + "</p></li>";
  }).join("");
  if ($("how-cta-text")) $("how-cta-text").textContent = fill("Veja esse fluxo funcionando com o funil da sua área e os seus {cs}.", n);

  // Linha do tempo: uma mensagem do "oi" até a venda (storytelling dos recursos)
  var flow = [
    ["07:58", "chegou", fill("Um {c} manda “oi” no WhatsApp", n), "O contato entra sozinho no funil, com nome, número e de onde veio. Ninguém precisa digitar nada. Até 3 números da empresa no mesmo lugar."],
    ["07:58", "ia", "A IA responde em segundos", fill("Tira as dúvidas, apresenta os {as} e já oferece um horário, só quando e até onde você deixar. Se alguém da equipe entra na conversa, ela sai de cena.", n)],
    ["08:15", "equipe", "A equipe assume do ponto certo", n.roles + ": cada pessoa vê só o que precisa, e quem responde primeiro vira o responsável. A última mensagem aparece no card, sem abrir o chat."],
    ["10:40", "agenda", "Horário marcado, lembrete automático", "O horário vai para a agenda e o lembrete sai pelo WhatsApp na véspera. Quem preenche um formulário com link na bio ou no anúncio já cai na etapa certa do funil."],
    ["16:20", "venda", "Proposta enviada, venda registrada", "Proposta pronta em poucos cliques, venda lançada e o que falta receber com lembrete de pagamento automático."],
    ["19:00", "painel", "Você fecha o dia olhando um painel", fill("Faturamento, conversão, tempo da primeira resposta, origem dos {cs} e o ranking da equipe. Peça um indicador novo para a IA e compartilhe o painel com o sócio.", n)]
  ];
  $("flow").innerHTML = flow.map(function (f, i) {
    return '<li class="node" data-kind="' + f[1] + '"><span class="dot" aria-hidden="true"></span>' +
      '<div class="node-card"><span class="time">' + esc(f[0]) + '</span><h3>' + esc(f[2]) + '</h3><p>' + esc(f[3]) + '</p></div></li>';
  }).join("");
  var chips = ["Até 3 números de WhatsApp", "Atendente IA com horário", "Funil por etapas", "Formulários com link", "Agenda e lembretes", "Propostas, vendas e cobranças", "Painel do gestor", "Indicadores feitos pela IA", "Acesso por função", "Importação de planilha", "App no celular e tablet", "Bônus de IA pagando em dia"];
  $("chips").innerHTML = chips.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("");
  $("story-cta-title").textContent = fill("Seu próximo {c} já está digitando.", n);
  watchFlow();

  // Camadas de proteção: de fora (conexão) para dentro (os dados de cada empresa)
  var ICONS = {
    wire: '<path d="M4 12a8 8 0 0 1 16 0"/><path d="M7.5 12a4.5 4.5 0 0 1 9 0"/><rect x="9" y="12" width="6" height="7" rx="1.5"/>',
    key: '<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v2.5"/>',
    team: '<circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.2A4.5 4.5 0 0 1 21 18.5"/>',
    card: '<path d="M4 21V5l8-3 8 3v16"/><path d="M9 21v-5h6v5"/><path d="M8 8h1M15 8h1M8 12h1M15 12h1"/>',
    doc: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M9.5 14l2 2 3.5-4"/>',
    vault: '<ellipse cx="12" cy="6" rx="7" ry="2.6"/><path d="M5 6v12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6V6"/><path d="M5 12c0 1.4 3.1 2.6 7 2.6s7-1.2 7-2.6"/>'
  };
  // Segurança: só os anéis (6 camadas) acendendo em onda
  var rings = "";
  for (var i = 0; i < 6; i++) rings += '<circle class="ring r' + i + '" cx="160" cy="160" r="' + (150 - i * 21) + '"/>';
  rings += '<circle class="core-dot" cx="160" cy="160" r="30"/><g transform="translate(145 143)" class="core-ico"><svg width="30" height="32" viewBox="0 0 24 24">' + ICONS.key + '</svg></g>';
  $("rings").innerHTML = rings;

  // Diagnóstico rápido
  var diag = [
    fill("Um {c} mandou mensagem e demorou para ter resposta (ou não teve).", n),
    "A equipe não sabe com certeza quem está falando com quem.",
    "Para saber quanto vendeu no mês, alguém precisa abrir planilha.",
    "Contatos do WhatsApp, do Instagram e do site ficam em lugares diferentes.",
    fill("Já deixou de chamar de volta um {c} que tinha interesse.", n)
  ];
  // Quanto cada situação costuma custar (parte dos contatos que se perde) e o nome curto na soma
  var diagCost = [
    [0.10, "Demora para responder"],
    [0.05, "Ninguém sabe quem atende quem"],
    [0.03, "Números só na planilha"],
    [0.06, "Contatos espalhados"],
    [0.08, fill("{C} sem retorno", n)]
  ];
  var checked = {};
  if ($("diag-list")) {
    $("diag-list").innerHTML = diag.map(function (d, i) {
      return '<li><label><input type="checkbox" data-i="' + i + '"' + (checked[i] ? " checked" : "") + '><span>' + esc(d) + "</span></label></li>";
    }).join("");
    var upd = function () {
      var k = document.querySelectorAll("#diag-list input:checked").length;
      $("diag-bar").style.width = (k / diag.length * 100) + "%";
      $("diag-bar").className = k >= 3 ? "hi" : k ? "mid" : "";
      $("diag-result").innerHTML = k === 0 ? "Marque as frases acima para ver o resultado." :
        k <= 2 ? "<strong>Atenção:</strong> " + esc(fill("já tem {c} escapando pelo caminho. Pouco por dia vira muito no fim do mês.", n)) :
        "<strong>Alerta:</strong> " + esc(fill("o seu atendimento está perdendo {cs} toda semana. Veja abaixo onde isso acontece e como resolver.", n));
    };
    // Quanto isso custa: perda estimada a partir do que foi marcado
    var lastShown = 0, animT = null;
    var money = function (v) { return "R$ " + Math.round(v).toLocaleString("pt-BR"); };
    var countTo = function (el, to) {
      if (animT) cancelAnimationFrame(animT);
      var from = lastShown, t0 = performance.now(), dur = 700;
      var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var step = function (now) {
        var k = reduce ? 1 : Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
        var cur = from + (to - from) * e;
        el.textContent = money(cur);
        lastShown = cur;
        if (k < 1) animT = requestAnimationFrame(step);
      };
      animT = requestAnimationFrame(step);
    };
    var calc = function () {
      var on = Array.prototype.map.call(document.querySelectorAll("#diag-list input:checked"), function (el) { return Number(el.dataset.i); });
      var k = on.length;
      var box = $("diag-calc");
      if (!box) return;
      box.hidden = k === 0;
      if (!k) { lastShown = 0; return; }
      var leads = Number($("calc-leads").value), ticket = Number($("calc-ticket").value);
      // Soma de cada situação marcada: contatos por mês × parte perdida × valor de um cliente
      var perMonthLeads = leads * 4.3;
      var parts = on.map(function (i) { var c = diagCost[i] || [0.06, ""]; return { label: c[1], lost: perMonthLeads * c[0], value: perMonthLeads * c[0] * ticket }; });
      var lostMonth = parts.reduce(function (a, p) { return a + p.lost; }, 0);
      var month = parts.reduce(function (a, p) { return a + p.value; }, 0);
      if ($("calc-parts")) $("calc-parts").innerHTML = parts.map(function (p) { return "<li><span>" + esc(p.label) + "</span><b>+ " + money(p.value) + "</b></li>"; }).join("") +
        (parts.length > 1 ? '<li class="sum"><span>Total por mês</span><b>' + money(month) + "</b></li>" : "");
      $("calc-leads-out").textContent = leads;
      $("calc-ticket-out").textContent = money(ticket);
      countTo($("calc-month"), month);
      $("calc-year").textContent = money(month * 12);
      var lostYear = Math.round(lostMonth * 12);
      $("calc-lost").textContent = lostYear.toLocaleString("pt-BR");
      $("calc-lost-word").textContent = lostYear === 1 ? fill("{c}", n) : fill("{cs}", n);
      var ideal = PLANS.filter(function (p) { return p.tag; })[0] || PLANS[1];
      var plan = ideal.mensal.price;
      var times = Math.floor(month / plan);
      var nm = "O FLUXO VIII " + esc(ideal.name.replace("Magnet ", "")) + ", o plano mais escolhido, custa <strong>R$ " + brl(plan) + "/mês</strong>.";
      $("calc-vs").innerHTML = times >= 2
        ? nm + " A perda é <strong>" + times + " vezes</strong> esse valor."
        : nm + " Um único " + esc(fill("{c}", n)) + " recuperado já paga o mês.";
      box.classList.toggle("hot", k >= 3);
    };
    if ($("calc-leads-label")) $("calc-leads-label").textContent = fill("{Cs} novos por semana", n);
    if ($("calc-ticket-label")) $("calc-ticket-label").textContent = fill("Quanto vale um {c} para você", n);
    if ($("calc-cta")) $("calc-cta").textContent = fill("Parar de perder {cs}", n);
    ["calc-leads", "calc-ticket"].forEach(function (id) { if ($(id)) $(id).addEventListener("input", calc); });
    $("diag-list").addEventListener("change", function (e) { var t = e.target; if (t && t.dataset) checked[t.dataset.i] = t.checked; upd(); calc(); });
    upd();
    calc();
  }
  if ($("diag-title")) $("diag-title").textContent = fill("O seu atendimento está deixando {cs} escaparem?", n);

  // Onde os clientes se perdem
  var leaks = [
    ["A mensagem sem resposta", fill("Quem não é respondido logo procura o próximo da lista. O {c} não reclama: só não volta.", n)],
    ["O retorno que ninguém fez", "Interessado que pediu um tempo e nunca mais foi chamado. Sem lembrete, ele cai no esquecimento."],
    ["A planilha paralela", "Cada pessoa anota de um jeito, em um lugar. Ninguém confia no número e ninguém sabe o que está em aberto."],
    ["A decisão no escuro", "Sem saber de onde vêm os contatos e quem converte, o investimento vai para o lugar errado."]
  ];
  if ($("leaks")) $("leaks").innerHTML = leaks.map(function (l, i) {
    return '<li><span class="leak-n">0' + (i + 1) + '</span><h3>' + esc(l[0]) + '</h3><p>' + esc(l[1]) + "</p></li>";
  }).join("");
  if ($("pain-title")) $("pain-title").textContent = fill("Onde os {cs} se perdem no caminho", n);
  if ($("hook-card")) $("hook-card").textContent = fill("Novo {c}", n);

  // Objeções
  var objs = [
    ["“Não tenho tempo para configurar.”", "Você escolhe a sua área e o funil, as mensagens e o catálogo já vêm prontos. A sua lista de contatos entra por planilha."],
    ["“Minha equipe não vai usar.”", "O chat é parecido com o WhatsApp que todo mundo já usa, e cada pessoa vê só o que precisa, no computador ou no celular."],
    ["“Já uso o WhatsApp no meu celular.”", "Você conecta o mesmo número pelo QR Code e continua usando. A diferença é que nada mais se perde."],
    ["“Deve ser caro.”", fill("O Start custa R$ " + brl(PLANS[0].mensal.price) + " por mês. Menos do que um único {c} que deixa de fechar por falta de resposta. E o preço é do pacote: a equipe do plano já está incluída, sem cobrança por usuário.", n)],
    ["“E se os créditos de IA acabarem?”", "O atendimento não para: você conecta a sua própria chave de IA em Ajustes e segue usando na hora, sem pagar nada a mais para a gente. Se preferir, é só subir de plano."]
  ];
  // Exemplos de uso (cenários, não depoimentos)
  var cases = [
    ["Clínica de saúde", "A recepção anotava pedidos do WhatsApp no papel e muita gente ficava sem retorno.", "Cada mensagem vira card no funil, o horário entra na agenda e o lembrete sai pelo WhatsApp na véspera."],
    ["Consultório de psicologia", "A terapeuta respondia entre uma sessão e outra e perdia contatos fora do horário.", "A IA tira dúvidas fora do expediente, oferece a primeira sessão e chama a terapeuta quando o assunto pede uma pessoa."],
    ["Imobiliária", "Os interessados chegavam dos anúncios e do Instagram e cada corretor anotava do seu jeito.", "Cada interessado vira um card com o imóvel de interesse, a IA agenda a visita e o gestor vê quem está com cada cliente."],
    ["Escritório de arquitetura", "Briefings chegavam espalhados entre Instagram, e-mail e WhatsApp.", "O link do formulário na bio leva o briefing direto para o funil, e a proposta sai pelo próprio CRM."],
    ["Infoprodutor com closers", "Os closers disputavam leads numa planilha e ninguém sabia quem tinha respondido.", "Quem responde primeiro vira o responsável, e o ranking da equipe aparece no painel."],
    ["Consultoria", "O sócio pedia relatório toda segunda e alguém perdia a manhã montando planilha.", "O painel é compartilhado por link e o sócio acompanha os números sem precisar de acesso ao CRM."]
  ];
  if ($("case-list")) $("case-list").innerHTML = cases.map(function (c) {
    return '<li><span class="case-tag">Exemplo de uso</span><h3>' + esc(c[0]) + '</h3><p class="case-before"><b>Antes:</b> ' + esc(c[1]) + '</p><p class="case-after"><b>Com o FLUXO VIII:</b> ' + esc(c[2]) + "</p></li>";
  }).join("");

  // Depoimentos: só modelo na prévia (some no domínio oficial até existirem depoimentos reais)
  var TESTIMONIALS = []; // [texto, nome, área e cidade] — preencher só com depoimentos reais e autorizados
  var isLive = /(^|\.)crmfluxoviii\.tech$/.test(location.hostname);
  var tBox = $("testi-list"), tSec = $("depoimentos");
  if (tBox && tSec) {
    if (TESTIMONIALS.length) {
      tSec.hidden = false;
      tSec.querySelector(".kicker").textContent = "Quem já usa";
      tSec.querySelector(".head p:last-child").remove();
      tBox.innerHTML = TESTIMONIALS.map(function (t) { return '<li><blockquote>“' + esc(t[0]) + '”</blockquote><p class="who"><b>' + esc(t[1]) + "</b> · " + esc(t[2]) + "</p></li>"; }).join("");
    } else if (!isLive) {
      tSec.hidden = false;
      tBox.innerHTML = [1, 2, 3, 4, 5].map(function (i) {
        return '<li class="placeholder"><span class="ph-tag">Modelo</span><blockquote>“Espaço para o depoimento real do cliente ' + i + '.”</blockquote><p class="who"><b>Nome do cliente</b> · Área · Cidade</p></li>';
      }).join("");
    }
  }

  if ($("obj-list")) $("obj-list").innerHTML = objs.map(function (o) { return "<li><h3>" + esc(o[0]) + "</h3><p>" + esc(o[1]) + "</p></li>"; }).join("");
}

function buildChips() {
  var box = $("niche-chips");
  if ($("f-niche")) $("f-niche").innerHTML = '<option value="">Selecione</option>' + NICHE_ORDER.map(function (id) { return '<option value="' + id + '">' + esc(NICHES[id].label) + "</option>"; }).join("") + '<option value="outro">Outro ramo</option>';
  if (!box) return;
  box.innerHTML = NICHE_ORDER.map(function (id) { return '<button type="button" data-id="' + id + '" aria-pressed="false">' + esc(NICHES[id].label) + "</button>"; }).join("");
  box.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-id]");
    if (!b) return;
    var id = b.dataset.id === current ? "geral" : b.dataset.id; // clicar de novo volta para "todas as áreas"
    store.set("fluxo-area", id);
    try {
      var u = new URL(location.href);
      if (id === "geral") u.searchParams.delete("para"); else u.searchParams.set("para", id);
      history.replaceState(null, "", u.toString());
    } catch (err) {}
    renderNiche(id);
  });
}

// ---------------------------------------------------------------------------
// Planos → escolha mensal/anual → pagamento no Asaas
// Desconto do anual em número inteiro, sempre arredondado para BAIXO (o real é igual ou maior):
// com os preços de hoje todos ficam 23% (o real vai de 23,4% a 23,9%)
function annualOff(p) { return Math.floor((1 - p.anual.perMonth / p.mensal.price) * 100); }
function minAnnualOff() { return Math.min.apply(null, PLANS.map(annualOff)); }

var cycle = store.get("fluxo-ciclo") === "mensal" ? "mensal" : "anual";
var MAX_FUNNELS = { start: "2", pro: "3", gold: "5", black: "ilimitados" };
var maxUsers = function (p) { return Number((p.users.match(/\d+/) || [1])[0]); };
var maxAdmins = function (p) { return Number(((p.users.match(/\((\d+)/) || [0, 1])[1])); };

function renderPlans() {
  if (!$("plans")) return;
  var who = NICHES[current].who;
  var off = minAnnualOff();
  if ($("cycle-off")) $("cycle-off").textContent = off + "% off";
  document.querySelectorAll("#cycle-switch button").forEach(function (b) { b.setAttribute("aria-checked", String(b.dataset.cycle === cycle)); });
  $("plans").innerHTML = PLANS.map(function (p, i) {
    var annual = cycle === "anual";
    var price = annual ? p.anual.perMonth : p.mensal.price;
    var save = (p.mensal.price * 12) - p.anual.total;
    var sub = annual
      ? '<p class="alt">R$ ' + brl(p.anual.total) + " cobrado uma vez por ano · <strong>economia de R$ " + brl(save) + "</strong></p>"
      : '<p class="alt">ou <strong>R$ ' + brl(p.anual.perMonth) + "/mês</strong> no anual <span class=\"off\">" + annualOff(p) + "% off</span></p>";
    return '<article class="plan' + (p.tag ? " pro" : "") + '">' +
      (p.tag ? '<span class="tag">' + esc(p.tag) + "</span>" : "") +
      "<h3>" + esc(p.name) + "</h3>" +
      '<p class="who">' + esc(who[i]) + "</p>" +
      '<div class="price"><span class="cur">R$</span><span class="val">' + brl(price) + '</span><span class="per">/mês</span></div>' + sub +
      '<p class="pp">Sai a <strong>R$ ' + brl(price / maxUsers(p)) + "</strong> por pessoa com a equipe completa</p>" +
      "<ul><li>" + esc(p.users) + "</li><li>" + esc(p.ai) + "</li><li>+" + p.bonus.toLocaleString("pt-BR") + " créditos de IA por mês pagando até o vencimento</li><li>" + (MAX_FUNNELS[p.id] === "ilimitados" ? "Funis ilimitados" : "Até " + MAX_FUNNELS[p.id] + " funis (ex.: Vendas e CS)") + "</li><li>Todos os recursos do FLUXO VIII</li></ul>" +
      '<button type="button" class="btn ' + (p.tag ? "gold" : "solid") + '" data-plan="' + p.id + '" aria-label="Assinar ' + esc(p.name) + (annual ? " anual" : " mensal") + '">Assinar o ' + esc(p.name.replace("Magnet ", "")) + (annual ? " anual" : " mensal") + "</button>" +
      "</article>";
  }).join("");
  renderPerUser();
  renderCompare();
  renderCredits();
}

// Comparação com quem cobra por usuário (preço de mercado de referência, sem citar marca)
var PER_SEAT = 149;
function renderPerUser() {
  if (!$("per-user")) return;
  var team = 5, gold = PLANS[2];
  var price = cycle === "anual" ? gold.anual.perMonth : gold.mensal.price;
  $("per-user").innerHTML =
    '<div class="pu-side bad"><span class="pu-k">CRM que cobra por usuário</span><span class="pu-v">R$ ' + brl(PER_SEAT * team) + '<small>/mês</small></span><span class="pu-n">' + team + " pessoas × R$ " + brl(PER_SEAT) + "</span></div>" +
    '<div class="pu-vs" aria-hidden="true">vs</div>' +
    '<div class="pu-side good"><span class="pu-k">FLUXO VIII ' + esc(gold.name.replace("Magnet ", "Magnet ")) + '</span><span class="pu-v">R$ ' + brl(price) + '<small>/mês</small></span><span class="pu-n">a mesma equipe de ' + team + " pessoas, no pacote</span></div>" +
    '<p class="pu-note">Exemplo com uma equipe de ' + team + " pessoas e um CRM que cobra R$ " + brl(PER_SEAT) + " por usuário. Aqui a equipe já está no preço do plano.</p>";
}

function renderCompare() {
  if (!$("compare")) return;
  var yes = '<span class="yes" aria-label="sim">✓</span>';
  var all = function () { return PLANS.map(function () { return yes; }); };
  var rows = [
    ["Preço e equipe"],
    ["Mensal", PLANS.map(function (p) { return "R$ " + brl(p.mensal.price); })],
    ["Anual (por mês)", PLANS.map(function (p) { return "R$ " + brl(p.anual.perMonth); })],
    ["Usuários", PLANS.map(function (p) { return "até " + maxUsers(p); })],
    ["Administradores", PLANS.map(function (p) { return String(maxAdmins(p)); })],
    ["Custo por pessoa (equipe completa, mensal)", PLANS.map(function (p) { return "R$ " + brl(p.mensal.price / maxUsers(p)); })],
    ["Cobrança por usuário a mais", PLANS.map(function () { return "não tem"; })],
    ["Inteligência artificial"],
    ["Créditos de IA por mês", PLANS.map(function (p) { return (p.ai.match(/[\d.]+/) || [""])[0]; })],
    ["Bônus pagando até o vencimento", PLANS.map(function (p) { return "+" + p.bonus.toLocaleString("pt-BR"); })],
    ["Atendente IA no WhatsApp (com nome e horário)", all()],
    ["Acabaram os créditos: usar a sua própria chave de IA", all()],
    ["Resumo e análise da conversa pela IA", all()],
    ["Funil e atendimento"],
    ["Funis (ex.: Vendas, CS)", PLANS.map(function (p) { return MAX_FUNNELS[p.id]; })],
    ["Card criado sozinho no CS quando a venda é ganha", all()],
    ["Números de WhatsApp por empresa", PLANS.map(function () { return "até 3"; })],
    ["Instagram Direct", all()],
    ["Formulários e link na bio", all()],
    ["Mensagens favoritas e modelos", all()],
    ["Gestão"],
    ["Agenda com Google Agenda e lembretes", all()],
    ["Vendas, orçamentos e cobrança pelo WhatsApp", all()],
    ["Dashboard e painel compartilhável com o sócio", all()],
    ["Importar planilha e conversas do WhatsApp", all()],
    ["Acesso por pessoa, registro de acessos e LGPD", all()]
  ];
  var head = "<tr><th scope=\"col\"><span class=\"sr\">Recurso</span></th>" + PLANS.map(function (p) { return '<th scope="col"' + (p.tag ? ' class="hl"' : "") + ">" + esc(p.name.replace("Magnet ", "")) + "</th>"; }).join("") + "</tr>";
  var body = rows.map(function (r) {
    if (r.length === 1) return '<tr class="grp"><th colspan="' + (PLANS.length + 1) + '" scope="colgroup">' + esc(r[0]) + "</th></tr>";
    return '<tr><th scope="row">' + esc(r[0]) + "</th>" + r[1].map(function (v, i) { return "<td" + (PLANS[i].tag ? ' class="hl"' : "") + ">" + (v.indexOf("<span") === 0 ? v : esc(v)) + "</td>"; }).join("") + "</tr>";
  }).join("");
  $("compare").innerHTML =
    '<div class="head"><p class="kicker">Comparativo completo</p><h3>Tudo que entra em cada plano</h3><p>Sem letra miúda: linha por linha, o que muda de um plano para o outro.</p></div>' +
    '<div class="compare-scroll" tabindex="0" role="region" aria-label="Tabela comparativa dos planos"><table class="compare"><thead>' + head + "</thead><tbody>" + body + "</tbody></table></div>";
}

function renderCredits() {
  if (!$("credits")) return;
  var cols = PLANS.map(function (p) { return '<span><small>' + esc(p.name.replace("Magnet ", "")) + "</small><b>" + (p.ai.match(/[\d.]+/) || [""])[0] + "</b></span>"; }).join("");
  var bon = PLANS.map(function (p) { return '<span><small>' + esc(p.name.replace("Magnet ", "")) + "</small><b>+" + p.bonus.toLocaleString("pt-BR") + "</b></span>"; }).join("");
  $("credits").innerHTML =
    '<div class="head"><p class="kicker">Créditos de IA</p><h3>Como funcionam os créditos</h3><p>Cada resposta ou análise da IA usa 1 crédito. Documentos e envios em lote usam 5.</p></div>' +
    '<div class="cr-grid">' +
      '<div class="cr-card"><p class="cr-t">Todo mês, no plano</p><div class="cr-cols">' + cols + "</div><p class=\"cr-d\">Renovam na virada do mês e não acumulam.</p></div>" +
      '<div class="cr-card"><p class="cr-t">Bônus por pagar em dia</p><div class="cr-cols">' + bon + "</div><p class=\"cr-d\">Pagou até o vencimento, ganha os créditos a mais até o próximo vencimento.</p></div>" +
      '<div class="cr-card key"><p class="cr-t">Acabou? O atendimento não para</p><p class="cr-big">Conecte a sua própria chave de IA</p><p class="cr-d">Em Ajustes, você liga a sua chave e a IA segue respondendo na hora, sem gastar créditos do plano e sem pagar nada a mais para a gente.</p></div>' +
    "</div>";
}

// Assinar: vai direto para o pagamento do período escolhido
function goCheckout(planId) {
  var p = PLANS.filter(function (x) { return x.id === planId; })[0];
  if (!p) return;
  var url = cycle === "anual" ? p.anual.url : p.mensal.url;
  if (!isAsaas(url)) {
    if (form && form.querySelector('input[name="subject"]')) goContact("especialista", p.id);
    else location.href = "/?assunto=especialista&plano=" + encodeURIComponent(p.id) + "#contato";
    return;
  }
  location.href = url;
}
if ($("plans")) {
  $("plans").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-plan]");
    if (b) goCheckout(b.dataset.plan);
  });
}
if ($("cycle-switch")) {
  $("cycle-switch").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-cycle]");
    if (!b || b.dataset.cycle === cycle) return;
    cycle = b.dataset.cycle;
    store.set("fluxo-ciclo", cycle);
    renderPlans();
  });
}

// ---------------------------------------------------------------------------
// Veja por dentro: telas reais do CRM em abas
var INSIDE = [
  ["funil", "Funil", "Cada contato vira um card e anda pelas etapas", ["Arraste o card de etapa em etapa e veja onde cada negócio está.", "Etiquetas, valor, última mensagem e o índice de conexão no próprio card.", "Funis separados para Vendas e CS, cada um com as suas etapas."]],
  ["conversas", "Conversas", "WhatsApp e Instagram numa tela só", ["Todas as conversas da equipe, com quem está atendendo cada uma.", "Aviso de atraso quando alguém espera resposta há tempo demais.", "A IA resume a conversa e sugere o próximo passo."]],
  ["historico", "Histórico do cliente", "Tudo o que aconteceu com cada pessoa", ["Mensagens, anotações, vendas e agendamentos numa linha do tempo.", "Contato, origem, interesse e responsável sempre à vista.", "Lance a venda ou marque o retorno dali mesmo."]],
  ["agenda", "Agenda", "Horários que se organizam sozinhos", ["Agenda ligada ao Google Agenda e link com a videochamada.", "Lembrete automático pelo WhatsApp na véspera.", "Link público para o cliente escolher o horário."]],
  ["painel", "Painel", "Os números do negócio sem planilha", ["Faturamento, vendas, conversão e tempo de resposta do período.", "Comparação com o período anterior e meta do mês.", "Painel compartilhável com o sócio por link."]],
  ["automacao", "Automação", "Venda ganha, pós-venda começa", ["Quando o card vira Ganho, o card do CS nasce sozinho.", "Cada funil com o seu time e o seu número de WhatsApp.", "Quem vê cada funil é você quem decide."]]
];
var insideOn = "funil";
function renderInside() {
  if (!$("in-tabs")) return;
  $("in-tabs").innerHTML = INSIDE.map(function (t) {
    var on = t[0] === insideOn;
    return '<button type="button" role="tab" id="in-tab-' + t[0] + '" aria-selected="' + on + '" aria-controls="in-panel" tabindex="' + (on ? 0 : -1) + '" data-in="' + t[0] + '">' + esc(t[1]) + "</button>";
  }).join("");
  var t = INSIDE.filter(function (x) { return x[0] === insideOn; })[0];
  $("in-panel").setAttribute("aria-labelledby", "in-tab-" + t[0]);
  $("in-panel").innerHTML =
    '<div class="in-text"><h3>' + esc(t[2]) + "</h3><ul>" + t[3].map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul><a class="btn gold" href="#planos">Quero usar no meu negócio</a></div>' +
    '<figure class="in-shot"><div class="in-bar" aria-hidden="true"><i></i><i></i><i></i><span>FLUXO VIII CRM</span></div><img src="img/crm-' + t[0] + '.webp" alt="Tela de ' + esc(t[1]) + ' do FLUXO VIII com dados de exemplo" loading="lazy" decoding="async"></figure>';
}
if ($("in-tabs")) {
  $("in-tabs").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-in]");
    if (!b) return;
    insideOn = b.dataset.in;
    renderInside();
    $("in-tab-" + insideOn).focus();
  });
  $("in-tabs").addEventListener("keydown", function (e) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    var i = INSIDE.findIndex(function (x) { return x[0] === insideOn; });
    i = (i + (e.key === "ArrowRight" ? 1 : INSIDE.length - 1)) % INSIDE.length;
    insideOn = INSIDE[i][0];
    renderInside();
    $("in-tab-" + insideOn).focus();
    e.preventDefault();
  });
  renderInside();
}

// ---------------------------------------------------------------------------
// Perguntas frequentes
function renderFaq() {
  var n = NICHES[current];
  var users = PLANS.map(function (p) { return p.name.replace("Magnet ", "") + " até " + (p.users.match(/\d+/) || [""])[0]; });
  var ai = PLANS.map(function (p) { return p.name.replace("Magnet ", "") + " " + (p.ai.match(/[\d.]+/) || [""])[0]; });
  var bonus = PLANS.map(function (p) { return "+" + p.bonus.toLocaleString("pt-BR") + " no " + p.name.replace("Magnet ", ""); });
  var list = function (arr) { return arr.slice(0, -1).join(", ") + " e " + arr[arr.length - 1]; };
  var faq = [
    ["Posso ver o CRM antes de assinar?", "Pode. Agende uma demonstração aqui no site: um especialista mostra o FLUXO VIII funcionando com o funil da sua área e tira as suas dúvidas."],
    ["Como recebo o acesso depois de pagar?", "Assim que o Asaas confirma o pagamento, você recebe um link pessoal para criar a sua conta. No Pix e no cartão costuma levar poucos minutos. No boleto, até o banco compensar."],
    ["Quantas pessoas da equipe podem usar?", "Depende do plano: " + list(users) + " usuários. Cada pessoa tem o próprio login e vê só o que o administrador liberar. Não há cobrança extra por usuário dentro do limite do plano. Se a equipe crescer, você muda de plano dentro do próprio CRM, em Planos e upgrade."],
    ["Mensal ou anual: qual a diferença?", "Os recursos são os mesmos. No anual você paga uma vez por ano e economiza " + minAnnualOff() + "%. No mensal a cobrança é todo mês."],
    ["O que são os créditos de IA?", "Cada resposta ou análise feita pela IA usa 1 crédito. Todo mês o plano traz: " + list(ai) + " créditos. Pagando a assinatura até o vencimento, você ganha créditos a mais até o próximo vencimento: " + list(bonus) + ". Se os créditos acabarem, o CRM continua funcionando normalmente, e você pode conectar a sua própria chave de IA em Ajustes para a IA seguir respondendo sem gastar créditos do plano."],
    ["Preciso da API oficial do WhatsApp?", "Não. Você conecta o seu número pelo QR Code, como no WhatsApp Web, em poucos minutos. Dá para ligar até 3 números por empresa, cada um com um nome, como Recepção ou Financeiro."],
    [fill("A IA responde sozinha para os meus {cs}?", n), "Só se você ligar. Você escolhe os horários e até onde ela vai (tirar dúvidas, fazer o primeiro atendimento ou também agendar), e ela para de responder quando alguém da equipe assume a conversa."],
    [fill("Consigo trazer os meus {cs} de outro sistema?", n), fill("Sim. Você importa uma planilha (do Excel, do Google Planilhas ou exportada de outro CRM) com os seus {cs}, já no funil e na etapa certa, e também a lista dos seus serviços com os valores.", n)],
    ["Funciona no celular e no tablet?", "Funciona no computador, no tablet e no celular, direto no navegador. Também dá para instalar como aplicativo na tela inicial, sem baixar nada da loja."],
    ["É seguro?", "Sim. Cada empresa só vê os próprios dados, cada pessoa da equipe vê só o que o administrador liberar e todo acesso é criptografado. O FLUXO VIII segue a LGPD e o pagamento é feito no Asaas, fora do CRM."],
    ["O que acontece se o pagamento atrasar?", "Você tem 2 dias de tolerância com tudo funcionando e avisos no sistema. Depois disso a conta fica só para consulta até o pagamento ser feito. Nada é apagado."],
    ["Posso cancelar?", "Pode, a qualquer momento e sem multa. Antes de cancelar, você pode exportar todos os seus dados. Depois do cancelamento, a conta fica só para consulta."]
  ];
  $("faq").innerHTML = faq.map(function (f) { return "<details><summary>" + esc(f[0]) + "</summary><p>" + esc(f[1]) + "</p></details>"; }).join("");
}

// ---------------------------------------------------------------------------
// Formulário: demonstração / especialista
var form = $("lead-form");
function showMsg(kind, text) {
  var m = $("lead-msg");
  m.className = "msg " + kind;
  m.textContent = text;
}
var openedAt = Date.now();
var leadPlan = "";

function goContact(subject, plan) {
  if (!form) return;
  if (subject) {
    var r = form.querySelector('input[name="subject"][value="' + subject + '"]');
    if (r) r.checked = true;
  }
  leadPlan = plan || leadPlan;
  $("contato").scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  setTimeout(function () { $("f-name").focus({ preventScroll: true }); }, 400);
}
var hasSubjectForm = !!(form && form.querySelector('input[name="subject"]'));
document.querySelectorAll("[data-subject]").forEach(function (a) {
  if (!hasSubjectForm) { a.href = "/?assunto=" + a.getAttribute("data-subject") + "#contato"; return; }
  a.addEventListener("click", function (e) { e.preventDefault(); goContact(a.getAttribute("data-subject")); });
});

if (form) {
// País do telefone: já vem +55; quem é de fora troca
var DDIS = [["55","🇧🇷 +55"],["351","🇵🇹 +351"],["1","🇺🇸 +1"],["54","🇦🇷 +54"],["595","🇵🇾 +595"],["598","🇺🇾 +598"],["56","🇨🇱 +56"],["57","🇨🇴 +57"],["591","🇧🇴 +591"],["51","🇵🇪 +51"],["52","🇲🇽 +52"],["34","🇪🇸 +34"],["39","🇮🇹 +39"],["44","🇬🇧 +44"],["49","🇩🇪 +49"],["33","🇫🇷 +33"],["41","🇨🇭 +41"],["353","🇮🇪 +353"],["81","🇯🇵 +81"],["61","🇦🇺 +61"]];
var ddiSel = $("f-ddi");
if (ddiSel) {
  ddiSel.innerHTML = DDIS.map(function (o) { return '<option value="' + o[0] + '">' + o[1] + "</option>"; }).join("");
  ddiSel.value = "55";
  ddiSel.addEventListener("change", function () {
    $("f-phone").value = "";
    $("f-phone").placeholder = ddiSel.value === "55" ? "(11) 99999-9999" : "Número";
    $("f-phone").focus();
  });
}
var ddiOf = function () { return ddiSel ? ddiSel.value : "55"; };
$("f-phone").addEventListener("input", function (e) {
  if (ddiOf() !== "55") { e.target.value = e.target.value.replace(/[^\d\s-]/g, "").slice(0, 18); return; }
  var d = e.target.value.replace(/\D/g, "").replace(/^55(?=\d{10,11}$)/, "").slice(0, 11);
  var out = d;
  if (d.length > 2) out = "(" + d.slice(0, 2) + ") " + d.slice(2);
  if (d.length > 7) out = "(" + d.slice(0, 2) + ") " + d.slice(2, d.length === 11 ? 7 : 6) + "-" + d.slice(d.length === 11 ? 7 : 6);
  e.target.value = out;
});


var isFicha = form.getAttribute("data-kind") === "ficha";
var val = function (id) { var el = $(id); return el ? el.value.trim() : ""; };
var radio = function (name) { var el = form.querySelector('input[name="' + name + '"]:checked'); return el ? el.value : ""; };

// Ficha: campos que aparecem conforme a resposta
function toggleCond() {
  if (!isFicha) return;
  $("other-wrap").classList.toggle("on", $("f-niche").value === "outro");
  $("emp-wrap").classList.toggle("on", radio("hasEmployees") === "sim");
  $("tried-wrap").classList.toggle("on", radio("triedBefore") === "sim");
}
form.addEventListener("change", toggleCond);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = val("f-name");
  var phone = val("f-phone").replace(/\D/g, "");
  var email = val("f-email");
  if (name.length < 2) { showMsg("err", "Informe seu nome completo."); $("f-name").focus(); return; }
  var ddi = ddiOf();
  var phoneOk = ddi === "55" ? phone.length === 10 || phone.length === 11 : phone.length >= 6 && phone.length <= 15;
  if (!phoneOk) { showMsg("err", ddi === "55" ? "Informe seu WhatsApp com DDD." : "Informe seu WhatsApp completo."); $("f-phone").focus(); return; }
  if ((email || isFicha) && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { showMsg("err", "Confira o e-mail."); $("f-email").focus(); return; }
  if (isFicha) {
    if (!$("f-niche").value) { showMsg("err", "Escolha o seu ramo de atividade."); $("f-niche").focus(); return; }
    if ($("f-niche").value === "outro" && val("f-niche-other").length < 2) { showMsg("err", "Conte qual é o seu ramo."); $("f-niche-other").focus(); return; }
    if (!radio("hasEmployees")) { showMsg("err", "Responda se tem funcionários."); return; }
    if (radio("hasEmployees") === "sim" && !(Number(val("f-employees")) > 0)) { showMsg("err", "Informe quantos funcionários."); $("f-employees").focus(); return; }
    if (!radio("triedBefore")) { showMsg("err", "Responda se já tentou resolver esse problema antes."); return; }
  }
  if (!$("f-consent").checked) { showMsg("err", "Para enviar, aceite a Política de Privacidade."); $("f-consent").focus(); return; }

  var btn = $("lead-submit");
  var label = btn.textContent;
  btn.disabled = true;
  btn.textContent = "Enviando…";
  var body = isFicha
    ? {
        subject: "ficha",
        name: name, phone: phone, ddi: ddi, email: email,
        niche: $("f-niche").value, nicheOther: val("f-niche-other"),
        hasEmployees: radio("hasEmployees"), employees: radio("hasEmployees") === "sim" ? Number(val("f-employees")) : 0,
        triedBefore: radio("triedBefore"), triedHow: val("f-tried"),
        consent: true, website: val("f-website"), elapsedMs: Date.now() - openedAt
      }
    : {
        subject: radio("subject") || "especialista",
        name: name, phone: phone, ddi: ddi, email: email,
        company: val("f-company"),
        niche: $("f-niche").value || (current !== "geral" ? current : "outro"),
        team: $("f-team").value,
        message: val("f-message"),
        plan: leadPlan,
        consent: true, website: val("f-website"), elapsedMs: Date.now() - openedAt
      };
  fetch(CRM_URL + "/api/public/site-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    credentials: "omit",
    referrerPolicy: "strict-origin-when-cross-origin"
  })
    .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { ok: r.ok, d: d }; }); })
    .then(function (res) {
      if (res.ok && res.d.success) {
        form.reset();
        toggleCond();
        leadPlan = "";
        showMsg("ok", body.subject === "demonstracao"
          ? "Pedido recebido! Um especialista vai te chamar no WhatsApp para combinar o horário da demonstração."
          : body.subject === "ficha"
            ? "Ficha recebida, obrigado! Um especialista vai te chamar no WhatsApp em breve."
            : "Mensagem recebida! Um especialista vai te responder no WhatsApp em breve.");
      } else {
        showMsg("err", res.d.error || "Não foi possível enviar agora. Tente de novo em instantes.");
      }
    })
    .catch(function () { showMsg("err", "Sem conexão com o servidor. Confira a internet e tente de novo."); })
    .then(function () { btn.disabled = false; btn.textContent = label; });
});
}

// ---------------------------------------------------------------------------
buildChips();
renderNiche(current);
// Menu "Para quem": as áreas atendidas
(function () {
  var btn = document.querySelector(".dd-btn"), menu = $("dd-niches");
  if (!btn || !menu) return;
  var onIndex = !!$("niche-chips");
  menu.innerHTML = NICHE_ORDER.map(function (id) {
    var n = NICHES[id];
    return '<a href="/?para=' + id + '#inicio" data-dd="' + id + '"><b>' + esc(n.label) + "</b><span>" + esc((function (t) { t = t.replace(/^Para /, "").replace(/\.$/, ""); return t.charAt(0).toUpperCase() + t.slice(1); })(n.howSub)) + "</span></a>";
  }).join("");
  var close = function () { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); };
  btn.addEventListener("click", function (e) { e.stopPropagation(); var open = menu.hidden; menu.hidden = !open; btn.setAttribute("aria-expanded", String(open)); });
  document.addEventListener("click", function (e) { if (!menu.contains(e.target)) close(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !menu.hidden) { close(); btn.focus(); } });
  menu.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-dd]");
    if (!a || !onIndex) return;
    e.preventDefault();
    close();
    renderNiche(a.dataset.dd);
    store.set("fluxo-area", a.dataset.dd);
    var top = $("inicio"); if (top) top.scrollIntoView({ behavior: "smooth" });
  });
})();

if (form) {
  var askedSubject = params.get("assunto");
  if (askedSubject === "demonstracao" || askedSubject === "especialista") {
    var r0 = form.querySelector('input[name="subject"][value="' + askedSubject + '"]');
    if (r0) r0.checked = true;
  }
  var askedPlan = params.get("plano");
  if (askedPlan && PLANS.some(function (p) { return p.id === askedPlan; })) leadPlan = askedPlan;
}

// ===== Campo magnético do herói: contatos (pontos) seguem as linhas até o núcleo =====
(function () {
  var cv = $("field");
  if (!cv || !cv.getContext) return;
  var ctx = cv.getContext("2d");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  var sources = [[.14, .16], [.12, .5], [.18, .84], [.56, .10], [.58, .92], [.02, .32], [.04, .7], [.9, .2], [.92, .8]];
  var core = [.62, .52];
  var paths = [], dots = [];
  function css(v) { return getComputedStyle(document.documentElement).getPropertyValue(v).trim(); }
  function build() {
    var r = cv.getBoundingClientRect();
    W = r.width; H = r.height;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    paths = sources.map(function (s, i) {
      var x0 = s[0] * W, y0 = s[1] * H, x1 = core[0] * W, y1 = core[1] * H;
      var bend = (i % 2 ? 1 : -1) * (0.18 + (i % 3) * 0.07) * W;
      var mx = (x0 + x1) / 2, my = (y0 + y1) / 2;
      var dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy) || 1;
      return { x0: x0, y0: y0, x1: x1, y1: y1, cx: mx - (dy / len) * bend, cy: my + (dx / len) * bend };
    });
    dots = [];
    for (var i = 0; i < 26; i++) dots.push({ p: i % paths.length, t: Math.random(), v: 0.0018 + Math.random() * 0.0026 });
  }
  function pt(p, t) { var a = 1 - t; return [a * a * p.x0 + 2 * a * t * p.cx + t * t * p.x1, a * a * p.y0 + 2 * a * t * p.cy + t * t * p.y1]; }
  // Anel do núcleo: vai ficando dourado conforme os contatos chegam; cheio, brilha e recomeça
  var fill = 0, glow = 0;
  function ring(field, gold) {
    var cx = core[0] * W, cy = core[1] * H, r = 0.16 * W + 7, lw = Math.max(8, W * 0.022);
    ctx.lineCap = "round";
    ctx.lineWidth = lw;
    ctx.strokeStyle = field;
    ctx.globalAlpha = 0.55;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
    ctx.globalAlpha = 1;
    if (fill > 0) {
      ctx.strokeStyle = gold;
      if (glow > 0) { ctx.shadowColor = gold; ctx.shadowBlur = 18 * glow; }
      ctx.beginPath(); ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.min(1, fill)); ctx.stroke();
      ctx.shadowBlur = 0;
    }
  }
  // Ondas que saem do núcleo quando um contato chega
  var waves = [];
  function draw() {
    ctx.clearRect(0, 0, W, H);
    var field = css("--field"), gold = css("--gold"), navy = css("--navy");
    var cx = core[0] * W, cy = core[1] * H;
    ctx.lineWidth = 1.5;
    paths.forEach(function (p) {
      var g = ctx.createLinearGradient(p.x0, p.y0, p.x1, p.y1);
      g.addColorStop(0, field); g.addColorStop(1, gold);
      ctx.strokeStyle = g; ctx.globalAlpha = 0.55;
      ctx.beginPath(); ctx.moveTo(p.x0, p.y0); ctx.quadraticCurveTo(p.cx, p.cy, p.x1, p.y1); ctx.stroke();
    });
    ctx.globalAlpha = 1;
    waves.forEach(function (w) {
      ctx.strokeStyle = gold; ctx.globalAlpha = Math.max(0, 1 - w.r) * 0.5; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(cx, cy, 0.17 * W + w.r * 0.22 * W, 0, Math.PI * 2); ctx.stroke();
    });
    ctx.globalAlpha = 1;
    ring(field, gold);
    dots.forEach(function (d) {
      var p = paths[d.p];
      // rastro: 5 pontos atrás com brilho decrescente
      for (var k = 5; k >= 0; k--) {
        var t = Math.max(0, d.t - k * 0.012), q = pt(p, t);
        ctx.globalAlpha = k === 0 ? 1 : (1 - k / 6) * 0.35;
        ctx.fillStyle = gold;
        if (k === 0) { ctx.shadowColor = gold; ctx.shadowBlur = 10; }
        ctx.beginPath(); ctx.arc(q[0], q[1], k === 0 ? 4 : 3, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
      }
    });
    ctx.globalAlpha = 1;
  }
  function tick() {
    dots.forEach(function (d) {
      d.t += d.v * (0.6 + d.t * 1.6);
      if (d.t >= 1) {
        d.t = 0; d.p = Math.floor(Math.random() * paths.length);
        if (glow <= 0) fill = Math.min(1, fill + 1 / 36); // cada contato que chega enche um pouco o anel
        if (waves.length < 4) waves.push({ r: 0 });
      }
    });
    waves.forEach(function (w) { w.r += 0.012; });
    waves = waves.filter(function (w) { return w.r < 1; });
    if (fill >= 1 && glow <= 0) glow = 1;          // completou: brilha
    if (glow > 0) { glow -= 0.008; if (glow <= 0) { glow = 0; fill = 0; } }
    draw();
    if (!reduce) requestAnimationFrame(tick);
  }
  if (reduce) fill = 0.7;
  build(); draw();
  if (!reduce) requestAnimationFrame(tick);
  window.addEventListener("resize", function () { build(); draw(); });
})();

// ===== Avisos ao vivo no herói (ilustração do que acontece no CRM) =====
(function () {
  var box = $("hero-toast"), t = $("toast-title"), sub = $("toast-sub");
  if (!box || !t || !sub) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var i = 0;
  function items() {
    var n = NICHES[current] || NICHES.geral;
    return [
      [fill("Novo {c} no funil", n), "WhatsApp · agora"],
      ["Respondido pela IA", "em poucos segundos"],
      ["Horário marcado na agenda", "lembrete agendado"],
      ["Venda registrada", "entrou no painel"],
      [fill("Novo {c} no funil", n), "Instagram · agora"]
    ];
  }
  function show() {
    var list = items(), it = list[i % list.length];
    box.classList.add("out");
    setTimeout(function () { t.textContent = it[0]; sub.textContent = it[1]; box.classList.remove("out"); }, reduce ? 0 : 350);
    i++;
  }
  show();
  if (!reduce) setInterval(show, 2800);
})();
