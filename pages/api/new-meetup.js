// /api/new-meet-up
// its a POST req to this end point

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    // mongodb
    const client = await MongoClient.connect(
      "mongodb+srv://nabil:12345@restapi.bdhad.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetupds");
    const result = await meetupsCollection.insertOne(data);

    console.log("result", result);

    client.close();

    res.status(201).json({
      message: "Meetupds saved successfully!",
    });
  }
}

export default handler;
