# Espelho - seu feed de inspiracao

Um feed responsivo inspirado no Instagram, com identidade visual propria e publicacoes de personagens ficticios que compartilham ideias, viagens e pequenos momentos do dia. Criado com React, Vite e icones `react-icons`.

## Executar localmente

```bash
npm install
npm run dev
```

## Recursos

- Feed e stories responsivos para desktop e celular.
- Curtir uma publicacao (tambem com duplo clique na imagem) e salvar posts.
- Ler comentarios e publicar novos comentarios durante a sessao.
- Publicacoes configuradas em `src/data/posts.json`.
- Ilustracoes e avatares locais em `public/images`.

## Personalizar

Edite `src/data/posts.json` para trocar perfis, textos, curtidas e imagens. Adicione imagens em `public/images` e atualize os caminhos e textos alternativos no JSON. Para criar novas publicacoes, mantenha os campos `id`, `user`, `location`, `avatar`, `image`, `alt`, `art`, `artLabel`, `artCaption`, `likes` e `caption`.

Curtidas, itens salvos e novos comentarios ficam na memoria apenas enquanto a pagina estiver aberta.

## Apresentacao

Ao publicar sua versao, adicione aqui o link do repositorio GitHub e capturas de tela do projeto final. O desafio original tambem sugere apresentar o resultado em um video no LinkedIn, contando um pouco sobre o desenvolvimento, os desafios e os aprendizados.
