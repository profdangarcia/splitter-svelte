<script lang="ts">
  import logo from './assets/logo.svg'
  import Container from './lib/Container.svelte';
  import CalcForm from './lib/CalcForm.svelte';
</script>

<main>
  <img src={logo} alt="SPLITTER" />
  <Container>
    <CalcForm />
  </Container>
</main>

<style>
  :root {
    --white: hsl(0, 0%, 100%);
    --primary: hsl(172, 67%, 45%);
    --primary-strong: hsl(183, 100%, 15%);
    --secondary: hsl(184, 14%, 56%);
    --bg: hsl(185, 41%, 84%);
    --txt: hsl(186, 14%, 43%);
    --secondary-txt: hsl(189, 41%, 97%);
    color: var(--txt);
    font-family: 'Space Mono', monospace;
    font-weight: 700;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body){
    background: var(--bg);
    width: 100%;
    min-height: 100vh;
  }

  main {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 1440px;
    margin: 0 auto;
  }

  img {
    margin: 3rem 0 2rem;
  }

  :global(input, select, textarea, button) {
    font-family:inherit;
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    cursor: pointer;
  }

  @media (min-width: 768px) { 
    main {
      padding:  1rem;
    }
    img {
      margin: 8rem 0 5rem;
    }

  }

</style>
