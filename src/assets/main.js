$(function() {
  $.ajax({
    url:'https://www.codeschool.com/users/jb628.json',
    dataType: 'jsonp',
    success: function (response) {
      for (course of courses.completed) {
        $(#badges).append("<div class='course'>/<div>")
      }
    }
  });
  // your code will go here

});
