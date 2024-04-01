import http from "http";

const server = http
  .createServer((req, res) => {
    res.end("Hello from the server");
  })
  .listen(4000);

export default server;
