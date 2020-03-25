const MongoClient = require('mongodb').MongoClient;

//const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const uri = "mongodb://192.168.91.190";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {

    //选择数据库和集合
    const collection = client.db("ln1906").collection("users");

    //获取数据
    // collection.find({}).toArray(function(err, docs) {
    //     console.log(docs)
    // });

    // 条件查找
    collection.find({"name":"lisi"}).toArray(function(err, docs) {
        console.log(docs)
    });

    client.close();
});