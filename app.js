const http = require("http");
const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
  }
  if (req.method === "POST") {
  }
});
server.listen(3000);
