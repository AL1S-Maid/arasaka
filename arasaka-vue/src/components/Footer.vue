<script lang="ts" setup>

</script>

<template>
  <footer class="footer">
    <div class="linebreak"></div>
    <div class="made">
      <img src="@/../public/Arasaka-Logo-RED.png" alt="">
      <div class="linebreak"></div>
      <div class="list">
        <RouterLink to="https://github.com/">
          <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/>
          </svg>
        </RouterLink>
        <RouterLink to="https://x.com/">
          <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24">
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 21l7.5-7.5m3-3L21 3M8 3H3l13 18h5Z"/>
          </svg>
        </RouterLink>
        <RouterLink to="https://discord.com/">
          <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 16 16">
            <path fill="currentColor" d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011a.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0a8 8 0 0 0-.412-.833a.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02a.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595a.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085a8 8 0 0 1-1.249.594a.05.05 0 0 0-.03.03a.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019a13.2 13.2 0 0 0 4.001-2.02a.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613c0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613c0 .888-.631 1.612-1.438 1.612"/>
          </svg>
        </RouterLink>
        <RouterLink to="https://linkedin.com/">
          <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
          </svg>
        </RouterLink>
        <RouterLink to="https://youtube.com/">
          <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" viewBox="0 0 24 24">
            <path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/>
          </svg>
        </RouterLink>
      </div>
    </div>
    <div class="linebreak"></div>
    <span class="copyright">Copyright &copy; Arasaka 1915-2025</span>
    <div class="router">
      <RouterLink to="">Privacy Policy</RouterLink>
      <RouterLink to="">Cookie Policy</RouterLink>
      <RouterLink to="">MIT Permission</RouterLink>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/styles/base' as *;
.footer {
  background-color: #161616;
  @include flex-style;
  flex-direction: column;
  width: 100vw;
  color: #fff;
  gap: 25px;
  padding-bottom: 20px;
  @media (max-width: 768px) {
    gap: 15px;
  }
  .linebreak {
    background-image: linear-gradient(96.18deg, rgba(215, 196, 255, 0) 10%, hsla(0, 0%, 78%, .24) 50%, rgba(215, 196, 255, 0) 90%);
    bottom: auto;
    height: 1px;
    left: 0;
    margin: 0 auto;
    position: relative;
    right: 0;
    top: 0;
    width: 100%;
  }
  .made {
    width: 100vw;
    @include flex-style;
    justify-content: space-evenly;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 25px;
    }
    img {
      width: 380px;
      filter: drop-shadow(0 0 5px red);
    }
    .linebreak {
      display: none;
      @media (max-width: 768px) {
        display: block;
      }
    }
    .list {
      @include flex-style;
      gap: 36px;
      margin-right: 120px;
      @media (max-width: 768px) {
        margin: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .router {
    @include flex-style;
    gap: 20px;
  }
}
</style>