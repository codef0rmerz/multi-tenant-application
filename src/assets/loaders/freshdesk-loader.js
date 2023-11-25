var hostname = window.location.hostname === 'localhost'
    ? window.overrideHostname || window.location.hostname
    : window.location.hostname;
var script = document.createElement('script');
script.src = 'assets/' + hostname + '/freshdesk.js';
document.currentScript.insertAdjacentElement('afterend', script);