<template>
  <div class="timer" :class="{'timer__expiring': timerExpiring}" >
    <div class="timer__time" :style="timerTimeStyle">
      <span class="timer__time-text">{{ timeFormatted }}</span>
    </div>
  </div>
</template>

<script setup>
import {computed, ref, watch} from "vue";

const props = defineProps({
  maxTime: Number,
  currentTime: {
    type: Number,
    default: (rawProps) => {
      return rawProps.maxTime
    }
  },
})

const emits = defineEmits(['completed'])

const timeSpent = ref(0)

const timeLeft = computed(() => {
  return props.currentTime - timeSpent.value
})

watch(() => timeLeft.value, (val) => {
  if (val <= 0) {
    clearInterval(interval)
    emits('completed', true)
  }
})

const timerExpiring = computed(() => {
  return timeLeft.value <= 10
})

const timerTimeStyle = computed(() => {
  let currentWidth = timeLeft.value * (100 / props.maxTime)
  if (currentWidth > 100) {
    return {width: '100%'}
  }
  if (currentWidth > 0) {
    return {width: `${currentWidth}%`}
  }

  return {width: '0'}
})

const timeFormatted = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60);
  const seconds = timeLeft.value % 60;
  return `${minutes < 10 ? '0'+minutes : minutes}:${seconds < 10 ? '0'+seconds : seconds}`
})

const interval = setInterval(() => {
  timeSpent.value++
}, 1000)

</script>

<style lang="scss" scoped>
.timer {
  width: 160px;
  height: 60px;
  border-radius: 12px;
  background-color: $cl-background-black;
  position: relative;
  overflow: hidden;

  @include media-sm {
    margin-left: auto;
    width: 110px;
    height: 47px;
  }

  &__time {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: $cl-background-green;
    border-radius: 9px;
  }

  &__expiring {
    border: 2px solid $cl-error;
    filter: drop-shadow(0px 0px 6px rgba(255, 0, 0, 0.8));
    animation: blink 1s 250ms infinite;
  }

  &__time-text {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    color: $cl-font-white;
    position: absolute;
    width: 160px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @include media-sm {
      width: 110px;
    }
  }

}

@keyframes blink {
  0%    {     filter: drop-shadow(0px 0px 6px rgba(255, 0, 0, 0.8));}
  50%   {     filter: drop-shadow(0px 0px 6px rgba(255, 0, 0, 0));}
  100%  {     filter: drop-shadow(0px 0px 6px rgba(255, 0, 0, 0.8));}
}

</style>