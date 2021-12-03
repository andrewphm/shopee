const router = require('express').Router();
const stripe = require('stripe')('sk_test_DYcyX7aLmXQc3DGUq0mR70yJ');
const dotenv = require('dotenv');

dotenv.config();

router.post('/payment', (req, res) => {
  console.log(process.env.SRIPE_SEC_KEY, 'sk_test_DYcyX7aLmXQc3DGUq0mR70yJ');

  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
