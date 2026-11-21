# Nexo — Estúdio

Proposta 3 do site institucional. Angular 22, componentes standalone, estado com signals e estilos SCSS.

```sh
npm ci
npm start
```

Abra http://localhost:4203.

```sh
npm run build
npm test -- --watch=false
```

Build estático em `dist/site3/browser`.

A documentação comparativa, o comportamento do formulário e as instruções de personalização estão em [../README.md](../README.md). O nome Nexo é provisório. Configure o e-mail real em `src/app/ui/contact.config.ts` para habilitar o compartilhamento via cliente de e-mail.

## Publicação no GitHub Pages

Endereço após a publicação: https://PauloAugustoJunior.github.io/site3/

1. No repositório `site3` no GitHub, abra **Settings → Pages** e selecione **GitHub Actions** em **Build and deployment → Source**. Essa configuração é feita uma única vez.
2. Envie os commits para `main`. No Windows, o arquivo `push-sites.cmd`, na pasta que contém os seis sites, faz os pushes em sequência.
3. Acompanhe a publicação na aba **Actions**, no workflow **Publicar no GitHub Pages**.

O arquivo [.github/workflows/pages.yml](.github/workflows/pages.yml) instala as dependências, gera o build de produção com a base correta e publica automaticamente a cada push em `main`. Não é necessário instalar GitHub CLI, criar token pessoal ou compilar no Windows. Também é possível iniciar uma publicação em **Actions → Publicar no GitHub Pages → Run workflow**.

No plano GitHub Free, o repositório precisa ser público para usar Pages. Referência: [documentação do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
