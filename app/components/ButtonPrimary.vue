<template>
  <button 
    :class="buttonClasses"
    @click="handleClick"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses = 'bg-barber-gold hover:bg-barber-gold-dark text-barber-dark font-bold rounded-xl transition-all shadow-gold hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-4 px-8 text-base',
    lg: 'py-5 px-10 text-lg'
  }
  
  const widthClass = props.fullWidth ? 'w-full' : ''
  
  return `${baseClasses} ${sizeClasses[props.size]} ${widthClass}`
})

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>