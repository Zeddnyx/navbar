const Menutoggle = document.querySelector('.toggle input');
const nav = document.querySelector('nav ul');

Menutoggle.addEventListener('click',function() {
   nav.classList.toggle('slide');
   // toggle : jika tidak ada class maka tambah, jika ada
   //          class maka hilangkan 
});
