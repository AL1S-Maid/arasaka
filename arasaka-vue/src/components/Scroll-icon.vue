<template>
  <div class="scrollme">
    <svg width="30px" height="20px" aria-hidden="true">
      <path stroke="#ff003c" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.scrollme {
  visibility: inherit;
  position: absolute;
  left: 50%;
  bottom: 20px;
  width: 30px;
  height: 20px;
  margin: 0 0 0 -15px;
  transition: all 0.2s ease;
  animation: fadeInOut 4s infinite ease;
  svg {
    
    &:not(:root) {
      overflow: hidden;
    }
    path {
      fill: none;
      stroke: #ff003c;
    }
  }
  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: 1;
    }
    90% {
      opacity: 0;
    }
  }
}
</style>