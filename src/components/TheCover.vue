<template>
    <div class="flex flex-col-reverse lg:flex-row bg-white py-10">
        <!-- text -->
        <div class="flex flex-col px-10 py-4 space-y-6">
            <div class="space-y-2">
                <h1 class="font-bold text-neutral-dark-violet text-3xl sm:text-center lg:text-left lg:text-5xl lg:leading-snug">More than just shorter links</h1>
                <p class="sm:text-sm lg:text-lg sm:text-center lg:text-left text-neutral-gray-violet">Build your brand’s recognition and get detailed insights on how your links are performing.</p>                
            </div>

            <div class="flex sm:justify-center lg:justify-start">
                <button class="btn-round">Get Started</button>                
            </div>

        </div>
        <!-- image -->
        <div class="">
            <img src="@/assets/images/illustration-working.svg" />
        </div>
    </div>
</template>

<script>
export default {
    name: 'TheCover'
}
</script>