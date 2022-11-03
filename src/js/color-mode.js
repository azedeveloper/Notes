var icon = document.getElementById("icon")
var github = document.getElementById("github")
var link = document.querySelector("link[rel~='icon']");

icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")) {
        github.src = "assets/images/github-light.png"
        icon.src ="assets/images/sun.png"
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
        link.href = 'assets/images/icon-dark.png'
    } else {
        github.src = "assets/images/github-dark.png"
        icon.src = "assets/images/moon.png"
        link = document.createElement('link');
        link.rel = 'icon';
         document.getElementsByTagName('head')[0].appendChild(link);
        link.href = 'assets/images/icon-light.png'
    }
}

