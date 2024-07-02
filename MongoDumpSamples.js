// comando básico de backup
C:\Program Files\MongoDB\Tools\100\bin>mongodump --uri="mongodb://dbamax:teste1234@localhost:27017/admin" --out="C:\Users\Matheus\Desktop\Pessoal\Mongodb\Dump"
/*2024-07-02T02:30:08.132-0300    writing admin.system.users to C:\Users\Matheus\Desktop\Pessoal\Mongodb\Dump\admin\system.users.bson
2024-07-02T02:30:08.148-0300    done dumping admin.system.users (4 documents)
2024-07-02T02:30:08.148-0300    writing admin.system.version to C:\Users\Matheus\Desktop\Pessoal\Mongodb\Dump\admin\system.version.bson
2024-07-02T02:30:08.149-0300    done dumping admin.system.version (2 documents)*/

// É prereq o usuário ter permissão para a operação de backup

// database especifico

//prereq o usuário existir no banco com a permissão minima de readWrite
Alura_Serie> db.createUser({
   user: "dbamax",
   pwd: "teste1234",
   roles: [{ role: "readWrite", db: "Alura_Serie" }]
 })

C:\Program Files\MongoDB\Tools\100\bin>mongodump --uri="mongodb://dbamax:teste1234@localhost:27017/Alura_Serie" --out="C:\Users\Matheus\Desktop\Pessoal\Mongodb\Dump"
/*2024-07-02T02:35:58.727-0300    writing Alura_Serie.serie_01 to C:\Users\Matheus\Desktop\Pessoal\Mongodb\Dump\Alura_Serie\serie_01.bson
2024-07-02T02:35:58.738-0300    done dumping Alura_Serie.serie_01 (1 document)
2024-07-02T02:35:58.740-0300    writing Alura_Serie.xadrez to C:\Users\Matheus\Desktop\Pessoal\Mongodb\Dump\Alura_Serie\xadrez.bson
2024-07-02T02:36:01.715-0300    [##......................]  Alura_Serie.xadrez  617672/6256184  (9.9%)
2024-07-02T02:36:04.715-0300    [####....................]  Alura_Serie.xadrez  1243023/6256184  (19.9%)
2024-07-02T02:36:07.715-0300    [#######.................]  Alura_Serie.xadrez  1848377/6256184  (29.5%)
2024-07-02T02:36:10.716-0300    [#########...............]  Alura_Serie.xadrez  2536819/6256184  (40.5%)
2024-07-02T02:36:13.715-0300    [############............]  Alura_Serie.xadrez  3130700/6256184  (50.0%)
2024-07-02T02:36:16.721-0300    [##############..........]  Alura_Serie.xadrez  3720276/6256184  (59.5%)
2024-07-02T02:36:19.715-0300    [################........]  Alura_Serie.xadrez  4403083/6256184  (70.4%)
2024-07-02T02:36:22.715-0300    [###################.....]  Alura_Serie.xadrez  5007542/6256184  (80.0%)
2024-07-02T02:36:25.725-0300    [#####################...]  Alura_Serie.xadrez  5617382/6256184  (89.8%)
2024-07-02T02:36:28.518-0300    [########################]  Alura_Serie.xadrez  6256184/6256184  (100.0%)
2024-07-02T02:36:28.518-0300    done dumping Alura_Serie.xadrez (6256184 documents)*/