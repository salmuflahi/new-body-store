const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.style.width = '250px';  // open sidebar
});

closeBtn.addEventListener('click', () => {
  sidebar.style.width = '0';      // close sidebar
});
