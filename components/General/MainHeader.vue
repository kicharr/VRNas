<script setup lang="ts">

</script>

<template>
  <header class="header">
    <div class="header__image">
      <img src="@/public/images/header-image.png">
    </div>
    <div class="header-content container">
      <div class="header__logo">
        <NuxtLink class="logotype logotype__link">
          <img class="logotype__image" src="@/public/images/logotype.svg" alt="Logo">
        </NuxtLink>
      </div>
      <div class="header__nav">
        <nav class="header-navigation">
          <ul class="header-navigation__list">
            <li class="header-navigation__link">
              <NuxtLink class="link">Home</NuxtLink>
            </li>
            <li class="header-navigation__link">
              <NuxtLink class="link">About us</NuxtLink>
            </li>
            <li class="header-navigation__link">
              <NuxtLink class="link ">Service</NuxtLink>
            </li>
            <li class="header-navigation__link header-navigation__link--dropdown">
              <NuxtLink class="link  ">Page</NuxtLink>
            </li>
            <li class="header-navigation__link header-navigation__link--dropdown">
              <NuxtLink class="link ">Blog</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <div class="header__action">
        <button class="btn btn--linear">Contact us</button>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

.header {
  padding-top: 1.93rem;
  padding-bottom: 1.93rem;
  position: relative;
  z-index: 5;

  &__image {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;

    max-width: 46rem;
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logotype {
  &__image {
    max-width: 6.31rem;
    width: 100%;
  }
}

.header-navigation {
  &__list {
    display: flex;
  }

  &__link {
    margin-right: 4rem;

    &--dropdown {
      position: relative;

      &::after {
        position: absolute;
        content: url("@/public/images/icons/dropdown.svg");
        right: -0.8375rem;
        top: -0.1rem;
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }


}
</style>