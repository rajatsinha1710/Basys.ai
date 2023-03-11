// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["September", "After September"],
    datasets: [{
      data: [40, 15, 45],
      backgroundColor: ['#4e73df', '#1cc88a', '#858796'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#5a5c69'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    rotation: 1* Math.PI,
    circumference: 1*Math.PI,
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
