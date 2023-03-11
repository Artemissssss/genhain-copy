const { MongoClient, ObjectId } = require('mongodb');

export default async function handler(req, res) {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.NEXT_PUBLIC_DATABASE_USER}:${process.env.NEXT_PUBLIC_DATABASE_PASSWORD}@${process.env.NEXT_PUBLIC_DATABASE}/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    );  
    const coll = client.db('genshin-ua').collection('geography');
    if(req.method === "POST"){
        const result = await coll.insertOne(req.body)
        res.status(200).json(result)
    }else{
    const cursor = coll.find();
    const result = await cursor.toArray();
    await client.close();
    res.status(200).json(result)
    }
}