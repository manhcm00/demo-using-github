var Mouse = require('./mouse');
var Cat = require('./cat')
var Circle = require('./circle');
var co = require('co');
var fs = require('fs');

var jerry = new Mouse('orange');
var mickey = new Mouse('black');
var tom = new Cat();

tom.eat(jerry);
tom.eat(mickey);
console.log(tom);
console.log(tom.stomach[0]);



var text = fs.readFileSync('./text.txt', {encoding : 'utf8'});
console.log(text);

fs.writeFileSync('./text.txt', 'vcl');

var myFriend = {
    name: "Huy",
    age: 19,
    gender: 'male'
}

var testJSON = JSON.stringify(myFriend);
console.log(myFriend);
console.log(testJSON);

var myCatString = '{"name": "Miu", "age": 1, "gender": "male"}';
var myCat = JSON.parse(myCatString);
console.log(myCat);

function readFilePromise(path) {
    return new Promise(function(resolve, reject) {
        fs.readFile(path, {encoding : 'utf8'}, function(err, data) {
            if (err) reject(err);
            else resolve(data);
        });
    });
}

co(function* () {
    // var song1 = yield readFilePromise('./song1.txt');
    // var song2 = yield readFilePromise('./song2.txt');
    // var song3 = yield readFilePromise('./song3.txt');
    var values = yield [
        readFilePromise('./song1.txt'),
        readFilePromise('./song2.txt'),
        readFilePromise('./song3.txt')
    ]
    return values;
}).then(function(values) {
    console.log(values);
}).catch(function(err) {
    console.log(err);
});


var readFiles = co.wrap(function*(files) {
    var values = yield files.map(function(file) {
        return readFilePromise(file);
    });
    return values;
});

readFiles(['./song1.txt', './song2.txt', './song3.txt'])
.then(function(values) {
    console.log(values);
})
.catch(function(err) {
    console.log(err);
});