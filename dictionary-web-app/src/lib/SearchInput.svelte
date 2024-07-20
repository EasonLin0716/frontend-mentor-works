<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import axios from 'axios';
  let searchWord: string = '';
  const dispatch = createEventDispatcher();
  const handleSearchWord = async () => {
    const word = searchWord;
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
      dispatch('getWord', {
        word,
        phonetic,
        pronunceAudio,
        meanings,
        sourceUrls,
      });
    } catch (error) {
      console.error(error);
    }
  };
</script>

<div class="search-input">
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
    <img src="/images/icon-search.svg" alt="search icon" />
  </button>
</div>

<style>
  .search-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-radius: 16px;
    background-color: var(--gray-100, #f4f4f4);
    margin-bottom: 52px;
  }
  input {
    color: var(--black-200, #2d2d2d);
    font-size: 20px;
    font-weight: 700;
    flex-grow: 1;
  }

  input::placeholder {
    opacity: 0.25;
  }
</style>
