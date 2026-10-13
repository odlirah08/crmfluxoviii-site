# crmfluxoviii.tech

Site de vendas do FLUXO VIII CRM (arquivos estáticos na Hostinger, pasta `public_html`).

- `index.html` — página principal: seletor "Para quem é", textos por área, segurança, planos, contato e perguntas.
- `planos.html` — só planos e valores (`crmfluxoviii.tech/planos`).
- `ficha.html` — ficha de interesse para disparar para a base (`crmfluxoviii.tech/ficha`).
- `site.css` — estilos de todas as páginas.
- `site.js` — no topo: endereço do CRM (`CRM_URL`), links do Asaas (`PLANS`) e textos de cada área (`NICHES`).
- `.htaccess` — HTTPS, sem "www", `/login` → tela de login do CRM, `/planos` e `/ficha`, cabeçalhos de segurança.

Quando o CRM ganhar o endereço `app.crmfluxoviii.tech`, troque o endereço em `site.js` (`CRM_URL`) e em `.htaccess` (linha do `/login`).
