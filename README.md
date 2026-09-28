# Site da RRM Advocacia — rrmadv.com.br

Site institucional de uma página, feito só com HTML, CSS e JavaScript (sem frameworks, sem cookies e sem rastreadores). É publicado gratuitamente pelo **GitHub Pages**.

## O que tem em cada arquivo

| Arquivo | Para que serve |
|---|---|
| `index.html` | A página do site, com todos os textos |
| `style.css` | Cores, fontes e layout |
| `script.js` | Menu no celular e botão "Mostrar mapa" |
| `logo-rrm.png` / `logo-rrm.webp` | Logotipo (o WebP é uma versão mais leve; o PNG fica como alternativa) |
| `rrm-icone.png`, `favicon.ico`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png` | Ícones da aba do navegador e da tela do celular |
| `site.webmanifest` | Informações para o celular ao salvar o site na tela inicial |
| `CNAME` | Diz ao GitHub qual é o domínio do site (`rrmadv.com.br`) |
| `.nojekyll` | Faz o GitHub publicar os arquivos exatamente como estão |
| `ferramentas/gerar-webp.py` | Gera o `logo-rrm.webp` a partir do `logo-rrm.png` |

## Como alterar um texto

1. No GitHub, abra o arquivo `index.html`.
2. Clique no ícone de lápis (**Edit this file**).
3. Localize o texto (Ctrl+F) e altere apenas o que está entre as marcações, por exemplo entre `<p>` e `</p>`.
4. Clique em **Commit changes**. Em cerca de 1 minuto o site é atualizado.

---

## Passo a passo: colocar o site no ar

### Parte 1 — Ativar o GitHub Pages

1. Entre no repositório no GitHub (`github.com/reggissjb/rrm-site`).
2. Clique em **Settings** (Configurações), no menu superior do repositório.
3. No menu da esquerda, clique em **Pages**.
4. Em **Build and deployment** → **Source**, escolha **Deploy from a branch**.
5. Em **Branch**, escolha **main** e a pasta **/ (root)**. Clique em **Save**.
6. Aguarde 1 ou 2 minutos. No topo da mesma página aparecerá um endereço provisório (algo como `reggissjb.github.io/rrm-site`).
7. Em **Custom domain**, confira se aparece `rrmadv.com.br` (o arquivo `CNAME` já faz isso). Se estiver vazio, digite `rrmadv.com.br` e clique em **Save**.

> Observação: o GitHub Pages gratuito exige que o repositório seja **público**. Se ele estiver privado, vá em **Settings → General → Danger Zone → Change visibility** e torne-o público (o site não contém nenhum dado sigiloso).

### Parte 2 — Apontar o domínio no Registro.br

1. Acesse [registro.br](https://registro.br) e entre com seu CPF/usuário e senha.
2. Clique no domínio **rrmadv.com.br**.
3. Procure a seção **DNS** e clique em **Editar zona** (se aparecer a opção "Utilizar DNS do Registro.br", ative-a primeiro).
4. Clique em **Nova entrada** e crie **quatro** entradas do tipo **A**, deixando o campo "nome" **em branco** e usando, em cada uma, um destes endereços:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
5. Crie mais uma entrada do tipo **CNAME**:
   - Nome: `www`
   - Dados: `reggissjb.github.io` (seu usuário do GitHub seguido de `.github.io`)
6. Se já existirem outras entradas **A** ou **CNAME** para o domínio principal ou para `www` (por exemplo, de uma hospedagem antiga), apague-as. **Não apague** entradas do tipo **MX** ou **TXT**, pois elas podem ser usadas pelo e-mail.
7. Clique em **Salvar alterações**.

A mudança pode levar de alguns minutos até 24 horas para funcionar (às vezes até 48 horas).

### Parte 3 — Ativar o cadeado (HTTPS)

1. Depois que o domínio começar a funcionar, volte em **Settings → Pages** no GitHub.
2. Marque a opção **Enforce HTTPS**. Se ela estiver cinza, espere algumas horas: o GitHub ainda está emitindo o certificado.

Pronto: o site estará em **https://rrmadv.com.br**.

### Se algo não funcionar

- **"DNS check unsuccessful"** no GitHub: normalmente é só esperar a propagação. Confira se os 4 endereços foram digitados corretamente.
- **O site abre sem o logotipo**: confira se `logo-rrm.png` e `logo-rrm.webp` estão no repositório, com esses nomes exatos (letras minúsculas).
- **Verificar o domínio (opcional, recomendado)**: em **Settings** da sua conta do GitHub (não do repositório) → **Pages** → **Add a domain**, o GitHub fornece uma entrada **TXT** para você criar no Registro.br. Isso impede que outra pessoa use seu domínio no GitHub.

---

## Gerar o logotipo em WebP

Se trocar o `logo-rrm.png`, gere de novo a versão WebP (precisa do Python instalado):

```
pip install pillow
python3 ferramentas/gerar-webp.py
```

## Privacidade

O site não usa cookies, formulários, Google Analytics nem qualquer rastreador. As fontes vêm do Google Fonts. O mapa do Google só é carregado quando o visitante clica em **Mostrar mapa**.
