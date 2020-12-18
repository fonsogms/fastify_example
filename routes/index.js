module.exports = (fastify, opts, done) => {
  fastify.addHook("onRequest", (request, reply, done) => {
    console.log("on request baba");
    done();
  });
  fastify.get("/user", (req, res) => {
    console.log("hey 1");
    res.send({ hello: "user" });
    console.log("hey 2");
  });
  fastify.get("/lolo", (req, res) => {
    res.send({ hello: "lolo" });
  });
  done();
};
