/**
 * Created by session1 on 10/8/15.
 */
google.load('visualization', '1', {packages: ['corechart', 'bar']});
google.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = google.visualization.arrayToDataTable([
        ['City', 'Applications Submitted',],
        ['Phoenix', 25],
        ['Fort Mojave', 20],
        ['Tucson', 20],
        ['Mesa', 90],
        ['Avondale', 50]
    ]);

    var options = {
        title: 'Number of 2015 AZ FASFA Application Submissions',
        chartArea: {width: '50%'},
        hAxis: {
            title: 'Applications Submitted',
            minValue: 0
        },
        vAxis: {
            title: 'City'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

    chart.draw(data, options);
}