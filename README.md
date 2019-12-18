# MemoDex API

---

**Description**

Backend API for the MemoDex Applications

---

## Routes

---

**Users**


**Notes**

/membank/api/notes METHOD:GET

/membank/api/notes/:id METHOD:GET

Sample Query String:

http://www.memodex.com/membank/api/notes/5dfaab5d530e4c0e76f48f6b

/membank/api/notes/add METHOD:POST

Sample JSON Payload:

```json
{
	"text": "Frank called on 12/16/24"
}
```

/membank/api/notes/update/:id METHOD:PATCH

Sample Query String:

membank/api/notes/update/5dfa98c0afa71168f206df1b

Sample Body:

```json
{
	"text": "Frank called on 12/10/24"
}
```
/membank/api/notes/update/:id METHOD:PATCH

Sample Query String:

/membank/api/notes/remove/:id METHOD:PATCH


**Websites**

/membank/api/websites  METHOD:GET

/membank/api/websites/:id  METHOD:GET

Sample Query String:

http://www.memodex.com/membank/api/websites/5dfa990c25265b6a3adc361a

/membank/api/websites/add  METHOD:POST

Sample JSON Payload:

```json
{
	"name": "Google",
	"url": "http://www.google.com",
	"type": "Search Engine",
	"emailUsed": "example@gmail.com",
	"username": "example86",
	"pwdHint": "Bunny's in Blankets"
}

```

membank/api/websites/remove/:id METHOD:DELETE

Sample Query String:

membank/api/websites/remove/5dfa98c0afa71168f206df1b

/membank/api/websites/update/:id  METHOD:PATCH

Sample Query String:

membank/api/websites/update/5dfa98c0afa71168f206df1b

```json
{
	"url": "http://www.google.com",
	"type": "Fast Search Engine",
	"emailUsed": "new.example@gmail.com",
}
```

---

## Responses

---

All responses follow the same pattern, here is a sample success response. 

```json
{
  "success": true,
  "resultLimit": 10,
  "resultCount": 10,
  "message": "limit of 10 websites returned",
  "status": 200,
  "results": [
    {
      "_id": "5dfa9032ed49514b6119eb58",
      "name": "Bing",
      "url": "http://www.bing.com",
      "emailUsed": "example@outlook.com",
      "pwdHint": "Rabbits with cute hats"
    },
    {
      "_id": "5dfa9059ed49514b6119eb59",
      "name": "Google",
      "url": "http://www.google.com",
      "emailUsed": "example@gmail.com",
      "pwdHint": "Rabbits with parachutes"
    },
    {
      "_id": "5dfa9824b028a867d06b292c",
      "name": "Github",
      "url": "http://www.github.com",
      "emailUsed": "example@gmail.com",
      "pwdHint": "Samson and Sally"
    }
  ]
}
```

Here is a Sample error resonse:

```json
{
  "success": false,
  "resultLimit": null,
  "resultCount": null,
  "message": "Possible server error or id/data failed to meet API criteria please refer to the documentation for route specific requirements",
  "status": 400,
  "results": "TypeError: data.forEach is not a function"
}

```

---

### Change Log:

---

* Removed Mongodb and switched to Mongoose 
* Docker container holds MongoDb

---

### Notes

---

The docker image and it's settings are not fully or properly setup for now the password and username are generic and poor. To spin up the database use docker build and docker run in the directory. The Container IP is hard coded and will need to be changed manually. Will improve on this post testing. 