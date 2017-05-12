var express = require('express');
var router = express.Router();
var Emp=require('../models/Employee');

router.get('/:empid?',function(req,res,next){

if(req.params.empid){

    Emp.getEmpById(req.params.empid,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
else{

 Emp.getAllEmp(function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
 
    });
}
});
router.post('/',function(req,res,next){

        Emp.addEmp(req.body,function(err,count){

            //console.log(req.body);
            if(err)
            {
                res.json(err);
            }
            else{
                    res.json(req.body);
            }
        });
});
 router.post('/:empid',function(req,res,next){
  Emp.deleteAll(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
  });
});
router.delete('/:empid',function(req,res,next){

        Emp.deleteEmp(req.params.empid,function(err,count){

            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(count);
            }

        });
});
router.put('/:empid',function(req,res,next){

    Emp.updateEmp(req.params.empid,req.body,function(err,rows){

        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;