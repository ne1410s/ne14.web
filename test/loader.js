// Setup callback to the 
const script = document.createElement('script');
document.head.appendChild(script);
script.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js');
script.setAttribute('data-main', 'main');

// Define preload css
const style = document.createElement('style');
document.head.appendChild(style);
style.setAttribute('id', 'ne14-web-preload-css');
style.innerText = `
    ne14-tooltip [slot=reveal] { opacity: 0; }
`;

// Utilise shorthands
var tooltips = document.querySelectorAll('[data-toolip]');
for (var i = 0; i < tooltips.length; i++) {
    // todo: transform into 
}
