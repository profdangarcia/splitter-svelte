<div class="container">
  <slot></slot>
</div>

<style>
  .container {
    background: var(--white);
    min-height: calc(100vh - 5rem - 54px);
    width: 100%;
    border-radius: 2rem 2rem 0 0;
    padding: 2rem;
  }

  @media (min-width: 768px) {
    .container {
      min-height: 22rem;
      border-radius: 2rem;
    }
    
  }
</style>
