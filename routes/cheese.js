module.exports = (fastify, opt, done) => {
  fastify.route({
    method: "POST",
    url: "/roquefort",
    schema: {
      body: {
        type: "object",
        properties: {
          a: { type: "integer" },
          b: { type: "string" },
          c: { type: "array", maxItems: 3, items: { type: "integer" } },
        },
        required: ["a", "b", "c"],
      },
    },
    handler: function (req, res) {
      console.log(req.body);
      res.send({ hello: "cheesecake" });
    },
    preHandler: function (req, res, next) {
      console.log("on specific request");
      next();
    },
  });
  done();
};
