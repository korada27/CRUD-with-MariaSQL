var db=require('../dbconnection');

var Emp={

getAllEmp:function(callback){

return db.query("Select * from employee1",callback);

},
getEmpById:function(empid,callback){

    return db.query("select * from employee1 where Empid=?",[empid],callback);
},
addEmp:function(Emp,callback){
   console.log("Inside ADD function");
   
return db.query("Insert into employee1 values(?,?,?,?)",[Emp.Empid,Emp.Empname,Emp.Empdept,Emp.Empsal],callback);
//return db.query("insert into task(Id,Title,Status) values(?,?,?)",[Task1.Id,Task1.Title,Task1.Status],callback);
},
deleteEmp:function(empid,callback){
    return db.query("delete from employee1 where Empid=?",[empid],callback);
},
updateEmp:function(empid,Emp,callback){
    return  db.query("update employee1 set Empname=?,Empdept=?,Empsal=? where Empid=?",[Emp.Empname,Emp.Empdept,Emp.Empsal,empid],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++)
   {
       delarr[i]=item[i].Empid;
   }
   return db.query("delete from task where Id in (?)",[delarr],callback);
}
};
module.exports=Emp;