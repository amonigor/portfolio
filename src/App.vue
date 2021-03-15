<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "App",
    metaInfo: {
        title: 'em breve',
        htmlAttrs: {
            lang: 'pt-BR',
        },
    },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Patua+One&display=swap');

body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
}

#app {
    font-family: 'Patua One', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #ffffff;
    background-color: #000000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h1 {
        text-align: center;
        font-size: 120px;
    }
}
</style>
