var img = document.getElementsByClassName('preview');

console.log(img);

var clickOnImg = function (event) {
    var path = event.target.getAttribute('src');

    var popup = document.getElementById('popup');
    popup.style.display = 'block';

    document.getElementById('popup-img').setAttribute('src', path);

}

for (var imgItem of img) {
    console.log(imgItem)

    imgItem.addEventListener('click', clickOnImg);
}

document.getElementById('close').addEventListener('click', function () {
    var popup = document.getElementById('popup');

    popup.style.display = 'none';
})
