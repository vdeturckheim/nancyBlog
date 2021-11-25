const Express = require('express');
const app = Express();
const DB = require('./database/db.js');

// https://github.com/vdeturckheim/nancyBlog

app.get('/posts/:id', (req, res) => {
    const postId = req.params.id;
    DB.all('SELECT * FROM posts WHERE ID = ?', [postId], (err, rows) => {
        if (err) {
            console.log(err);
            res.end('error');
        }
        res.json(rows);
    });
});

app.get('/posts', (req, res) => {
    DB.all('SELECT ID, TITLE FROM posts', (err, rows) => {
        if (err) {
            console.log(err);
            res.end('error');
        }
        res.json(rows);
    });
});

app.listen(process.env.PORT || 8080);
