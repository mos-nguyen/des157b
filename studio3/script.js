$(function() {
    console.log('reading js');
    'use strict';

    $('#headband').draggable({revert: "invalid"});
    $('#pink-main').draggable({revert: "invalid"});
    $('#pink-boots').draggable({revert: "invalid"});

    $('#green-hat').draggable({revert: "invalid"});
    $('#green-main').draggable({revert: "invalid"});
    $('#green-boots').draggable({revert: "invalid"});
    $('#green-misc').draggable({revert: "invalid"});

    $('#bow').draggable({revert: "invalid"});
    $('#purple-main').draggable({revert: "invalid"});
    $('#purple-boots').draggable({revert: "invalid"});
    $('#purple-misc').draggable({revert: "invalid"});
    
    $('#drop-zone').droppable();
    $('#hat-zone').droppable();
    $('#misc-zone').droppable();
    $('#boots-zone').droppable();
    $('#main-zone').droppable();
    
});