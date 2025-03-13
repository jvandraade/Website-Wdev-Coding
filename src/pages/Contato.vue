<template>
   <main>
    <section class="container">
        <h1>Contato</h1>
        <section class="contacts">
            <div class="contact">
                <div class="contact-title">
                    <a v-for="(contact, index) in contacts" :key="index" :href="contact.link" target="blank"> {{ contact.label }} </a>
                    {{ contact.title }}
                </div>
            </div>
        </section>
    </section>
   </main>
</template>

<script>
import api from '../services/api.js'


export default {
    name: 'Contato',
    data() {
        return {
            contacts: []
        }
    }, mounted() {
        api.get('/contacts.json').then(response => {
            this.contacts = response.data
        })
    }
}
</script>

<style scoped>
main {
    align-items: center;
}

.contacts {
    margin-bottom: 30px;
    color: var(--color-text-dark);
}

.contact-title {
    font-weight: 600;
    font-size: 18px;
}

.contact a {
    color: var(--color-text-dark);
}

.contact {
    margin-bottom: 20px;
}
</style>