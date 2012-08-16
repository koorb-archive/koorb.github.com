
jQuery(function($){
    $( '#tweets' ).tweet({
        username: "richstandbrook",
        // avatar_size: 32,
        count: 3,
        loading_text: "loading tweets..."
    });
});