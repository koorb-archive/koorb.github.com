
jQuery(function($){
    $( '#tweets' ).tweet({
        username: "richstandbrook",
        count: 10,
        template: '{text}',
        loading_text: 'Just a sec …'
    });
});

// $("#tweets").freetile();
$(".recent").freetile();