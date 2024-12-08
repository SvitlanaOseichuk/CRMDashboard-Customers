document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const toggleButton = document.querySelector('.sidebar__toggle');
  const logo = document.querySelector('.sidebar__logo');

  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    if (sidebar.classList.contains('show')) {
      toggleButton.style.display = 'none';
    } else {
      toggleButton.style.display = 'block';
    }
  });
});