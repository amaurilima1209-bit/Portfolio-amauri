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
  linkedin: "https://www.linkedin.com/in/seu-perfil/",
  email: "seu-email@exemplo.com"
};
```

Use os endereços reais dos seus perfis. Também atualize os links dos projetos quando os repositórios estiverem publicados. Os cartões atuais deixam claro que os projetos estão em andamento ou são exercícios de estudo.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo `amauri-portfolio`.
2. Envie `index.html`, `style.css`, `script.js` e `README.md` para a raiz do repositório.
3. No repositório, acesse **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/(root)` e clique em **Save**.
6. Aguarde a publicação. O endereço geralmente será `https://SEU-USUARIO.github.io/amauri-portfolio/`.

## Observação sobre conteúdo

As habilidades são apresentadas como iniciais ou em aprendizado. Os projetos descritos refletem estudos iniciados ou discutidos e não devem ser apresentados como concluídos até que estejam realmente funcionando e documentados.
