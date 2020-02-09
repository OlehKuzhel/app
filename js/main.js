WebFont.load({
    google: {
        families: ['Montserrat:400,500,600,700:cyrillic']
    }
});




$(document).ready(function($) {

    var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    if (isMobile == true) {


        var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

        if (orientation != "landscape-primary") {
            console.log("Переверните телефон");
            $('.orientation').addClass('active')
        } else if (orientation === undefined) {
            console.log("The orientation API isn't supported in this browser :(");
        } else {
            $('.orientation').removeClass('active')
        }
        $(window).resize(function(event) {
            window.location.reload()
        });

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
        afterClose: function() {
            flag = false
        }
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

    $('.link--showpass').click(function() {
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




    $.fn.datepicker.language['ru'] = {
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        today: 'Сегодня',
        clear: 'Очистить',
        dateFormat: 'dd.mm.yyyy',
        timeFormat: 'hh:ii',
        firstDay: 1
    };



    var datepickerDefault = $('.date').datepicker({
        minDate: new Date(),
        language: 'ru',
        offset: 0,
        minView: 'days',
        view: 'days',
        onSelect(formattedDate, date, inst) {
            
            if ($(inst.el).attr('name') == 'release_ordered_date') {
                // console.log(inst.el)
                $inputs = $(inst.el).parents('tr').nextUntil('.view').find('[name=release_ordered]')
                $.each($inputs, function(index, el) {
                    console.log(el)
                    $(el).attr('data-valuefield', '1')
                    $(el).val('Да')
                    $customoption = $(el).parents('.custom-select-wrapper').find('.custom-option')
                    $customoption.removeClass('selected')
                    $customoption.eq(0).addClass('selected')
                });
            }
        }
            // showOtherMonths: false,
    })

    $('body').on('change', '.doc_kiev', function(event) {
        event.preventDefault();
        $val = parseInt($(this).val())
        
        $inputs = $(this).parents('tr').nextUntil('.view').find('[name=documents_kiev]')
        
        if ($val == $inputs.length) {
                $.each($inputs, function(index, el) {
                    $(el).attr('data-valuefield', '1')
                    $(el).val('Да')
                    $customoption = $(el).parents('.custom-select-wrapper').find('.custom-option')
                    $customoption.removeClass('selected')
                    $customoption.eq(0).addClass('selected')
                });
             } else {
                $.each($inputs, function(index, el) {
                    $(el).attr('data-valuefield', '0')
                    $(el).val('Нет')
                    $customoption = $(el).parents('.custom-select-wrapper').find('.custom-option')
                    $customoption.removeClass('selected')
                    $customoption.eq(1).addClass('selected')
                });
             }
       

        /* Act on the event */
    });

    $('body').on('change', '.userid', function(event) {
        event.preventDefault();
        $valueField = $(this).attr('data-valuefield')
        $valueThis = $(this).val()
        
        $inputs = $(this).parents('tr').nextUntil('.view').find('[name=user_id]')
        $(this).parents('td').find('.useridtop').val($valueThis)
        $.each($inputs, function(index, el) {
            $(el).attr('data-valuefield', $valueField)
            $(el).attr('value', $valueThis)
            $customoption = $(el).parents('.custom-select-wrapper').find('.custom-option')
            $customoption.removeClass('selected')
            $(el).parents('.custom-select-wrapper').find('[data-value='+$valueField+']').addClass('selected')
        });
    });

    $('body').on('change', '[name=user_id]:not(.userid)', function(event) {
        event.preventDefault();
        $inputTop = $(this).parents('tr').prevAll('.view').eq(0)
        $inputs = $inputTop.nextUntil('.view').find('[name=user_id]');
        $oldVal = $inputTop.find('.useridtop')
        values = []
        $.each($inputs, function(index, el) {
            values.push($(el).val())
        })
        test = values.filter(function (elem, pos, arr) {
            return pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem);
        });
        if (test.length <= 2) {
            $oldVal.val('Разные')
        } else {
            $oldVal.val(Unique(values).join(' / '))
        }
    });

    function Unique(A)
{
    var n = A.length, k = 0, B = [];
    for (var i = 0; i < n; i++) 
     { var j = 0;
       while (j < k && B[j] !== A[ i ]) j++;
       if (j == k) B[k++] = A[ i ];
     }
    return B;
}




    $('body').on('change', '.doc_odessa', function(event) {
        event.preventDefault();
        $val = parseInt($(this).val())
        
        $inputs = $(this).parents('tr').nextUntil('.view').find('[name=documents_odessa]')
        
        if ($val == $inputs.length) {
                $.each($inputs, function(index, el) {
                    $(el).attr('data-valuefield', '1')
                    $(el).val('Да')
                    $customoption = $(el).parents('.custom-select-wrapper').find('.custom-option')
                    $customoption.removeClass('selected')
                    $customoption.eq(0).addClass('selected')
                });
             } else {
                $.each($inputs, function(index, el) {
                    $(el).attr('data-valuefield', '0')
                    $(el).val('Нет')
                    $customoption = $(el).parents('.custom-select-wrapper').find('.custom-option')
                    $customoption.removeClass('selected')
                    $customoption.eq(1).addClass('selected')
                });
             }
       

        /* Act on the event */
    });

    var datepicker = $('.datefilter').datepicker({
        minDate: "",
        language: 'ru',
        offset: 0,
        autoClose: true,
        minView: 'days',
        view: 'days',
        inline: true,
        multipleDates: true,
        multipleDatesSeparator: '-',
        range: true,
        // showOtherMonths: false,
        onSelect(formattedDate, date, inst) {
            console.log(date)
            $(inst.el).attr('data-startdate', '')
            $(inst.el).attr('data-enddate', '')
            $(inst.el).attr('data-startdate', date[0])
            $(inst.el).attr('data-enddate', date[1])
        }
    })

    function reverseR(s) {
        var arr = s.split('.');
        return arr[2] + ', ' + arr[1] + ', ' + arr[0];
    };
    $originalTr = $('tbody')
    $filteredTr = $('tbody').find('tr')

    $indexDate = $('.table-date').index() + 1
    $indexExpeditor = $('.table-expeditor').index() + 1
    $indexRelZ = $('.table-rel').index() + 1
    $indexKiev = $('.table-kiev').index() + 1
    $indexBack = $('.table-back').index() + 1

    // $('table').attr('data-entrance', $('tbody').html())
    $('table').attr('data-exit', '')
        // var paramsurl = window.location.search.replace('?','').split('&').reduce(
        //     function(p,e){
        //         var a = e.split('=');
        //         p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
        //         return p;
        //     },
        //     {}
        // );
    function paramsurl(key) {
        var p = window.location.search;
        p = p.match(new RegExp(key + '=([^&=]+)'));
        return p ? decodeURIComponent(p[1]) : false;
    }


    var updateQueryStringParam = function(key, value) {

        var baseUrl = [location.protocol, '//', location.host, location.pathname].join(''),
            urlQueryString = document.location.search,
            newParam = key + '=' + value,
            params = '?' + newParam;

        // If the "search" string exists, then build params from it
        if (urlQueryString) {
            var updateRegex = new RegExp('([\?&])' + key + '[^&]*');
            var removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');

            if (typeof value == 'undefined' || value == null || value == '') { // Remove param if value is empty
                params = urlQueryString.replace(removeRegex, "$1");
                params = params.replace(/[&;]$/, "");

            } else if (urlQueryString.match(updateRegex) !== null) { // If param exists already, update it
                params = urlQueryString.replace(updateRegex, "$1" + newParam);

            } else { // Otherwise, add it to end of query string
                params = urlQueryString + '&' + newParam;
            }
        }

        // no parameter was set so we don't need the question mark
        params = params == '?' ? '' : params;

        window.history.replaceState({}, "", baseUrl + params);
    };

    updateQueryStringParam('relz', '')
    updateQueryStringParam('expeditorname', '')
    updateQueryStringParam('relp', '')
    updateQueryStringParam('dock', '')
    updateQueryStringParam('sort', '')
    updateQueryStringParam('startdate', '')
    updateQueryStringParam('enddate', '')

    // updateQueryStringParam('oleh1', 'yes1')

    // filterTable()

    function resetforFilter() {
        $('tbody').addClass('load')
        $.ajax({
            type: "POST",
            cache: false,
            url: 'containers/reset',
            // data: th,
            success: function(data) {
                // не знаю что тебе в data приходит, пропишешь свое
                $('.table tbody').empty()
                $('.table tbody').prepend(data);
                $(".date").datepicker("refresh");
                // console.log(data)
                filterTable()
                $('tbody').removeClass('load')
            }
        });
    }


    function filterTable() {
        if (!paramsurl('sort') == '') {
            $activeLink = paramsurl('sort')
            $datesFormat = []
            $dates = $('.view').find('td:nth-child(' + $indexDate + ') input.date')
            if (!$activeLink == '') {
                $('.link--empty').addClass('active')
                $.each($dates, function(index, val) {
                    $str = {
                        'view': $('.view').eq(index),
                        'fold': $('.view').eq(index).nextUntil('.view'),
                        'date': reverseR($(val).val())
                    }
                    $datesFormat.push($str)
                });
                if (paramsurl('sort') == 'asc') {

                    $datesFormat.sort(function(a, b) {
                        return new Date(b.date) - new Date(a.date);
                    });
                } else {
                    $datesFormat.sort(function(a, b) {
                        return new Date(a.date) - new Date(b.date);
                    });
                }
                $.each($datesFormat, function(index, val) {
                    /* iterate through array or object */
                    $('tbody').append(val.view)
                    $('tbody').append(val.fold)
                });
            }

        }

        if (!paramsurl('startdate') == '') {
            $activeInput = paramsurl('startdate')
            $endInput = paramsurl('enddate')
            $datesFormat = []
            $dates = $('.view').find('td:nth-child(' + $indexDate + ') input.date')

            if ($activeInput != '') {
                $('.link--empty').addClass('active')
                let startDate = Date.parse($activeInput)

                $('.link--open').removeClass('active')

                if (!paramsurl('enddate') == '') {
                    let endDate = Date.parse($endInput)
                    for (let i = startDate; i <= endDate; i = i + 24 * 60 * 60 * 1000) {
                        $.each($dates, function(index, val) {
                            if ($(val).val() == moment(i).format('DD.MM.YYYY')) {
                                $(val).parents('.view').addClass('ed1').show()
                            } else {
                                $(val).parents('.view').nextUntil('.view').remove()
                            }
                        });

                    }
                    $('tbody').find('.view').not('.ed1').remove()
                } else {
                    console.log('asdasdsadsda')
                    $.each($dates, function(index, val) {
                        if ($(val).val() == moment(startDate).format('DD.MM.YYYY')) {
                            $(val).parents('.view').addClass('sd1').show()
                        } else {
                            $(val).parents('.view').nextUntil('.view').remove()
                        }
                    });
                    $('tbody').find('.view').not('.sd1').remove()
                }

            }

            // $(this).parents('.filter').removeClass('open')
            // $(this).parents('.filter').find('.link--openfilter').removeClass('active')
        }

        if (!paramsurl('expeditorname') == '') {

            console.log(paramsurl('expeditorname'))
                // console.log(paramsurl['expeditorname'])
            $expName = paramsurl('expeditorname');
            $activeLink = $('.table-expeditor').find('.filter').find('.filter-content .link.active')
            $expeditors = $('tbody').find('.view').find('td:nth-child(' + $indexExpeditor + ') input[name=user_id]')

            $activeValue = paramsurl('expeditorname');
            $('.link--empty').addClass('active')
            $('.link--open').removeClass('active')
            $.each($expeditors, function(index, val) {
                if ($(val).val() == $activeValue) {
                    $(val).parents('.view').show()
                } else {
                    $(val).parents('.view').nextUntil('.view').remove()
                    $(val).parents('.view').remove()
                }
            });
        }

        if (!paramsurl('relz') == '') {
            $activeLink = $(this).parents('.filter').find('.filter-content .link.active')
            $activeValue = paramsurl('relz')
            $('.link--empty').addClass('active')
            $releaseOrdered = $('tbody').find('td:nth-child(' + $indexRelZ + ') input[name=release_ordered]')
                // $views = $releaseReceived.parents('tr').prevAll(".view")
            console.log($releaseOrdered)
            $('.link--open').removeClass('active')

            $.each($releaseOrdered, function(index, val) {
                console.log()
                if ($(val).attr('data-valuefield') == $activeValue) {
                    $(val).parents('tr').children('td').show()
                    $(val).parents('tr').prevAll(".view").first().addClass('z1').find('.link--open').addClass('active')

                } else {
                    $(val).parents('tr').remove()
                }
            });
            $('tbody').find('.view').not('.z1').remove()

            // $originalTr = $('tbody').html()
        }
        if (!paramsurl('relp') == '') {

            $activeLink = $(this).parents('.filter').find('.filter-content .link.active')
            $activeValue = paramsurl('relp')
            $('.link--empty').addClass('active')
            $releaseReceived = $('tbody').find('td:nth-child(' + $indexBack + ') input[name=release_received]')
                // $views = $releaseReceived.parents('tr').prevAll(".view")
            $('.link--open').removeClass('active')

            $.each($releaseReceived, function(index, val) {
                if ($(val).val() == '') {
                    $(val).parents('tr').children('td').show()
                    $(val).parents('tr').prevAll(".view").first().addClass('p1').find('.link--open').addClass('active')

                } else {
                    $(val).parents('tr').remove()
                }
            });
            $('tbody').find('.view').not('.p1').remove()

            // $originalTr = $('tbody').html()
        }
        if (!paramsurl('dock') == '') {
            $activeLink = $(this).parents('.filter').find('.filter-content .link.active')
            $activeValue = paramsurl('dock')
            $('.link--empty').addClass('active')
            $docinKiev = $('tbody').find('td:nth-child(' + $indexKiev + ') input[name=documents_kiev]')
            $('.link--open').removeClass('active')

            $.each($docinKiev, function(index, val) {
                if ($(val).attr('data-valuefield') == $activeValue) {
                    $(val).parents('tr').children('td').show()
                    $(val).parents('tr').prevAll(".view").first().addClass('k1').find('.link--open').addClass('active')

                } else {
                    $(val).parents('tr').remove()
                }
            });
            $('tbody').find('.view').not('.k1').remove()

            // $originalTr = $('tbody').html()
        }

    }

    $('.filter-relz').on('click', '.btn--filtered', function(event) {
        event.preventDefault();

        $activeLink = $(this).parents('.filter').find('.filter-content .link.active')
        $activeValue = $activeLink.attr('data-filter')
        if ($activeLink.length) {
            $('.link--empty').addClass('active')
            $('.link--open').removeClass('active')
            updateQueryStringParam('relp', $activeValue)
            resetforFilter()
        } else {
            updateQueryStringParam('relp', '')
        }
        $(this).parents('.filter').removeClass('open')
        $(this).parents('.filter').find('.link--openfilter').removeClass('active')
    })


    $('.filter-dock').on('click', '.btn--filtered', function(event) {
        event.preventDefault();
        $activeLink = $(this).parents('.filter').find('.filter-content .link.active')
        $activeValue = $activeLink.attr('data-filter')

        if ($activeLink.length) {
            $('.link--empty').addClass('active')
            $('.link--open').removeClass('active')
            updateQueryStringParam('dock', $activeValue)
            resetforFilter()
        } else {
            updateQueryStringParam('dock', '')
        }
        $(this).parents('.filter').removeClass('open')
        $(this).parents('.filter').find('.link--openfilter').removeClass('active')
    })
    $('.filter-zakaz').on('click', '.btn--filtered', function(event) {
        event.preventDefault();
        $activeLink = $(this).parents('.filter').find('.filter-content .link.active')
        $activeValue = $activeLink.attr('data-filter')
        if ($activeLink.length) {
            $('.link--empty').addClass('active')
            $('.link--open').removeClass('active')
            updateQueryStringParam('relz', $activeValue)
            resetforFilter()
        } else {
            updateQueryStringParam('relz', '')
        }
        $(this).parents('.filter').removeClass('open')
        $(this).parents('.filter').find('.link--openfilter').removeClass('active')
    })


    $('.filter-expeditor').on('click', '.btn--filtered', function(event) {
        event.preventDefault();
        $activeLink = $(this).parents('.filter').find('.filter-content .link.active')
            // $expeditors = $('.view').find('td:nth-child('+$indexExpeditor+') input[name=user_id]')
        $activeValue = $activeLink.attr('data-filter')
        if ($activeLink.length) {
            $('.link--empty').addClass('active')
            $('.link--open').removeClass('active')
            updateQueryStringParam('expeditorname', $activeValue)
            resetforFilter()
        } else {
            updateQueryStringParam('expeditorname', '')
        }
        $(this).parents('.filter').removeClass('open')
        $(this).parents('.filter').find('.link--openfilter').removeClass('active')
    })

    $('.filter-dateex').on('click', '.btn--filtered', function(event) {
        event.preventDefault();
        $activeLink = $(this).parents('.filter').find('.filter-content .link.active')
        $activeInput = $(this).parents('.filter').find('.filter-content .datefilter')

        $dates = $('.view').find('td:nth-child(' + $indexDate + ') input.date')
        if ($activeLink.length) {
            $('.link--empty').addClass('active')
            updateQueryStringParam('sort', $activeLink.attr('data-filter'))
            resetforFilter()
        } else {
            updateQueryStringParam('sort', '')
        }
        if ($activeInput.val() != '') {
            $('.link--empty').addClass('active')
            $('.link--open').removeClass('active')
            updateQueryStringParam('startdate', $activeInput.attr('data-startdate'))
            updateQueryStringParam('enddate', $activeInput.attr('data-enddate'))
            resetforFilter()
        } else {
            updateQueryStringParam('startdate', '')
            updateQueryStringParam('enddate', '')
        }

        $(this).parents('.filter').removeClass('open')
        $(this).parents('.filter').find('.link--openfilter').removeClass('active')

        /* Act on the event */
    });

    $('.link--empty').on('click', function(event) {
        event.preventDefault();
        $('tbody').addClass('load')
            // $('tbody').append($originalTr)
        $(this).removeClass('active')
        $('.link--filter').removeClass('active')
        $('.view').show();
        updateQueryStringParam('relz', '')
        updateQueryStringParam('expeditorname', '')
        updateQueryStringParam('relp', '')
        updateQueryStringParam('dock', '')
        updateQueryStringParam('sort', '')
        updateQueryStringParam('startdate', '')
        updateQueryStringParam('enddate', '')
        $.ajax({
            type: "POST",
            cache: false,
            url: 'containers/reset',
            // data: th,
            success: function(data) {

                $('.table tbody').empty()
                $('.table tbody').prepend(data);
                $('tbody').removeClass('load')
                $(".date").datepicker("refresh");
                // console.log(data)
            }
        });
    });




    $('.link--filter').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        // $()

        $(this).toggleClass('active').siblings().removeClass('active');
    });


    $('body').on('click', '.link--open', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');

        $tr = $(this).parents('tr')
        if ($(this).hasClass('active')) {
            // $tr.nextUntil('.view').find('select').styler('destroy');
            // $tr.nextUntil('.view').find('select').styler();
            $tr.nextUntil('.view').children('td').show();
        } else {
            $tr.nextUntil('.view').children('td').hide();
            // $tr.nextUntil('.view').find('select').styler('destroy');
        }

    });

    // $('select').styler()
    $('body').on('click', '.editing', function(event) {
        event.preventDefault();
        $('tr').removeClass('edit')
        $('tr').not($(this).parents('tr')).addClass('close')
        $trEdit = $(this).parents('tr')
        $trEdit.addClass('edit')
            // $trEdit.find('.field--edit:not(:disabled, .readonly)').eq(0).focus()
    });

    $('body').on('keypress', function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13') {
            $('input').blur()
            if ($('tr').hasClass('edit')) {
                var $trCheck = $("body tr.edit, .modal, .filter, .link--open");
                // if ($trCheck.has(event.target).length === 0) {
                    popup = '#wrong'
                    $.fancybox.open({
                        src: popup,
                        type: 'inline',
                        opts: opnsFancy,
                    });
                // }
            }
        }
        event.stopPropagation();
    });

    $( 'body' ).on( "dblclick", 'tbody tr', function(event) {
        // console.log(event)
        $('tr').removeClass('edit')
        $('tr').not($(this)).addClass('close')
        $trEdit = $(this)
        $trEdit.addClass('edit')
    })

    var flag = false;

    $('table').click(function(e) {
       
        // e.preventDefault()
        if ($('tr:not(.newblock)').hasClass('edit')) {
            var $trCheck = $("body tr.edit, .modal, .filter, .link--open");
            if ($trCheck.has(e.target).length === 0) {
                 if (flag) return false;
                flag = true;
                popup = '#wrong'
                    $.fancybox.open({
                        src: popup,
                        type: 'inline',
                        opts: opnsFancy,
                    });
            }
        } else {
            $('tr').removeClass('newblock')
        }
        // console.log(flag)

    });

    
    // $('body').on('change', '[name=documents_kiev_date]', function(){
    //     console.log('asdsdaads')
    // })



    $('body').on('click', '.disable', function(event) {
        event.preventDefault();
        flag = false;
        console.log('asdasdds')
        $('tr').removeClass('close')
        $trEdit = $('tr.edit')
        $trEdit.removeClass('newblock')
        $('.btn--pick').removeClass('active')
        $trEdit.removeClass('edit red green forestgreen')
        $trEdit.find('.field--edit:focus').blur()
        $.fancybox.close()
    });

    $('body').on('click', '.resume', function(event) {
        event.preventDefault();
        $.fancybox.close();
        flag = false;
    })

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
        flag = false;
        var _this = $(this);
        var url = $('tr.edit').find('form').data('url');
        $trSave = $('tr.edit')
        $trSave.removeClass('newblock')
            // $trBg.attr('data-savebg', $bgP)
        $fieldReq = $trSave.find('.field--edit[required]')
        $.each($fieldReq, function(index, el) {
            if ($(el).val() == '') {
                $(el).addClass('empty')
            } else {
                $(el).removeClass('empty')
            }

        });

        $datanSelect = $trSave.find('.field--edit:not(.select-input)').serialize()
        $dataSelect = $trSave.find('.field--edit.select-input')
        $selectArr = []
        $dataSelect.each(function(index, el) {
            value = $(el).attr('name') + '=' + $(el).attr('data-valuefield') + '&'
            $selectArr.push(value)
        });
        if ($('.empty').length) {
            // $data = $selectArr.join('') + $datanSelect
            $fieldReq.eq(0).focus()
        } else {
            $data =  $selectArr.join('') + $datanSelect
            $.ajax({

                type: "POST",
                cache: false,
                url: url, // впишешь путь
                data: $data,
                success: function(data) {
                    // console.log('ok');
                    // summ($trSave)
                    // summGive($trSave)
                    // summPered($trSave)
                    // summKiev($trSave)
                    // summOdd($trSave)
                    changeContainer($trSave)

                    $('tr').removeClass('close')
                    $trSave.removeClass('edit')
                    
                    if (_this.parents('tr').find('form').data('table_name') == "users_table") {
                        var _this_table = $(_this).parents('table');
                        $(_this).parents('tr').remove();

                        $(_this_table).find('tbody').prepend(data);
                    }
                    $.fancybox.close()
                }

            });
        }


    });


    // в архив

    $('body').on('click', '.btn--archive', function(event) {
        event.preventDefault();
        var url = $(this).data('url');
        $trSave = $(this).parents('tr')
        $data = $trSave.find('.field').serialize()
        $.ajax({
            type: "GET",
            cache: false,
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
        var url = $(this).data('url');
        $trSave = $(this).parents('tr')
        $data = $trSave.find('.field').serialize()
        $.ajax({
            type: "GET",
            cache: false,
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
            $(this).closest('.custom-select').find('.custom-select__trigger input').val($(this).text()).attr('data-valuefield', $(this).data('value')).trigger('change')

            $(this).parents('.form-add').find('input[name=dealer_id]').val($(this).data('value'))
        }
    });
    $(window).on('click', function(event) {
        $blockClick = $(event.target)
        if (!$blockClick.is('.datepicker--cell, .datepicker--nav-title, .datepicker--nav-action svg') && !$blockClick.parents().is('.filter')) {
            $('.filter').removeClass('open');
            $('.link--openfilter').removeClass('active')
        }
        if (!$blockClick.parents().is('.custom-select-wrapper')) {
            $('.custom-select').removeClass('open')
        }

    });




    $('.select-input').each(function(index, el) {
        if ($(el).val().length > 0) {
            $thisVal = $(el).data('valuefield')
                // console.log($thisVal)
            $select = $(el).parents('.custom-select-wrapper').find('.custom-options')
            $selected = $select.find('[data-value="' + $thisVal + '"]')
            $selected.addClass('selected')
            $selectedText = $selected.text()
            $(el).parent().find('.custom-select__trigger span').text($selectedText)
        }

    });

    // $('.form')


    $('.form-add').submit(function(event) {
        var _form = $(this);
        var th = _form.serialize();
        var form_url = _form.attr('action');
        $.ajax({
            type: "POST",
            cache: false,
            url: form_url,
            data: th,
            success: function(data) {
                _form.trigger("reset");
                // $('select').styler('destroy');
                // $data = data
                $('.table tbody').prepend(data)
                // console.log()
                linkOpen = $('.table tbody').find('.link--open').eq(0)
                // .trigger('click')
                
                $(".date").datepicker("refresh");

                // $('select').styler();
                $.fancybox.close();
                linkOpen.click();
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
                cache: false,
                url: 'containers/reset',
                data: th,
                success: function(data) {
                    _form.removeClass('filtered')
                    _form.trigger('reset')
                        // не знаю что тебе в data приходит, пропишешь свое
                    $('.table tbody').empty()
                    $('.table tbody').prepend(data);
                    $(".date").datepicker("refresh");
                    // console.log(data)
                }
            });
        } else {

            //поиск по номеру контейнера

            $.ajax({
                type: "POST",
                cache: false,
                url: 'containers/find_container',
                data: th,
                success: function(data) {
                    if (data == '0') {
                        $.fancybox.open({
                            src: '#noid',
                            type: 'inline',
                            opts: opnsFancy,
                        });
                        _form.trigger('reset')
                    } else {
                        _form.addClass('filtered')
                            // не знаю что тебе в data приходит, пропишешь свое
                        $('.table tbody').empty()
                        $('.table tbody').prepend(data);
                        $(".date").datepicker("refresh");
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
                cache: false,
                url: 'containers/reset',
                data: th,
                success: function(data) {
                    _form.removeClass('filtered')
                    _form.trigger('reset')
                        // не знаю что тебе в data приходит, пропишешь свое
                    $('.table tbody').empty()
                    $('.table tbody').prepend(data);
                    $(".date").datepicker("refresh");
                    // console.log(data)
                }
            });
        } else {

            //поиск по вину

            $.ajax({
                type: "POST",
                cache: false,
                url: 'containers/find_vin',
                data: th,
                success: function(data) {
                    if (data == '0') {
                        $.fancybox.open({
                            src: '#noid',
                            type: 'inline',
                            opts: opnsFancy,
                        });
                        _form.trigger('reset')
                    } else {
                        _form.addClass('filtered')
                            // не знаю что тебе в data приходит, пропишешь свое
                        $('.table tbody').empty()
                        $('.table tbody').prepend(data);
                        $(".date").datepicker("refresh");
                    }

                }
            });
        }

        event.preventDefault();
    });

    $('.filter-head').on('click', 'a', function(event) {
        event.preventDefault();
        $('.filter').not($(this).parents('.filter')).removeClass('open')
        $('.filter-head a').not(this).removeClass('active')
        $(this).toggleClass('active').parents('.filter').toggleClass('open')
    });

    $('.btn--work').on('click', function(event) {
        event.preventDefault();
        $thisTd = $(this).parents('tr').find('td').eq(0)
        $thisTd.removeClass('two-check')
        $thisTd.toggleClass('one-check')
    });
    $('.btn--rass').on('click', function(event) {
        event.preventDefault();
        $thisTd = $(this).parents('tr').find('td').eq(0)
        $thisTd.removeClass('one-check')
        $thisTd.toggleClass('two-check')
    });



    function summ(row) {
            var summ = 0;
            if ($(row).hasClass('view')) {
                row = row;
            } else {
                row = parseInt($(row).attr('data-vin_id'))
                row = '[data-container_id=' + row + ']'
            }
            $trFold = $(row).nextUntil('.view').find('td:nth-child(12)').find('input')
            $.each($trFold, function(index, val) {
                summ += parseInt($(val).val().replace(/\D+/g, ""), 10);
            });
            // console.log(summ)
            $(row).find('td:nth-child(12) input').val(summ)
        }
        // summPered

    function changeContainer(row) {
        if ($(row).hasClass('view')) {
            row = row;
        } else {
            row = parseInt($(row).attr('data-vin_id'))
            row = '[data-container_id=' + row + ']'
        }
        // $trFold = $(row).nextUntil('.view').find('td:nth-child(1)').find('input.select-input')
        // console.log($trFold)
        $trFoldVal = $(row).find('td:nth-child(1) input.field--edit').val()
        $trFold = $(row).nextUntil('.view').find('td:nth-child(1)').find('input.field--edit')
        $.each($trFold, function(index, val) {
            $(val).val($trFoldVal);
        });
    }

    function summOdd(row) {
        if ($(row).hasClass('view')) {
            row = row;
        } else {
            row = parseInt($(row).attr('data-vin_id'))
            row = '[data-container_id=' + row + ']'
        }
        $trFoldLenght = $(row).nextUntil('.view').length
        $trFold = $(row).nextUntil('.view').find('td:nth-child(8)').find('input.select-input[data-valuefield!=""]').length
        $(row).find('td:nth-child(8) input').val($trFold + '/' + $trFoldLenght)
    }

    function summKiev(row) {
        var summ = 0;
        if ($(row).hasClass('view')) {
            row = row;
        } else {
            row = parseInt($(row).attr('data-vin_id'))
            row = '[data-container_id=' + row + ']'
        }
        $trFoldLenght = $(row).nextUntil('.view').length
        $trFold = $(row).nextUntil('.view').find('td:nth-child(7)').find('input')
        $.each($trFold, function(index, val) {
            summ += parseInt($(val).attr('data-valuefield').replace(/\D+/g, ""), 10);
        });
        // console.log(summ+'/'+$trFoldLenght)
        $(row).find('td:nth-child(7) input').val(summ + '/' + $trFoldLenght)
    }

    function summPered(row) {
        var summ = 0;
        if ($(row).hasClass('view')) {
            row = row;
        } else {
            row = parseInt($(row).attr('data-vin_id'))
            row = '[data-container_id=' + row + ']'
        }
        $trFoldLenght = $(row).nextUntil('.view').length
        $trFold = $(row).nextUntil('.view').find('td:nth-child(9)').find('input')
        $.each($trFold, function(index, val) {
            summ += parseInt($(val).attr('data-valuefield').replace(/\D+/g, ""), 10);
        });
        // console.log(summ+'/'+$trFoldLenght)
        $(row).find('td:nth-child(9) input').val(summ + '/' + $trFoldLenght)
    }

    function summGive(row) {
        var summ = 0;
        if ($(row).hasClass('view')) {
            row = row;
        } else {
            row = parseInt($(row).attr('data-vin_id'))
            row = '[data-container_id=' + row + ']'
        }
        $trFoldLenght = $(row).nextUntil('.view').length
        $trFold = $(row).nextUntil('.view').find('td:nth-child(10)').find('input')
        $.each($trFold, function(index, val) {
            summ += parseInt($(val).attr('data-valuefield').replace(/\D+/g, ""), 10);
        });
        // console.log(summ+'/'+$trFoldLenght)
        $(row).find('td:nth-child(10) input').val(summ + '/' + $trFoldLenght)
    }

var arr = $('.autocomp').parents('.custom-select-wrapper').find('.custom-option')
    
    


    // console.log(arr)

    $('.autocomp').on('keyup', function(event) {
        event.preventDefault();
        $('.autocomp').parents('.custom-select').addClass('open')
        /* Act on the event */
        $result = $(this).parents('.custom-select-wrapper').find('.custom-options')
        
        var l = $(this).val().length;
        // console.log(l)
        if(l>0){
            $(this).parents('.custom-select-wrapper').find('.custom-option').hide()
            for(var i=0;i<arr.length;i++){
                var $content = $(arr[i]).text().toLowerCase().split('').slice(0,l).join('');
                console.log($content)
                if($content==$(this).val().toLowerCase()){
                    
                    $(arr[i]).show();
                }
            }
        } else {
            $(this).parents('.custom-select-wrapper').find('.custom-option').show()
        }
    });
   

});