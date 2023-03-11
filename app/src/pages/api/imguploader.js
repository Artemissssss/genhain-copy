const { IncomingForm } = require('formidable');
const fs = require('fs');
const dir = '../project-store';

const requestApi = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    try {
        const dataFile = await new Promise(function (resolve) {
            const form = new IncomingForm({
                keepExtensions: true,
                multiples: true,
                uploadDir: dir
            });

            const research = fs.existsSync(dir);

            if (!research) {
                fs.mkdirSync(dir);
            }

            form.parse(req, function (err, fields, files) {
                const url = files?.upload?.path?.split('\\').reverse()[0];
                console.log(files?.upload)
                const size = files?.upload?.size;
                if (err) throw String(JSON.stringify(err, null, 2));
                resolve({
                    'uploaded': 1,
                    'fileName': files?.upload?.name,
                    'url': `/api/imguploader/${url}`,
                    size: size,
                    type: files?.upload?.type,
                    name: files?.upload?.name
                });
            });
        });

        res.status(200).end(JSON.stringify(dataFile));
    } catch (e) {
        console.log(e)
        res.status(404).send(e.message)
    }
}
export default requestApi;
export const config = { api: { bodyParser: false } };