<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <header>
        <nav class="container">
            <router-link to="/">
                <img alt="Dev" id="logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" />
            </router-link>

            <img alt="Abri menu" v-on:click="openMenu" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg" />
        </nav>

        <div id="menu-overlay" v-on:click="closeMenu" v-if="menuActive">

        </div>

        <div id="menu-itens" :class="{ active: menuActive }">

            <img alt="Dev" id="menu-logo" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/wdev.svg" />

            <ul>
                <li v-on:click="closeMenu"><router-link to="/">Home</router-link></li>
                <li v-on:click="closeMenu"><router-link to="/videos">Vídeos</router-link></li>
                <li v-on:click="closeMenu"><router-link to="/sobre">Sobre</router-link></li>
                <li v-on:click="closeMenu"><router-link to="/contato">Contato</router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            menuActive: false
        }
    },
    methods: {
        openMenu: function() {
            this.menuActive = true;
        },
        closeMenu: function() {
            this.menuActive = false;
        }
    }
}
</script>

<style>
header {
    background-color: var(--color-background-nav);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
}

#logo {
    width: 130px;
}

#menu-button {
    width: 30px;
}

#menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: black;
    opacity: 0.8;
}

#menu-logo {
    width: 110px;
    margin-top: 30px;
    margin-bottom: 10px;
}

#menu-itens {
    position: fixed;
    top: 0;
    right: 0;
    background-color: var(--color-background-nav);
    width: 60%;
    height: 100vh;
    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

#menu-itens.active {
    display: flex;
}

ul {
    list-style: none;
    text-align: center;
    height: 60px;
    align-items: center;
}

ul li {
    margin: 20px 0px;
}

ul li a {
    color: var(--color-text-light);
}

@media (min-width: 700px) {
    #menu-button,
    #menu-logo,
    #menu-overlay {
        display: none;
    }

    #menu-itens {
        display: flex;
        position: static;
        height: 60px;
        width: auto;
    }

    ul {
        display: flex;
        flex-direction: row;
    }

    ul li {
        margin: 0;
        margin-left: 20px;
    }
}
</style>