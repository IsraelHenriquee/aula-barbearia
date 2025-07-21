<template>
    <div class="min-h-screen overflow-y-auto">
        <HeroSection />
        <AboutSection />
        <ServicesSection />

        <!-- Futuras seções serão adicionadas aqui -->
        <!-- <TestimonialsSection /> -->
        <!-- <ContactSection /> -->
    </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
</script>