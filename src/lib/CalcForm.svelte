<script lang="ts">
  import SelectButton from './SelectButton.svelte';
  import splitIt from '../helpers/splitIt';
  let selectedTip = 0;
  let customTip = '';
  let bill = '';
  let people = '';
  let error = false;

  const selectTip = (value : number) => {
    selectedTip = value;
    handleCalc();
  }

  const handleCalc = () => {
    if(error){
      error = false;
    }
    if(bill && people && !error){
      const tipValue = customTip ? parseInt(customTip, 10) : selectedTip;
      const calculatedValues = splitIt(parseInt(bill, 10), parseInt(people,10), tipValue);
      console.log(calculatedValues);
    }
    if(parseInt(people, 10) <= 0){
      error = true;
    }
  }

</script>

<div class="container">
  <label for="bill">Bill</label>
  <input type="number" id="bill" bind:value={bill} on:input={handleCalc}/>

  <p>Select tip %</p>
  <div class="buttons-wrapper">
    <SelectButton 
      handleSelect={() => selectTip(5)} 
      active={selectedTip === 5 && !customTip}>
      5%
    </SelectButton>
    <SelectButton 
      handleSelect={() => selectTip(10)} 
      active={selectedTip === 10 && !customTip}>
      10%
    </SelectButton>
    <SelectButton 
      handleSelect={() => selectTip(15)} 
      active={selectedTip === 15 && !customTip}>
      15%
    </SelectButton>
    <SelectButton 
      handleSelect={() => selectTip(25)} 
      active={selectedTip === 25 && !customTip}>
      25%
    </SelectButton>
    <SelectButton 
      handleSelect={() => selectTip(50)} 
      active={selectedTip === 50 && !customTip}>
      50%
    </SelectButton>
    <input type="number" placeholder="Custom" bind:value={customTip} on:input={handleCalc}/>
  </div>
  <div class="label-wrapper">
    <label for="people">Number of People</label>
    <span>{error ? "Can't be zero" : ''}</span>
  </div>
  <input type="number" id="people" bind:value={people} on:input={handleCalc} min="1" step="1" />
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
    transition: 0.2s;
  }

  input:focus {
    border: 2px solid var(--primary);
    outline: none;
  }

  input:invalid {
    border: 2px solid var(--error);
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
    margin-bottom: 2rem;
  }

  .label-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .label-wrapper > span {
    color: var(--error);
    transition: 0.2s;
  }
  
  .buttons-wrapper > input {
    background-color: var(--secondary-txt);
    max-width: calc((100% - 1rem) / 2);
  }

  #bill {
    background: url('/icon-dollar.svg') no-repeat scroll 0.8rem 1rem;
    background-color: var(--secondary-txt);
  }

  #people {
    background: url('/icon-person.svg') no-repeat scroll 0.8rem 1rem;
    background-color: var(--secondary-txt);
  }

  @media (min-width: 768px) { 
    .buttons-wrapper > input {
      max-width: calc((100% - 2rem) / 3);
    }
  }

</style>
