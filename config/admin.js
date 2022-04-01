module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8a3b250a06aec5db6f8c02f7700bce6b'),
  },
});
