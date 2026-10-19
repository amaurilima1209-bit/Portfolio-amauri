# Portfólio de Amauri Lima

Portfólio responsivo com estética minimalista e corporativa, criado com HTML, CSS e JavaScript puro.

## Arquivos

- `index.html` — conteúdo e estrutura das seções.
- `style.css` — identidade visual, responsividade e animações.
- `script.js` — menu mobile, animações de entrada, ano automático e configuração dos links.
- `README.md` — este guia.

## Testar localmente

1. Extraia o ZIP.
2. Abra a pasta no VS Code.
3. Abra `index.html` no navegador. Para facilitar o desenvolvimento, você pode usar a extensão Live Server no VS Code.
4. Teste em tela grande e em celular; confira menu, links e botão de e-mail.

Não há dependências para instalar. A fonte usa Google Fonts; se estiver sem internet, o site usa fontes alternativas do sistema.

## Personalizar antes de publicar

Abra `script.js` e edite o objeto `CONFIG`:

```js
const CONFIG = {
  github: "https://github.com/seu-usuario",
  linkedin: "www.linkedin.com/in/amauri-de-aquino-467a7a3a9",
  email: "Amaurilima1209@gmail.com"
};
