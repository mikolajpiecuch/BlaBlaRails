$(document).ready(function() {
    var placeSearch, autocomplete;
    var rightPlace;

    function initAutocomplete() {
        autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),
            {types: ['geocode']});
        autocomplete.addListener('place_changed', fillInAddress);
    }

    function fillInAddress() {
        rightPlace = autocomplete.getPlace().formatted_address;
    }

    $("#autocomplete").focusout(function() {
        var input = $("#autocomplete");
        var inputText = input.val();
        if (rightPlace != inputText)
        {
          input.val("");
          rightPlace = null;
        }
    });
});
