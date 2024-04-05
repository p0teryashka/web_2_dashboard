function drawSideBarsDiagram(container, dataList) {
    let labels = [];
    dataList.forEach(num => {
        labels.push(num + '%');
    });
    return new Chart(container, {
        type: 'bar',
        data: {
            labels: labels,
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
            indexAxis: 'y',
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Процент трудоустройства выпускников'
                }
            }
        }
    });
}