google.charts.load('current', {'packages':['corechart']});

// Calls Charts
google.charts.setOnLoadCallback(loadPartChart);
google.charts.setOnLoadCallback(loadStyleChart);




// Video Part Chart - About Page
function loadPartChart() {
let data = google.visualization.arrayToDataTable([
  ['Part', 'Amount'],
  ['One', 8],
  ['Two', 17],
  ['Three or more', 7]
]);

let options = {
  title:`Previous Winner's Part Production`,
  backgroundColor: '#cad2c5',
  fontSize: 12,
  width: 370,
  colors: ['#fca311', '#023047', '#eb5e28']
};

let chart = new google.visualization.PieChart(document.getElementById('partChart'));
  chart.draw(data, options);
};





// Style Chart - About Page
function loadStyleChart() {
  let data = google.visualization.arrayToDataTable([
    ['Style', 'Amount'],
    ['Vert', 4],
    ['Street', 23],
    ['Mix of Both', 5]
  ]);
  
  let options = {
    title:`Previous Winner's Skate Style`,
    backgroundColor: '#cad2c5',
    fontSize: 12,
    width: 370,
    colors: ['#fca311', '#023047', '#eb5e28']
  };
  
  let chart = new google.visualization.PieChart(document.getElementById('styleChart'));
    chart.draw(data, options);
  };
