

$(document).ready(function($) {
    $('.loader').delay(400).fadeOut(800);
    $('.section-header').delay(600).addClass('load');
    $('.section-content').delay(600).addClass('load');
    $('.section-footer').delay(600).addClass('load');

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
    }
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
    var $datepickerOpt = {
        startDate: new Date(),
        language: 'ru',
        autoClose: true,
        offset: 0,
        minView: 'days',
        view: 'days',
        onSelect: function(formattedDate, date, inst) {
            // console.log('asdads')
            if ($(inst.el).hasClass('relz_date')) {
                $inputs = $(inst.el).parents('tr').nextUntil('.view').find('[name=release_ordered_date]')
                $.each($inputs, function(index, el) {
                    $(el).val(formattedDate)
                });
            }
            if ($(inst.el).hasClass('relp_date')) {
                $inputs = $(inst.el).parents('tr').nextUntil('.view').find('[name=release_received_date]')
                $.each($inputs, function(index, el) {
                    $(el).val(formattedDate)
                });
            }
            if ($(inst.el).hasClass('shipping_date')) {
                
                $(inst.el).trigger('change')
                // $inputs = $(inst.el).parents('tr').nextUntil('.view').find('.shipping_date_fold')
                // $.each($inputs, function(index, el) {
                //     $(el).val(formattedDate)
                // });
            }
        }
    }

     $('body').on('change', '.shipping_date', function(event) {
        event.preventDefault();
        $thisVal = $(this).val()
        /* Act on the event */
        $inputs = $(this).parents('tr').nextUntil('.view').find('.shipping_date_fold')

                $.each($inputs, function(index, el) {
                    $(el).val($thisVal)
                    // console.log($(el))
                });
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
        onSelect: function(formattedDate, date, inst) {
            // console.log(moment(Date.parse(date[0])).valueOf())
            // console.log()
            $(inst.el).attr('data-startdate', '')
            $(inst.el).attr('data-enddate', '')
            $(inst.el).attr('data-startdate', Date.parse(date[0]))
            $(inst.el).attr('data-enddate', Date.parse(date[1]))
        }
    })
    var body = $('body'),
        showpass = $('.link--showpass'),
        dradmin = $('.dropdown-admin');
    if (body.hasClass('not-login')) {}
    showpass.click(function() {
        var $passField = $(this).parent().find('input'),
            type = $passField.attr('type') == "text" ? "password" : 'text';
        $(this).toggleClass('active');
        $passField.prop('type', type);
    });
    dradmin.on('click', function(event) {
        event.preventDefault();
        $('.header-menu__btn').not($(this).parent()).removeClass('active')
        $(this).parent().toggleClass('active')
    });
    body.on('change', '.doc_kiev', function(event) {
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
    });
    body.on('change', '.relp_yn', function(event) {
        event.preventDefault();
        $val = $(this).val()
        $inputs = $(this).parents('tr').nextUntil('.view').find('[name=release_received]')
        if ($val == 'Да') {
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
    });
    body.on('change', '.sealine', function(event) {
        event.preventDefault();
        $valueField = $(this).attr('data-valuefield')
        $valueThis = $(this).val()
        $inputs = $(this).parents('tr').nextUntil('.view').find('[name=morlin]')
        $(this).val($valueThis)
        $(this).attr('title', $valueThis)
        $.each($inputs, function(index, el) {
            $(el).attr('data-valuefield', $valueField)
            $(el).val($valueThis)
            $customoption = $(el).parents('.custom-select-wrapper').find('.custom-option')
            $customoption.removeClass('selected')
            $(el).parents('.custom-select-wrapper').find('[data-value=' + $valueField + ']').addClass('selected')
        });
    });
    body.on('change', '.relz_yn', function(event) {
        event.preventDefault();
        $val = $(this).val()
        $inputs = $(this).parents('tr').nextUntil('.view').find('[name=release_ordered]')
        if ($val == 'Да') {
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
    });
    body.on('change', '.userid', function(event) {
        event.preventDefault();
        $valueField = $(this).attr('data-valuefield')
        $valueThis = $(this).val()
        $inputs = $(this).parents('tr').nextUntil('.view').find('[name=user_id]')
        $(this).val($valueThis)
        $(this).attr('title', $valueThis)
        $.each($inputs, function(index, el) {
            $(el).attr('data-valuefield', $valueField)
            $(el).val($valueThis)
            $customoption = $(el).parents('.custom-select-wrapper').find('.custom-option')
            $customoption.removeClass('selected')
            $(el).parents('.custom-select-wrapper').find('[data-value=' + $valueField + ']').addClass('selected')
        });
    });
    body.on('change', '[name=user_id]:not(.userid)', function(event) {
        event.preventDefault();
        $inputTop = $(this).parents('tr').prevAll('.view').eq(0)
        $inputs = $inputTop.nextUntil('.view').find('[name=user_id]');
        $oldVal = $inputTop.find('.userid')
        values = []
        $.each($inputs, function(index, el) {
            values.push($(el).val())
        })
        if (Unique(values).length > 2) {
            $oldVal.val('Разные')
            $oldVal.attr('title', 'Разные')
        } else {
            $oldVal.val(Unique(values).join(' / '))
            $oldVal.attr('title', Unique(values).join(' / '))
        }
    });
    body.on('change', '.doc_odessa', function(event) {
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
    });

    function reverseR(s) {
        var arr = s.split('.');
        return arr[2] + ', ' + arr[1] + ', ' + arr[0];
    };
    var $originalTr = $('tbody')
    var $filteredTr = $('tbody').find('tr')
    var $indexDate = $('.table-date').index() + 1
    var $indexExpeditor = $('.table-expeditor').index() + 1
    var $indexRelZ = $('.table-rel').index() + 1
    var $indexKiev = $('.table-kiev').index() + 1
    var $indexBack = $('.table-back').index() + 1

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
        if (urlQueryString) {
            var updateRegex = new RegExp('([\?&])' + key + '[^&]*');
            var removeRegex = new RegExp('([\?&])' + key + '=[^&;]+[&;]?');
            if (typeof value == 'undefined' || value == null || value == '') {
                params = urlQueryString.replace(removeRegex, "$1");
                params = params.replace(/[&;]$/, "");
            } else if (urlQueryString.match(updateRegex) !== null) {
                params = urlQueryString.replace(updateRegex, "$1" + newParam);
            } else {
                params = urlQueryString + '&' + newParam;
            }
        }
        params = params == '?' ? '' : params;
        window.history.replaceState({}, "", baseUrl + params);
    };



    
    function resetforFilter() {
        $('.section-header').removeClass('load');
                            $('.section-content').removeClass('load');
                            $('.section-footer').removeClass('load');
                            $('.loader').fadeIn('slow').css('opacity', '1')
        $('tbody').addClass('load')
            $urlFilter = location.href;
            $('.table tbody').empty()
            $.ajax({
                type: "GET",
                cache: false,
                url: $urlFilter,
            success: function(data) {
                $tbody = $(data).find('tbody').children()
                $totalPages = $(data).find('.pagination-list').attr('data-all');
                // console.log($totalPages)
                $('.table tbody').prepend($tbody);
                $('tbody').removeClass('load');
                if ($totalPages >= 1) {
                    var currentPage = $pagin.twbsPagination('getCurrentPage');
                    $pagin.twbsPagination('destroy');
                    $pagin.twbsPagination($.extend({}, defaultOpts, {
                      totalPages: $totalPages,
                }));
                }
                // if($('.pagination').data("twbs-pagination")){
                    

                    $('.loader').delay(400).fadeOut(800);
                    $('.section-header').delay(600).addClass('load');
                    $('.section-content').delay(600).addClass('load');
                    $('.section-footer').delay(600).addClass('load');

                    // }
            }
            });
    }
    $urlFilterCheck = location.href
    // if ($urlFilterCheck.slice('?')[1] != '') {
    //     $urlFilter = location.href;
    //         $('.table tbody').empty()
    //             $.ajax({
    //                 type: "GET",
    //                 cache: false,
    //                 url: $urlFilter,
    //             success: function(data) {
    //                 $('.table tbody').prepend(data.view);
    //                 $('tbody').removeClass('load')
    //             }
    //         });
    // }
    // function filterTable() {
        if (!paramsurl('sort') == '') {
            $('.link--empty').addClass('active')
        }
        if (!paramsurl('startdate') == '') {
            $('.link--empty').addClass('active')
        }
        if (!paramsurl('expeditorname') == '') {
            $('.link--empty').addClass('active')
        }
        if (!paramsurl('relz') == '') {
            $('.link--empty').addClass('active')
        }
        if (!paramsurl('relp') == '') {
            $('.link--empty').addClass('active')
        }
        if (!paramsurl('dock') == '') {
            $('.link--empty').addClass('active')
        }
    // }
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
            updateQueryStringParam('relp', false)
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
        $activeValue = $activeLink.attr('data-exid')
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
    });
    // updateQueryStringParam('relz', '')
    // updateQueryStringParam('expeditorname', '')
    // updateQueryStringParam('relp', '')
    // updateQueryStringParam('dock', '')
    // updateQueryStringParam('sort', '')
    // updateQueryStringParam('startdate', '')
    // updateQueryStringParam('enddate', '')
    $('.link--empty').on('click', function(event) {
        event.preventDefault();
        $('.section-header').removeClass('load');
                            $('.section-content').removeClass('load');
                            $('.section-footer').removeClass('load');
                            $('.loader').fadeIn('slow').css('opacity', '1')
        $('tbody').addClass('load')
        $(this).removeClass('active')
        $('.link--filter').removeClass('active')
        // $('.view').show();
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
            success: function(data) {
                $('.table tbody').empty()
                $tbody = $(data).find('tbody').children()
                $totalPages = $(data).find('.pagination-list').attr('data-all');
                // console.log($totalPages)
                $('.table tbody').prepend($tbody);
                $('tbody').removeClass('load');
                if ($totalPages >= 1) {
                    var currentPage = $pagin.twbsPagination('getCurrentPage');
                    $pagin.twbsPagination('destroy');
                    $pagin.twbsPagination($.extend({}, defaultOpts, {
                      totalPages: $totalPages,
                }));
                }
              $('.loader').delay(400).fadeOut(800);
    $('.section-header').delay(600).addClass('load');
    $('.section-content').delay(600).addClass('load');
    $('.section-footer').delay(600).addClass('load');
            }
        });
    });
    $('.link--filter').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('active').siblings().removeClass('active');
    });
    body.on('click', '.link--open', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $tr = $(this).parents('tr')
        if ( window.location.href.indexOf('forwarder_admin') > -1) {
            $trUrl = 'forwarder_admin/container/get-clients-balances/' + $tr.attr('data-container_id')
        } else {
            $trUrl = 'container/get-clients-balances/' + $tr.attr('data-container_id')
        }
        
        
        // console.log()
        if ($(this).hasClass('active')) {
            $tr.nextUntil('.view').children('td').show();
            $.ajax({
                type: "GET",
                cache: false,
                url: $trUrl,
                success: function(data) {
                    $dataJson = JSON.parse(data)
                    $.each($dataJson, function(index, el) {
                        $balanceInp = $('[data-only_vin_id='+el.id+']').find('td.td-balance')
                        $('[data-only_vin_id='+el.id+']').addClass(el.color)
                        $balanceInp.addClass('load')
                        $balanceInp.find('input').val(el.balance)
                    });

                    
                },
            });

        } else {
            $tr.nextUntil('.view').children('td').hide();
        }
    });
    body.on('click', '.editing', function(event) {
        event.preventDefault();
        $('tr').removeClass('edit')
        $('tr').not($(this).parents('tr')).addClass('close')
        $trEdit = $(this).parents('tr')
        $trEdit.addClass('edit')
        $trEdit.find('.date').datepicker($datepickerOpt)
    });
    body.on('keypress', function(event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $('input').blur()
            if ($('tr').hasClass('edit')) {
                var $trCheck = $("body tr.edit, .modal, .filter, .link--open");
                popup = '#wrong'
                $.fancybox.open({
                    src: popup,
                    type: 'inline',
                    opts: opnsFancy,
                });
            }
        }
        event.stopPropagation();
    });
    
    body.on("dblclick", 'tbody tr', function(event) {
        $lastTd = $(this).find('td:last-child')
        if (!$lastTd.is(event.target) && $lastTd.has(event.target).length === 0) {
            $('tr').not($(this)).removeClass('edit')
            $('tr').not($(this)).addClass('close')
            $trEdit = $(this)
            if (!$trEdit.hasClass('edit')) {
                $trEdit.find('.date').datepicker($datepickerOpt)
            }
            $trEdit.addClass('edit')
        }
            
    })
    var flag = false;
    var opnsFancy = {
        touch: false,
        baseClass: "modal",
        hideScrollbar: true,
        btnTpl: {
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" >' + '<svg viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">' + '<path d="M17.57-.107l3.536 3.535L3.43 21.106l-3.536-3.535z"/>' + '<g>' + '<path d="M3.491-.013L-.013 3.49l17.521 17.521 3.505-3.504z"/>' + '</g>' + '</svg>' + "</button>",
        },
        afterClose: function() {
            flag = false
        },
        afterShow: function() {
            if (popup == '#carsadd' || popup == '#changedate') {
                $(popup).find('.field.date').datepicker($datepickerOpt)
            }
        }
    }
    $('.fancybtn').on('click', function(event) {
        popup = $(this).data('popup')
        $.fancybox.open({
            src: popup,
            type: 'inline',
            opts: opnsFancy,
        });
        return false
    });
    $('table').click(function(e) {
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
    });
    body.on('click', '.disable', function(event) {
        event.preventDefault();
        flag = false;
        $('tr').removeClass('close')
        $trEdit = $('tr.edit')
        $trEdit.removeClass('newblock')
        $('.btn--pick').removeClass('active')
        $trEdit.removeClass('edit red green forestgreen')
        $trEdit.find('.field--edit:focus').blur()
        $.fancybox.close()
    });
    body.on('click', '.resume', function(event) {
        event.preventDefault();
        $.fancybox.close();
        flag = false;
    })
    body.on('click', '.btn--pick', function(event) {
        event.preventDefault();
        $bgP = $(this).data('bg')
        $trBg = $(this).parents('tr')
        $trBg.removeClass('red gray green forestgreen')
        $trBg.addClass($bgP)
        $('.btn--pick').removeClass('active')
        $(this).addClass('active')
    });
    body.on('click', '.save', function(event) {
        event.preventDefault();
        flag = false;
        var _this = $(this);
        var url = $('tr.edit').find('form').data('url');
        $trSave = $('tr.edit')
        $trSave.removeClass('newblock')
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

        $textComment = $trSave.find('.field--comment')
        $textCommentVal = $textComment.val()
        $commentBlock = $trSave.find('.chat-block')
        console.log($commentBlock)
        if ($textComment.length) {
            if ($textCommentVal.length) {
            $commentBlock.removeClass('not-comment')
            if ($textComment.attr('name') == 'admin_comment') {
                $commentBlock.find('.chat-admin').html('<b>Админ: </b>' + $textCommentVal)
            } else {
                $commentBlock.find('.chat-buh').html('<b>Бухгалтер: </b>' + $textCommentVal)
            }
        }
        }
        

        if ($('.empty').length) {
            $fieldReq.eq(0).focus()
        } else {
            $data = $selectArr.join('') + $datanSelect
            $.ajax({
                type: "POST",
                cache: false,
                url: url,
                data: $data,
                success: function(data) {
                    changeContainer($trSave)
                    $('tr').removeClass('close')
                    $trSave.removeClass('edit')
                    if (_this.parents('tr').find('form').data('table_name') == "users_table") {
                        var _this_table = $(_this).parents('table');
                        $(_this).parents('tr').remove();
                        $(_this_table).find('tbody').prepend(data);
                    }
                    $.fancybox.close()
                },
                error: function (jqXHR, exception) {
                    $.each(jqXHR.responseJSON.errors, function(index, el) {
                        $('#noid').find('.paragraph--answer').text(el)
                    });
                    $.fancybox.open({
                        src: '#noid',
                        type: 'inline',
                        opts: opnsFancy,
                    });
                    setTimeout(function(){
                        // $.fancybox.close()
                        $('#noid').find('.fancybox-close-small').click()
                    }, 5000)
                }
            });
        }
    });
    body.on('click', '.btn--archive', function(event) {
        event.preventDefault();
        var url = $(this).data('url');
        $trSave = $(this).parents('tr')
        if ($trSave.hasClass('view')) {
            $childTr = $trSave.nextUntil('.view')
        } else {
            $inputTop = $(this).parents('tr').prevAll('.view').eq(0)
            $childTr = $inputTop.nextUntil('.view')
        }
        $data = $trSave.find('.field').serialize()
        $.ajax({
            type: "GET",
            cache: false,
            url: url,
            data: $data,
            success: function(data) {
                $trSave.remove()
                $childTr.remove()
            },
                error: function (jqXHR, exception) {
                    $.each(jqXHR.responseJSON.errors, function(index, el) {
                        $('#noid').find('.paragraph--answer').text(el)
                    });
                    $.fancybox.open({
                        src: '#noid',
                        type: 'inline',
                        opts: opnsFancy,
                    });
                    setTimeout(function(){
                        // $.fancybox.close()
                        $('#noid').find('.fancybox-close-small').click()
                    }, 5000)
                }
        });
    });
    body.on('click', '.btn--backarсhive', function(event) {
        event.preventDefault();
        var url = $(this).data('url');
        $trSave = $(this).parents('tr');
        if ($trSave.hasClass('view')) {
            $childTr = $trSave.nextUntil('.view')
        } else {
            $inputTop = $(this).parents('tr').prevAll('.view').eq(0)
            $childTr = $inputTop.nextUntil('.view')
        }
        $data = $trSave.find('.field').serialize()
        $.ajax({
            type: "GET",
            cache: false,
            url: url,
            data: $data,
            success: function(data) {
                $trSave.remove()
                $childTr.remove()
                console.log('разархивировано')
            },
                error: function (jqXHR, exception) {
                    $.each(jqXHR.responseJSON.errors, function(index, el) {
                        $('#noid').find('.paragraph--answer').text(el)
                    });
                    $.fancybox.open({
                        src: '#noid',
                        type: 'inline',
                        opts: opnsFancy,
                    });
                    setTimeout(function(){
                        // $.fancybox.close()
                        $('#noid').find('.fancybox-close-small').click()
                    }, 5000)
                }
        });
    });
    body.on('click', '.custom-select-wrapper', function(event) {
        $('.custom-select-wrapper').not(this).find('.custom-select').removeClass('open')
        $(this).find('.custom-select').toggleClass('open');
    });
    body.on('click', '.custom-option', function(event) {
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
            $select = $(el).parents('.custom-select-wrapper').find('.custom-options')
            $selected = $select.find('[data-value="' + $thisVal + '"]')
            $selected.addClass('selected')
            $selectedText = $selected.text()
            $(el).parent().find('.custom-select__trigger span').text($selectedText)
        }
    });
    var $btnClick;
    $('.btn--addcontainer').on('click', function(event) {
        event.preventDefault()
        if ($(this).hasClass('btn--ok')) {
            $btnClick = 'ok';
            // console.log('asddasasd')
            $checkInput = $(this).parents('.form-add').find('[name=container_number]')
            if ($checkInput.val() != '') {
                $(this).parents('.form-add').submit();
            } else {
                $.fancybox.close();
            }
            
       } else {
            $btnClick = 'next';
            $(this).parents('.form-add').submit();
       }
        
    });



    $('.form-add').submit(function(event) {
            event.preventDefault();
            var _form = $(this);
            var th = _form.serialize();
            var form_url = _form.attr('action');
            // console.log(event)
            $.ajax({
                type: "POST",
                cache: false,
                url: form_url,
                data: th,
                success: function(data) {
                    // console.log(data)
                    _form.find('input[type=text]:not(.date)').val('');
                    $('.table tbody').prepend(data)
                    linkOpen = $('.table tbody').find('.link--open').eq(0)
                    $('.edit .date').datepicker($datepickerOpt)
                    if ($btnClick == 'ok') {
                        $.fancybox.close();
                        linkOpen.click();
                    }
                },
                error: function (jqXHR, exception) {
                    // console.log(jqXHR)
                    $.each(jqXHR.responseJSON.errors, function(index, el) {
                        $('#noid').find('.paragraph--answer').text(el)
                    });
                    $.fancybox.open({
                        src: '#noid',
                        type: 'inline',
                        opts: opnsFancy,
                    });
                    setTimeout(function(){
                        $('#noid').find('.fancybox-close-small').click()
                    }, 5000)
                }
            });
            
        });
    
    $('.form-filter').submit(function(event) {
        var _form = $(this);
        var th = _form.serialize();
        var form_url = _form.attr('data-url');
        if (_form.hasClass('filtered')) {
            $('.section-header').removeClass('load');
            $('.section-content').removeClass('load');
            $('.section-footer').removeClass('load');
            $('.loader').fadeIn('slow').css('opacity', '1')
            $.ajax({
                type: "POST",
                cache: false,
                url: 'containers/reset',
                data: th,
                success: function(data) {
                    _form.removeClass('filtered')
                    _form.trigger('reset')
                    $('.table tbody').empty()
                $tbody = $(data).find('tbody').children()
                $totalPages = $(data).find('.pagination-list').attr('data-all');
                // console.log($totalPages)
                $('.table tbody').prepend($tbody);
                $('tbody').removeClass('load');
                if ($totalPages >= 1) {
                    var currentPage = $pagin.twbsPagination('getCurrentPage');
                    $pagin.twbsPagination('destroy');
                    $pagin.twbsPagination($.extend({}, defaultOpts, {
                      totalPages: $totalPages,
                }));
                }
                    $('.loader').delay(400).fadeOut(800);
    $('.section-header').delay(600).addClass('load');
    $('.section-content').delay(600).addClass('load');
    $('.section-footer').delay(600).addClass('load');
                },
                error: function (jqXHR, exception) {
                    $.each(jqXHR.responseJSON.errors, function(index, el) {
                        $('#noid').find('.paragraph--answer').text(el)
                    });
                    $.fancybox.open({
                        src: '#noid',
                        type: 'inline',
                        opts: opnsFancy,
                    });
                    setTimeout(function(){
                        $('#noid').find('.fancybox-close-small').click()
                    }, 5000)
                }
            });
        } else {
            $.ajax({
                type: "POST",
                cache: false,
                url: form_url,
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
                        $('.table tbody').empty()
                        $('.table tbody').prepend(data);
                    }
                },
                error: function (jqXHR, exception) {
                    $.each(jqXHR.responseJSON.errors, function(index, el) {
                        $('#noid').find('.paragraph--answer').text(el)
                    });
                    $.fancybox.open({
                        src: '#noid',
                        type: 'inline',
                        opts: opnsFancy,
                    });
                    setTimeout(function(){
                        $('#noid').find('.fancybox-close-small').click()
                    }, 5000)
                }
            });
        }
        event.preventDefault();
    });
    // $('.content-top__vin').submit(function(event) {
    //     var _form = $(this);
    //     var th = _form.serialize();
    //     var form_url = _form.attr('action');
    //     if (_form.hasClass('filtered')) {
    //          $('.section-header').removeClass('load');
    //                         $('.section-content').removeClass('load');
    //                         $('.section-footer').removeClass('load');
    //                         $('.loader').fadeIn('slow').css('opacity', '1')
    //         $.ajax({
    //             type: "POST",
    //             cache: false,
    //             url: 'containers/reset',
    //             data: th,
    //             success: function(data) {
    //                 _form.removeClass('filtered')
    //                 _form.trigger('reset')
    //                 $('.table tbody').empty()
    //             $tbody = $(data).find('tbody').children()
    //             $totalPages = $(data).find('.pagination-list').attr('data-all');
    //             // console.log($totalPages)
    //             $('.table tbody').prepend($tbody);
    //             $('tbody').removeClass('load');
    //             if ($totalPages >= 1) {
    //                 var currentPage = $pagin.twbsPagination('getCurrentPage');
    //                 $pagin.twbsPagination('destroy');
    //                 $pagin.twbsPagination($.extend({}, defaultOpts, {
    //                   totalPages: $totalPages,
    //             }));
    //             }
    //                 $('.loader').delay(400).fadeOut(800);
    // $('.section-header').delay(600).addClass('load');
    // $('.section-content').delay(600).addClass('load');
    // $('.section-footer').delay(600).addClass('load');
    //             },
    //             error: function (jqXHR, exception) {
    //                 $.each(jqXHR.responseJSON.errors, function(index, el) {
    //                     $('#noid').find('.paragraph--answer').text(el)
    //                 });
    //                 $.fancybox.open({
    //                     src: '#noid',
    //                     type: 'inline',
    //                     opts: opnsFancy,
    //                 });
    //                 setTimeout(function(){
    //                     // $.fancybox.close()
    //                     $('#noid').find('.fancybox-close-small').click()
    //                 }, 5000)
    //             }
    //         });
    //     } else {
    //         $.ajax({
    //             type: "POST",
    //             cache: false,
    //             url: 'containers/find_vin',
    //             data: th,
    //             success: function(data) {
    //                 if (data == '0') {
    //                     $.fancybox.open({
    //                         src: '#noid',
    //                         type: 'inline',
    //                         opts: opnsFancy,
    //                     });
    //                     _form.trigger('reset')
    //                 } else {
    //                     _form.addClass('filtered')
    //                     $('.table tbody').empty()
    //                     $('.table tbody').prepend(data);
    //                 }
    //             },
    //             error: function (jqXHR, exception) {
    //                 $.each(jqXHR.responseJSON.errors, function(index, el) {
    //                     $('#noid').find('.paragraph--answer').text(el)
    //                 });
    //                 $.fancybox.open({
    //                     src: '#noid',
    //                     type: 'inline',
    //                     opts: opnsFancy,
    //                 });
    //                 setTimeout(function(){
    //                     // $.fancybox.close()
    //                     $('#noid').find('.fancybox-close-small').click()
    //                 }, 5000)
    //             }
    //         });
    //     }
    //     event.preventDefault();
    // });
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
    var arr = $('.autocomp').parents('.custom-select-wrapper').find('.custom-option')
    $('.autocomp').on('keyup', function(event) {
        event.preventDefault();
        $(this).parents('.custom-select').addClass('open')
        $result = $(this).parents('.custom-select-wrapper').find('.custom-options')
        var l = $(this).val().length;
        if (l > 0) {
            $(this).parents('.custom-select-wrapper').find('.custom-option').hide()
            for (var i = 0; i < arr.length; i++) {
                var $content = $(arr[i]).text().toLowerCase().split('').slice(0, l).join('');
                console.log($content)
                if ($content == $(this).val().toLowerCase()) {
                    $(arr[i]).show();
                }
            }
        } else {
            $(this).parents('.custom-select-wrapper').find('.custom-option').show()
        }
    });

    function changeContainer(row) {
        if ($(row).hasClass('view')) {
            row = row;
        } else {
            row = parseInt($(row).attr('data-vin_id'))
            row = '[data-container_id=' + row + ']'
        }
        $trFoldVal = $(row).find('td:nth-child(1) input[name=container_number]').val()
        $trFold = $(row).nextUntil('.view').find('td:nth-child(1)').find('input[name=container_number]')
        $.each($trFold, function(index, val) {
            $(val).val($trFoldVal);
        });
    }

    function Unique(A) {
        var n = A.length,
            k = 0,
            B = [];
        for (var i = 0; i < n; i++) {
            var j = 0;
            while (j < k && B[j] !== A[i]) j++;
            if (j == k) B[k++] = A[i];
        }
        return B;
    }
    $pages = $('.pagination-list').attr('data-all');
    $pagin = $('.pagination-list');




    var defaultOpts = {
        totalPages: $pages,
        visiblePages: 3,
        hideOnlyOnePage: true,
                        first: false,
                        last: false,
                        initiateStartPageClick: false,
                        prev: '<svg viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.08716L3 8.08716L10 15.0872" stroke="#5B636A" stroke-width="3"/></svg>',
                        next: '<svg viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 1.08716L9 8.08716L2 15.0872" stroke="#1B65B9" stroke-width="3"/></svg>',
                        onPageClick: function(event, page) {
                            $urlStr = window.location.search
                            var checkContainer = [];
                            $('[name=date_shipping]').val('');
                            $('.link--changedate').removeClass('active');
                            $locQue = $urlStr.slice(1)

                            if ($locQue == '') {
                                $locQue = ''
                            } else {
                                $locQue = '&' + $urlStr.slice(1)
                            }
                            $('.section-header').removeClass('load');
                            $('.section-content').removeClass('load');
                            $('.section-footer').removeClass('load');
                            $('.loader').fadeIn('slow').css('opacity', '1')
                            $.ajax({
                                type: "GET",
                                cache: false,
                                url: '?page='+page + $locQue,
                                success: function(data) {
                                    $('.table tbody').html('')
                                    $('.table tbody').append(data);
                                    $('tbody').removeClass('load')
                                    $('.loader').delay(400).fadeOut(800);
    $('.section-header').delay(600).addClass('load');
    $('.section-content').delay(600).addClass('load');
    $('.section-footer').delay(600).addClass('load');
                                }
                            });
                        }
                        };
    
    $pagin.twbsPagination(defaultOpts);

    // function callPhone() {
        // $('.phonenumber').mask('+38 (000) 000-00-00').focus(function(event) {
        // if ($(this).val() == '') {
        //     $(this).val('+38 (0')
        // }
        // }).blur(function(event) {
        //     if ($(this).val() == '+38 (0') {
        //         $(this).val('')
        //     }
        // });

        body.on('focus', '.phonenumber', function(event) {
            event.preventDefault();
            /* Act on the event */
            $(this).mask('+38 (000) 000-00-00').focus(function(event) {
            if ($(this).val() == '') {
                $(this).val('+38 (0')
            }
            }).blur(function(event) {
                if ($(this).val() == '+38 (0') {
                    $(this).val('')
                }
            });
        });
        // }

var checkContainer = [];


    

$('body').on('change', '[name=datecheck]',  function(event) {
    event.preventDefault();
    var tag = $(this).val();
    var i = checkContainer.indexOf(tag);
    if ($(this).prop("checked"))  {
        $(this).parents('tr').addClass('selected')
        if (i==-1) {
            checkContainer.push(tag)
        }

    } else {
        $(this).parents('tr').removeClass('selected')
        if (i>-1) { checkContainer.splice(i, 1) }
    }

    if (checkContainer.length > 0) {
        $('.link--changedate').addClass('active')
    } else {
        $('.link--changedate').removeClass('active')
    }

// console.log(checkContainer.length)

    $('[name=container_ids]').val(checkContainer.join(", "))

// console.log(checkContainer)
});


    $('.form-change').submit(function(event) {
            event.preventDefault();
            var _form = $(this);
            var th = _form.serialize();
            var form_url = _form.attr('action');
                $newDate = _form.find('[name=date_shipping]').val()
            $.ajax({
                type: "POST",
                cache: false,
                url: form_url,
                data: th,
                success: function(data) {
                    $.each(checkContainer, function(index, el) {
                        $('[data-container_id='+el+']').find('.shipping_date').val($newDate).trigger('change')
                    });
                    $.fancybox.close();
                },
                error: function (jqXHR, exception) {
                    // console.log(jqXHR)
                    $.each(jqXHR.responseJSON.errors, function(index, el) {
                        $('#noid').find('.paragraph--answer').text(el)
                    });
                    $.fancybox.open({
                        src: '#noid',
                        type: 'inline',
                        opts: opnsFancy,
                    });
                    setTimeout(function(){
                        $('#noid').find('.fancybox-close-small').click()
                    }, 5000)
                }
            });
            
        });

// $(window).scroll(function() {
// var height = $(window).scrollTop();
//  /*Если сделали скролл на 100px задаём новый класс для header*/
// if(height > 100){
// $('header').addClass('header-fixed');
// } else{
// /*Если меньше 100px удаляем класс для header*/
// $('header').removeClass('header-fixed');
// }
// });
    
    
});