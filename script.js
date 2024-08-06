// Example JavaScript to initialize the charts (You can customize it as per your requirements)
document.addEventListener("DOMContentLoaded", function() {
    const liveCtx = document.getElementById('liveChart').getContext('2d');
    const historicalCtx = document.getElementById('historicalChart').getContext('2d');

    const liveChart = new Chart(liveCtx, {
        type: 'line',
        data: {
            labels: ['12:00', '12:05', '12:10', '12:15', '12:20'],
            datasets: [{
                label: 'Live Energy Consumption',
                data: [2.5, 2.6, 2.7, 2.8, 2.9],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const historicalChart = new Chart(historicalCtx, {
        type: 'bar',
        data: {
            labels: ['Device 1', 'Device 2', 'Device 3'],
            datasets: [{
                label: 'Historical Energy Consumption',
                data: [2.5, 3.0, 1.8],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
