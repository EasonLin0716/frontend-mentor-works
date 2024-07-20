<script lang="ts">
  import Header from './lib/Header.svelte';
  import SearchInput from './lib/SearchInput.svelte';
  import NoDefinitionFound from './lib/NoDefinitionFound.svelte';
  let fontStyle: string = 'is-sans-serif';
  const setFontStyle = (event: CustomEvent) => {
    const { newFontStyle } = event.detail;
    fontStyle = `is-${newFontStyle.split(' ').join('-').toLowerCase()}`;
  };
</script>

<div class={`wrapper ${fontStyle}`}>
  <Header on:fontChange={setFontStyle} />
  <main>
    <SearchInput />
    <NoDefinitionFound />
  </main>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 58px;
  }
  main {
    max-width: 737px;
    width: 100%;
  }
</style>
