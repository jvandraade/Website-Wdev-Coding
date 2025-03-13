<template>
   <main>
    <section class="container">
        <h1>Vídeos</h1>
        <section class="Videos" v-for="(video, index) in videos" :key="index" :href="video.link" target="blank">
            <div class="video">
                <a class="video">
                    <img :src="video.thumb" :alt="video.title" />
                    <div class="video-title">
                        {{ video.title }}
                    </div>
                </a>
            </div>
        </section>
    </section>
   </main>
</template>

<script>
import api from '../services/api.js'


export default {
    name: 'Videos',
    data() {
        return {
            videos: []
        }
    }, mounted() {
        api.get('/videos.json').then(response => {
            this.videos = response.data
        })
    }
}
</script>

<style scoped>
main {
    alighn-items: center;
}

.video {
    width: 80%;
}

.video img {
    width: 100%;
    margin-bottom: 30px;
}

.videos {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}

.video a {
    color: var(--color-text-dark);
    font-weight: 600;
    text-align: center;
}

@media (min-width: 700px) {
    .video {
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .video {
        margin-right: 30px;
        width: 300px;
    }
}
</style>