<template>
    <section class="py-16 lg:py-24 bg-barber-cream">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                <!-- Lado Esquerdo - Texto de Apresentação -->
                <div class="space-y-6 lg:space-y-8">
                    <div class="space-y-4">
                        <div class="inline-block">
                            <span class="text-barber-gold font-semibold text-sm uppercase tracking-wider">Sobre
                                Nós</span>
                            <div class="w-12 h-0.5 bg-barber-gold mt-2"></div>
                        </div>

                        <h2
                            class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-barber-dark leading-tight">
                            Tradição que <span class="text-barber-gold">Perdura</span>
                        </h2>
                    </div>

                    <div class="space-y-4 text-barber-brown-dark">
                        <p class="text-lg lg:text-xl leading-relaxed">
                            Há mais de duas décadas, a <span class="font-semibold text-barber-dark">Elite Barber
                                Shop</span>
                            tem sido referência em cuidados masculinos, combinando técnicas tradicionais com o que há de
                            mais moderno no universo da barbearia.
                        </p>

                        <p class="text-base lg:text-lg leading-relaxed">
                            Nossa paixão pelo ofício e dedicação aos detalhes garantem que cada cliente saia não apenas
                            com um visual impecável, mas com a confiança renovada. Aqui, cada corte conta uma história
                            de excelência e tradição.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 gap-6 py-4">
                        <div class="text-center lg:text-left">
                            <div class="text-3xl lg:text-4xl font-bold text-barber-gold">20+</div>
                            <div class="text-sm lg:text-base text-barber-brown-dark font-medium">Anos de Experiência
                            </div>
                        </div>
                        <div class="text-center lg:text-left">
                            <div class="text-3xl lg:text-4xl font-bold text-barber-gold">5000+</div>
                            <div class="text-sm lg:text-base text-barber-brown-dark font-medium">Clientes Satisfeitos
                            </div>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <h3 class="text-xl font-bold text-barber-dark">Nossos Diferenciais:</h3>
                        <ul class="space-y-2 text-barber-brown-dark">
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-barber-gold rounded-full mr-3"></span>
                                Profissionais altamente qualificados
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-barber-gold rounded-full mr-3"></span>
                                Produtos premium e equipamentos modernos
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-barber-gold rounded-full mr-3"></span>
                                Ambiente acolhedor e sofisticado
                            </li>
                            <li class="flex items-center">
                                <span class="w-2 h-2 bg-barber-gold rounded-full mr-3"></span>
                                Atendimento personalizado e exclusivo
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Lado Direito - Imagem -->
                <div class="relative order-1 lg:order-2">
                    <div class="relative max-w-md mx-auto lg:max-w-none">
                        <div class="aspect-[3/4] bg-barber-dark/5 rounded-2xl overflow-hidden shadow-barber-lg">
                            <img src="/images/frente.jpg"
                                alt="Fachada da Elite Barber Shop - Ambiente sofisticado e acolhedor"
                                class="w-full h-full object-cover" />
                        </div>

                        <!-- Elementos decorativos -->
                        <div class="absolute -top-6 -left-6 w-12 h-12 bg-barber-gold/20 rounded-full blur-sm"></div>
                        <div class="absolute -bottom-4 -right-4 w-8 h-8 bg-barber-brown/30 rounded-full"></div>
                        <div class="absolute top-1/4 -right-8 w-6 h-6 bg-barber-gold/40 rounded-full"></div>

                        <!-- Card flutuante com informação adicional -->
                        <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 max-w-48">
                            <div class="flex items-center space-x-3">
                                <div class="w-10 h-10 bg-barber-gold rounded-full flex items-center justify-center">
                                    <svg class="w-5 h-5 text-barber-dark" fill="currentColor" viewBox="0 0 24 24">
                                        <path
                                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <div class="text-sm font-bold text-barber-dark">Excelência</div>
                                    <div class="text-xs text-barber-brown-dark">Reconhecida</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
// Props para customização futura
defineProps({
    title: {
        type: String,
        default: 'Tradição que Perdura'
    },
    subtitle: {
        type: String,
        default: 'Sobre Nós'
    }
})
</script>