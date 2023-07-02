const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
    const url = req.url;
    const method = req.method;
    let name = 'Idris';
    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Welcome to User List</title></head>');
        res.write('<body><h1>Enter UserName</h1><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Create</button></form><a href="/users">User List</a><body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/users') {
        res.write('<html>');
        res.write('<head><title>Welcome to User List</title></head>');
        res.write('<body><a href="/">Go back</a><h1>User List</h1><ul><li>Admin</li><li>User 1</li><li>User 2</li><li>'+name+'</li></ul><body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/create-user' && method === 'POST') {
        const body = [];
        req.on('data', (chunk)=>{
            body.push(chunk)
        })
        return req.on('end', ()=> {
            const parsedBody = Buffer.concat(body).toString().split('=')[1];
            console.log(parsedBody)
            name = parsedBody
            fs.writeFile('userList.txt', parsedBody, ()=> {
                res.statusCode=302
                res.setHeader('Location', '/users')
                return res.end()
            });
        })
    }
})

server.listen(3030)