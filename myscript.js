//------------------PART 1 CODE BELOW HERE-----------------------
/*this function adds a task to the table on click by cloning the last row and replacing
  the text in that row with the text from the textbox 
*/
    $("#addTask").on('click', function(){
        //store textbox value in currentText variable
        var currentText = $("#textbox").val();
        //print textbox value to console
        console.log(currentText);
        //find tbody in table and store in tableBody variable
        var tableBody = $("#myTable").find("tbody");
        //find last row of table body and store in trLast variable
        var trLast = tableBody.find("tr:last");
        //clone last row of table and story in trClone variable
        var trClone = $(trLast).clone();
        //insert cloned row after last row in table body 
        $("#myTable tr:last").after(trClone);
        //replace contents of last row div class "taskText" with new div class containing textbox value
        $("#myTable tr:last .taskText").replaceWith('<div class = "taskText">'+currentText+'</div>');
    });


//this function deletes the table row when the delete button is clicked starting with the current element
    $("#myTable").on("click", "#removeTask", function(){
        $(this).closest('tr').fadeOut("slow", function(){
            $(this).closest('tr').remove();

        });
    });

//this is a function that strikes through text when the checkbox is clicked, and unstrikes when unclicked
    $("#checkbox").change(function(){
        $(this).toggleClass("strikethrough", $(this).prop("checked"));
    });
