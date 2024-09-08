$(document).keydown(function(event) {
    // Control + F kombinasiyası
    if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();  

        $('#navbar').addClass('active');
        $('#search-input').focus();

        $('#search-input').val('');
    }
});

$(document).keydown(function(event) {
    if (event.key === 'Escape') {
        $('#navbar').removeClass('active');
    }
});
