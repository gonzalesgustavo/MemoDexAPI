# MemoDex API

---

**Description**

Backend API for the MemoDex Applications.

If you get an error that is not obvious please check route specific required fields, more than likely there is a few required fields that did not meet the model criteria. 

---

## Routes

---

**Users**


## Notes

| URL | METHOD |
| ------------------ | -------- |
| /membank/api/notes | GET |
| /membank/api/notes/:id | GET|
| /membank/api/notes/add | POST |
| /membank/api/notes/update/:id | PATCH |
| /membank/api/notes/remove/:id | DELETE |

| Required | Optional |
| --- | --- |
| text | N/A |

_**Sample Query String:**_

> http://www.memodex.com/membank/api/notes/5dfaab5d530e4c0e76f48f6b


**Sample JSON Payload:**

```json
{
	"text": "Frank called on 12/16/24"
}
```

## Websites

| URL | METHOD |
| ------------------ | -------- |
| /membank/api/websites | GET |
| /membank/api/websites/:id | GET|
| /membank/api/websites/add | POST |
| /membank/api/websites/update/:id | PATCH |
| /membank/api/websites/remove/:id | DELETE |

| Required | Optional |
| --- | --- |
| name | shopType |
| url | emailUsed |
| - | usernameUsed |
| - | pwdHint |

_**Sample Query String:**_

> http://www.memodex.com/membank/api/websites/5dfaab5d530e4c0e76f48f6b

**Sample JSON Payload:**

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
## Contacts

| URL | METHOD |
| ------------------ | -------- |
| /membank/api/contacts | GET |
| /membank/api/contacts/:id | GET|
| /membank/api/contacts/add | POST |
| /membank/api/contacts/update/:id | PATCH |
| /membank/api/contacts/remove/:id | DELETE |

| Optional | Required |
| --- | --- |
| notes | firstName |
| email | lastName |
| mobile | usernameUsed |
| work | - |
| home | - |
| relationship | - |
| twitter | - |
| facebook | - |
| linkedin | - |
| instagram | - |
| website | - |


_**Sample Query String:**_

> http://www.memodex.com/membank/api/contacts/5dfaab5d530e4c0e76f48f6b

**Sample JSON Payload:**

```json
{
	"firstName": "Mark",
	"lastName": "Doe",
	"relationship": "Friend",
	"notes": "Met at code connect",
	"email": "markdoe@example.com",
	"mobile": "000-000-0000",
	"work": "000-000-0000",
	"home": "000-000-0000",
	"twitter": "@markdoe19778",
	"facebook": "markdoe19778",
	"linkedin": "doemark19778",
	"instagram": "#doemark78",
	"website" : "www.doeexamplemark.com"
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
* Changed look of Routes in Readme file

---

### Notes

---

The docker image and it's settings are not fully or properly setup for now the password and username are generic and poor. To spin up the database use docker build and docker run in the directory. The Container IP is hard coded and will need to be changed manually. Will improve on this post testing. 