const themes = {
  light: {
    '--bg-color': '#fff',
    '--text-color': '#000',
    '--button-bg': '#f0f0f0',
    '--button-text': '#000',
    '--button-hover': '#ddd',
  },
  dark: {
    '--bg-color': '#121212',
    '--text-color': '#fff',
    '--button-bg': '#333',
    '--button-text': '#fff',
    '--button-hover': '#555',
  },
  colorful: {
    '--bg-color': '#ffefd5',
    '--text-color': '#00008b',
    '--button-bg': '#ff69b4',
    '--button-text': '#fff',
    '--button-hover': '#ff1493',
  },
};

function applyTheme(themeName) {
  const theme = themes[themeName];
  if (!theme) return;

  Object.keys(theme).forEach((varName) => {
    document.documentElement.style.setProperty(varName, theme[varName]);
  });

  localStorage.setItem('calculatorTheme', themeName);
}

// Binding theme switching buttons
document.querySelectorAll('.theme-switcher button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const selectedTheme = btn.dataset.theme;
    applyTheme(selectedTheme);
  });
});
