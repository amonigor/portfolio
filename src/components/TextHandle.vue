<template>
    <div class="content">
        <transition name="slide-fade" appear>
            <h1>
                igor amon
                <transition name="fade" mode="out-in">
                    <span :key="extension">{{ extension }}</span>
                </transition>
            </h1>
        </transition>

        <transition name="slide-invert-fade" appear>
            <div class="contact">
                <a href="https://github.com/amonigor" target="_blank">
                    <font-awesome-icon :icon="['fab', 'github-square']" />
                    <p>GitHub</p>
                </a>
                <a href="https://www.linkedin.com/in/igor-amon/" target="_blank">
                    <font-awesome-icon :icon="['fab', 'linkedin']" />
                    <p>LinkedIn</p>
                </a>
                <a href="mailto:contact@amonigor.dev">
                    <font-awesome-icon :icon="['fas', 'envelope-square']" />
                    <p>contact@amonigor.dev</p>
                </a>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "TextHandle",
    data() {
        return {
            extension: ".dev",
            listext: [".dev", ".js", ".vue", ".php", ".html", ".css"],
        };
    },
    created() {
        setInterval(this.changeExtension, 2000);
    },
    methods: {
        changeExtension() {
            let index = this.listext.indexOf(this.extension);
            index = index + 1 >= this.listext.length ? 0 : index + 1;
            this.extension = this.listext[index];
        },
    },
};
</script>

<style lang="scss">
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

h1 {
    text-align: left;
    font-size: 120px;
    width: 700px;
    margin: 0;

    span {
        margin-left: -10px;
        font-size: 60px;
        color: #a1a1a1;
    }
}

.contact {
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        color: #ffffff;
        margin: 10px 10px;
        transition-duration: .2s;

        &:hover {
            color: #a1a1a1;
        }

        p {
            margin: 0 0 0 5px;
            font-size: 15px;
        }
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-fade-enter-active, .slide-invert-fade-enter-active {
    transition: all 1s ease;
}
.slide-fade-leave-active, .slide-invert-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateX(-100px);
    opacity: 0;
}
.slide-invert-fade-enter,
.slide-invert-fade-leave-to {
    transform: translateX(100px);
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
        margin-left: 12px;

        span {
            font-size: 30px;
        }
    }
}

@media only screen and (max-width: 400px) {
    h1 {
        font-size: 60px;
        width: 350px;
        margin-left: 12px;

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