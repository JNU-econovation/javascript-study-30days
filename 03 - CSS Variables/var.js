const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
    const changeStyle = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + changeStyle);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
