<template>
    <div class="mb-0">
      <!-- boost -->
      <div class="sm:h-300 lg:h-250 p-6 lg:p-10 space-y-5 bg-primary-dark-violet bg-no-repeat sm:bg-[url('@/assets/images/bg-boost-mobile.svg')] lg:bg-[url('@/assets/images/bg-boost-desktop.svg')] text-center text-white">
        <h1 class="text-2xl lg:text-3xl font-bold">Boost your links today</h1>
        <button class="btn-round">Get Started</button>
      </div>

      <!-- footer -->
      <div class="flex flex-col lg:flex-row lg:justify-around py-10 sm:space-y-7 lg:space-y-0 bg-neutral-dark-violet">
        <!-- logo -->
        <div class="">
          <img src="@/assets/images/logo.svg" class="mx-auto" />
        </div>
        
        <!-- features -->
        <div class="text-center lg:text-left space-y-3">
          <div class="font-bold text-white ">Features</div>
          <div class="flex flex-col space-y-1 text-neutral-gray">
            <a class="cursor-pointer hover:text-primary-cyan">Link Shortening</a>
            <a class="cursor-pointer hover:text-primary-cyan">Branded Links</a>
            <a class="cursor-pointer hover:text-primary-cyan">Analytics</a>
          </div>
        </div>

        <!-- resources -->
        <div class="text-center lg:text-left space-y-3">
          <div class="font-bold text-white">Resources</div>
          <div class="flex flex-col space-y-1 text-neutral-gray">
            <a class="cursor-pointer hover:text-primary-cyan">Blog</a>
            <a class="cursor-pointer hover:text-primary-cyan">Developers</a>
            <a class="cursor-pointer hover:text-primary-cyan">Support</a>
          </div>
        </div>

        <!-- company -->
        <div class="text-center lg:text-left space-y-3">
          <div class="font-bold text-white">Company</div>
          <div class="flex flex-col space-y-1 text-neutral-gray">
            <a class="cursor-pointer hover:text-primary-cyan">About</a>
            <a class="cursor-pointer hover:text-primary-cyan">Our Team</a>
            <a class="cursor-pointer hover:text-primary-cyan">Careers</a>
            <a class="cursor-pointer hover:text-primary-cyan">Contact</a>
          </div>
        </div>

        <!-- socmed -->
        <div class="flex justify-center">
        </div>

      </div>

      <div class="p-3 text-white text-sm text-center bg-neutral-dark-violet">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="font-bold">Frontend Mentor</a>. 
        Coded by <a href="https//www.github.com/rshline" class="font-bold">@rshline</a>.
      </div>
    </div>
</template>
<script>
export default {
    name: 'TheFooter'
}
</script>
<style lang="">
    
</style>