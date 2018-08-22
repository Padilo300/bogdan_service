$( document ).ready(function(){
    // откроет меню
        function openNav(){
            $('.mobilBar').toggleClass("openNav");
            $('#nav').toggleClass('showNav');
        }

        $('.mobilBar').on('click',function(){
            openNav();
        });

        // Валидация формы
        $('#formOrder').validate({
            rules: {
                url_1: {
                    required: true,
                    minlength: 10
                    }, 
                count1: "required",
                delivery:{ required: true},
                msg: "required"
            },
            messages:{
                url_1:{
                    required: "поле не заполнено или заполнено не верно",
                    minlength: "в поле должно быть минимум 10 символов",
                },
                count1: "Укажите кол-во товара",
                delivery: "Выберите способ доставки"
            }
        });

        // переключение галочки на урну
        $('button.check').on('click', function(){
            var formID = $(this).attr('data-form-id')       ; // Узнаем в наш блок по родительскому id
            $("#"+formID+" input").addClass('ready')        ; // Переключаем класс на input  
            $(this).hide()                                  ; // Скрыть галку
            $(this).next().show()                           ; // Показать корзину
        });

        // сброс полей и преключение с урны на галочку
        $('button.trash').on('click', function(){
            formID = $(this).attr('data-form-id')           ; // Узнаем в наш блок по родительскому id
            $("#"+formID+" input").toggleClass('ready')     ; // Переключаем класс на input
            $("#"+formID+" input").val("")                  ; // обнуляем поля
            $(this).hide()                                  ; // скрываем корзину
            $(this).prev().show()                           ; // показываем галочу
        });

        // добвать еще товар
        $('#addProduct').on('click',function(){
            var row = $('.orderHide');
            var a   = 0;
                a   = $.each(row, function(){});
                a   = a.length;
            if(a == 0){
                $('#addProduct').hide()         ;
            }
            $.each(row, function(){
                $(this).removeClass('hide')         ;
                $(this).removeClass('orderHide')    ;
                return false                        ;
            });

        });
        

});
