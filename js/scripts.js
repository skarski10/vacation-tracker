// Business Logic
function Places(year, location, landmark, notes) {
  this.yearVisited = year;
  this.locationVisited = location;
  this.landmarkVisited = landmark;
  this.notesVisited = notes;
}

// User Interface
$(function() {
  $('#places').submit(function() {
    event.preventDefault();
    var newYear = $('input#year').val();
    var newLocation = $('input#location').val();
    var newLandmark = $('input#landmark').val();
    var newNotes = $('input#notes').val();

    var newPlaces = new Places(newYear, newLocation, newLandmark, newNotes);

    $('#log').append('<li><span class="new-location">' + newPlaces.locationVisited + '</span></li>');

    $('input#year').val('');
    $('input#location').val('');
    $('input#landmark').val('');
    $('input#notes').val('');

    $(".new-location").last().click(function() {
      $("#list").show();
      $("#list h2").text(newPlaces.locationVisited);
      $(".year").text(newPlaces.yearVisited);
      $(".location").text(newPlaces.locationVisited);
      $(".landmark").text(newPlaces.landmarkVisited);
      $(".notes").text(newPlaces.notesVisited);
    });    
  });
});
