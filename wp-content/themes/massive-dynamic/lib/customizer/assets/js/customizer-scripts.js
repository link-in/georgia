var firstTime = false;
var saveCallbackFunction = null;
var should_load_after_callback = false;
pixflow_control_loading();
jQuery(document).ready(function ($) {
    "use strict";
    var $t = true;



    $('.accordion-section-content').niceScroll({
        horizrailenabled: false,
        cursorcolor: "rgba(204, 204, 204, 0.2)",
        cursorborder: "1px solid rgba(204, 204, 204, 0.2)",
        cursorwidth: "2px",
        railoffset: {top:0,left:10}
    });


    pixflow_create_add_element_btn();
    pixflow_themeVersion();
    
    var settingSvg = '<span class="mdb-settingsvg-2" > </span>';


    var saveCountDown,settingCountDown,
        pannelFlag=false ;


    function pixflow_hidePannel() {

        'use strict';
        if ( pannelFlag ) {
            $('body').click();
            var $target_el =  $('.customizer-btn.setting .cd-dropdown-wrapper') ;
            $target_el.removeClass('active-dropdown-view');
            setTimeout(function(){
                $target_el.css({
                    display: 'none'
                });
            } , 900);
        }

    }

    $('.customizer-btn.setting').click(function(){
        var $target_el = $(this).find('.cd-dropdown-wrapper') ;
        $target_el.css({
            display: 'block'
        });
        setTimeout(function(){
            $target_el.addClass('active-dropdown-view');
        } , 10);
    });

    $('.customizer-btn.setting').mouseleave(function() {

        settingCountDown = setTimeout(function () {

            pannelFlag = true;

            pixflow_hidePannel();

        }, 500);

    });


    $('.customizer-btn.setting').mouseenter(function() {
        pannelFlag = false;
    });

    $('.customizer-btn.setting').mouseover(function() {
        clearTimeout(settingCountDown);
    });

    $('#save-btn').mouseleave(function(){
        saveCountDown = setTimeout(function() {
            $('#save-btn .cd-dropdown-wrapper .circle').css('transition-duration','1ms');
        }, 500);
    });

    $('#save-btn').mouseover(function() {
        clearTimeout(saveCountDown);
    });

    $('body').click(function(){
        $('.cd-dropdown-wrapper ul li .cd-dropdown-option').css({'background-image':'none'});
    });

    $('.cd-dropdown-wrapper ul li:not(.description)').click(function(e){
        e.stopPropagation();
        $('.cd-dropdown ul li .circle').removeClass('expand');
        $(this).find('.circle').addClass('expand');
    });


    $('#customize-preview .customizer-btn .cd-dropdown-wrapper').mousemove(function(){
        $(this).prev().css({'display': 'none','top': '5px','opacity':'0'});
    });


    var customizerLoader = $('<div class="main-loader">' + 
	'<div class="showbox_loading"><div class="loader_loading">' +
            '<svg class="circular_loading" viewBox="25 25 50 50">' +
      '<circle class="path_loading" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>' +
            ' </svg><span>loading</span></div></div>' +
	'<div/>');
    $('.customizer-loading').css('display' , 'block');
    customizerLoader.appendTo('body');
    // open page on builder
    var leave_customizer_msg = "You're about to leave Site Setting",
        edit_content_msg = "You're about to edit content",
        add_element_msg = "You're about to add element";
    $(
        '.md-shortcode-bt-customizer,' +
        '.customizer-options-menu a.dashboard,' +
        '.customizer-options-menu a.builder,' +
        '.customizer-options-menu .close a'
    ).click(function(e){
        var $that = $(this);
        if($('#save').attr('value')!='Saved'){
            //dont remove this line
            should_load_after_callback = true;
            saveCallbackFunction = function(){
                var href = $that.attr('href');
                if(typeof href == 'undefined' || href == ''){
                    window.location = wp.customize.previewer.previewUrl() + '?mbuilder=true'
                }else{
                    window.location = $that.attr('href');
                }
            }
            if($that.hasClass('md-shortcode-bt-customizer')){
                var leave_msg = add_element_msg;
            }else if($that.hasClass('builder')){
                var leave_msg = edit_content_msg;
            }else{
                var leave_msg = leave_customizer_msg;
            }
            pixflow_messageBox(leave_msg,'','Would you mind save your changes before leaving?','Update First',function () {
                $(window).unbind('beforeunload');
                $('#save-btn').click();
            },'Just Leave',function(){
                $(window).unbind('beforeunload');
                var href = $that.attr('href');
                if(typeof href == 'undefined' || href == ''){
                    window.location = wp.customize.previewer.previewUrl() + '?mbuilder=true'
                }else{
                    window.location = $that.attr('href');
                }
            },function () {
                return false;
            });
            e.preventDefault();
            return false;
        }

    });
    $('.customizer-btn.builder').click(function(){
        if(should_load_after_callback) {
            saveCallbackFunction = function() {
                if (wp.customize.previewer.previewUrl().search(/[?]/) == -1) {
                    window.location = wp.customize.previewer.previewUrl() + '?mbuilder=true';
                } else {
                    window.location = wp.customize.previewer.previewUrl() + '&mbuilder=true';
                }
            }
        }else{
            if (wp.customize.previewer.previewUrl().search(/[?]/) == -1) {
                window.location = wp.customize.previewer.previewUrl() + '?mbuilder=true';
            } else {
                window.location = wp.customize.previewer.previewUrl() + '&mbuilder=true';
            }
        }
    });


    $('li.close a.customizer-btn').attr('href',wp.customize.previewer.previewUrl());
});

function pixflow_themeVersion() {
    var mdThemeVersion = customizerValues.md_theme_version;
    $('#customize-controls').append('<div class="md-theme-version"><span >'+ customizerValues.md_version_customizer_content + mdThemeVersion + '</span>'+'<a target="_blank" href="https://themeforest.net/item/massive-dynamic-wordpress-website-builder/13739153" >'+ customizerValues.md_version_customizer_content_2 +'</a></div>');
}
function pixflow_add_element() {
    if(wp.customize.previewer.previewUrl().search(/[?]/)==-1) {
        var btn_location = wp.customize.previewer.previewUrl() + '?mbuilder=true';
    }else{
        var btn_location = wp.customize.previewer.previewUrl() + '&mbuilder=true';
    }
    $('.md-shortcode-bt-customizer').attr('href',btn_location);
}

function pixflow_control_loading(){
        setTimeout(function(){
            document.querySelector('.wp-full-overlay').classList.add('show_customizer');
            document.querySelector('.customizer-options-menu').classList.add('show_customizer');
        } , 5000 );
}
function pixflow_create_builder_bar() {
    var close_svg = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 14 15" style="enable-background:new 0 0 14 15;" xml:space="preserve"><style type="text/css">.st0{fill:#FFFFFF;}</style><polygon class="st0" points="14,0.7 13.2,0 7,6.7 0.8,0 0,0.7 6.3,7.5 0,14.3 0.8,15 7,8.3 13.2,15 14,14.3 7.7,7.5 "/></svg>';
    var customizer_options_menu = document.createElement('div');
    customizer_options_menu.setAttribute('class', 'customizer-options-menu');
    customizer_options_menu.innerHTML = '<div class="customizer-left-menu">' +
        '<ul>' +
        '<li class="massive-brand"><a class="logo" href="http://pixflow.net/products/massive-dynamic/" target="_blank"><img src="' + customizerSentences.logo_path + '" alt="massive logo"></a></li>' +
        '<li><a class="customizer-btn import"><span class="symbol">' + customizerSentences.demos + '</span></a></li>' +
        '<li><a class="customizer-btn setting" id="page-option-btn"><span class="text">Page setting</span><div class="save-loading"></div></a></li>' +
        '<li><a class="customizer-btn dashboard" href="' + customizerSentences.adminURL + '" ><span class="symbol"></span><span class="text">' + customizerSentences.dashboard + '</span></a></li>' +
        '<li><a class="customizer-btn builder"><span class="symbol">' + customizerSentences.edit_content + '</span></a></li>' +
        '</ul></div>' +
        '<div class="customizer-right-menu">' +
        '<ul>' +
        '<li class="customizer-preview-btn"><a class="collaps customizer-btn"></span><span class="symbol" >Preview</span></a></li>' +
        '<li class="customizer-publish-btn"><a class="customizer-btn" id="save-btn"><span class="text"> ' + customizerSentences.saveAndView + '</span><div class="save-loading"></div></a></li>' +
        '<li class="close"><a class="customizer-btn" href="#">' + close_svg + '</a></li>' +
        '</ul></div>';

    document.body.appendChild(customizer_options_menu);

    var settingHtml= document.createElement('div');
    settingHtml.setAttribute('class','cd-dropdown-wrapper');
    settingHtml.setAttribute('id','massive-page-setting-drop');
    settingHtml.innerHTML = '<nav class="cd-dropdown">' +
        '<ul>' +
        '<li class="general-page-setting"><div class="circle"></div><a href="#"><span>'+customizerSentences.generalPageSetting+'</span><span class="cd-dropdown-option"></span></a></li>' +
        '<li class="unique-page-setting"><div class="circle"></div><a href="#"><span>'+customizerSentences.uniquePageSetting+'</span><span class="cd-dropdown-option"></span></a></li>' +
        '</ul>' +
        '</nav>';

    document.querySelector('.customizer-btn.setting').appendChild(settingHtml);

}
function pixflow_create_profile_bar(){
    var header = document.createElement('div');
    header.setAttribute('class','customizer-header');
    header.innerHTML = "<div class='pic'><a class='notify-win'>"+customizerSentences.avatarImage+"</a></div>" +
        "<p class='name'>"+customizerSentences.fullname+"</p><a href='"+customizerSentences.edit_profile_customizer+"' class='edit-profile-customizer' >"+customizerSentences.edit_profile+"</a>";
    document.getElementById('customize-controls').insertBefore(header,document.getElementById('customize-header-actions'));
}
function pixflow_create_add_element_btn(){
    var md_shortcodes_button = customizerValues.md_shortcodes_button_customizer;
    var add_element = document.createElement('a');
    add_element.setAttribute('class','md-shortcode-bt-customizer');
    add_element.innerHTML = '<span class="md-shortcode-btn-text">'+ md_shortcodes_button +'</span>';
    document.getElementById('customize-controls').appendChild(add_element);
    pixflow_add_element();
}

pixflow_create_builder_bar();
pixflow_create_profile_bar();
