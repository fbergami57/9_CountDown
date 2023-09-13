var light = window.document.getElementById('light')

function isBroken() {
    return light.src.indexOf('broken') > -1
}

function Turnon() {
    if(!isBroken()) {
    light.src = 'light_on.svg'}
}

function Turnoff() {
    if(!isBroken()){
    light.src='light_off.svg'}
}

light.addEventListener('click', Broken)

function Broken() {
    light.src='broken.svg';
}
