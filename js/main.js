
jQuery(function($){
    $( '#tweets' ).tweet({
        username: "richstandbrook",
        count: 4,
        template: '{text}',
        loading_text: 'Just a sec …'
    });
});