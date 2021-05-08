$(document).ready(function(){

    $.ajax({
		url:"http://localhost:59162/api/Product/Electronics",
		method:"GET",
		success:function(res){
      let str ='';
      console.log(res);
      for(let i=0;i<res.length;i++)
      {
          str+="<tr><td>"+res[i].productId+"</td><td>"+res[i].name+"</td><td>"+res[i].quantity+"</td><td>"+res[i].unitPrice+"</td><td>"+res[i].categoryId+"</td><td><img  height="+50+" alt="+"1.jpg"+" class="+"productimage"+" src="+res[i].image+"></td><td> <button class="+"cartItemBtn"+" name="+res[i].name+"> Add To Cart</button></td></tr>";
      }
      $("#datatable").append(str);

      $('.cartItemBtn').click(function(){
        var productname = this.name; 
        //console.log(productname);
        $.ajax({
          url:"https://localhost:59162/api/Product/"+productname,
          method:"GET",
          success:function(res){
            let strr ='';
            var quantity=1;
            //console.log(res[0].name);
            //console.log(quantity);
                //strr+="<tr><td>"+res[0].name+"</td><td>"+quantity+"</td></tr>"";
                  //$("#body").hide();
                  strr+="<tr><td>"+res[0].name+"</td><td>"+quantity+"</td><td>"+res[0].unitPrice+"</td><td></td><td> <button class="+"cartItemBtn"+" id="+res[0].productId+"> Remove from Cart</button></td></tr>";
                $("#cartContent").append(strr);
              }
        });
      });
        }
	});

});