const btn = document.querySelector('.btn');
const content = document.querySelector('#content-container');
const letter = document.querySelectorAll('#leter');


btn.addEventListener('click', () => {
    content.style.marginTop = "100px";
    content.style.width = "800px";
    content.style.height = "500px";
    content.style.transition = "all 1s ease-in-out";

    letter.forEach(lett => {
        lett.style.marginTop = "300px";
        lett.style.marginLeft = "80px";
        lett.style.transform = "rotate(0deg)";
        lett.style.transition = "all 1s ease-in-out";
    })
})