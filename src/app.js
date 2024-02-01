const http = require("http");

const server = http.createServer((req, res) => {
  res.statusMessage = "OK";
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.write("hello world,сучки");
  res.end();
});

server.listen(3003, () => {
  console.log("сервер http://127.0.0.1:3000");
});
