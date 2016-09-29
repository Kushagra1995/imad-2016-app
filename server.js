var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles ={
    var articleOne : {
        title: 'Hi this is artciicle 1',
        head: 'article 1',
        date: 'spt 5',
        content: `  
                    <p>
                        This is content fo my fistrt artcle.
                    </p>
                    <p>
                        This is content fo my fistrt artcle.
                    </p>
                    <p>
                        This is content fo my fistrt artcle.
                    </p>`
    },
        var articleTwo : {
        title: 'Hi this is artciicle 2',
        head: 'article 2',
        date: 'spt 10',
        content: `  
                    <p>
                        This is content fo my second artcle.
                    </p>
                    <p>
                        This is content fo my second artcle.
                    </p>
                    <p>
                        This is content fo my second artcle.
                    </p>`
    },
        var articleThree : {
        title: 'Hi this is artciicle 3',
        head: 'article 3',
        date: 'spt 15',
        content: `  
                    <p>
                        This is content fo my third artcle.
                    </p>
                    <p>
                        This is content fo my third artcle.
                    </p>
                    <p>
                        This is content fo my third artcle.
                    </p>`
    }
    
};
function createTemp(data){
var title= data.title;
var head=data.head;
var content= data.content;
var date=data.date;
var htmltemp =`
  <!doctype html>
<html>
    <head>
        <title>
            ${title}
        </title>
      <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>${head}</h3>
            <div>
                ${date}
            </div>
            <div>
            ${content}
            </div>
        </div>
    </body>
</html>
  
`;
return htmlTemp;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.send(createTemp(articleOne));
});
app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
