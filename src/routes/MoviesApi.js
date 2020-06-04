const router = require('express').Router();

router.get('/movies', (req, res) => {
    res.json({ status: 'ok' })
})