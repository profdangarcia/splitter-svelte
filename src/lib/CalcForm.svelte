<script lang="ts">
  import SelectButton from './SelectButton.svelte';
  let selectedOption = 0;

  const handleSelect = (value : number) => {
    selectedOption = value;
  }
</script>

<div class="container">
  <label for="bill">Bill</label>
  <input type="number" id="bill" />

  <p>Select tip %</p>

  <label for="people">Number of People</label>
  <div class="buttons-wrapper">
    <SelectButton handleSelect={() => handleSelect(5)} active={selectedOption === 5}>5%</SelectButton>
    <SelectButton handleSelect={() => handleSelect(10)} active={selectedOption === 10}>10%</SelectButton>
    <SelectButton handleSelect={() => handleSelect(15)} active={selectedOption === 15}>15%</SelectButton>
    <SelectButton handleSelect={() => handleSelect(25)} active={selectedOption === 25}>25%</SelectButton>
    <SelectButton handleSelect={() => handleSelect(50)} active={selectedOption === 50}>50%</SelectButton>
    <SelectButton>Custom</SelectButton>
  </div>
  <input type="number" id="people" />
</div>

<style>
  input {
    border: 0;
    padding: 0.6rem;
    text-align: right;
    border-radius: 0.2rem;
    width: 100%;
    border: 2px solid var(--white);
    color: var(--primary-strong);
    font-size: 1.2rem;
  }

  input:focus {
    border: 2px solid var(--primary);
    outline: none;
  }

  label {
    display: block;
    margin: 0.5rem 0;
  }

  p {
    margin: 2rem 0 1rem;
  }

  .buttons-wrapper {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  #bill {
    background: url('/icon-dollar.svg') no-repeat scroll 0.8rem 1rem;
    background-color: var(--secondary-txt);
  }

  #people {
    background: url('/icon-person.svg') no-repeat scroll 0.8rem 1rem;
    background-color: var(--secondary-txt);
  }
</style>
