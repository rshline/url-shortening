<template>
    <div class="flex flex-col lg:flex-row p-4 mx-10 justify-between bg-white rounded-lg items-center">
        <p class="text-lg text-neutral-dark-violet">{{ original }}</p>
        <div class="flex flex-col lg:flex-row lg:space-x-4 items-center">
            <p class="text-lg text-primary-cyan">{{ short }}</p>   
            <button class="btn-sqr">Copy</button> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShortenLink',
    props: ['original', 'short']
}
</script>
