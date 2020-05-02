WebFont.load({
    google: {
        families: ['Montserrat:400,700:cyrillic']
    }
});

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();




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
        beforeLoad: function(instance, slide) {
            if (isMobile == false) {} else {

            }

        },
        afterShow: function(instance, current) {
            if (popup == '#form') {
                $(popup).find('.fancybox-close-small').addClass('popsub')
            }
        },
        afterLoad: function(instance, current) {
            $('select').styler({
                onSelectClosed: function() {
                    $(this).removeClass('empty_field');
                    $(this).attr('data-val','1')
                }
            });

        },
        afterClose: function(instance, slide) {
            $('select').styler('destroy');
            if (popup == '#form' && $('#formsend').hasClass('act')) {
                // sendForm();
            }
            if (isMobile == false) {} else {}
        },
        hideScrollbar: true,
        clickSlide: false,
        clickOutside: false,
        btnTpl: {
            smallBtn: '',

        },
    }
     popup = "#form"
            // popup = '#thanks'
            $.fancybox.open({
                src: popup,
                type: 'inline',
                opts: opnsFancy,
            });
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

     
    var $body = $('.section-main'),
        $header = $('.link--toggle');
  $(document).on('scroll', function () {
        var position = $(this).scrollTop(),
            block_position = $('.section-about').offset().top; 
            
            if (position > block_position) {
                $header.addClass('fillb');

            } else {
                $header.removeClass('fillb');
            }
    });
  $header.on('click',  function(event) {
      event.preventDefault();
      $(this).toggleClass('active');
      $('.header-menu').toggleClass('open');
  });

  $(".link--menu, .link--logo").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
           $header.removeClass('active');
            $('.header-menu').removeClass('open');
        $('body,html').animate({scrollTop: top}, 1500);
    });



    var sliderCan = new Swiper('.about-slider', {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
    delay: 3000,
  },
        navigation: {
            nextEl: '.about--next',
            prevEl: '.about--prev',
        },
        pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
        breakpoints: {
            789: {
                simulateTouch: true,
                spaceBetween: 0,
                slidesPerView: 1,
            },
        }
    });


    // $("[name=city]").autocomplete({
    //     open: function (event, ui) {
    //         $('.ui-autocomplete').off('menufocus hover mouseover mouseenter');
    //     },

    //     appendTo: "[data-show=city]",
    //     source: function (request, response) {

    //         gorodaName = request.term
    //         if (gorodaName.length == 0) {
    //             gorodaName = 'Киев'
    //         } else {
    //             gorodaName = request.term
    //         }
    //         var goroda = {
    //             "async": false,
    //             "crossDomain": true,
    //             "url": "https://api.novaposhta.ua/v2.0/json/",
    //             "method": "POST",
    //             "headers": {
    //                 "content-type": "application/json",
    //             },
    //             "processData": false,
    //             "data": JSON.stringify({
    //                 "apiKey": "bcb3d3dd36fb1edd17d2e7e6a02bca9a",
    //                 "modelName": "Address",
    //                 "calledMethod": "searchSettlements",
    //                 "methodProperties": {
    //                     "CityName": gorodaName,
    //                     "Limit": 10
    //                 }
    //             })
    //         }

    //         $.ajax(goroda).done(function (data) {
    //             response($.map(data.data[0].Addresses, function (m) {
    //                 return {
    //                     label: m.Present,
    //                     value: m.Present,
    //                     ref: m.Ref
    //                 }
    //             }));
    //         });
    //     },
    //     minLength: 0,
    //     select: function (event, ui) {
    //         val = ui.item.ref
    //          $("[name=city]").attr('data-ref', ui.item.ref)
    //     },
    // }).focus(function(){
    //         $(this).data("uiAutocomplete").search($(this).val());
    //     })


        //     $("[name=address]").autocomplete({
        //         open: function (event, ui) {
        //             $('.ui-autocomplete').off('menufocus hover mouseover mouseenter');
        //         },
        //         appendTo: "[data-show=address]",
        //         minLength: 0,
        //         source: function (request, response) {

        //     CityName = request.term
        //     if (CityName.length == 0) {
        //         CityName = 'вул'
        //     } else {
        //         CityName = request.term
        //     }
        //     var adress = {
        //     "async": false,
        //     "crossDomain": true,
        //     "url": "https://api.novaposhta.ua/v2.0/json/",
        //     "method": "POST",
        //     "headers": {
        //         "content-type": "application/json",

        //     },
        //     "processData": false,
        //     "data": JSON.stringify({
        //         "apiKey": "bcb3d3dd36fb1edd17d2e7e6a02bca9a",
        //         "modelName": "Address",
        //         "calledMethod": "searchSettlementStreets",

        //         "methodProperties": {
        //             "StreetName": CityName,
        //             "SettlementRef": $("[name=city]").attr('data-ref'),
        //             "Limit": 10
        //         }
        //     }),
        // }

        //     $.ajax(adress).done(function (data) {
        //         response($.map(data.data[0].Addresses, function (m) {
        //             // console.log(m)
        //             return {
        //                 label: m.Present,
        //             }
        //         }));
        //     });
        // },
        //         select: function (event, ui) {
        //             val = ui.item.label
        //         }


        //     })
        // })


    // }

    // function sendForm() {
    //     var th = $('form');
    //      $.ajax({
    //         type: "POST",
    //          url: "send.php",
    //         data: th.serialize(),
    //          success: function (data) {
    //             // console.log(data)
    //         }
    //     });
    // }
    var pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    // $('#offform').each(function () {
        var form = $('#offform'),
            btn = form.find('.btn--submit');
        form.find('.reqfield').addClass('empty_field');

        function checkInput() {
            form.find('.reqfield').each(function () {
                if ($(this).val() != '' || $(this).attr('data-val')) {
                    $(this).removeClass('empty_field');
                    if ($(this).hasClass('email')) {
                        mailfield = $(this)
                        if (pattern.test(mailfield.val())) {
                            mailfield.removeClass('empty_field');
                        } else {
                            mailfield.addClass('empty_field');
                        }
                    }
                } else {
                    $(this).addClass('empty_field');
                }
            });
        }

        function lightEmpty() {
            form.find('.empty_field').addClass('error');
            form.find('.empty_field').trigger('focus')
            form.find('.empty_field').siblings('p.error').fadeIn();
            // form.find('.phone.empty_field').parents('.form-row').find('.error').fadeIn();
            setTimeout(function () {
                form.find('.empty_field').removeClass('error');
                form.find('.empty_field').siblings('p.error').fadeOut()
                // form.find('.phone.empty_field').parents('.form-row').find('.error').fadeOut();
            }, 1000);
        }
        // setInterval(function () {
        //     checkInput();
        //     var sizeEmpty = form.find('.empty_field').length;
        //     // var sizePhone = form.find('.empty_phone').length;
        //     if (sizeEmpty > 0) {
        //         if (btn.hasClass('disabled')) {
        //             return false
        //         } else {
        //             btn.addClass('disabled')
        //         }
        //     } else {
        //         btn.removeClass('disabled')
        //     }

        // }, 500);
        btn.click(function () {
            event.preventDefault()
            checkInput();
            var sizeEmpty = form.find('.empty_field').length;
            // var sizePhone = form.find('.empty_phone').length;
            if (sizeEmpty > 0) {
                if (btn.hasClass('disabled')) {
                    $('body,html').animate({scrollTop:0},800)
                    lightEmpty();
                    return false
                } else {
                    btn.addClass('disabled')
                    $('body,html').animate({scrollTop:0},800)
                    lightEmpty();
                    return false
                }
            } else {
                btn.removeClass('disabled');
                form.trigger('submit')
            }
        });

        form.submit(function (event) {
                    var th = $(this);

                    $.ajax({
                        type: "POST",
                        url: "send.php",
                        data: th.serialize(),
                        success: function (data) {
                            gtag('event', 'send', { 'event_category': 'forma', 'event_action': 'send' });
                            $.fancybox.close()
                            popup = "#thanks"
                            $.fancybox.open({
                                src: popup,
                                type: 'inline',
                                opts: opnsFancy,
                            });
                            setTimeout(function () {
                                th.trigger("reset");
                                window.location.href ='https://vsbrothers.com.ua/';
                            }, 3000);
                            setTimeout(function(){$.fancybox.close()},15000)
                        }
                    });
                    event.preventDefault();
                });

    // });
    
    // $('.btn--submit').on('click', function(event) {
    //     $('#formsend').removeClass('act')
    //     $('#formsend').submit(function (event) {
    //                 var th = $(this);
                    
    //                 $.ajax({
    //                     type: "POST",
    //                     url: "send.php",
    //                     data: th.serialize(),
    //                     success: function (data) {
    //                         $.fancybox.close()
    //                         popup = "#thanks"
    //                         $.fancybox.open({
    //                             src: popup,
    //                             type: 'inline',
    //                             opts: opnsFancy,
    //                         });
    //                         setTimeout(function () {
    //                             th.trigger("reset");
    //                         }, 3000);
    //                         setTimeout(function(){$.fancybox.close()},15000)
    //                     }
    //                 });
    //                 event.preventDefault();
    //             });

    // });

//     if ($('#authorize_flag').val() != "1") {
//     $.fancybox.open({
//         src: '#authorize_form',
//         type: 'inline',
//         opts: {
//             touch: false,
//             baseClass: "modala",
//             hideScrollbar: true,
//             smallBtn: false,
//             clickOutside: false,
//             clickSlide: false,
//             buttons: [],
//         }
//     });
// }

$('[name=office]').on('change', function(event) {
    $blockChange = $(this).parents('.form-block').find('.events')
    $fieldChange = $blockChange.find('.field, .select')
    console.log($fieldChange)
    if ($(this).val()=='Нет') {
        $blockChange.addClass('disfields')
        $fieldChange.removeClass('reqfield empty_field error')
    } else {
        $blockChange.removeClass('disfields')
        $fieldChange.addClass('reqfield')
    }
});

$('[name=site]').on('change', function(event) {
    
    $blockChange = $(this).parents('.form-block').find('.events')
    if ($(this).val()=='Нет') {
        $blockChange.addClass('disfields')
    } else {
        $blockChange.removeClass('disfields')
    }
});

$('[name=dil]').on('change', function(event) {
    
    $blockChange = $(this).parents('.form-block').find('.events')
    if ($(this).val()=='Нет') {
        $blockChange.addClass('disfields')
    } else {
        $blockChange.removeClass('disfields')
    }
});

$('.phone').mask('+38 (000) 000-00-00');

    



});