/*!
 * Theme Function
 *
 * Js custom theme
 *
 * https://arrowhitech.com
 * Copyright 5-2022 AHT
 */

(function ($) {
    "use strict";

    // Logo slider
    function whoSlider() {
        var $slick_slider = $('.who-slider');
        var settings = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                    },
                }
            ],
        };

        $slick_slider.slick(settings);
    }

    //Menu mobile click
    function menuClickMobile() {
        $('header ul.wp-block-navigation__container ul >li > ul, header ul.wp-block-navigation__container >li > ul').slideUp();

        $('body').on('click', 'header ul.wp-block-navigation__container ul >li>button', function (e) {
            e.preventDefault();

            if ($(this).hasClass('active')) {
                $('header ul.wp-block-navigation__container ul >li > button.active + ul').slideUp(300);
                $(this).removeClass('active');
            } else {
                $('header ul.wp-block-navigation__container ul >li').removeClass('active');
                $('header ul.wp-block-navigation__container ul >li > ul').slideUp(300);
                $(this).addClass('active');
                $('header ul.wp-block-navigation__container ul >li > button.active + ul').slideDown(300);
            }
        });

        $('body').on('click', 'header ul.wp-block-navigation__container >li>button', function (e) {
            e.preventDefault();

            if ($(this).hasClass('active')) {
                $('header ul.wp-block-navigation__container >li >button.active + ul').slideUp(300);
                $(this).removeClass('active');
            } else {
                $('header ul.wp-block-navigation__container >li > button').removeClass('active');
                $('header ul.wp-block-navigation__container >li > ul').slideUp(300);
                $(this).addClass('active');
                $('header ul.wp-block-navigation__container >li >button.active + ul').slideDown(300);
            }
        });

        //Counter
        $('.counter h3').counterUp({
            delay: 10,
            time: 2000
        });

        $(".mouse").on('click', function () {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".diversified").offset().top - 100
            }, 1000);

        });

        $(".btn-contact").on('click', function () {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".contact").offset().top - 100
            }, 1000);

        });
    }
     // Menu clickToggleMenu
     function clickToggleMenu() {

        $('header .wp-block-navigation__responsive-container').addClass(' has-modal-open close');
        $('header .wp-block-navigation__responsive-container-open').on('click', function (e) {
            e.preventDefault();

            $('header .wp-block-navigation__responsive-container-open').toggleClass('close');
            $('header').toggleClass('active');

            $('header .wp-block-navigation__responsive-container').toggleClass('close');
        });

        // Scroll header page home
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                $('header').addClass("fixed");
                $('header').removeClass("relative");
            } else {
                $("header").addClass("relative");
                $("header").removeClass("fixed");
            }
        });

    }
    function popPackages(){
        $('.open-poppup-ctf7').on('click',function () {;
            $('.custom-contact-ctf7').addClass('open-popup');
        });

        $('.close-poppup-ctf7').on('click',function () {;
            $('.custom-contact-ctf7').removeClass('open-popup');
        });

    }

    // clickCopyLink
    function clickCopyLink() {
        var $temp = $("<input>");
        var $url = $(location).attr('href');

        $('.wrap-blog .clipboard').on('click', function(e) {
            e.preventDefault();
            $("body").append($temp);
            $temp.val($url).select();
            document.execCommand("copy");
            $temp.remove();
            $(".wrap-blog .copy-link p").text("URL copied!");
        })
    }

    // Case Study Ajax Filter
    function caseStudyAjaxFilter() {
        $('body').on('click', '.case-studies-archive .title-post-slider .category', function() {
            var category = $(this).attr('data-type');
            $('.case-studies-archive .title-post-slider .category.current').removeClass('current');
            $(this).addClass('current');
            $.ajax({
                url: ajaxObject.ajaxurl,
                type: "POST",
                data: {
                    action: "case_studies_filter",
                    category: category,
                    paged: 1,
                },
                beforeSend: function() {
                    $('.content-archive-blog .container').html(
                        '<div id="overlay">'
                            + '<div class="cv-spinner">'
                                +'<span class="spinner"></span>'
                            + '</div>'
                        +'</div>'
                    )
                    
                },
                success: function(response) {
                    $('.content-archive-blog .container').html(response);
                },
    
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                },
            });
        })
    }

    // Pagination Ajax
    function paginationAjax() {
        $('body').on('click', '.pagination .page-numbers',function(e) {
            e.preventDefault();
            var category = $('.case-studies-archive .title-post-slider .category.current').attr('data-type');
            var paged = Number($(this).text());
            var paged_current = Number($('.pagination .page-numbers.current').text());
            if ($(this).hasClass('next')) {
                paged = paged_current + 1;
            }
            if ($(this).hasClass('prev')) {
                paged = paged_current - 1;
            }
            $('.pagination .page-numbers.current').removeClass('current');
            $.ajax({
                url: ajaxObject.ajaxurl,
                type: "POST",
                data: {
                    action: "case_studies_filter",
                    category: category,
                    paged: paged,
                },
                beforeSend: function() {
                    $('.content-archive-blog .container').html(
                        '<div id="overlay">'
                            + '<div class="cv-spinner">'
                                +'<span class="spinner"></span>'
                            + '</div>'
                        +'</div>'
                    )
                    
                },
                success: function(response) {
                    $(this).addClass('current');
                    $('.content-archive-blog .container').html(response);
                },
    
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                },
            });
        })
    }

    //Categories dropdown
    function cateDropdown() {
        $('.cate-mobile .list-cate').slideUp();
        $('body').on('click', '.cate-mobile .drop-cate', function (e) {
            e.preventDefault();
                $('.cate-mobile .list-cate').slideToggle(300);
        });

        $(document).click(function (event) {
            if (!$(event.target).closest(".cate-mobile .list-cate, .cate-mobile .drop-cate").length) {
                $(".cate-mobile .list-cate").slideUp(300);
            }
        });
    }

    function clickPackages(){
        $('.open-poppup-ctf7').on('click',function () {
            var check = $(this).attr('id');
            $('.custom-contact-ctf7').addClass('open-poppup');
            if(check) {
                check= check.split('_').join(' ');
                $('#name-packages').val(check);
            }else{
                check = '';
                $('#name-packages').val(check);
            }
        });
    }
    
    $(document).ready(function () {
        paginationAjax();
        caseStudyAjaxFilter();
        menuClickMobile();
        whoSlider();
        clickToggleMenu();
        clickCopyLink();
        popPackages();
        cateDropdown();
        clickPackages();
    });
})(jQuery);
