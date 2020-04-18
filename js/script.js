// For Avoiding JS Lint Warnings
/* global $, alert, console */

$('document').ready(function(){
	
	"use strict";
	
	// Changing The Background-Color Of The Search Input Field On Focusng & Bluring
	
	$('input').focus(function(){
		$(this).css('background-color', '#A2A2A2');
	});
	
	$('input').blur(function(){
		$(this).css('background-color', '#FFF');
	});
	

 	// Triggering The "Nice Scroll" Library
    
    $('html').niceScroll({
        
        cursorcolor: '#A2A2A2',
        
        cursorwidth: '3px',
        
        cursorborder: '1px solid',
        
        cursorborderradius: 0
        
		});
	});