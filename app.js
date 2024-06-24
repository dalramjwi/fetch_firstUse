const http = require("http");
const fs = require("fs");
const server = http.createServer(function (req, res) {
  if (req.method === "GET") {
    fs.readFile("index.html", "utf8", function (err, data) {
      if (err) {
        console.log(err);
      }
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(data);
    });
  } else if (req.method === "GET" && req.url === "/data") {
    // 클라이언트가 /data로 GET 요청을 보냈을 때 처리
    const responseData = { message: "Hello from server!" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(responseData));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
  if (req.method === "POST") {
  }
});
server.listen(3000);
