<script setup>
const advantagesData = [
  {
    preview: 'expertise.svg',
    title: 'Expertise',
    text: 'Our team consists of experienced VR developers, designers, and technicians who have a passion for VR and a commitment to delivering quality work and give the best service'
  },
  {
    preview: 'customization.svg',
    title: 'Customization',
    text: 'Every client is unique, and we believe every VR experience should be too. We\'ll work with you to create a customized solution that meets your specific needs and goals'
  },
  {
    preview: 'service.svg',
    title: 'Service',
    text: 'We believe in providing exceptional customer service, from initial consultation to final delivery. Our goal is to ensure you\'re satisfied with every aspect of your VR experience.'
  },
]
</script>

<template>
  <div class="container">
    <section class="advantages">
      <div v-for="(item, index) in advantagesData" :key="index" class="advantages-item">
        <img class="advantages-item__preview" :src="`/_nuxt/public/images/${item.preview}`" :alt="`${item.title}`">
        <h3 class="advantages-item__title">{{ item.title }}</h3>
        <p class="advantages-item__text">
          {{ item.text }}
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">

@import "assets/styles/main";

.advantages {
  display: flex;
  gap: 3.12rem;
  background-color: rgb(37, 37, 50);

  padding: 2.62rem 4rem 3.31rem;

  @include laptop {
    flex-direction: column;
    padding: 2.25rem;
  }
}

.advantages-item {

  &__preview {
    max-width: 4.38rem;
    width: 100%;
    height: 4.38rem;
    margin-bottom: 2.81rem;

    @include mobile {
      margin-bottom: 2.625rem;
    }
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.63rem;
    margin-bottom: .75rem;
  }

  &__text {
    color: $grey_1;
    font-size: 0.88rem;
    font-weight: 400;
    line-height: 1.75rem;
  }
}


</style>