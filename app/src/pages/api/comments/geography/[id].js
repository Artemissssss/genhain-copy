const { MongoClient,ObjectId } = require('mongodb');

export default async function handler(req, res) {
    try {
        const client = await MongoClient.connect(
            `mongodb+srv://${process.env.NEXT_PUBLIC_DATABASE_USER}:${process.env.NEXT_PUBLIC_DATABASE_PASSWORD}@${process.env.NEXT_PUBLIC_DATABASE_COMMENTS}/?retryWrites=true&w=majority`,
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        const coll = client.db('genshin-ua-comments').collection('geography');
        if(req.method === "POST"){
            const result = await coll.insertOne(req.body)
            const filter = {route: "/"+req.query.id};
            const cursor = coll.find(filter);
            const result2 = await cursor.toArray();
            await client.close();
            res.status(200).json(result2)
        }else if(req.method === "DELETE"){
            const result = await coll.deleteOne({_id: new ObjectId(req.body)});
            const filter = {route: "/"+req.query.id};
            const cursor = coll.find(filter);
            const result2 = await cursor.toArray();
            await client.close();
            res.status(200).json(result2)
        }else{
            const filter = {route: "/"+req.query.id};
            const cursor = coll.find(filter);
            const result = await cursor.toArray();
            
            await client.close();
            if(result && result[0]){
                res.status(200).json(result)
            } else {
                res.status(404).json([])
            }
        }
    } catch {
        res.status(404).json([])
    }
}