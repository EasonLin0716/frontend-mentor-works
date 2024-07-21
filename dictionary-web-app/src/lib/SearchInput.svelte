<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import axios from 'axios';
  let searchWord: string = '';
  let isEmpty: boolean = false;
  const dispatch = createEventDispatcher();
  const handleSearchWord = async () => {
    if (searchWord.trim() === '') {
      isEmpty = true;
      return;
    }
    isEmpty = false;
    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`,
      );
      if (data.length === 0) {
        console.log('No definitions found');
      }
      const { word, phonetics, meanings, sourceUrls } = data[0];
      let phonetic: string = '';
      let pronunceAudio: string = '';
      if (phonetics.length > 0) {
        for (let i = 0; i < phonetics.length; i++) {
          if (phonetics[i].text !== '' && phonetics[i].audio !== '') {
            phonetic = phonetics[i].text;
            pronunceAudio = phonetics[i].audio;
            break;
          }
        }
        if (phonetic === '') {
          phonetic = phonetics[0].text;
        }
      }
      dispatch('getWord', {
        word,
        phonetic,
        pronunceAudio,
        meanings,
        sourceUrls,
      });
    } catch (error) {
      console.error(error);
      dispatch('noFound', { error });
    }
  };
</script>

<div class={'search-input' + (isEmpty ? ' is-empty' : '')}>
  <input
    bind:value={searchWord}
    type="text"
    placeholder="Search for any word…"
    on:keydown={(event) => {
      if (event.key === 'Enter') {
        handleSearchWord();
      }
    }}
  />
  <button on:click={handleSearchWord}>
    <img src="./images/icon-search.svg" alt="search icon" />
  </button>
  {#if isEmpty}
    <span class="empty-error">Whoops, can’t be empty…</span>
  {/if}
</div>

<style>
  .search-input {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-radius: 16px;
    background-color: var(--gray-100);
    border: 1px solid var(--gray-100);
    margin-bottom: 52px;
  }
  .search-input.is-empty {
    border: 1px solid var(--red);
  }
  .empty-error {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    color: var(--red);
    font-size: 20px;
  }
  input {
    color: var(--black-200);
    font-size: 20px;
    font-weight: 700;
    flex-grow: 1;
  }

  input::placeholder {
    opacity: 0.25;
  }
  @media (max-width: 430px) {
    .search-input {
      margin-bottom: 24px;
    }
  }
</style>
