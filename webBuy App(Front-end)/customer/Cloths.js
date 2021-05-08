$(document).ready(function(){

    $.ajax({
		url:"http://localhost:59162/api/Product/Cloths",
		method:"GET",
		success:function(res){
      let str ='';
      console.log(res);
      for(let i=0;i<res.length;i++)
      {
          str+="<tr><td>"+res[i].productId+"</td><td>"+res[i].name+"</td><td>"+res[i].quantity+"</td><td>"+res[i].unitPrice+"</td><td>"+res[i].categoryId+"</td><td><img  height="+50+" alt="+"1.jpg"+" class="+"productimage"+" src="+res[i].image+"></td><td> <button class="+"cartItemBtn"+" id="+res[i].productId+"> Add To Cart</button></td></tr>";
      }
      $("#datatable").append(str);
        }
	});
});