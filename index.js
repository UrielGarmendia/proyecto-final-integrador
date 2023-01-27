let items = document.getElementsByClassName('navigation');
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseover', function (e) {
        this.style.color = '#0f0a0a';
        this.style.backgroundColor = '#ffffeb'
        this.style.fontSize = '18px'
    });
    items[i].addEventListener('mouseleave', function (e) {
        this.style.color = '#ffffeb';
        this.style.backgroundColor = 'transparent'
        this.style.fontSize = '17px'
    });
}






// let lista = document.querySelectorAll('li.navigation');
// let links = document.querySelectorAll('a.links')

// console.log(lista);

// for ( i = 0; i == lista.length; i++ ) {
// // lista.onmouseover = function () {   
//         console.log(i);
//         lista[i].style.backgroundColor = 'white';
//         lista[i].style.color = 'black';
//         links[i].style.color = 'black';
//     // }
// };



// const lista = Array.from(document.getElementsByClassName('navigation'));
// console.log(lista); /

// lista.forEach(li => {
//   li.style.backgroundColor = 'white';
//   li.style.color = 'black';
// });