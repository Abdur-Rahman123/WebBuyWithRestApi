$(document).ready(function(){
    $("form").submit(function(e){
         e.preventDefault();
         $("#emailErr").html('');
         $("#passwordErr").html('');
         let User = {
              email:$("#email").val(),
             password:$("#password").val()
         }
         let res=validate(User);
         //console.log( Object.keys(res).length);
         if(Object.keys(res).length==0)
         {
             $.ajax({
                 url:"http://localhost:59162/api/login",
                 method: 'POST',
                 data:{
                     "email":User.email,
                     "Password":User.password
                 },
                 success: function(res) {
                     console.log("success");
                    if(res!=undefined)
                    {
                        document.cookie = "rahman";
                        window.location.href = "CustomerView.html";
                        
                    }
                    else
                    {
                        alert('invalid username or password');
                    }
                 }
             });
         }
         else
         {
             $("#emailErr").html(res.emailErr);
             $("#passwordErr").html(res.passwordErr);
             console.log("error invalid request");
         }
     });
 });
    
 
 function validate(User)
 {
     let errorLog =  {};
     for (let key in User) {
         
         if(User[key]=="")
         {
             errorLog[key+"Err"]=key+" can not be empty";
         }
 
       }
       return errorLog;
 }