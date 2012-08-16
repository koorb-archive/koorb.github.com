
jQuery(function($){
    $( '#tweets' ).tweet({
        username: "richstandbrook",
        count: 3,
        template: '{text}',
        loading_text: 'Just a sec …'
    });
});