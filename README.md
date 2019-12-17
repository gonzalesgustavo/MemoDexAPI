# MemoDex API

---

**Description**

Backend API for the MemoDex Application

---

## Routes

---

/membank/api/notes/:id METHOD:PATCH

```javascript
// must pass note tags as a array
["sample tag", "Sample Tag", "Added Tag"]

```

---

## Responses

---

---

### Change Log:

---

* Removed Mongodb and switched to Mongoose 
* Docker container holds MongoDb

---

### Notes

---

The docker image and it's settings are not fully or properly setup for now the password and username are generic and poor. To spin up the database use docker build and docker run in the directory. The Container IP is hard coded and will need to be changed manually. Will improve on this post testing. 