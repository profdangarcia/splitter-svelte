<script lang="ts">
  import moneyParse from "../helpers/moneyParse";

  export let handleReset = () => {};
  export let displayValues = {
    tipPerPerson: 0,
    totalPerPerson: 0,
  };
</script>

<div class="container">
    <div class="wrapper">
      <div class="text-box">
        <p>Tip Amount</p>
        <span>/ person</span>
      </div>
      <span class="money-value">{moneyParse(displayValues.tipPerPerson)}</span>
    </div>
    <div class="wrapper">
      <div class="text-box">
        <p>Total</p>
        <span>/ person</span>
      </div>
      <span class="money-value">{moneyParse(displayValues.totalPerPerson)}</span>
    </div>
    <button 
      on:click={handleReset}
      class="reset-button"
      disabled={!displayValues.totalPerPerson}
    >
      RESET
    </button>
</div>

<style>
  .container {
    background: var(--primary-strong);
    width: 100%;
    border-radius: 2rem;
    padding: 2rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
  }

  .wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .money-value {
    font-size: 3rem;
    color: var(--primary);
  }

  p {
    color: var(--white);
  }

  .reset-button {
    width: 100%;
    font-size: 1.3rem;
    color: var(--primary-strong);
    background: var(--primary);
    border: 0;
    border-radius: 0.2rem;
    padding: 0.5rem 0 0.5rem;
    margin-top: 1rem;
    transition: 0.2s;
  }

  .reset-button:hover {
    background: var(--bg);
  }

  .reset-button:disabled {
    filter: brightness(0.5);
    cursor: not-allowed;
    background: var(--primary);
  }
</style>
