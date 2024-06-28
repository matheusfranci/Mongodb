Durante os nossos estudos, realizamos a criação e remoção de banco de dados e coleções utilizando o MongoDB Compass, como também a linha de comando através do MongoDB Shell.

Para criar um banco de dados no MongoDB Shell, nós utilizamos a instrução:

use  <db>

Ao executar este comando, caso o banco de dados já exista, será apenas realizada a conexão, caso contrário, o banco de dados será criado. Mas, precisamos armazenar dados neste banco de dados pela primeira vez, para ele ser definitivamente criado. Então, precisamos criar nossa primeira coleção.

O MongoDB disponibiliza alguns métodos para criarmos uma coleção. Para criar explicitamente uma coleção no MongoDB Shell, nós utilizamos o método:

db.createCollection(“Nome_da_coleção”)

Também podemos criar uma coleção no MongoDB, quando armazenamos dados nesta coleção pela primeira vez.

Para excluir um banco de dados pela linha de comando, precisamos estar conectados ao banco de dados que será excluído e executar a instrução:

db.dropDatabase()

Já para excluir uma coleção pela linha de comando, executamos a instrução:

db.collection.drop()

Onde o texto collection deve ser substituído pelo nome da coleção que será excluída.

