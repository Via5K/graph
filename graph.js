let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Pizza', 'Home', 'Burger', 'Lozia', 'Pizza', 'Home', 'Burger', 'Lozia', 'Pizza', 'Home', 'Burger', 'Lozia', 'Pizza', 'Home', 'Burger', 'Lozia', 'Pizza', 'Home', 'Burger', 'Lozia', 'Pizza', 'Home', 'Burger', 'Lozia'];
let ColorHex = ['#FB3640', '#EFCA08', '#43BBA8', '#253D5B'];
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [930, 170, 450, 240, 300, 150, 410, 270, 300, 110, 410, 620, 900, 500, 420, 250, 350, 10, 40, 210, 340, 105, 470, 280],
            backgroundColor: ColorHex
        }],
        labels: labels
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom'
        },
    }
});