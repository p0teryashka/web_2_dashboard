function drawGraph(container, dataList, labels) {
    return new Chart(container, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Общее количество выпускников',
                data: dataList,
                fill: false,
                borderColor: 'rgba(54, 162, 235)',
                tension: 0.1
            }]
        }
    });
}