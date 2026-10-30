# Site da RRM Advocacia — advrrm.com.br

Site de uma página feito só com HTML, CSS e um pouco de JavaScript: sem frameworks e sem nenhuma etapa de compilação. É publicado pelo **GitHub Pages**.

O site não coleta dados dos visitantes: não tem formulários, pixels, Google Analytics nem qualquer rastreamento. As fontes ficam no próprio site (pasta `fontes/`). O mapa do Google só carrega quando o visitante clica em **Mostrar mapa**.

## O que tem em cada arquivo

| Arquivo | Para que serve |
|---|---|
| `index.html` | A página do site, com todos os textos |
| `style.css` | Cores, fontes e layout |
| `script.js` | Botão "Mostrar mapa" |
| `logo-rrm.png` | Logotipo (aparece no rodapé e na prévia do link no WhatsApp e nas redes sociais) |
| `fundo-escritorio.png` | Imagem de fundo do topo |
| `fundo-escritorio.webp` | Cópia mais leve da imagem de fundo, carregada no lugar do PNG pelos navegadores atuais |
| `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png` | Ícones da aba do navegador e da tela do celular, feitos a partir do logotipo |
| `rrm-icone.ico` | Ícone original enviado para o repositório (não é usado pela página) |
| `site.webmanifest` | Nome e ícones usados quando alguém salva o site na tela inicial do celular |
| `fontes/` | Fontes Cinzel (títulos) e Source Sans 3 (textos), com as licenças |
| `CNAME` | Diz ao GitHub qual é o domínio do site (`advrrm.com.br`) |
| `.nojekyll` | Faz o GitHub publicar os arquivos exatamente como estão |

## Como alterar um texto

1. No GitHub, abra o arquivo `index.html`.
2. Clique no ícone de lápis (**Edit this file**).
3. Use Ctrl+F para achar o texto e altere apenas o que está entre as marcações, por exemplo entre `<p>` e `</p>`.
4. Clique em **Commit changes**. O site se atualiza em cerca de 1 minuto.

Se mudar o endereço, o telefone ou o horário, altere também o bloco "Dados estruturados", no começo do `index.html`.

---

## Como colocar o site no ar

### Parte 1: ativar o GitHub Pages

1. Abra o repositório no GitHub (`github.com/reggissjb/rrm-site`).
2. Clique em **Settings**, no menu do repositório.
3. No menu da esquerda, clique em **Pages**.
4. Em **Build and deployment**, depois **Source**, escolha **Deploy from a branch**.
5. Em **Branch**, escolha **main** e a pasta **/ (root)**. Clique em **Save**.
6. Em **Custom domain**, confira se aparece `advrrm.com.br` (o arquivo `CNAME` já cuida disso). Se o campo estiver vazio, digite `advrrm.com.br` e clique em **Save**.

> No plano Free do GitHub, o GitHub Pages exige que o repositório seja **público**. Para mudar, vá em **Settings → General → Danger Zone → Change visibility**.

### Parte 2: apontar o domínio no Registro.br

1. Entre em [registro.br](https://registro.br) com seu usuário e senha.
2. Clique no domínio **advrrm.com.br**.
3. Na seção **DNS**, clique em **Editar zona**. Se aparecer a opção "Utilizar DNS do Registro.br", ative-a antes.
4. Crie **quatro** entradas do tipo **A**, com o campo "nome" **em branco**, uma para cada um destes endereços:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. Crie uma entrada do tipo **CNAME**:
   - Nome: `www`
   - Dados: `reggissjb.github.io`
6. Apague outras entradas **A** ou **CNAME** que já existam para o domínio principal ou para `www`. **Não apague** entradas **MX** ou **TXT**, porque elas podem ser do e-mail `contato@advrrm.com.br`.
7. Clique em **Salvar alterações**.

A mudança pode levar de alguns minutos até 24 horas (às vezes 48 horas) para valer.

### Parte 3: ativar o cadeado (HTTPS)

1. Quando o domínio já estiver abrindo o site, volte em **Settings → Pages** no GitHub.
2. Marque **Enforce HTTPS**. Se a opção estiver cinza, espere algumas horas, porque o GitHub ainda está emitindo o certificado.

Depois disso, o site estará em **https://advrrm.com.br**.
