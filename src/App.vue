<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "App",
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Patua+One&family=Roboto&display=swap');

html, body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

body {
    display: flex;
}

#app {
    font-family: 'Patua One', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffffff;
    background-color: #000000;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
</style>
