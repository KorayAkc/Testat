const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
    console.log("Jemand klopft an:", request.method, request.url);
    if (request.url === "/articles") {
        response.end(fs.readFileSync("store/articles.json"))
    }
    else {
        response.end("Unbekannte Anfrage");
    }
});

server.listen(5000, "localhost", () => {
    console.log("Server wartet auf http://localhost:5000");
});