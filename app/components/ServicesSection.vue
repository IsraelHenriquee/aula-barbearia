<template>
    <section class="py-16 lg:py-24 bg-barber-dark">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <!-- Header da Seção -->
            <div class="text-center space-y-4 mb-12 lg:mb-16">
                <div class="inline-block">
                    <span class="text-barber-gold font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
                    <div class="w-16 h-0.5 bg-barber-gold mt-2 mx-auto"></div>
                </div>

                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-barber-cream leading-tight">
                    Cuidados <span class="text-barber-gold">Profissionais</span>
                </h2>

                <p class="text-lg text-barber-cream/80 max-w-2xl mx-auto">
                    Oferecemos uma gama completa de serviços para o homem moderno,
                    combinando tradição e inovação em cada atendimento.
                </p>
            </div>

            <!-- Grid de Serviços -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <ServiceCard service-name="Buzz Cut" image-url="/images/buzz_cut.jpg" :price="30"
                    description="Corte militar clássico, prático e moderno. Perfeito para quem busca praticidade e estilo." />

                <ServiceCard service-name="Corte César" image-url="/images/corte_cezar.jpg" :price="35"
                    description="Corte clássico inspirado no imperador romano, elegante e atemporal." />

                <ServiceCard service-name="Degradê" image-url="/images/degrade.jpg" :price="40"
                    description="Corte moderno com transição suave, criando um visual contemporâneo e sofisticado." />

                <ServiceCard service-name="Pompadour" image-url="/images/pompadour.jpg" :price="45"
                    description="Estilo vintage com volume no topo, perfeito para o homem que quer se destacar." />

                <ServiceCard service-name="Texturizado" image-url="/images/texturizado.jpg" :price="38"
                    description="Corte com textura natural, ideal para cabelos ondulados e um visual descontraído." />

                <ServiceCard service-name="Undercut" image-url="/images/undercut.jpg" :price="42"
                    description="Corte moderno com laterais raspadas e topo volumoso, muito versátil e estiloso." />
            </div>

            <!-- Call to Action -->
            <div class="text-center mt-12 lg:mt-16">
                <div class="space-y-4">
                    <p class="text-barber-cream/80 text-lg">
                        Pronto para renovar seu visual?
                    </p>
                    <ButtonPrimary size="lg" @click="handleBookingClick">
                        Agendar Meu Horário
                    </ButtonPrimary>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'
import ButtonPrimary from './ButtonPrimary.vue'

// Função para lidar com agendamento
const handleBookingClick = () => {
    console.log('Agendamento geral clicado')
    // Aqui você pode adicionar a lógica para abrir modal de agendamento
    // ou navegar para página de agendamento
}
</script>