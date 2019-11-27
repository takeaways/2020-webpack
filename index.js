const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    // req.headers.cookie;
    res.writeHead(200, {
      "Set-Cookie": "mycookie=coocookie "
    }); // 요청 성공의 응답
    console.log(req.headers.cookie);
    console.log(req.url);
    fs.readFile("./write.txt", (error, data) => {
      res.end(data);
    });
    // res.write("<h1>hello world</h1>");
    // res.end();
  })
  .listen(8080, () => console.log(8080));

server.on("listening", () => {
  console.log("li");
});

server.on("error", e => {
  console.error(e);
});
