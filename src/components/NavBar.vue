<template>
    <div class="flex flex-row justify-between relative sm:p-4 lg:px-10 lg:py-4 sm:space-y-4 lg:space-y-0 lg:space-x-6 bg-white">
        <!-- logo -->
        <div class="flex justify-center items-center">
            <img src="@/assets/images/logo.svg" />
        </div>
        <div class="flex items-center lg:hidden">
            <Bars3Icon v-on:click="isShown = !isShown" class="h-7 w-7 text-neutral-gray active:text-neutral-gray-violet align-middle block" />  
        </div>
        <div class="absolute mx-auto w-72 left-1/2 -translate-x-1/2 lg:w-full top-14 lg:static lg:top-0 lg:left-0 lg:translate-x-0" :class="isShown ? 'lg:block' : 'hidden lg:block' ">
            <div class="flex flex-col w-full lg:flex-row py-6 space-x-0 lg:space-x-4 space-y-4 lg:space-y-0 justify-between items-center sm:bg-primary-dark-violet lg:bg-white rounded-lg">
                <!-- menu -->
                <div class="flex flex-col lg:flex-row sm:space-y-3 lg:space-y-0 lg:space-x-6 sm:text-center">
                    <a class="navbar-text">Features</a>
                    <a class="navbar-text">Pricing</a>
                    <a class="navbar-text">Resources</a>                   
                </div>
            
                <!-- button -->
                <div class="flex flex-col lg:flex-row sm:space-y-3 lg:space-y-0 lg:space-x-6">
                    <button class="navbar-text">Login</button>
                    <button class="btn-round">Sign Up</button>                
                </div>
            </div>              
        </div>
          
    </div>
</template>

<script>
import { Bars3Icon } from '@heroicons/vue/24/solid';

export default {
    name: 'NavBar', 
    components: { Bars3Icon },
    data: function () {
        return {
            isShown: false
        }
    }
}
</script>