module.exports = (fastify, opt, done) => {
  fastify.addHook("onRequest", (req, res, next) => {
    console.log("potato bro");
    next();
  });
  fastify.get("/sweet", (req, res) => {
    res.send("sweet potato");
  });
  fastify.get("/brava", (req, res) => {
    res.send("brava potato");
  });
  done();
};
