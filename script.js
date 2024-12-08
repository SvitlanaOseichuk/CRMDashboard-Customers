document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const toggleButton = document.querySelector('.sidebar__toggle');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  
  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    if (sidebar.classList.contains('show')) {
      toggleButton.style.display = 'none';
    } else {
      toggleButton.style.display = 'block';
    }
  });

  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
      sidebar.classList.remove('show');
      hamburgerMenu.style.display = 'flex';
    }
  });

  const filterLink = document.getElementById('filter-active');
  const rows = document.querySelectorAll('.customers__table tbody tr');

  filterLink.addEventListener('click', (event) => {
    event.preventDefault(); 

    if (filterLink.textContent.trim() === 'Active Members') {
      rows.forEach(row => {
        const statusCell = row.querySelector('.status');
        if (statusCell && statusCell.classList.contains('status--active')) {
          row.style.display = ''; 
        } else {
          row.style.display = 'none'; 
        }
      });
      filterLink.textContent = 'Show All'; 
    } else {
      rows.forEach(row => {
        row.style.display = ''; 
      });
      filterLink.textContent = 'Active Members'; 
    }
  });
});