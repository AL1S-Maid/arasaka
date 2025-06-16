<template>
  <v-timeline align="start" v-slide-in>
    <v-timeline-item>
      <template v-slot:opposite>
        <div class="text-h4">1915</div>
        <p class="opt-text">
          It was established in Tokyo as a manufacturing company at the beginning of the 20th century.
        </p>
      </template>
      <div>
        <div class="text-h5">Security Through Power</div>
        <p>
          At Arasaka, we believe true security comes from strength—of mind, of will, and of firepower. Our corporate philosophy is built around the principle that safety is not given, but earned and maintained through superior technology, relentless innovation, and unwavering control. We protect assets, information, and lives—not just with walls, but with vision.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item>
      <template v-slot:opposite>
        <div class="text-h4">2004</div>
        <p class="opt-text">
          At the beginning of the 21st century, our company was the first to develop a chip that could be implanted in the human body, and it was also the first company in the world to develop such a chip.
        </p>
      </template>
      <div>
        <div class="text-h5">Loyalty Above All</div>
        <p>
          Loyalty is the currency of the future. Every product, every strategy, and every decision within Arasaka is built on the foundation of absolute commitment to our clients, our partners, and our legacy. We don't just serve markets—we shape them. Our clients don’t choose us for convenience, they stay with us for trust.
        </p>
      </div>
    </v-timeline-item>
    <v-timeline-item>
      <template v-slot:opposite>
        <div class="text-h4">2020</div>
        <p class="opt-text">
          In 2020, our company became the largest multinational private enterprise in the world.
        </p>
      </template>
      <div>
        <div class="text-h5">Building Tomorrow Today</div>
        <p>
          Arasaka is more than a corporation—it is an architect of the future. From financial systems to security frameworks, we are committed to crafting a world where order triumphs over chaos. Guided by tradition, driven by ambition, we develop solutions that outlast governments and redefine what humanity can become.
        </p>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<style lang="scss">
.v-timeline--vertical.v-timeline--align-start .v-timeline-divider {
  .v-timeline-divider__after,.v-timeline-divider__before,.v-timeline-divider__dot {
    background: #ff003c !important;
    filter: drop-shadow(0 0 5px red);
  }
}
.text-h4,.opt-text {
  color: #ff003c;
  text-shadow: 0 0 15px #ff003c;
}
</style>