<template>
    <div class="flex flex-col lg:flex-row p-4 mx-10 justify-between bg-white rounded-lg items-center">
        <p class="sm:text-sm text-lg text-neutral-dark-violet break-all">{{ original }}</p>
        <div class="flex flex-col lg:flex-row lg:space-x-4 items-center">
            <p class="sm:text-sm text-lg text-primary-cyan">{{ short }}</p>   
            <button @click="copyUrl" :class="!isCopy?'btn-sqr':'btn-copy'">{{ isCopy? 'Copied!' : 'Copy' }}</button> 
        </div>
    </div>
</template>

<script>

export default { 
    name: 'ShortenLink',
    props: ['original', 'short'],
    data () {
        return {
            isCopy: false
        }
    },
    methods: {
        async copyUrl(short) {
            try {
                await navigator.clipboard.writeText(short)
                this.isCopy = !this.isCopy
            } catch($e) {
                alert("Can't copy!!")
            }
        },
    }
}
</script>
