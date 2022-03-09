<script lang="ts">
  export let active = false;
  export let handleSelect =  () => {};
</script>

<button class={active ? 'select-button selected' : 'select-button'} on:click={handleSelect}>
  <slot />
</button>

<style>
  .select-button {
    background: var(--primary-strong);
    color: var(--white);
    border: 0;
    padding: 0.5rem 0 0.5rem;
    border-radius: 0.2rem;
    width: 100%;
    font-size: 1.5rem;
    max-width: calc((100% - 1rem) / 2);
    transition: 0.2s;
  }

  .selected {
    background: var(--primary);
    color: var(--primary-strong);
  }

  @media (min-width: 768px) { 
    .select-button {
      max-width: calc((100% - 2rem) / 3);
    }
  }
</style>
