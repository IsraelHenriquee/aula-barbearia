<template>
    <section class="min-h-screen bg-gradient-to-br from-barber-dark via-barber-brown to-barber-gold relative">
        <!-- Overlay para melhor contraste -->
        <div class="absolute inset-0 bg-gradient-to-r from-barber-dark/90 via-barber-dark/70 to-transparent"></div>

        <div
            class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-0 min-h-screen lg:h-screen flex items-center">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

                <!-- Lado Esquerdo - Texto de Apresentação -->
                <div class="text-left space-y-6 lg:space-y-8 order-1 lg:order-1">
                    <div class="space-y-3 lg:space-y-4">
                        <h1
                            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight">
                            <span class="text-barber-cream">Estilo &</span>
                            <br>
                            <span class="text-barber-gold">Tradição</span>
                        </h1>

                        <div class="w-16 lg:w-24 h-1 bg-barber-gold"></div>
                    </div>

                    <p class="text-lg sm:text-xl lg:text-2xl text-barber-cream/90 leading-relaxed max-w-lg">
                        Mais de <span class="text-barber-gold font-semibold">20 anos</span> oferecendo os melhores
                        cortes e cuidados masculinos.
                        Tradição, qualidade e estilo em cada atendimento.
                    </p>

                    <div class="space-y-3 lg:space-y-4">
                        <p class="text-barber-cream/80 text-base lg:text-lg">
                            ✂️ Cortes clássicos e modernos<br>
                            🪒 Barbas e bigodes profissionais<br>
                            ⭐ Atendimento personalizado
                        </p>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4">
                        <ButtonPrimary @click="handleScheduleClick">
                            Agendar Horário
                        </ButtonPrimary>
                        <ButtonSecondary @click="handleServicesClick">
                            Ver Serviços
                        </ButtonSecondary>
                    </div>
                </div>

                <!-- Lado Direito - Espaço para Imagem -->
                <div class="relative order-2 lg:order-2 max-w-sm mx-auto lg:max-w-none">
                    <div
                        class="aspect-square bg-barber-cream/10 rounded-2xl border-2 border-barber-gold/30 backdrop-blur-sm overflow-hidden">
                        <!-- Imagem do barbeiro -->
                        <img src="/images/imagem-hero.jpg" alt="Barbeiro cortando cabelo de cliente - Elite Barber Shop"
                            class="w-full h-full object-cover rounded-xl" />
                    </div>

                    <!-- Elementos decorativos -->
                    <div class="absolute -top-4 -right-4 w-8 h-8 bg-barber-gold rounded-full opacity-60"></div>
                    <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-barber-cream rounded-full opacity-40"></div>
                    <div class="absolute top-1/2 -right-8 w-4 h-4 bg-barber-gold rounded-full opacity-30"></div>
                </div>

            </div>
        </div>

        <!-- Elementos decorativos de fundo -->
        <div class="absolute top-20 left-10 w-32 h-32 bg-barber-gold/5 rounded-full blur-xl"></div>
        <div class="absolute bottom-20 right-10 w-48 h-48 bg-barber-cream/5 rounded-full blur-2xl"></div>
    </section>
</template>

<script setup>
import ButtonPrimary from './ButtonPrimary.vue'
import ButtonSecondary from './ButtonSecondary.vue'

// Props para customização futura
defineProps({
    title: {
        type: String,
        default: 'Estilo & Tradição'
    },
    subtitle: {
        type: String,
        default: 'Mais de 20 anos oferecendo os melhores cortes e cuidados masculinos. Tradição, qualidade e estilo em cada atendimento.'
    }
})

// Funções de click dos botões
const handleScheduleClick = () => {
    console.log('Agendar horário clicado')
    // Aqui você pode adicionar a lógica para abrir modal de agendamento
    // ou navegar para página de agendamento
}

const handleServicesClick = () => {
    console.log('Ver serviços clicado')
    // Aqui você pode adicionar a lógica para navegar para página de serviços
    // ou fazer scroll para seção de serviços
}
</script>