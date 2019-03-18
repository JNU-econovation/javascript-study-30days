const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
 const picSize = this.dataset.sizing || '';
 document.documentElement.style.setProperty(`--${this.name}`, this.value + picSize);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));