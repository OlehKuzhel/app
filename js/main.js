WebFont.load({
    google: {
        families: ['Montserrat:400,500,600,700:cyrillic']
    }
});

// var wow = new WOW({
//     boxClass: 'wow', // animated element css class (default is wow)
//     animateClass: 'animated', // animation css class (default is animated)
//     offset: 0, // distance to the element when triggering the animation (default is 0)
//     mobile: true, // trigger animations on mobile devices (default is true)
//     live: true, // act on asynchronously loaded content (default is true)
//     callback: function(box) {
//         // the callback is fired every time an animation is started
//         // the argument that is passed in is the DOM node being animated
//     },
//     scrollContainer: null, // optional scroll container selector, otherwise use window,
//     resetAnimation: true, // reset animation on end (default is true)
// });
// wow.init();




// var navbar =  $('.navigation');  // navigation block
// var wrapper = $('.delivery-social');        // may be: navbar.parent();

// $(window).scroll(function(){
//     var nsc = $(document).scrollTop();
//     var bp1 = wrapper.offset().top;
//     var bp2 = bp1 + wrapper.outerHeight()-$(window).height();

//     console.log(bp1 , nsc)
    
//     // if (nsc>bp1) {  navbar.css('position','fixed'); }
//     // else { navbar.css('position','absolute'); }
//     // if (nsc>bp2) { navbar.css('top', bp2-nsc); }
//     // else { navbar.css('top', '0'); }
// });



$(document).ready(function($) {



    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    if (isMobile == true) {
        
    } else {
       
    }

   

    opnsFancy = {
        touch: false,
        baseClass: "modal",
        hideScrollbar: true,
        // btnTpl: {
        //     smallBtn: '',

        // },
        btnTpl: {
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" >' +
                '<svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">' +
  '<path d="M17.57-.107l3.536 3.535L3.43 21.106l-3.536-3.535z"/>' +
  '<g>' +
   '<path d="M3.491-.013L-.013 3.49l17.521 17.521 3.505-3.504z"/>' +
  '</g>' +
'</svg>' +
                "</button>",

        },
    }
    $('body').on('click', '.fancybtn', function(event) {
        popup = $(this).data('popup')
            // popup = '#thanks'
            $.fancybox.open({
                src: popup,
                type: 'inline',
                opts: opnsFancy,
            });
        return false
    });

    if ($('body').hasClass('not-login')) {
        // popup = '#login'
        //     // popup = '#thanks'
        //     $.fancybox.open({
        //         src: popup,
        //         type: 'inline',
        //         opts: opnsFancy,
        //     });
    }

    $('.link--showpass').click(function(){
        $passField = $(this).parent().find('input')
            var type = $passField.attr('type') == "text" ? "password" : 'text';
            $(this).toggleClass('active');
            $passField.prop('type', type);
        });

     
  
    // $('.dropdown').on('click', function(event) {
    //     event.preventDefault();
    //     /* Act on the event */
    //     $('.header-menu__btn').not($(this).parent()).removeClass('active')
    //     $(this).parent().toggleClass('active')
    //     // $(this).parent().siblings().find('.header-dropdown, .header-menu__admin').hide()
    //     // $(this).parent().find('.header-dropdown').toggle()
    // });

    $('.dropdown-admin').on('click', function(event) {
        event.preventDefault();
        $('.header-menu__btn').not($(this).parent()).removeClass('active')
        $(this).parent().toggleClass('active')
    });

    $(document).mouseup(function(e) {
        var container = $(".header-menu");
        if (container.has(e.target).length === 0) {
            // container.removeClass('active')
            $('.header-menu__btn').removeClass('active')
        }
    });

    




    $.fn.datepicker.language['ru'] =  {
    days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
    daysMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    today: 'Сегодня',
    clear: 'Очистить',
    dateFormat: 'dd.mm.yyyy',
    timeFormat: 'hh:ii',
    firstDay: 1
};

  

  $('.date').datepicker({
      minDate: new Date(),
      language: 'ru',
      offset: 0,
      minView: 'days',
      view: 'days'
      // showOtherMonths: false,
  })


$('body').on('click', '.link--open', function(event) {
    event.preventDefault();
    $(this).toggleClass('active');

    $tr = $(this).parents('tr')
    $tr.nextUntil('.view').children('td').toggle();
    if ($(this).hasClass('active')) {
        // $tr.nextUntil('.view').find('select').styler('destroy');
        // $tr.nextUntil('.view').find('select').styler();
    } else {
        // $tr.nextUntil('.view').find('select').styler('destroy');
    }
    
});

// $('select').styler()
$('body').on('click', '.editing', function(event) {
    event.preventDefault();
    $('tr').removeClass('edit')
    $trEdit = $(this).parents('tr')
    $trEdit.addClass('edit')
    $trEdit.find('.field--edit:not(:disabled, .readonly)').eq(0).focus()
});
$('table').click(function(e) {
        if ($('tr').hasClass('edit')) {
            var $trCheck = $("body tr.edit, .modal");
            if ($trCheck.has(e.target).length === 0) {
                popup = '#wrong'
                $.fancybox.open({
                    src: popup,
                    type: 'inline',
                    opts: opnsFancy,
                });
            }
        }
        
    });

$(window).bind("beforeunload", function() { 
    // if ($('tr').hasClass('edit')) {
    //     return confirm("Вы не сохранили внесенные изменения.");
    // }

})

$('body').on('focus', '.field--edit', function(event) {
    event.preventDefault();
    // $('tr').removeClass('edit')
    $trAll = $(this).parents('tbody').find('tr').not($(this).parents('tr'))
    // $trAll.find('.field').attr('readonly','readonly')
    $trAll.addClass('close')
    $trField = $(this).parents('tr')

    // if ($trField.hasClass('edit')) {
        $trField.addClass('edit')
    // }
    // else if (){

    // }
    // else {
        // popup = '#wrong'
        // $.fancybox.open({
        //     src: popup,
        //     type: 'inline',
        //     opts: opnsFancy,
        // });
    // }
    
    
});

// $('body').on('blur', '.field', function(event) {
//     event.preventDefault();
//     // $('tr').removeClass('edit close')
//     // $trAll = $(this).parents('tbody').find('tr').not($(this).parents('tr'))
//     // $trAll.addClass('close')
//     $trField = $(this).parents('tr')
//     if (!$trField.hasClass('edit')) {

//     }
// });


$('body').on('click', '.disable', function(event) {
    event.preventDefault();
    $.fancybox.close()
    $('tr').removeClass('close')
    $trEdit = $('tr.edit')
    $('.btn--pick').removeClass('active')
    $trEdit.removeClass('edit red green forestgreen')
    $trEdit.find('.field--edit:focus').blur()
});

$('body').on('click', '.btn--pick', function(event) {
    event.preventDefault();
    $bgP = $(this).data('bg')
    $trBg = $(this).parents('tr')
    $trBg.removeClass('red gray green forestgreen')
    $trBg.addClass($bgP)
    // $trBg.attr('data-savebg', $bgP)
    $('.btn--pick').removeClass('active')
    $(this).addClass('active')
});

// сохранение
    
    $('body').on('click', '.save', function(event) {
        event.preventDefault();
        var _this = $(this);
        var url = $(this).parents('tr').find('form').data('url');
        $trSave = $('tr.edit')
        // $trBg.attr('data-savebg', $bgP)
        $datanSelect = $trSave.find('.field--edit:not(.select-input)').serialize()
        $dataSelect = $trSave.find('.field--edit.select-input')
        $selectArr = []
        $dataSelect.each(function(index, el) {
            value = $(el).attr('name')+'='+$(el).attr('data-valuefield')+'&'
            $selectArr.push(value)
        });
        $data =  $selectArr.join('') + $datanSelect
        // console.log($data)
        $.ajax({
            type: "POST",
            url: url, // впишешь путь
            data: $data,
            success: function(data) {
                // console.log('ok');
                $('tr').removeClass('close')
                $trSave.removeClass('edit')
                $.fancybox.close()
                if(_this.parents('tr').find('form').data('table_name')=="users_table")
                {
                    var _this_table = $(_this).parents('table');
                    $(_this).parents('tr').remove();

                    $(_this_table).find('tbody').prepend(data);
                }
            }
        });

    });



// в архив

$('body').on('click', '.btn--archive', function(event) {
        event.preventDefault();
        var url= $(this).data('url');
        $trSave = $(this).parents('tr')
        $data = $trSave.find('.field').serialize()
        $.ajax({
            type: "GET",
            url: url, // впишешь путь
            data: $data,
            success: function(data) {
                $trSave.remove()
                console.log('заархивировано')

            }
        });

    });

 $('body').on('click', '.btn--backarсhive', function(event) {
        event.preventDefault();
        var url= $(this).data('url');
        $trSave = $(this).parents('tr')
        $data = $trSave.find('.field').serialize()
        $.ajax({
            type: "GET",
            url: url, // впишешь путь
            data: $data,
            success: function(data) {
                $trSave.remove()
                console.log('разархивировано')

            }
        });

    });

$('body').on('click', '.custom-select-wrapper', function(event) {
    $('.custom-select-wrapper').not(this).find('.custom-select').removeClass('open')
    $(this).find('.custom-select').toggleClass('open');
});
$('body').on('click', '.custom-option', function(event) {
    if (!$(this).hasClass('selected')) {
          $(this).parent().find('.selected').removeClass('selected')
          $(this).addClass('selected')
          $(this).closest('.custom-select').find('.custom-select__trigger input').val($(this).text()).attr('data-valuefield',$(this).data('value'))
    }
});
$(window).on('click',  function(event) {
    $select = $('.custom-select')
    if ($select.has(event.target).length === 0) {
        $select.removeClass('open');
    }
});

$('.select-input').each(function(index, el) {
    if ($(el).val().length > 0) {
        $thisVal = $(el).data('valuefield')
        // console.log($thisVal)
        $select = $(el).parents('.custom-select-wrapper').find('.custom-options')
        $selected = $select.find('[data-value='+$thisVal+']')
        $selected.addClass('selected')
        $selectedText = $selected.text()
        $(el).parent().find('.custom-select__trigger span').text($selectedText)
    }
    
});

// if ($('.select-input').val().length) {
//     $thisVal = $('.select-input').val()
//     $select = $('.select-input').parent().find('.custom-select-wrapper')
//     console.log($thisVal)
//     // $selected = $select.find('[data-value='+$thisVal+']')
//     // $selected.addClass('selected')
//     // $selectedText = $selected.text()
//     // $('.custom-select__trigger span').text($selectedText)
// }


$('.form-add').submit(function(event) {
        var _form = $(this);
        var th = _form.serialize();
        var form_url = _form.attr('action');
        $.ajax({
            type: "POST",
            url: form_url,
            data: th,
            success: function(data) {
                    _form.trigger("reset");
                    // $('select').styler('destroy');
                    $('.table tbody').prepend(data);
                    $( ".date" ).datepicker("refresh");
                    // $('select').styler();
                    $.fancybox.close();
            }
        });
        event.preventDefault();
    });

$('.content-top__container').submit(function(event) {
        var _form = $(this);
        var th = _form.serialize();
        var form_url = _form.attr('action');
        if (_form.hasClass('filtered')) {
            // убрать фильтр по номеру контейнера
            $.ajax({
                type: "POST",
                url: 'пропишешь путь для удаления',
                data: th,
                success: function(data) {
                        _form.removeClass('filtered')
                        // не знаю что тебе в data приходит, пропишешь свое
                        $('.table tbody').empty()
                        $('.table tbody').prepend(data);
                        // console.log(data)
                }
            });
        } else {

            //поиск по номеру контейнера

            $.ajax({
            type: "POST",
            url: 'http://44.j2landing.com/admin/containers/find_container',
            data: th,
            success: function(data) {
                if (data == 'значение если нет номера впишешь') {
                    $.fancybox.open({
                        src: '#noid',
                        type: 'inline',
                        opts: opnsFancy,
                    });
                } else {
                    _form.addClass('filtered')
                    // не знаю что тебе в data приходит, пропишешь свое
                    $('.table tbody').empty()
                    $('.table tbody').prepend(data);
                }
            }
        });
        }
        
        event.preventDefault();
    });
// поиск по вину
$('.content-top__vin').submit(function(event) {
        var _form = $(this);
        var th = _form.serialize();
        var form_url = _form.attr('action');
        if (_form.hasClass('filtered')) {
            // убрать фильтр по вину
            $.ajax({
                type: "POST",
                url: 'пропишешь путь для удаления',
                data: th,
                success: function(data) {
                        _form.removeClass('filtered')
                        // не знаю что тебе в data приходит, пропишешь свое
                        $('.table tbody').empty()
                        $('.table tbody').prepend(data);
                        // console.log(data)
                }
            });
        } else {

            //поиск по вину

            $.ajax({
            type: "POST",
            url: 'http://44.j2landing.com/admin/containers/find_vin',
            data: th,
            success: function(data) {
                if (data == 'значение если нет номера впишешь') {
                    $.fancybox.open({
                        src: '#noid',
                        type: 'inline',
                        opts: opnsFancy,
                    });
                } else {
                    _form.addClass('filtered')
                    // не знаю что тебе в data приходит, пропишешь свое
                    $('.table tbody').empty()
                    $('.table tbody').prepend(data);
                }
                    
            }
        });
        }
        
        event.preventDefault();
    });


});