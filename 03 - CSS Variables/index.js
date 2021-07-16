$root = document.querySelector(':root');
$controls = document.querySelector('.controls')


$controls.addEventListener('input', setControl); 


function setControl(event) {
    if(event.target.id == "blur") {
    $root.style.setProperty('--blur', `${event.target.value}px`);
    } else if (event.target.id == "spacing") {
    $root.style.setProperty('--spacing', `${event.target.value}px`);
    } else {
    $root.style.setProperty('--base-color', `${event.target.value}`);
    }
}