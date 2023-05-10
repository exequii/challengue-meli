let path = require("path");
let fsp = require("fs/promises");
let express = require("express");
let { installGlobals } = require("@remix-run/node");
//let productRoutes = require("./server/routes/productRoutes");

// Polyfill Web Fetch API
installGlobals();

let root = process.cwd();
let isProduction = process.env.NODE_ENV === "production";

function resolve(p) {
  return path.resolve(__dirname, p);
}

async function createServer() {
  let app = express();
  /**
   * @type {import('vite').ViteDevServer}
   */
  let vite;

  if (!isProduction) {
    vite = await require("vite").createServer({
      root,
      server: { middlewareMode: true },
      appType: 'custom'
    });

    app.use(vite.middlewares);
  } else {
    app.use(require("compression")());
    app.use(express.static(resolve("dist/client")));
  }

  app.use("*", async (req, res) => {
    let url = req.originalUrl;

    //console.log("entree " + req.url)
    if(url === "/api/items"){
      console.log("entre en api items")
      res.setHeader('Content-Type', 'application/json');
      res.status(200).end(true);
    }else{
      try {
        let template;
        let render;
  
        if (!isProduction) {
          template = await fsp.readFile(resolve("index.html"), "utf8");
          template = await vite.transformIndexHtml(url, template);
          render = await vite
            .ssrLoadModule("client/src/entry.server.tsx")
            .then((m) => m.render);
        } else {
          template = await fsp.readFile(
            resolve("dist/client/index.html"),
            "utf8"
          );
          render = require(resolve("dist/server/entry.server.js")).render;
        }
  
        try {
          let appHtml = await render(req);
          let html = template.replace("<!--app-html-->", appHtml);
          res.setHeader("Content-Type", "text/html");
          return res.status(200).end(html);
        } catch (e) {
          if (e instanceof Response && e.status >= 300 && e.status <= 399) {
            return res.redirect(e.status, e.headers.get("Location"));
          }
          throw e;
        }
      } catch (error) {
        if (!isProduction) {
          vite.ssrFixStacktrace(error);
        }
        console.log(error.stack);
        res.status(500).end(error.stack);
      }
    }
  });

  return app;
}

createServer().then((app) => {

  //   app.use((req, res, next) => {
  //   console.log(`Solicitud recibida en ${req.method} ${req.path}`);
  //   volve(req,res)
  //   return
  //   next();
  // });

  // //app.use("/api/items", productRoutes);
  // app.get("/api/items", (req, res) => {
  //   console.log("HOLA ENTRE")
  //   const items = [{ id: 1, name: "test" },{ id: 2, name: "test2" }];
  //   res.json(items);
  // });

  app.listen(3000, () => {
    console.log("HTTP server is running at http://localhost:3000");
  });
});
