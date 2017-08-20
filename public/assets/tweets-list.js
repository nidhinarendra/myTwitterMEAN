$(document).ready(function(){

  $('form').on('submit', function(){

      var item = $('form input');
      var tweets = {item: item.val()};

      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: tweets,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/tweets/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
