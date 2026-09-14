const http = require("http");
const fs = require("fs");

const STORE = "store/articles.json";

const server = http.createServer((request, response) => {
    console.log("Anfrage:", request.method, request.url);

    // Erlaubt, dass Frontend/Editor (anderer Port) diesen Server ansprechen dürfen
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-Type");
    response.setHeader("Content-Type", "application/json");

    // Vorab-Anfrage des Browsers (kommt automatisch vor einem POST) - einfach ok sagen
    if (request.method === "OPTIONS") {
        response.statusCode = 204;
        response.end();
        return;
    }

    // News HOLEN
    if (request.method === "GET" && request.url === "/articles") {
        response.end(fs.readFileSync(STORE));
        return;
    }

    // News SPEICHERN
    if (request.method === "POST" && request.url === "/articles") {
        let body = "";
        request.on("data", chunk => { body += chunk; });   // Paket kommt in Stücken
        request.on("end", () => {                            // alle Stücke da:
            fs.writeFileSync(STORE, body);                   // in die Datei schreiben
            response.end('{"status":"gespeichert"}');
        });
        return;
    }

    response.statusCode = 400;
    response.end('{"status":"Unbekannte Anfrage"}');
});

server.listen(5000, "localhost", () => {
    console.log("Server wartet auf http://localhost:5000");
});