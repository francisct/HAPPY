

$('p:not(:has(*))').each(function(i){
    console.log($(this).html());
})