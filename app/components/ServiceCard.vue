<template>
  <div class="bg-white rounded-2xl shadow-barber-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
    <!-- Imagem do Serviço -->
    <div class="aspect-square overflow-hidden relative">
      <img 
        :src="imageUrl" 
        :alt="`${serviceName} - Elite Barber Shop`"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <!-- Overlay com gradiente -->
      <div class="absolute inset-0 bg-gradient-to-t from-barber-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <!-- Conteúdo do Card -->
    <div class="p-6 space-y-4">
      <div class="space-y-2">
        <h3 class="text-xl font-bold text-barber-dark group-hover:text-barber-gold transition-colors">
          {{ serviceName }}
        </h3>
        <p class="text-barber-brown-dark text-sm leading-relaxed">
          {{ description }}
        </p>
      </div>
      
      <!-- Preço e Botão -->
      <div class="flex items-center justify-between pt-2">
        <div class="text-2xl font-bold text-barber-gold">
          R$ {{ price }}
        </div>
        <button class="bg-barber-gold hover:bg-barber-gold-dark text-barber-dark font-semibold px-4 py-2 rounded-lg transition-colors text-sm">
          Agendar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  serviceName: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  price: {
    type: [String, Number],
    required: true
  },
  description: {
    type: String,
    default: 'Serviço profissional com técnicas modernas e produtos premium.'
  }
})
</script>