// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

//= require jquery3
//= require popper
//= require bootstrap-sprockets

/*
(function openCategory(evt, categ) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(categ).style.display = "block";
    evt.currentTarget.className += " active";
})(); 
*/
$(document).ready(function () {

    $('#tab > li').next().hide();
    $('#tab > li:first').next().show();
    $('#tab> li').click(function() {
    $('#tab > li').next().hide();
    $(this).next().show();
 
 });
 
$(".dropdown").on('click',function(){
    console.log("j/'ai cliqué la DDL!")
    $(".dropdown-content").toggle();
    
 });	

 $(function() {
    $('#login').click(function() {
        console.log("Je suis là!")
        $('.dialog-form').show(500);
    });
} ); 


 })
 
