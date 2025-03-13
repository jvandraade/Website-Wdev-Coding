<template>
 <main>
    <div class="text-top">
        Vídeos novos toda <b>quinta-feira</b> às <b>21h</b>
    </div>
        
    <a href="https://www.youtube.com/@aspaszin" target="blank">
        <img alt="Inscreva-se" id="subscribe" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/subscribe.svg" />
    </a>
    
    <div class="text-bottom">
        youtube.com/@aspaszin
    </div>
 </main>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    main {
        background-color: var(--color-background-home);
        justify-content: center;
        align-items: center;
    }

    .text-top {
        color: var(--color-text-light);
        font-size: 20px;
        margin-top: 20px;
    }

    #subscribe {
        width: 340px;
    }

    .text-bottom {
        color: var(--color-text-light);
        font-size: 18px;
        margin-top: 20px;
    }

    @media (min-width: 700px) {
        #subscribe {
            widows: 370px;
        }
    }
</style>