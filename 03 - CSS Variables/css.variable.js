
window.onload = function() {
    const inputs = document.querySelectorAll('.controls input');
    inputs.forEach(input => input.addEventListener('change', handleUpdate));    
};

function handleUpdate() {
    console.log(this.value);
}


