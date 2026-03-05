const http = require('http');

http.createServer((req,res)=>{
 res.write("Hello from Jenkins CI 🚀");
 res.end();
}).listen(3000);
