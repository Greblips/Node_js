const http = require("http");
const getUsers = require("./modules/users");

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    res.status = 200;
    res.statusMessage = "OK";
    res.headersSent = "Content-Type: application/json";
    res.write(getUsers());
    res.end();

    return;
  }
  res.status = 200;
  res.statusMessage = "OK";
  res.headersSent = "Content-Type: text/plain";
  res.write("hello world,beathesdsdsd");
  res.end();
});

server.listen(3000, () => {
  console.log("сервер http://127.0.0.1:3000");
});
