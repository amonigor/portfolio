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
    width: 700px;

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

@media only screen and (max-width: 800px) {
    h1 {
        font-size: 80px;
        width: 500px;

        span {
            font-size: 40px;
        }
    }
}

@media only screen and (max-width: 600px) {
    h1 {
        font-size: 60px;
        width: 400px;
        margin-left: 25px;

        span {
            font-size: 30px;
        }
    }
}

@media only screen and (max-width: 350px) {
    h1 {
        font-size: 50px;
        width: 300px;

        span {
            font-size: 25px;
        }
    }
}
</style>