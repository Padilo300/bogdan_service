$( document ).ready(function(){
    // откроет меню
        function openNav(){
            $('.mobilBar').toggleClass("openNav");
            $('#nav').toggleClass('showNav');
        }

        $('.mobilBar').on('click',function(){
            openNav();
        });

});
