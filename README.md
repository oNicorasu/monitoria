# Teste monitoria resilia

Construção de um sistema de gestão de produtos para um site de e-commerce onde o
administrador possa cadastrar produtos e categorias.

## 🛠️ Abrir e rodar o projeto

Para rodar o sistema é necessário abrir o terminal com o comando: 

- `ctrl + J`

Após isso você precisa instalar tudo que o projeto possui, sendo assim utilize o comando:

- `npm install`

Esse comando fará com que o node_modules e todas as dependências utilizadas sejam instaladas no sistema. 

Antes de prosseguir é necessário instalar o ambiente [XAMPP](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.2.0/xampp-windows-x64-8.2.0-0-VS16-installer.exe) para ter um servidor web Apache e para acrescentar o MySQL.

Após a instalação renomeie o arquivo ".env-example" para ".env" e adicione os valores dentro do mesmo entre "" após o sinal de igual(=), e inicie o XAMPP e de start no Apache e o MySQL.

![xampp](https://user-images.githubusercontent.com/101716911/226075621-e8331c16-0158-4a7b-aa58-db336dedf7a4.png)

Em seguida você precisará abrir o servidor, então vá no site "localhost/phpmyadmin" e vá na barra do lado esquerdo e clique em "novo" (será o primeiro botão da lista).

![novo-db](https://user-images.githubusercontent.com/101716911/226075698-2226ed28-5bd4-496c-9cee-88d3c5aac3fc.png)

Lá você vai criar um banco de dados com o nome de "ecommerce". 

## 📚 Rodando o código:

Para executar seu código você deve estar com o terminal aberto no seu Visual Studio Code e usar o comando:

- `npm run dev`

E assim vai criar as tabelas no localhost/phpmyadmin. 

Com isso você poderá utilizar uma plataforma de API, como Insomnia, Postman, RAML, swagger, etc..., para utilizar os métodos get, post, put e delete.
[Documentação de como usar esta API](https://documenter.getpostman.com/view/26425569/2s93JzKzfH).

#### OBS.: 
Na parte das rotas quando se trata dos métodos put e delete, você deve apagar o ":id" e colocar a id desejada para que ela seja modificada ou deletada.

Também utilizei uma variável de ambiente para manter as minhas configurações desse sistema separadas do código-fonte.

Autor: Nicolas Mendes
