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

### Para obtener la lista de cartas
* METHOD: GET
* URL: http://localhost:3000/products/list
* EXPECTED RESPONSE:
```json
[
    {
        "description": "Hola",
        "attack": 15,
        "defense": 20,
        "_id": "5bcdf7118d9299284e5f08da",
        "cardName": "fdf",
        "url": "file:///home/tisparta/images/upload_261e30ec8369f358dcd63836f38f830f.jpg",
        "__v": 0,
        "id": "5bcdf7118d9299284e5f08da"
    },
    {
        "description": "Hola",
        "attack": 15,
        "defense": 20,
        "_id": "5bcdf796d7f21128b9b50bad",
        "cardName": "fdf",
        "url": "file:///home/tisparta/images/upload_b16dacb528c2ec0e53d73a2c42a9cf02.png",
        "__v": 0,
        "id": "5bcdf796d7f21128b9b50bad"
    },
    {
        "description": "Hola",
        "attack": 15,
        "defense": 20,
        "_id": "5bcdf79dd7f21128b9b50bae",
        "cardName": "fdf",
        "url": "file:///home/tisparta/images/upload_161231af8cb662ffb04ee24659671cf8.png",
        "__v": 0,
        "id": "5bcdf79dd7f21128b9b50bae"
    }
]
```

### Para agregar una carta
* METHOD: POST
* URL: http://localhost:3000/products/add
* Example: Check index.html in this repo
