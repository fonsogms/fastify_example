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
        },
      },
    },
    handler: function (req, res) {
      console.log(req.body);
      res.send({ hello: "cheesecake" });
    },
  });
  done();
};
