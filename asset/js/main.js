$(document).ready(function(){
    var url = "https://zendvn-api.herokuapp.com/api/v1/price/gold";
    $.ajax({
  
      dataType: 'json',
      url: url,
      success: function(datas){
        var result = "";
        datas.data.forEach(item => {
          result += `<tr>
                 <th>${item.buy}</th>
                 <th>${item.sell}</th>
                 <th>${item.type}</th>
                 
               </tr>`;
  
        });
        $('table').append(result);
      }
    })
  })