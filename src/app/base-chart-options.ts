export const baseChartOptions: Highcharts.Options = {
    title: {
      text: 'Top Users'
    },
    subtitle: {
      text: 'past 3 days'
    },
    xAxis: {
      categories: ['Andy', 'Caitlin', 'Steve', 'Robin', 'George', 'Heather']
    },
    yAxis: {
      title: {
        text: 'Messages Sent'
      }
    },
    series: [{
      name: 'Messages',
      data: [150, 120, 75, 31, 18, 55]
    }, 
    {
        name: 'Logins',
        data: [43, 31, 18, 95, 93, 75]
      }]
  };