<template>
    <div class="flex flex-col lg:flex-row sm:p-4 lg:px-10 lg:py-4 sm:space-y-4 lg:space-y-0 lg:space-x-6 bg-white">
        <!-- logo -->
        <div class="flex items-center">
            <img src="@/assets/images/logo.svg" />
        </div>
        <div class="flex sm:flex-col lg:flex-row w-full sm:py-6 sm:space-y-4 lg:space-y-0 justify-between items-center sm:bg-primary-dark-violet lg:bg-white rounded-lg ">
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
</template>

<script>
export default {
    name: 'NavBar'
}
</script>