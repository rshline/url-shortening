<template>
    <div class="flex flex-col items-center w-full px-10 pt-8 py-20 space-y-16 bg-neutral-gray/30">
        <div class="text-center lg:w-96 space-y-2">
            <h1 class="text-neutral-dark-violet font-bold text-xl lg:text-3xl">Advanced Statistics</h1>
            <p class="text-neutral-gray-violet text-sm lg:text-md">
                Track how your links are performing across the web with our advanced statistics dashboard. 
            </p>
        </div>
        <div class="flex flex-col lg:flex-row items-start">
            <div class="hl-card">
                <div class="hl-img-circle">
                    <img src="@/assets/images/icon-brand-recognition.svg" class="hl-image" />
                </div>
                <h3 class="hl-title">Brand Recognition</h3>
                <p class="hl-desc">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </div>
            <div class="w-2 h-20 lg:w-28 lg:h-2 bg-primary-cyan border-primary-cyan border-2 place-self-center"></div>
            <div class="hl-card lg:mt-14">
                <div class="hl-img-circle">
                    <img src="@/assets/images/icon-detailed-records.svg" class="hl-image" />
                </div>
                <h3 class="hl-title">Detailed Records</h3>
                <p class="hl-desc">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
            <div class="w-2 h-20 lg:w-28 lg:h-2 bg-primary-cyan border-primary-cyan border-2 place-self-center"></div>
            <div class="hl-card lg:mt-28">
                <div class="hl-img-circle">
                    <img src="@/assets/images/icon-fully-customizable.svg" class="hl-image" />
                </div>
                <h3 class="hl-title">Fully Customizable</h3>
                <p class="hl-desc">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HighlightFeature'
}
</script>