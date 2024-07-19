<script lang="ts">
  import logo from '../assets/logo.svg';
  import iconArrowDown from '../assets/icon-arrow-down.svg';
  import iconMoon from '../assets/icon-moon.svg';
</script>

<div class="header">
  <div class="left">
    <img src={logo} alt="logo" width="32" height="36.5" />
  </div>
  <div class="right">
    <button class="font-toggler">
      <img src={iconArrowDown} alt="arrow down icon" />
    </button>
    <button class="dark-mode-toggler">
      <img src={iconMoon} alt="moon icon" />
    </button>
  </div>
</div>

<style></style>
