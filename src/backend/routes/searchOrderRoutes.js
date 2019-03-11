module.exports = (app, db) => {
    
    // Fetch all products
    app.get('/getall', (req, res) => {
        let sql = 'SELECT * FROM produkter';
        
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    });

    // Fetch and sort all by param
    app.get('/getAndSort/:sorter', (req, res) => {
        let column = req.params.sorter;
        let sql = `SELECT * FROM produkter ORDER BY ${column}`;
        
        db.query(sql, (err, result) => {
            if (err) throw err;
            res.send(result);
        })
    });
}