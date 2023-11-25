window.fwSettings={
    'widget_id':123
};

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://euc-widget.freshworks.com/widgets/123.js';
script.async = true;
script.defer = true;
document.currentScript.insertAdjacentElement('afterend', script);