const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

sideLinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sideLinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});


const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

const secondNavLinks = document.querySelectorAll('.second-nav .nav-item');
    secondNavLinks.forEach(item => {
        item.addEventListener('click', () => {
            secondNavLinks.forEach(link => {
                link.classList.remove('active');
            });
        item.classList.add('active');
    });
});

document.querySelectorAll('.custom-table th').forEach(header => {
    header.addEventListener('click', () => {
        const table = header.parentElement.parentElement.parentElement;
        const index = Array.prototype.indexOf.call(header.parentElement.children, header);
        const order = header.classList.contains('sort-asc') ? 'desc' : 'asc';

        Array.from(table.querySelectorAll('th')).forEach(th => th.classList.remove('sort-asc', 'sort-desc'));
        header.classList.toggle('sort-asc', order === 'asc');
        header.classList.toggle('sort-desc', order === 'desc');

        const rows = Array.from(table.querySelectorAll('tbody > tr'));
        rows.sort((a, b) => {
            const aText = a.children[index].textContent.trim();
            const bText = b.children[index].textContent.trim();

            return (aText > bText ? 1 : -1) * (order === 'asc' ? 1 : -1);
        });

        rows.forEach(row => table.querySelector('tbody').appendChild(row));
    });
});

function downloadTableAsCSV() {
    const table = document.getElementById('myTable');
        let csv = [];
        for (let i = 0; i < table.rows.length; i++) {
            let row = [], cols = table.rows[i].cells;
        for (let j = 0; j < cols.length; j++) {
            row.push(cols[j].innerText);
        }
        csv.push(row.join(','));
    }
        let csvFile = new Blob([csv.join('\n')], { type: 'text/csv' });
        let downloadLink = document.createElement('a');
        downloadLink.download = 'table.csv';
        downloadLink.href = window.URL.createObjectURL(csvFile);
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        downloadLink.click();
}

const lineCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Quantity',
                data: [30, 20, 60, 40, 60, 70, 50, 60, 70, 80, 90, 100],
                borderColor: '#009688',
                borderWidth: 2,
                fill: false,
                pointBackgroundColor: '#009688',
                pointBorderColor: '#009688',
                pointBorderWidth: 3,
                pointRadius: 4,
            },
            {
                label: 'SKus_Count',
                data: [20, 30, 40, 50, 60, 80, 70, 80, 60, 70, 80, 90],
                borderColor: '#ff5722',
                borderWidth: 2,
                fill: false,
                pointBackgroundColor: '#ff5722',
                pointBorderColor: '#ff5722',
                pointBorderWidth: 3,
                pointRadius: 4,
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Months',
                    color: '#333',
                    font: {
                        size: 14,
                        weight: 'bold',
                    }
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Value',
                    color: '#333',
                    font: {
                        size: 14,
                        weight: 'bold',
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Line Chart Analysis',
                color: '#333',
                font: {
                    size: 18,
                    weight: 'bold',
                }
            },
            legend: {
                display: true,
                labels: {
                    color: '#333',
                    font: {
                        size: 14,
                    }
                }
            }
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        }
    }
});

const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Quantity',
                data: [30, 20, 60, 40, 60, 70, 50, 60, 70, 80, 90, 100],
                backgroundColor: '#009688',
                borderColor: '#009688',
                borderWidth: 1,
            },
            {
                label: 'SKus_Count',
                data: [20, 30, 40, 50, 60, 80, 70, 80, 60, 70, 80, 90],
                backgroundColor: '#ff5722',
                borderColor: '#ff5722',
                borderWidth: 1,
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Months',
                    color: '#333',
                    font: {
                        size: 14,
                        weight: 'bold',
                    }
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Value',
                    color: '#333',
                    font: {
                        size: 14,
                        weight: 'bold',
                    }
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Bar Chart Analysis',
                color: '#333',
                font: {
                    size: 18,
                    weight: 'bold',
                }
            },
            legend: {
                display: true,
                labels: {
                    color: '#333',
                    font: {
                        size: 14,
                    }
                }
            }
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        }
    }
});
