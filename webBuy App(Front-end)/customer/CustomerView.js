$(document).ready(function(){
  function loadDropDown(){
    $.ajax({
		url:"http://localhost:59162/api/Product",
		method:"GET",
		success:function(res){
      let str ='';
      //console.log(res);
      for(let i=0;i<res.length;i++)
      {
          str+="<tr><td>"+res[i].productId+"</td><td>"+res[i].name+"</td><td>"+res[i].quantity+"</td><td>"+res[i].unitPrice+"</td><td>"+res[i].categoryId+"</td><td><img  height="+50+" alt="+"1.jpg"+" class="+"productimage"+" src="+res[i].image+"></td><td> <button class="+"cartItemBtn"+" name="+res[i].name+"> Add To Cart</button></td><td><button class="+"review"+" id="+res[i].productId+">Review</button></td></tr>";
      }
      $("#body").append(str);
      $('.cartItemBtn').click(function(){
        var productname = this.name; 
        //console.log(productname);
        $.ajax({
          url:"http://localhost:59162/api/Product/"+productname,
          method:"GET",
          success:function(res){
            let strr ='';
            var quantity=1;
            //console.log(res[0].name);
            //console.log(quantity);
                //strr+="<tr><td>"+res[0].name+"</td><td>"+quantity+"</td></tr>"";
                  //$("#body").hide();
                  strr+="<tr><td>"+res[0].name+"</td><td>"+quantity+"</td><td>"+res[0].unitPrice+"</td></tr>";
                $("#cartContent").append(strr);
              }
        });
      });
      //Review
      $('.review').click(function(){
        //var productid = this.id; 
        //console.log(productid);
        $('#Modal').modal('show'); 
        //
        $('#submitreview').click(function(){
          var i=$("#Reviewtext").val();
        window.location.href="CustomerView.html";
        });      
      });
      

        }
	});

}
loadDropDown();
$(document).ready(function () {
  $("#money").click(function(){
    var i=$("#money" ).val();
    if(i!=="one"){
      window.location.href="CustomerView.html";
      //console.log(i);
    }
    
  });
});
});
//drop down

$(document).ready(function () {
$("#searchbtn").click(function(){
  var str = $("#search").val();
  //console.log(str);
  $.ajax({
    url:"http://localhost:59162/api/Product/"+str,
    method:"GET",
    success:function(res){
      let strr ='';
      console.log(res);
      
          strr+="<tr><td>"+res[0].productId+"</td><td>"+res[0].name+"</td><td>"+res[0].quantity+"</td><td>"+res[0].unitPrice+"</td><td>"+res[0].categoryId+"</td><td><img  height="+50+" alt="+"1.jpg"+" class="+"productimage"+" src="+res[0].image+"></td><td> <button class="+"cartItemBtn"+" id="+res[0].productId+"> Add To Cart</button></td></tr>";
            //$("#body").hide();
          $("#body").html(strr);
        }
  });
});
});



