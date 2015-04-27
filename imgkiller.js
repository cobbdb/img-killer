function imgkiller() {
    var set = document.getElementsByTagName('img'),
        img, i, src;
    for (i = 0; i < set.length; i += 1) {
        img = set[i];
        src = img.getAttribute('src');
        img.removeAttribute('src');
        img.setAttribute('data-src', src);
    }
}
