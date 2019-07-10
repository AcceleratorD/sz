const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
//登录接口 login_post方法
router.post("/login_post",function(req,res){
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $yzm=req.body.yzm;
	var $lei=req.body.lei;
//	console.log($phone+"~~~~"+$upwd);
	if(!$uname){
		res.send("用户名不存在");
		return;
	}
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	if(!$yzm){
		res.send("验正码不存在");
		return;
	}
	var sql="select * from sz_user where uname=? and upwd=? and lei=?";
	pool.query(sql,[$uname,$upwd,$lei],function(err,result){
		if(result.length>0){
			res.send("登录成功");
		}else{
			res.send("用户名或密码错误");
		}
	});
});

//注册接口 reg_post方法
router.post("/reg_post",function(req,res){
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $phone=req.body.phone;
	var $lei=req.body.lei;
	/*
	var err=function(err){
		var namep=document.getElementById("uname").parentNode.parentNode;
		var div=document.createElement("div");
		div.innerHTML=err;
		div.style.color="red";
		var td=document.createElement("td")
		td.appendChild(div);
		namep.appendChild(td);
	}*/
//	console.log($phone+"~~~~"+$upwd);
	if(!$uname){
		res.send("用户名不存在");
		return;
	}/*else if(!$uname==/^\d{9}&/){
		err("※请输入9位数字")
	}*/
	if(!$upwd){
		res.send("密码不存在");
		return;
	}
	if(!$phone){
		res.send("手机号不存在");
		return;
	}
	var sql="INSERT  INTO  sz_user  SET ?";
	pool.query(sql,[req.body],function(err,result){
		if(result.affectedRows>0){
			res.send("注册成功");
		}else{
			res.send("注册失败");
		}
	});
});
//导出路由器
module.exports=router;