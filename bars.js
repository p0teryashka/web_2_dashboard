function drawBarsDiagram(container, dataList) {
    return new Chart(container, {
        type: 'bar',
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
            scales: {
                y: {
                beginAtZero: true
                }
            },
            plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Количество образовательных организаций'
                    }
            }
        }
    });
}
  