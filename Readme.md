# urc-backend
United remote coding challenge backend

## Getting started
this is the API responsible for handling user and shops actions

## Api

***

### User api

* Register

```bash
POST /api/v1/user/register HTTP/1.1

HOST: localhost:3000

Content-type: application/json

body: {
  "email": "user@mail.com",
  "password": "user123"
}
```

* Login

```bash
POST /api/v1/user/login HTTP/1.1

HOST: localhost:3000

Content-type: application/json

body: {
  "email": "user@mail.com",
  "password": "user123"
}
```
***

### Shops Api

* Get nearby shops

```bash
GET /api/v1/shops/nearby/34.6666,-6.32 HTTP/1.1

HOST: localhost:3000

Content-type: application/json 
```

* get preferred shops list

```bash
GET /api/v1/shops/preferred-shops/:userId HTTP/1.1

Host: localhost:3000

Content-Type: application/json

Authorization: Bearer token 'result from the user registration'
```


* Add shop to preferred shops

```bash
POST /api/v1/shops/preferred-shops 2 HTTP/1.1

HOST: localhost:3000

Content-type: application/json 

Authorization: Bearer Token

body: {
  userId: "5c8312042e5412737edb92e3",
  shopId: "5a0c6711fb3aac66aafe26c7"
}
```

* Remove a shops from preferred shops

```bash
POST /api/v1/shops/preferred-shops HTTP/1.1

Host: localhost:3000

content-type: application/json

body: {
  "userId": "5c8312042e5412737edb92e3",
  "shopId": "5a0c6711fb3aac66aafe26c7"
  }
```

