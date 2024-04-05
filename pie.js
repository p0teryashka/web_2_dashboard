function drawPieDiagram(container, percentValue, valueName, title) {
    return new Chart(container, {
        plugins: [ChartDataLabels],
        type: 'pie',
        data: {
        labels: [valueName],
        datasets: [{
            data: [percentValue, 100 - percentValue],
            borderWidth: 1,
            backgroundColor: [
                'rgba(54, 162, 235)',
                'rgba(127, 127, 127)',
            ]
        }]
        },
        options: {
            plugins: {
                //legend: { display: false },
                title: {
                    display: true,
                    text: title
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