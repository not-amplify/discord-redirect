import express from 'express';
import http from 'node:http';
import cors from 'cors';

const server = http.createServer();
const app = express(server);
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.redirect("https://discord.gg/p66sqqn8jz");
  });

server.on('request', (req, res) => {
    app(req, res)
})

server.on('listening', () => {
  console.log("Discord Redirect Started :)")
})

server.listen({ port: PORT, })

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  console.log("SIGTERM signal received: closing HTTP server");
  server.close();
  process.exit(0);
}
