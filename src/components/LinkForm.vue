<template>
    <div class="bg-neutral-gray/30 mt-20">
        <div class="relative -top-14 lg:-top-12 h-127 lg:h-168 mx-5 px-6 py-4 lg:px-8 lg:p-6 lg:mx-10 bg-primary-dark-violet bg-no-repeat sm:bg-[url('@/assets/images/bg-shorten-mobile.svg')] lg:bg-[url('@/assets/images/bg-shorten-desktop.svg')] rounded-lg">
            <form @submit.prevent="shorteningLink" class="flex flex-col lg:flex-row justify-between sm:space-x-0 sm:space-y-4 lg:space-x-4 lg:space-y-0">
                <input type="text" placeholder="Shorten a link here..." v-model="link" class="p-2 w-full bg-white rounded-lg text-neutral-gray-violet text-sm align align-middle" required />
                <!-- <p class="" v-show="error">{{ errorMsg }}</p> -->
                <button type="submit" class="btn-sqr">Shorten It!</button>
            </form>
        </div>    
        <div v-if="shortLink != null">
            <ShortenLink :original="originalLink" :short="shortLink" />
        </div>
    </div>
</template>

<script>
import DataService from '@/services/DataService';
import ShortenLink from '@/components/ShortenLink';

export default {
    name: 'LinkForm',
    components: {
        ShortenLink
    },
    data() {
        return {
            link: '',
            originalLink: null,
            shortLink: null
        }
    },
    methods: {
        shorteningLink() {
            var url =  this.link

            DataService.get(url)
            .then(response => {
                this.originalLink = response.data.result.original_link
                this.shortLink = response.data.result.short_link
            })
            .catch (e => {
                console.log(e)
            })
        }
    }
}


</script>
