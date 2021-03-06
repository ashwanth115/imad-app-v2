var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var article={
    articleone: {
    title: 'article one ',
    heading: 'Article one',
    content: '<p>hello this is my first webpage.hello this is my first webpagehello this is my first webpagehello this is my first webpagehello this is my first webpagehello this is my first webpagehello this is my first webpagehello this is my first webpagehello this is my first webpagehello this is my first webpagehello this is my first webpagehello this is my first webpage</p>'
},
article2: {},
article3: {} 
};
function Myfunction (data)
{
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmltemplate=`<html>
    <head>
        <title>${title}</title>
     <meta name="viewport" content="width=device-width,initial-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />
    </head>
   
    <body>
        <div class="container">
            <div><a href="/">Home</a></div>
            <hr/>
       
        <div>
           ${content}
        </div>
            </div>
        
    </body>
</html>
`;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
res.send(Myfunction(articleone));
    
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter + 1;
    res.send(counter.toString());
});

app.get('/article-two',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
    
});
app.get('/ui/main.js',function(req,res){
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
