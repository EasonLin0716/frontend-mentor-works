<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import MoonIcon from './MoonIcon.svelte';
  const fontList: string[] = ['Sans Serif', 'Serif', 'Mono'];
  const dispatch = createEventDispatcher();
  let isDarkMode: boolean = false;
  let showFontSelects: boolean = false;
  let activeFontIndex: number = 0;
  const hideFontSelects = () => {
    showFontSelects = false;
  };
  $: activeFont = fontList[activeFontIndex];
  $: dispatch('fontChange', {
    newFontStyle: activeFont,
  });
  $: if (showFontSelects) {
    window.addEventListener('click', hideFontSelects);
  } else {
    window.removeEventListener('click', hideFontSelects);
  }
  $: {
    if (isDarkMode) {
      document.documentElement.classList.add('is-dark');
    } else {
      document.documentElement.classList.remove('is-dark');
    }
  }
</script>

<div class="header">
  <div class="left">
    <img src="./images/logo.svg" alt="logo" width="32" height="36.5" />
  </div>
  <div class="right">
    <div class="font-toggler">
      <button
        class="font-toggler-btn"
        on:click|stopPropagation={() => (showFontSelects = !showFontSelects)}
      >
        <span class="active-font">{activeFont}</span>
        <img src="./images/icon-arrow-down.svg" alt="arrow down icon" />
      </button>
      {#if showFontSelects}
        <div
          class="font-selects"
          role="button"
          tabindex="0"
          on:click|stopPropagation
          on:keydown|stopPropagation
        >
          {#each fontList as font, index}
            <button
              type="button"
              on:click={() => {
                activeFontIndex = index;
                hideFontSelects();
              }}
              on:keydown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  activeFontIndex = index;
                  hideFontSelects();
                }
              }}
            >
              {font}
            </button>
          {/each}
        </div>
      {/if}
    </div>
    <hr />
    <div class={'dark-mode-wrapper' + (isDarkMode ? ' is-dark' : '')}>
      <button
        class="dark-mode-toggler"
        on:click={() => (isDarkMode = !isDarkMode)}
      >
        Toggler
        <div class="circle"></div>
      </button>
      <MoonIcon {isDarkMode} />
    </div>
  </div>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 737px;
    width: 100%;
    margin-bottom: 52px;
  }

  .right {
    display: flex;
    align-items: center;
    gap: 26px;
  }
  .font-toggler {
    position: relative;
    width: 122px;
  }
  .font-toggler-btn {
    display: flex;
    align-items: center;
    justify-content: end;
    width: 100%;
    gap: 18px;
  }
  .active-font {
    color: var(--black-200);
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    flex-grow: 1;
    text-align: right;
  }
  .dark-mode-toggler {
    width: 40px;
    height: 20px;
    background-color: var(--gray-300);
    font-size: 0;
    border-radius: 10px;
    position: relative;
  }

  .dark-mode-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .dark-mode-wrapper.is-dark .dark-mode-toggler {
    background-color: var(--purple);
  }

  .dark-mode-wrapper.is-dark .circle {
    transform: translateX(20px);
  }

  .circle {
    --circle-bg: #fff;
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: var(--circle-bg);
    border-radius: 50%;
    top: 3px;
    left: 3px;
    transform: translateX(0);
    will-change: transform;
    transition: transform 0.3s;
  }

  .font-selects {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    position: absolute;
    top: 32px;
    left: 0;
    z-index: 1;
    gap: 16px;
    border-radius: 16px;
    background-color: var(--white);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid var(--gray-200);
  }

  .font-selects button {
    font-size: 16px;
  }
  hr {
    height: 32px;
    width: 1px;
    border-color: var(--gray-200);
  }

  @media (max-width: 430px) {
    .header {
      margin-bottom: 24px;
    }
  }
</style>
