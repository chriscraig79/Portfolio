describe('theme toggle button', () => {
  beforeEach(() => {
    // reset DOM and localStorage
    document.documentElement.className = 'light';
    document.documentElement.style.colorScheme = '';
    document.body.innerHTML = '<button id="theme-toggle"></button>';
    localStorage.clear();

    const toggleButton = document.getElementById('theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', function () {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');

        if (isDark) {
          html.classList.remove('dark');
          html.classList.add('light');
          html.style.colorScheme = 'light';
          localStorage.setItem('theme', 'light');
        } else {
          html.classList.remove('light');
          html.classList.add('dark');
          html.style.colorScheme = 'dark';
          localStorage.setItem('theme', 'dark');
        }
      });
    }
  });

  test('toggles html class and localStorage value', () => {
    const button = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // initial state
    expect(html.classList.contains('light')).toBe(true);
    expect(localStorage.getItem('theme')).toBeNull();

    // first click -> dark mode
    button.click();
    expect(html.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    // second click -> light mode
    button.click();
    expect(html.classList.contains('light')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});

