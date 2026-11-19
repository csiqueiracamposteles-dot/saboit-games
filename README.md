# Saboit Games — protótipo

Protótipo responsivo em HTML, CSS e JavaScript. A foto original enviada como referência foi mantida em `assets/quarto-saboit.png`; a marca e o botão são uma camada HTML posicionada sobre a tela da TV.

## Testar no computador

Abra `index.html` no navegador. Para desenvolvimento, também pode usar a extensão Live Server do VS Code.

## Publicar pelo GitHub Pages

1. Crie uma conta em https://github.com/ (se ainda não tiver).
2. Clique em **New repository** e dê o nome `saboit-games`.
3. Deixe o repositório **Public** e crie-o.
4. No computador, abra a pasta `saboit-games` no VS Code.
5. Abra o terminal do VS Code e execute:

```bash
git init
git add .
git commit -m "Primeira versão do site Saboit Games"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/saboit-games.git
git push -u origin main
```

Troque `SEU-USUARIO` pelo seu usuário do GitHub.

6. No GitHub, entre no repositório, abra **Settings > Pages**.
7. Em **Build and deployment**, escolha **Deploy from a branch**.
8. Selecione a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
9. Aguarde a publicação. O endereço será parecido com `https://SEU-USUARIO.github.io/saboit-games/`.
10. Envie esse endereço ao seu namorado. Ele poderá abrir no celular ou computador.

## Atualizar depois

Sempre que alterar arquivos:

```bash
git add .
git commit -m "Atualiza protótipo"
git push
```

O GitHub Pages publica a atualização automaticamente após alguns instantes.

## Observação

Esta é uma prévia visual. Os cartões do catálogo são exemplos; ainda não há cadastro real de produtos nem links de compra. A imagem de referência é mantida como imagem de fundo e a interface da TV é HTML/CSS, para que o texto e o botão sejam realmente interativos.
