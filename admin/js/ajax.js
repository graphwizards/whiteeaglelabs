function submitSubCategory( ) {
    category = $("#category").val();
    name = $("#name").val();
    if (category == "" || name == "") {
        $(".ui.message").text("Please Fill All fields").addClass('red').removeClass('d-none');
    }
    else{
       
        $("#subcategoryForm").addClass('loading');
        setTimeout(() => {
            $("#subcategoryForm").removeClass('loading');
            $(".ui.message").text("Subcategory Uploaded Successfully").addClass('green').removeClass('d-none');
            setInterval(() => {
                location.reload();
            }, 1000);
        }, 3000);
           
    }

        
    
}