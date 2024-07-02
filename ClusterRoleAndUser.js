// Criação Admin maximo do cluster
db.createUser({
  user: "dbamax",
  pwd: "teste1234",
  roles: [ { role: "root", db: "Alura_Serie" } ]
})

// Grant admin maximo do cluster
db.grantRolesToUser("dba_matheus", [ { role: "root", db: "admin" } ])
