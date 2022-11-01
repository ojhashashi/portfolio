function myfunc(el) {
    var ans = el.nextElementSibling.style.display;

    el.nextElementSibling.style.display = (ans == none) ? "block" : "none";
}

function myfunc1(path) {
    console.log(path);

    var newpath = path.replace('128/128', '832/832');
    document.getElementById('image').src = newpath;
}