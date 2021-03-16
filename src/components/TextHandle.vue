<template>
    <h1>
        igor amon
        <transition name="fade" mode="out-in">
            <span :key="extension">{{ extension }}</span>
        </transition>
    </h1>
</template>

<script>
export default {
    name: 'TextHandle',
    data() {
        return {
            extension: '.js',
        }
    },
    created() {
        setInterval(this.changeExtension, 2000);
    },
    methods: {
        changeExtension() {
            switch (this.extension) {
                case '.js':
                    this.extension = '.vue';
                    break;
                case '.vue':
                    this.extension = '.php';
                    break;
                case '.php':
                    this.extension = '.html';
                    break;
                case '.html':
                    this.extension = '.css';
                    break;
                default:
                    this.extension = '.js';
                    break;
            }
        }
    },
}
</script>

<style lang="scss">
h1 {
    text-align: left;
    font-size: 120px;

    span {
        margin-left: -10px;
        font-size: 60px;
        color: #a1a1a1;
    }
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>