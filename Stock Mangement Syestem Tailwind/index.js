var Bar_chart = {
    series: [{
    data: [40, 23, 28, 30, 15 ]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  colors:[
    "#C5109A",
    "#45fff9",
    "#cf8cff",
    "#3b2a82",
    "#f6e1ff",
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
    }
  },
  
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['Mobile', 'Smart Watch', 'Power Bank', 'Bag', 'Shirt',
    ],
  }
  };

  var chart = new ApexCharts(document.querySelector("#bar_chart"), Bar_chart);
  chart.render();



//   Area chart

var Area_chart = {
    series: [{
    name: 'Purchase Orders',
    data: [31, 40, 28, 51, 70]
  }, {
    name: 'Sales Orders',
    data: [11, 32, 45, 32, 160]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth'
  },
  xaxis: {
    type: 'datetime',
    categories: [ "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  };

  var chart = new ApexCharts(document.querySelector("#area_chart"), Area_chart);
  chart.render();

  
