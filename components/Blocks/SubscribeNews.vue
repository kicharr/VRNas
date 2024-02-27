<script setup>
const email = ref('');

const subscribeToNews = () => {
  if (email.value) {
    console.log(email.value);
    email.value = '';
  }
}
</script>

<template>
  <div class="container">
    <section class="subscribe">
      <div class="subscribe__text">
        <p>
          Subscribe to our newsletter <br> for latest updates
        </p>
      </div>
      <div class="subscribe__form">
        <input class="input input--subscribe" v-model="email" placeholder="Enter your email address">
        <button @click="subscribeToNews" class="btn btn--input">
          <img src="@/public/images/icons/btn-input.svg" alt="Icon">
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/vars";

.subscribe {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.3rem 4.6rem 1.9rem;
  border-radius: .25rem;
  margin: 9.375rem auto 4.188rem;

  background-image: $linearBackground;

  @include tablet {
    text-align: center;
    align-items: stretch;
    flex-direction: column;
    padding: 1.93rem .81rem;
    margin: 6.25rem auto 5.75rem;
  }

  &__text {
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 3.63rem;

    @include tablet {
      font-size: 1.75rem;
      line-height: 2.25rem;
      margin-bottom: .5rem;
    }
  }

  &__form {
    position: relative;
  }
}
</style>