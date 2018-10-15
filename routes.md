### Para chequear que está corriendo

* METHOD: GET
* URL: http://localhost:3000
* EXPECTD RESPONSE:
```json
Hello World
```

### Para Registrarse

* METHOD: POST
* URL: http://localhost:3000/auth/register
* BODY:
```json
{
  "name": "Jose",
  "username": "Jose1",
  "password": "123"
}
```
* EXPECTED RESPONSE:
```json
OK
```

### Para logearse

* METHOD: POST
* URL: http://localhost:3000/auth/login
* BODY:
```json
{
  "username": "Jose1",
  "password": "123"
}
```
* EXPECTED RESPONSE:
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikpvc2UxMDAiLCJpYXQiOjE1Mzk2MzQwMjF9.7jDH1MuRo9LQ9q6DA0-elvViMMITLR1PI5mFm8VRk48",
    "message": "OK"
}
```

**PARA LAS SIGUIENTES RUTAS INCLUIR ESTE HEADER**
```json
Authorization: Bearer <token>
```
Donde token es lo recibido en la ruta para logearse

### Para chequear que el header anterior es correcto
* METHOD: GET
* URL: http://localhost:3000/products
* EXPECTED RESPONSE:
```json
Products
```
