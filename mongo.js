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
    const where = {"name":"lisi"};      // where条件
    collection.find(where).toArray(function(err, docs) {
        console.log(docs)
    });


    // 添加数据  insertOne
    const doc = {name:"zhaoliu",email:"zhaoliu@qq.com",age:123,mobile:'13312341234'};   //一个文档 相当于 一条记录
    collection.insertOne(doc,function(err,result){
        console.log("insertOne\n");
        console.log(err);
        console.log(result);
    })


    // 更新数据 update
    const where2 = {name:"wangwu"};
    const set2 = {$set:{age:55}};

    collection.updateOne(where2,set2,function(err,result){
         console.log("更新成功\n");
    });

    client.close();
});