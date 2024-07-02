// Owner do banco, equivalente ao owner role do sql server
db.createUser(
  {
    user: "matheus",
    pwd: passwordPrompt(),  // or cleartext password
    roles: [
       { role: "dbOwner", db: "Alura_Serie" }
    ]
  }
)

// Grant em um banco especifico
db.grantRolesToUser("matheus", [ { role: "readWrite", db: "Alura_Serie" } ]) // Escrita
db.grantRolesToUser("matheus", [ { role: "read", db: "Alura_Serie" } ]) // Leitura
db.grantRolesToUser("matheus", [ { role: "dbOwner", db: "Alura_Serie" } ]) // Owner