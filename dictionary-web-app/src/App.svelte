<script lang="ts">
  import Header from './lib/Header.svelte';
  import SearchInput from './lib/SearchInput.svelte';
  import WordDefinition from './lib/WordDefinition.svelte';
  import NoDefinitionFound from './lib/NoDefinitionFound.svelte';
  type WordData = {
    word: string;
    phonetic: string;
    pronunceAudio: string;
    meanings: any[];
    sourceUrls: string[];
  };
  let fontStyle: string = 'is-sans-serif';
  let showNoDefinitionFound: boolean = false;
  const wordData: WordData = {
    word: '',
    phonetic: '',
    pronunceAudio: '',
    meanings: [],
    sourceUrls: [],
  };
  const setFontStyle = (event: CustomEvent) => {
    const { newFontStyle } = event.detail;
    fontStyle = `is-${newFontStyle.split(' ').join('-').toLowerCase()}`;
  };
  const handleGetWord = (event: CustomEvent) => {
    wordData.word = event.detail.word;
    wordData.phonetic = event.detail.phonetic;
    wordData.pronunceAudio = event.detail.pronunceAudio;
    wordData.meanings = event.detail.meanings;
    wordData.sourceUrls = event.detail.sourceUrls;
    showNoDefinitionFound = false;
  };
</script>

<div class={`wrapper ${fontStyle}`}>
  <Header on:fontChange={setFontStyle} />
  <main>
    <SearchInput
      on:getWord={handleGetWord}
      on:noFound={() => (showNoDefinitionFound = true)}
    />
    {#if showNoDefinitionFound === true}
      <NoDefinitionFound />
    {:else if wordData.word !== ''}
      <WordDefinition {...wordData} />
    {/if}
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
  @media (max-width: 768px) {
    .wrapper {
      padding-left: 40px;
      padding-right: 40px;
    }
  }
  @media (max-width: 430px) {
    .wrapper {
      padding: 24px 24px 85px;
    }
  }
</style>
