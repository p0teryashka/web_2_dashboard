function drawDoughnutDiagram(container, dataList) {
    let sum = 0;
    dataList.forEach(num => {
        sum += num;
    });
    return new Chart(container, {
        plugins: [ChartDataLabels],
        type: 'doughnut',
        data: {
        labels: ['Специалитет и бакалавриат', 'Магистратура', 'Среднее профессиональное'],
        datasets: [{
            data: dataList,
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)'
            ]
        }]
        },
        options: {
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Количество выпускников (всего: ' + sum + ')'
                },
                datalabels: {
                    display: true,
                    backgroundColor: '#fff',
                    borderRadius: 3,
                    font: {
                        size: 16,
                        color: 'red',
                        weight: 'bold',
                    }
                }
            }
        }
    });
}