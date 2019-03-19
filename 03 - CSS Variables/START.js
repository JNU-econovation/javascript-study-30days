const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
 const picMeasure = this.dataset.sizing || '';
 document.documentElement.style.setProperty(`--${this.name}`, this.value + picMeasure);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));