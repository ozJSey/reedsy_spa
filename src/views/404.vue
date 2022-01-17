<template>
  <main class="not-found">
    <h2> :) The page you've requested was not found. </h2>
    <button
      role="button"
      @click="$router.push('/')"
    >Let me take you to the beggining. <br />
      And, let&apos;s hope not this far. 🤞</button>
  </main>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
main {
  height: calc(100vh - 72px);
  text-align: center;
  h2 {
    padding: 5% 20px;
    font-size: 30px;
  }
  button {
    transition: background-size 0.25s ease-in-out;
    background-color: white;
    color: black;
    border: none;
    outline: none;
    box-shadow: none;
    background-image: radial-gradient(transparent 20%, white 70% 100%),
      url("../assets/images/0.jpeg");
    background-repeat: no-repeat;
    width: 30vh;
    height: 30vh;
    background-size: 100% 100%;
    background-position: center;
    &:hover {
      border: none;
      background-color: white;
      background-size: 5px 5px;
    }
  }
}
</style>
