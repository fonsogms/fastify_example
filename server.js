const fastify = require("fastify")();

// Run the server!
const start = async () => {
  try {
    // MIDDLEWARE EXPRESS
    // await fastify.register(require("fastify-express"));
    // fastify.use("/baba/*", (req, res, next) => {
    //   console.log("hey");
    //   next();
    // });

    //  fastify.register(require("fastify-formbody"));

    fastify.register(require("./routes/index"), { prefix: "/baba" });
    fastify.register(require("./routes/potato"), { prefix: "/potato" });
    fastify.register(require("./routes/cheese"), { prefix: "/cheese" });

    fastify.addHook("onRequest", (request, reply, done) => {
      console.log("on request");
      done();
    });

    fastify.get(
      "/baba/lolito",
      {
        onRequest: middleWareLolito,
      },
      (req, res) => {
        res.send({ hello: "lolito" });
      }
    );

    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

function middleWareLolito(req, res, next) {
  console.log("what uppp!!");
  next();
}
