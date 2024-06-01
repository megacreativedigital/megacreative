// document.addEventListener('scroll', function () {
//     const heroImage = document.getElementById('heroImage');
//     const newSrc = './assets/image/utilities/mac.png';
//     const oldSrc = './assets/image/utilities/ss.png';
//     if (window.scrollY > 80) {
//         heroImage.src = newSrc;
//         heroImage.classList.add('small-image');
//     } else {
//         heroImage.src = oldSrc;
//         heroImage.classList.remove('small-image');
//     }
// });

document.addEventListener('scroll', function () {
    const heroImage = document.getElementById('heroImage');
    const newSrc = './assets/image/utilities/mac.png';
    const oldSrc = './assets/image/utilities/ss.png';

    if (window.scrollY > 80) {
        if (heroImage.src.endsWith('ss.png')) {
            heroImage.style.opacity = 0;
            heroImage.src = newSrc;
            heroImage.style.opacity = 1;
        }
        heroImage.classList.add('small-image');
    } else {
        if (heroImage.src.endsWith('mac.png')) {
            heroImage.style.opacity = 0;
            heroImage.src = oldSrc;
            heroImage.style.opacity = 1;
        }
        heroImage.classList.remove('small-image');
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const xhr = new XMLHttpRequest();
    let runningCardPatch = "component/running-card.html"
    xhr.open("GET", runningCardPatch, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("run-card-side").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});