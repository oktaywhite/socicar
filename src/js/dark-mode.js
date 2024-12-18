document.addEventListener('DOMContentLoaded', () => {
    const lightSwitch = document.querySelector('.light-switch');
    if (localStorage.getItem('dark-mode') === 'true') {
      lightSwitch.checked = true;
      document.documentElement.classList.add('dark');
    }
    lightSwitch.addEventListener('change', () => {
      if (lightSwitch.checked) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('dark-mode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('dark-mode', 'false');
      }
    });
  });