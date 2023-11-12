# Explicações das rotas:

    GET(/home) = redireciona a rota para a pagina index.html
    GET(/cadastrar) = redireciona a rota para a pagina cadastro.html
    GET(/showItem) = redireciona a rota para a pagina showItem.html
    POST(/cadastrochocolate) = recebe o nome do body e cria um newChocolate com o id e nome e armazena no array chocolateList
    GET(/chocolates) = lista todos os nomes armazenados no array chocolate List
    PUT(/chocolates/:id) = atualiza o nome do item com base no ID cadastrado nele.
    DELETE(/chocolates/:id) = deleta o item com base no ID cadastrado no array chocolateList
