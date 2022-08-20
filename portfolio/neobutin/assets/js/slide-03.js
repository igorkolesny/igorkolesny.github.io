const legengs = document.querySelectorAll('.groups');

function init() {
  gsap.set('.slide', { opacity: 0 });

  gsap.set('.slide-head', { opacity: 0, y: -20 });
  gsap.set('.slide-03-title', { opacity: 0, y: -20 });

  gsap.set('.slide-03-note', { opacity: 0, y: -20 });
  

  gsap.set('.slide-03-chart', { opacity: 0, y: -10 });

  legengs.forEach((item) => {
    gsap.set(item, { opacity: 0, x: -50 });
  });

  
  animation();

}

function animation() {


  chart1Init();

  const timeline = gsap.timeline({repeat: 0, onComplete: () => { 
      const timeLine2 =  gsap.timeline({ repeat: 0, duration: 0.6 })
      timeLine2.to(addChartData2(), {onComplete: () => {
        const timeLine3 = gsap.timeline({repeat: 0, duration: 0.6})
        timeLine3.to(addChartData1())
      }}); 
    } 
  });




  timeline.to('.slide', { opacity: 1, duration: 0.6 });
  timeline.to('.slide-head', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.slide-03-title', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.slide-03-note', { opacity: 1, y: 0, duration: 0.6 });
  timeline.to('.slide-03-chart', { opacity: 1, y: 0, duration: 0.6 });

  legengs.forEach((item, i) => {
    if (i === 0) {
      timeline.to(item, { opacity: 1, x: 0, duration: 0.6 });
    } else {
      timeline.to(item, { opacity: 1, x: 0, duration: 0.6 });
    }
  });

}





let chart1;
let chartInit1 = false;
let chartInit2 = false;

function chart1Init() {
  Chart.defaults.font.size = 16;
  Chart.defaults.font.weight = '600';
  const ctx = document.getElementById('chart-1').getContext('2d');
  const data = {
    labels: [
      'Дисфагия',
      ['Отрыжка', 'воздухом',],
      ['Ощущение', 'кома в горле'],
      ['Тошнота'],
      ['Вздутие живота'],
      ['Одышка в', 'положении лёжа'],
    ],
    datasets: []
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scaleFontColor: 'red',
    scales: {
      x: {
        grid: {
          display: false,
          color: '#ff0000'
        },
        ticks: {
          font: {
            size: 15,
            weight: 500,
            color: '#000'
          }
        },
      },
      y: {
        beginAtZero: true,
        min: 0,
        max: 25,
        grid: {
          display: true,
        },
        ticks: {
          stepSize: 5,
          font: {
            size: 14,
            weight: 400,
            color: "#000"
          },
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      datalabels: {
        color: '#fff',
        anchor: 'end',
        align: 'bottom',
        offset: 10,
        labels: {
          title: {
            font: {
              weight: 'normal',
              size: 16,
            },
          },
        },
      },
    },
  };

  chart1 = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options,
    plugins: [ChartDataLabels],
  });
}

function addChartData2() {
  if (chartInit2) return;
  chartInit2 = true;
  chart1.data.datasets.push({
    data: slide03ChartData2,
    backgroundColor: '#DE9FC8',
  });

  chartsUpdate();
}

function addChartData1() {
  if (chartInit1) return;
  chartInit1 = true;
  chart1.data.datasets.push({
    data: slide03ChartData1,
    backgroundColor: '#621151',
  });

  chartsUpdate();
}

function chartsUpdate() {
  chart1.update();
}

init();

