import http from 'http';
const PORT= process.env.PORT;
import fs from 'fs/promises';
import url from 'url';
import path from 'path';

// Get Current path 
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log( __filename, __dirname);

const server = http.createServer( async (req, res)=>{
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode  = 404;
    // console.log(req.url);
    // console.log(req.method);

    try{
        // check if Get request
        if(req.method === 'GET'){
            let filepath;
            if(req.url === '/'){
                filepath = path.join(__dirname, 'public', 'index.html');
            }else if(req.url == '/about'){
                filepath = path.join(__dirname, 'public', 'about.html');
            }else{
                throw new Error('Not found');
            }
            // if(req.url === '/'){
            //     res.writeHead(200,{'Content-Type': 'text/html'})
            //     res.end('<h1>Home page</h1>');
            // }else if(req.url == '/about'){
            //     res.writeHead(200,{'Content-Type': 'text/html'})
            //     res.end('<h1>About page</h1>');
            // }else{
            //     res.writeHead(404,{'Content-Type': 'text/html'})
            //     res.end('<h1>Not Found</h1>');
            // }

            const date = await fs.readFile(filepath);
            res.setHeader('Content-Type', 'text/html');
            res.write(date);
            res.end();
        }else{
            throw new Error('Method not allowed')
        }
    } catch(err){
        res.writeHead(500,{'Content-Type': 'text/plain'})
        res.end('Server Error');
    }


    
    // res.end('<h1>hello world!</h1>');
});

server.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
}) 