document.addEventListener('DOMContentLoaded', () => {
const ctx = document.getElementById('cleanChart');
if (!ctx) return;

// Palette tokens aligned with CSS custom theme variables
const COLOR_HARVEST = '#28523b';   // --color-harvest-700
const COLOR_TERRACOTTA = '#c25832'; // --color-terracotta-500 (peak highlight)
const COLOR_MUTED = '#94a3b8';      // Muted color for partial final rows

const labels = ['C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C08', 'C09', 'C10', 'C11', 'C12*', 'C13*'];
const weights = [1214.5, 1239.0, 1206.0, 1214.0, 1216.5, 1261.0, 1236.0, 1206.0, 1233.0, 1249.5, 1236.0, 569.5, 814.5];

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            data: weights,
            backgroundColor: weights.map((_, idx) => {
                if (idx === 5) return COLOR_TERRACOTTA; // Peak density (Columna 06)
                if (idx >= 11) return COLOR_MUTED;      // Partial stacks (Columns 12 & 13)
                return COLOR_HARVEST;
            }),
            borderRadius: 0,
            barThickness: 18,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: '#1a1c18',
                titleFont: { family: 'JetBrains Mono', size: 11 },
                bodyFont: { family: 'JetBrains Mono', size: 11 },
                displayColors: false,
                callbacks: {
                    label: (context) => `Peso Neto: ${context.raw} kg`
                }
            }
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#55604c' }
            },
            y: {
                grid: { color: 'rgba(26, 28, 24, 0.08)' },
                ticks: { font: { family: 'JetBrains Mono', size: 10 }, color: '#55604c' }
            }
        }
    }
});


});