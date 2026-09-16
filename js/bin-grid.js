
document.addEventListener('DOMContentLoaded', () => {
const binGrid = document.getElementById('binGrid');
const searchInput = document.getElementById('binSearch');

// 1. Render 37 Bins Matrix dynamically
if (binGrid) {
    let html = '';
    for (let i = 1; i <= 37; i++) {
        const binNum = i < 10 ? '00' + i : '0' + i;
        const is17 = i === 17;

        html += `
            <div class="bin-item bg-white border border-hairline p-2.5 flex flex-col justify-between hover:border-earth-900 transition-colors" data-bin="${binNum}">
                <div class="flex items-center justify-between mb-1">
                    <span class="font-mono font-semibold text-xs text-earth-900">#${binNum}</span>
                    <span class="w-1.5 h-1.5 rounded-full ${is17 ? 'bg-terracotta-500' : 'bg-harvest-700'}"></span>
                </div>
                <span class="text-[9px] font-mono text-earth-500">
                    ${is17 ? 'Auditado Ok' : 'Pila Ok'}
                </span>
            </div>
        `;
    }
    binGrid.innerHTML = html;
}

// 2. Real-time Live Search Filter
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase().trim();
        const items = document.querySelectorAll('.bin-item');
        items.forEach(item => {
            const id = item.getAttribute('data-bin').toLowerCase();
            item.style.display = id.includes(val) ? 'flex' : 'none';
        });
    });
}

// Global reset function for the search input
window.resetSearch = () => {
    if (searchInput) {
        searchInput.value = '';
        const items = document.querySelectorAll('.bin-item');
        items.forEach(item => item.style.display = 'flex');
    }
};


});