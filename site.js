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
var NICHE_ORDER = ["terapias", "odontologia", "saude", "arquitetura", "digital", "servicos"];

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

function renderSections(n) {

  var steps = [
    [fill("O {c} chama", n), "Pelo WhatsApp, pelo Instagram ou por um formulário com link na bio. O contato entra no funil sozinho, sem ninguém digitar."],
    ["A IA faz o primeiro atendimento", n.ai],
    [n.team, n.roles + ": cada pessoa vê só o que precisa. Quem responde primeiro fica como responsável pelo " + n.c + "."],
    ["Você acompanha", n.track]
  ];
  $("steps").innerHTML = steps.map(function (s) { return "<li><h3>" + esc(s[0]) + "</h3><p>" + esc(s[1]) + "</p></li>"; }).join("");

  var feats = [
    ["Até 3 números de WhatsApp", fill("API oficial da Meta ou QR Code. A resposta sai pelo mesmo número em que o {c} escreveu.", n)],
    ["Atendente IA", "Liga e desliga quando quiser, com horário e limites do que ela pode fazer. Pausa sozinha quando alguém da equipe assume a conversa."],
    ["Funil que se atualiza sozinho", fill("A última mensagem aparece no card de cada {c}. " + n.back, n)],
    ["Formulários com link", "Para a bio, o anúncio ou o site. Quem responde entra direto na etapa certa do funil."],
    ["Painel do gestor", fill("Vendas, conversão, tempo da primeira resposta, origem dos {cs} e horários de pico, por pessoa da equipe.", n)],
    ["Acesso por função", n.roles + ": você escolhe quais abas cada pessoa vê. O administrador vê tudo."],
    ["Agenda", fill("{As}, lembretes e integração com o Google Agenda.", n)],
    ["Vendas e cobranças", "Propostas, vendas e o que falta receber, com lembrete de pagamento pelo WhatsApp."],
    ["Créditos de IA de bônus", "Pagando a assinatura até o vencimento, você ganha créditos de IA extras todo mês."]
  ];
  $("feats").innerHTML = feats.map(function (f) { return '<div class="feat"><h3>' + esc(f[0]) + "</h3><p>" + esc(f[1]) + "</p></div>"; }).join("");

  var safe = [
    ["Acesso protegido", "Entrada com e-mail e senha ou conta Google. Membros da equipe só entram por convite do administrador."],
    ["Cada um vê o que precisa", n.privacy + " Dá para tirar o acesso de alguém na hora."],
    ["Dados isolados por empresa", fill("As conversas e os dados dos seus {cs} ficam separados dos de qualquer outra empresa, em servidores do Google Cloud.", n)],
    ["Conexão criptografada", "Todo o tráfego usa HTTPS. As chaves de integração ficam só no servidor, nunca no navegador."],
    ["Pagamento fora do CRM", "Você paga na página segura do Asaas. O FLUXO VIII não recebe nem guarda os dados do seu cartão."],
    ["LGPD", "Termos, Política de Privacidade e contrato de tratamento de dados. Você exporta ou apaga os dados quando quiser."]
  ];
  $("safe").innerHTML = safe.map(function (f) { return "<div><h3>" + esc(f[0]) + "</h3><p>" + esc(f[1]) + "</p></div>"; }).join("");
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
function renderPlans() {
  if (!$("plans")) return;
  var who = NICHES[current].who;
  $("plans").innerHTML = PLANS.map(function (p, i) {
    return '<article class="plan' + (p.tag ? " pro" : "") + '">' +
      (p.tag ? '<span class="tag">' + esc(p.tag) + "</span>" : "") +
      "<h3>" + esc(p.name) + "</h3>" +
      '<p class="who">' + esc(who[i]) + "</p>" +
      '<div class="price"><span class="cur">R$</span><span class="val">' + brl(p.mensal.price) + '</span><span class="per">/mês</span></div>' +
      '<p class="alt">ou <strong>R$ ' + brl(p.anual.perMonth) + "/mês</strong> no plano anual</p>" +
      "<ul><li>" + esc(p.users) + "</li><li>" + esc(p.ai) + "</li><li>+" + p.bonus.toLocaleString("pt-BR") + " créditos de IA por mês pagando até o vencimento</li><li>Todos os recursos do FLUXO VIII</li></ul>" +
      '<button type="button" class="btn ' + (p.tag ? "gold" : "solid") + '" data-plan="' + p.id + '" aria-label="Assinar ' + esc(p.name) + '">Assinar o ' + esc(p.name.replace("Magnet ", "")) + "</button>" +
      "</article>";
  }).join("");
}

var chosen = null;
var dlg = $("cycle");
if (dlg) {
function openCycle(planId) {
  chosen = PLANS.filter(function (p) { return p.id === planId; })[0];
  if (!chosen) return;
  $("cycle-title").textContent = "Como prefere pagar o " + chosen.name + "?";
  $("c-m-price").textContent = "R$ " + brl(chosen.mensal.price) + " por mês";
  $("c-m-note").textContent = "Renova todo mês. Pagando até o vencimento: +" + chosen.bonus.toLocaleString("pt-BR") + " créditos de IA.";
  $("c-a-price").textContent = "R$ " + brl(chosen.anual.total) + " por ano";
  $("c-a-note").textContent = "Equivale a R$ " + brl(chosen.anual.perMonth) + "/mês, cobrado uma vez por ano. Também ganha o bônus de IA.";
  dlg.querySelector('input[value="mensal"]').checked = true;
  if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
}
function closeCycle() { if (typeof dlg.close === "function") dlg.close(); else dlg.removeAttribute("open"); }
$("plans").addEventListener("click", function (e) {
  var b = e.target.closest("button[data-plan]");
  if (b) openCycle(b.dataset.plan);
});
$("c-close").addEventListener("click", closeCycle);
dlg.addEventListener("click", function (e) { if (e.target === dlg) closeCycle(); });
$("c-go").addEventListener("click", function () {
  if (!chosen) return;
  var cycle = dlg.querySelector('input[name="cycle"]:checked').value;
  var url = cycle === "anual" ? chosen.anual.url : chosen.mensal.url;
  if (!isAsaas(url)) { // plano sem link de pagamento ainda: fala com um especialista
    var plan = chosen.id;
    closeCycle();
    if (form && form.querySelector('input[name="subject"]')) goContact("especialista", plan);
    else location.href = "/?assunto=especialista&plano=" + encodeURIComponent(plan) + "#contato";
    return;
  }
  location.href = url;
});
$("c-talk").addEventListener("click", function () {
  var plan = chosen ? chosen.id : "";
  closeCycle();
  if (form && form.querySelector('input[name="subject"]')) goContact("especialista", plan);
  else location.href = "/?assunto=especialista&plano=" + encodeURIComponent(plan) + "#contato";
});
}

// ---------------------------------------------------------------------------
// Perguntas frequentes
function renderFaq() {
  var n = NICHES[current];
  var faq = [
    ["Posso ver o CRM antes de assinar?", "Pode. Agende uma demonstração aqui no site e um especialista mostra o FLUXO VIII funcionando com o funil da sua área."],
    ["Como recebo o acesso depois de pagar?", "Quando o Asaas confirma o pagamento, enviamos um link pessoal para você criar a conta, por e-mail e WhatsApp. No Pix e no cartão costuma levar poucos minutos. No boleto, até o banco compensar."],
    ["Mensal ou anual: qual a diferença?", "Os recursos são os mesmos. No anual você paga uma vez por ano e economiza 23%. No mensal a cobrança é todo mês. Nos dois você ganha os créditos de IA de bônus pagando até o vencimento."],
    ["Como ganho créditos de IA extras?", "Pagando a assinatura até o vencimento, você ganha créditos de IA a mais todo mês até o próximo vencimento: +1.100 no Start, +1.650 no Pro, +2.800 no Gold e +4.950 no Black. No cartão, a cobrança cai no dia e o bônus vem automático."],
    ["Preciso da API oficial do WhatsApp?", "Não. Você pode conectar pelo QR Code, como no WhatsApp Web, ou pela API oficial da Meta. Dá para usar os dois, até 3 números."],
    [fill("A IA responde sozinha para os meus {cs}?", n), "Só se você ligar. Você escolhe os horários e o que ela pode fazer, e ela para de responder quando alguém da equipe assume a conversa."],
    ["É seguro?", "Sim. Cada empresa só vê os próprios dados, cada pessoa da equipe vê só o que o administrador liberar, todo acesso é criptografado e o pagamento acontece fora do CRM, no Asaas."],
    ["O que acontece se o pagamento atrasar?", "Você tem 2 dias de tolerância com tudo funcionando e avisos no sistema. Depois disso a conta fica só para consulta até o pagamento ser feito. Nada é apagado."],
    ["Posso cancelar?", "Pode, a qualquer momento. O acesso continua até o fim do período já pago, e você pode exportar seus dados antes de sair."]
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
$("f-phone").addEventListener("input", function (e) {
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
  if (phone.length < 10 || phone.length > 11) { showMsg("err", "Informe seu WhatsApp com DDD."); $("f-phone").focus(); return; }
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
        name: name, phone: phone, email: email,
        niche: $("f-niche").value, nicheOther: val("f-niche-other"),
        hasEmployees: radio("hasEmployees"), employees: radio("hasEmployees") === "sim" ? Number(val("f-employees")) : 0,
        triedBefore: radio("triedBefore"), triedHow: val("f-tried"),
        consent: true, website: val("f-website"), elapsedMs: Date.now() - openedAt
      }
    : {
        subject: radio("subject") || "especialista",
        name: name, phone: phone, email: email,
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
  function draw() {
    ctx.clearRect(0, 0, W, H);
    var field = css("--field"), gold = css("--gold"), navy = css("--navy");
    ctx.lineWidth = 1.5;
    paths.forEach(function (p) { ctx.strokeStyle = field; ctx.beginPath(); ctx.moveTo(p.x0, p.y0); ctx.quadraticCurveTo(p.cx, p.cy, p.x1, p.y1); ctx.stroke(); });
    ring(field, gold);
    dots.forEach(function (d) { var q = pt(paths[d.p], d.t); ctx.fillStyle = d.t > 0.82 ? navy : gold; ctx.beginPath(); ctx.arc(q[0], q[1], 4, 0, Math.PI * 2); ctx.fill(); });
  }
  function tick() {
    dots.forEach(function (d) {
      d.t += d.v * (0.6 + d.t * 1.6);
      if (d.t >= 1) {
        d.t = 0; d.p = Math.floor(Math.random() * paths.length);
        if (glow <= 0) fill = Math.min(1, fill + 1 / 36); // cada contato que chega enche um pouco o anel
      }
    });
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
