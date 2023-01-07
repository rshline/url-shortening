<template>
    <div>
      <TheCover />
      <LinkForm />
      <HighlightFeature />
    </div>
  </template>
  
  <script>
  import TheCover from "@/components/TheCover";
  import LinkForm from "@/components/LinkForm";
  import HighlightFeature from "@/components/HighlightFeature";
  
  export default {
    name: 'LandingPage',
    components: {
      TheCover,
      LinkForm,
      HighlightFeature,
    }
  }
  </script>