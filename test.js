var CSVdata=new Array();
$(function(){
    // This is shorthand for $(document).ready(function() { ... });
    //It esures that the code inside runs after the (Document Object Model) has fully loaded.

    $("#navLoadCSV").on('click',function(e){
        // when an element with a id "navLoadCSV" is clicked


        e.preventDefault();
        // Prevent the default behavior of the click event which would nav to a new page or URL 

        $("#myCSVFile:hidden").trigger('click');
        // trigger a click event on a hidden input with the same id "myCSVFile"
    });
});