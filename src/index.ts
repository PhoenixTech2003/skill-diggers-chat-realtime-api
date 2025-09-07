import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { Server } from "socket.io";

const app = new Hono();

const httpServer = serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);

const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  // ...
});
