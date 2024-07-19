<script lang="ts">
  import Header from './lib/Header.svelte';
  import SearchInput from './lib/SearchInput.svelte';
  import NoDefinitionFound from './lib/NoDefinitionFound.svelte';
</script>

<div class="wrapper">
  <Header />
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
