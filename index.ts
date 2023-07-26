import { MongoClient, ServerApiVersion } from "mongodb";
import app from "./server";

MongoClient.connect(process.env.MONGOCLIENT || "")
.catch((err) => {
  console.log(err)
  process.exit(1)
})
.then(async client => {
  app.listen(process.env.PORT || "8000",() => {
    console.log(`started on http://localhost:${process.env.PORT}`)
  })
})