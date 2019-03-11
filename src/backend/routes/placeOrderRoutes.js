module.exports = (app, db) => {

    // Fetch 10 latest products
    app.get('/getTen', (req, res) => {
        let sql = 'SELECT * FROM produkter ORDER BY datum DESC LIMIT 10';
        
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    });

    // Fetch and sort ten  by param
    app.get('/getAndSortTen/:sorter', (req, res) => {
        let column = req.params.sorter;
        let sql = `SELECT * FROM produkter ORDER BY ${column} LIMIT 10`;

        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    });

    // Add a product
    app.post('/addproduct', (req, res) => {
        if (req.body.lagersaldo === '' || req.body.namn === '' || req.body.plats === '' || isNaN(req.body.lagersaldo)) {
            res.status(400).send('hej');
            return;
        }

        let data = {
            namn: req.body.namn,
            lagersaldo: req.body.lagersaldo,
            plats: req.body.plats
        };

        let sql = 'INSERT INTO produkter SET ?';
        db.query(sql, data, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    });
}