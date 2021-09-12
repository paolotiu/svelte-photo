<script>
  import Child from './Child.svelte';

  export let x;
</script>

<Child />
<div class="hey">
  <h1>{x}</h1>
</div>
<div class="bg" />

<style lang="scss">
  .bg {
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: aqua;
    z-index: -1;
  }

  div {
    h1 {
      font-size: 90px;
    }
  }
</style>
