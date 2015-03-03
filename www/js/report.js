
function initialize() {
    $('#btnReportForm').click(function() {
        toggle_visibility('reportform');
    });
    
    $('#btnReport').click(function() {
        report(playerMarker.getPosition(), $('#facility').val());
    });
}

function report(pos, type) {
    /*
    var reports = [];
    if (localStorage.getItem('reports') !== null) {
        reports = localStorage['reports'];
    }
    
    reports.push({
        type: type,
        coordinate: pos
        });
        
    localStorage['reports'] = JSON.stringify(reports);
    */
    $.ajax({
        url: 'http://robotex.altervista.org/tesi/report.php',
        data: { type: type, lat: pos.lat(), lng: pos.lng(), session_id: localStorage['session_id'] },
        jsonp: 'callback',
        dataType: 'jsonp',
    }).done(function( data ) {
        playerData['points'] = playerData['points'] + data['bonus_points'];
        savePlayerData();
        alert('Punti bonus: ' + data['bonus_points'] + '\nAttuali: ' + playerData['points']);
    });
}

$( initialize );