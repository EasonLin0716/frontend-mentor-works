const switchBar = document.querySelector(".switch-bar");
const THEME_HREF_PREFIX = "assets/css/theme-";

switchBar.addEventListener("click", changeTheme);

function changeTheme() {
  const theme = document.querySelector("link#theme");
  if (!theme) {
    console.error("[changeTheme Error] theme not found");
    return false;
  }
  const themeNumber = Number(theme.href.replace(".css", "").slice(-1));
  if (Number.isNaN(themeNumber) || themeNumber > 3 || themeNumber < 1) {
    console.error("[changeTheme Error] theme number is not valid");
    return false;
  }
  const newThemeNumber = themeNumber === 3 ? 1 : themeNumber + 1;
  theme.href = `${THEME_HREF_PREFIX}${newThemeNumber}.css`;
}
