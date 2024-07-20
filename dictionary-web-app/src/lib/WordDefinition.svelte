<script lang="ts">
  export let word: string = '';
  export let phonetic: string = '';
  export let pronunceAudio: string = '';
  export let meanings: any[] = [];
  export let sourceUrls: string[] = [];
  const handlePlayPronunceAudio = () => {
    const audio = new Audio(pronunceAudio);
    audio.play();
  };
</script>

<div class="wrapper">
  <div class="brief">
    <div class="left">
      <p class="word">{word}</p>
      <span class="phonetic">{phonetic}</span>
    </div>
    <div class="right">
      <button class="play-btn" on:click={handlePlayPronunceAudio}>
        <img
          src="/images/icon-play.svg"
          alt="read phonetic"
          width="75"
          height="75"
        />
      </button>
    </div>
  </div>
  <div class="detail">
    {#each meanings as meaning, index}
      <div class="detail-wrapper">
        <div class="part-of-speech">
          <span>{meaning.partOfSpeech}</span>
          <hr />
        </div>
        <p class="definitions-title subtitle">Meaning</p>
        <ul class="definitions">
          {#each meaning.definitions as detail, index}
            <li class="definition">
              <p>{detail.definition}</p>
              {#if detail.example}
                <span>“{detail.example}”</span>
              {/if}
            </li>
          {/each}
        </ul>
        {#if meaning.synonyms.length}
          <div class="synonyms subtitle">
            <span>Synonyms</span>
            <ul>
              {#each meaning.synonyms as synonym, index}
                <li>{synonym}</li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
    {/each}
  </div>
  <ul class="source-urls">
    {#each sourceUrls as url, index}
      <li>
        <p class="text">Source</p>
        <span class="url">{url}</span>
        <img src="./images/icon-link.svg" alt="" />
      </li>
    {/each}
  </ul>
</div>

<style>
  .brief {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }
  .detail-wrapper {
    padding-bottom: 40px;
  }
  .detail {
    display: flex;
    flex-direction: column;
  }
  .word {
    color: var(--black-200);
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: 77px;
  }
  .part-of-speech {
    display: flex;
    gap: 23px;
    align-items: center;
    margin-bottom: 38px;
  }
  .part-of-speech span {
    color: var(--black-200);
    font-size: 24px;
  }
  .part-of-speech hr {
    flex-grow: 1;
    border: none;
    border-top: 1px solid var(--gray-200);
  }
  .phonetic {
    color: var(--purple);
    font-size: 24px;
    line-height: 29px;
  }
  .definitions {
    display: flex;
    flex-direction: column;
    gap: 13px;
    list-style-type: disc;
    margin-left: 25px;
  }
  .definition {
    padding-left: 20px;
  }
  .definition::marker {
    color: var(--purple);
  }
  .definition p {
    color: var(--black-200);
    font-size: 18px;
    line-height: 24px;
  }
  .definition span {
    display: block;
    margin-top: 13px;
    color: var(--gray-300, #757575);
    font-size: 18px;
    line-height: 24px;
  }
  .definitions-title {
    margin-bottom: 24px;
  }
  .subtitle {
    color: var(--gray-300, #757575);
    font-size: 20px;
  }
  .synonyms {
    display: flex;
    gap: 24px;
    align-items: center;
    margin-top: 63px;
  }
  .synonyms ul {
    display: flex;
  }
  .synonyms li {
    color: var(--purple);
    font-size: 20px;
    font-weight: 700;
  }
  .source-urls {
    padding: 19px 0;
    border-top: 1px solid var(--gray-200);
  }
  .source-urls li {
    display: flex;
    gap: 15px;
  }
  .source-urls p {
    color: var(--gray-300);
    font-size: 14px;
    text-decoration-line: underline;
    margin-right: 6px;
  }
  .source-urls span {
    color: var(--black-200, #2d2d2d);
    font-size: 14px;
    text-decoration-line: underline;
  }
</style>
