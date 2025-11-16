const materias = ['Design Digital', 'Engenharia de Software', 'WEB I'];
const notas = [7.0, 9.0, 8.0];
const cores = [
    'rgba(255, 99, 132, 1)',
    'rgba(255, 206, 86, 0.6)',
    'rgba(75, 192, 192, 0.6)'
];
const bordas = [
    'rgba(255, 99, 132, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)'
];

const ctx = document.getElementById('graficoNotas').getContext('2d');

const ctx2 = document.getElementById('graficoBarra').getContext('2d');

const ctx3 = document.getElementById('graficoPie').getContext('2d');

const ctx4 = document.getElementById('graficoRosca').getContext('2d');

const ctx5 = document.getElementById('graficoLinha').getContext('2d');

const ctx6 = document.getElementById('graficoRadar').getContext('2d');

document.addEventListener("DOMContentLoaded", function () {
    // código dos gráficos aqui

    const graficoNotas = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Design Digital', 'Engenharia de Software', 'WEB I'],
            datasets: [
                {
                    data: [7, 9, 8],
                    label: 'Nota',
                    backgroundColor: cores,
                    borderColor: bordas,
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                datalabels: {
                    color: '#000', // Cor do texto
                    anchor: 'center',
                    align: 'center',
                    font: {
                        weight: 'bold'
                    },
                    formatter: function (value, context) {
                        const materia = context.chart.data.labels[context.dataIndex];
                        return `${materia}\n${value.toFixed(1)}`;
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 10,
                    grid: {
                        display: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        },
        plugins: [ChartDataLabels]
    });

});

const graficoBarra = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: materias,
        datasets: [{
            label: 'Nota',
            data: notas,
            backgroundColor: cores,
            borderColor: bordas,
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            datalabels: {
                color: '#000', // Cor do texto
                anchor: 'center',
                align: 'center',
                font: {
                    weight: 'bold'
                },
                formatter: function (value, context) {
                    const materia = context.chart.data.labels[context.dataIndex];
                    return `${materia}\n${value}`;
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    },
    plugins: [ChartDataLabels]
})

const graficoPie = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: materias,
        datasets: [{
            label: 'Nota',
            data: notas,
            backgroundColor: cores,
            borderColor: bordas,
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            datalabels: {
                color: '#000', // Cor do texto
                anchor: 'center',
                align: 'center',
                font: {
                    weight: 'bold'
                },
                formatter: function (value, context) {
                    const materia = context.chart.data.labels[context.dataIndex];
                    return `${materia}\n${value}`;
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});

const graficoRosca = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: materias,
        datasets: [{
            label: 'Nota',
            data: notas,
            backgroundColor: cores,
            borderColor: bordas,
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            datalabels: {
                color: '#000', // Cor do texto
                anchor: 'center',
                align: 'center',
                font: {
                    weight: 'bold'
                },
                formatter: function (value, context) {
                    const materia = context.chart.data.labels[context.dataIndex];
                    return `${materia}\n${value}`;
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});

const graficoLinha = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: materias,
        datasets: [{
            label: 'Nota',
            data: notas,
            fill: true,
            tension: 0.3,
            backgroundColor: cores,
            borderColor: bordas,
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            datalabels: {
                color: '#000', // Cor do texto
                anchor: 'center',
                align: 'center',
                font: {
                    weight: 'bold'
                },
                formatter: function (value, context) {
                    const materia = context.chart.data.labels[context.dataIndex];
                    return `${materia}\n${value}`;
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});

const graficoRadar = new Chart(ctx6, {
    type: 'radar',
    data: {
        labels: materias,
        datasets: [{
            label: 'Nota',
            data: notas,
            backgroundColor: cores,
            borderColor: bordas,
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            datalabels: {
                color: '#000', // Cor do texto
                anchor: 'center',
                align: 'center',
                font: {
                    weight: 'bold'
                },
                formatter: function (value, context) {
                    const materia = context.chart.data.labels[context.dataIndex];
                    return `${materia}\n${value}`;
                }
            }
        },
        scales: {
            r: {
                beginAtZero: true,
                max: 10,
                grid: {
                    display: false
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    },
    plugins: [ChartDataLabels]
});