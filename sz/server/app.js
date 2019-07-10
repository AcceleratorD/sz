const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
//创建web服务器
var server=express();
server.listen(8080);
//托管静态资源到public目录下
server.use(express.static('../public'));

//使用body-parser中间件
server.use(bodyParser.urlencoded({
	extended:false
}));

//挂在路由器，挂载到/user /reg
server.use('/user',userRouter);