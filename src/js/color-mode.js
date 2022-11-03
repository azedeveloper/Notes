var icon = document.getElementById("icon")
var link = document.querySelector("link[rel~='icon']");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        icon.src ="assets/images/sun.png"
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
        link.href = 'assets/images/icon-dark.png'
    } else {
        icon.src = "assets/images/moon.png"
        link = document.createElement('link');
        link.rel = 'icon';
         document.getElementsByTagName('head')[0].appendChild(link);
        link.href = 'assets/images/icon-light.png'
    }
}