<template>
  <section class="py-16 lg:py-24 bg-barber-cream">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header da Seção -->
      <div class="text-center space-y-4 mb-12 lg:mb-16">
        <div class="inline-block">
          <span class="text-barber-gold font-semibold text-sm uppercase tracking-wider">Contato</span>
          <div class="w-12 h-0.5 bg-barber-gold mt-2 mx-auto"></div>
        </div>
        
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-barber-dark leading-tight">
          Venha nos <span class="text-barber-gold">Visitar</span>
        </h2>
        
        <p class="text-lg text-barber-brown-dark max-w-2xl mx-auto">
          Estamos prontos para atendê-lo com excelência. Agende seu horário ou venha conhecer nosso espaço.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        <!-- Lado Esquerdo - Informações de Contato -->
        <div class="space-y-8">
          
          <!-- Informações Principais -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-barber-dark mb-6">Informações de Contato</h3>
            
            <!-- Endereço -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-barber-gold rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-barber-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-barber-dark mb-1">Endereço</h4>
                <p class="text-barber-brown-dark">
                  Rua da Barbearia, 123<br>
                  Centro - São Paulo, SP<br>
                  CEP: 01234-567
                </p>
              </div>
            </div>

            <!-- Telefone -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-barber-gold rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-barber-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-barber-dark mb-1">Telefone</h4>
                <p class="text-barber-brown-dark">
                  <a href="tel:+5511999999999" class="hover:text-barber-gold transition-colors">
                    (11) 99999-9999
                  </a>
                </p>
                <p class="text-sm text-barber-brown-dark/80">
                  WhatsApp disponível
                </p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-barber-gold rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-barber-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-barber-dark mb-1">Email</h4>
                <p class="text-barber-brown-dark">
                  <a href="mailto:contato@elitebarbershop.com" class="hover:text-barber-gold transition-colors">
                    contato@elitebarbershop.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <!-- Horário de Funcionamento -->
          <div class="bg-white rounded-2xl p-6 shadow-barber">
            <h4 class="font-bold text-barber-dark mb-4 flex items-center">
              <svg class="w-5 h-5 text-barber-gold mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"/>
              </svg>
              Horário de Funcionamento
            </h4>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-barber-brown-dark">Segunda a Sexta</span>
                <span class="font-medium text-barber-dark">08:00 - 19:00</span>
              </div>
              <div class="flex justify-between">
                <span class="text-barber-brown-dark">Sábado</span>
                <span class="font-medium text-barber-dark">08:00 - 17:00</span>
              </div>
              <div class="flex justify-between">
                <span class="text-barber-brown-dark">Domingo</span>
                <span class="font-medium text-barber-dark">09:00 - 15:00</span>
              </div>
            </div>
          </div>

          
        </div>

        <!-- Lado Direito - Mapa -->
        <div class="relative">
          <div class="aspect-[4/3] bg-barber-dark/5 rounded-2xl overflow-hidden shadow-barber-lg">
            <!-- Google Maps Embed -->
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6333824!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCentro%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt!2sbr!4v1642000000000!5m2!1spt!2sbr"
              width="100%"
              height="100%"
              style="border:0; border-radius: 1rem;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full rounded-2xl"
            ></iframe>
          </div>
          
          <!-- Card com informação adicional -->
          <div class="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 max-w-56">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-barber-gold rounded-full flex items-center justify-center">
                <svg class="w-5 h-5 text-barber-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9H19V1h-2v1H7V1H5v1H4.5C3.67 2 3 2.67 3 3.5v15C3 19.33 3.67 20 4.5 20h15c.83 0 1.5-.67 1.5-1.5v-15C21 2.67 20.33 2 19.5 2z"/>
                </svg>
              </div>
              <div>
                <div class="text-sm font-bold text-barber-dark">Fácil Acesso</div>
                <div class="text-xs text-barber-brown-dark">Centro da cidade</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonPrimary from './ButtonPrimary.vue'

// Função de interação
const handleCallClick = () => {
  window.location.href = 'tel:+5511999999999'
}
</script>