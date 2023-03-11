const fs = require('fs');
const dir = '../project-store';
import { fileTypeFromFile } from 'file-type';

const requestApi = async (req, res) => {
    const { query: { id } } = req;
    res.setHeader('Cache-control', 'public, max-age=300')

    const filePath = dir + '/' + id;
    console.log(filePath)
    const readFile = new Promise(async (resolve, reject) => {
        if (fs.existsSync(filePath)){
            fs.readFile(filePath, function (err, data) {
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        } else {
            reject()
        }
    })
    try {
        const data = await readFile;
        if (data){
            const { mime } = await fileTypeFromFile(filePath)
            res.writeHead(200, { 'Content-Type': mime })
            res.end(data, 'binary')
        } else {
            res.status(404).send('Not Found')
        }
    } catch (e) {
        console.log(e)
        res.status(404).send('Not Found')
    }
}
export default requestApi;
export const config = { api: { bodyParser: false } };