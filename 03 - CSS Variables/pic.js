
function run() {
    const inputs = document.querySelectorAll('.controls input');
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
}

function handleUpdate() {
    const picSizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + picSizing);
}