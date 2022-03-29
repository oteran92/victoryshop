module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b1daf4a2c5f943f063900c3d405997f6'),
  },
});
