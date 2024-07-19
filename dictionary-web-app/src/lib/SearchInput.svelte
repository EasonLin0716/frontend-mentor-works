<script lang="ts">
</script>

<div class="search-input">
  <input type="text" placeholder="Search for any word…" />
  <button>
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
