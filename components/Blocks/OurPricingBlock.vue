<script setup>

</script>

<template>
  <div class="container">
    <section class="pricing">
      <div class="section-heading section-pricing-heading">
        <p class="section-heading__text section-heading__text--gradient">
          our pricing
        </p>
        <h2 class="section-heading__title">
          Affordable VR Services for Everyone
        </h2>
        <p class="section-heading__text">
          At VRNas, we believe that everyone should have access to the benefits of VR. That's <br> why we offer a range
          of
          pricing options to meet the needs of any budget.
        </p>
      </div>
      <div class="pricing-content">
        <div class="pricing-content__left">
          <div class="card">
            <div class="card__icon">
              <img src="@/public/images/icons/block-our-pricing-icon.svg" alt="Icon">
            </div>
            <div class="card__content">
              <span class="card__title">
                Customizable Packages
              </span>
              <p class="card__text">
                We understand that each project is unique, so we offer customizable packages to ensure that you get the
                services you need at a price that works for you. Our team will work with you to create a package that
                meets your specific goals and budget.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card__icon">
              <img src="@/public/images/icons/block-our-pricing-icon.svg" alt="Icon">
            </div>
            <div class="card__content">
              <span class="card__title">
                Customizable Packages
              </span>
              <p class="card__text">
                We understand that each project is unique, so we offer customizable packages to ensure that you get the
                services you need at a price that works for you. Our team will work with you to create a package that
                meets your specific goals and budget.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card__icon">
              <img src="@/public/images/icons/block-our-pricing-icon.svg" alt="Icon">
            </div>
            <div class="card__content">
              <span class="card__title">
                Customizable Packages
              </span>
              <p class="card__text">
                We understand that each project is unique, so we offer customizable packages to ensure that you get the
                services you need at a price that works for you. Our team will work with you to create a package that
                meets your specific goals and budget.
              </p>
            </div>
          </div>
        </div>
        <div class="pricing-content__right">
          <img class="pricing-main-image" src="@/public/images/pricing-block-human-look-left.png" alt="Man">
        </div>
      </div>
      <div class="price-start">
        <p class="price-start__text">Start from</p>
        <span class="price-start__price">$99</span>
        <button class="btn btn--start">get started</button>
        <p class="price-start__desc">30 Days Moneyback Guarantee</p>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "assets/styles/vars";

.pricing {
  position: relative;

  &::before {
    position: absolute;
    top: calc(50% - 13rem);
    left: calc(50% - 20rem);
    content: "";
    background-image: url("@/public/images/pricing-block-gradient-item.png");
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;

    @include laptop {
      top: unset;
      left: 0;
      bottom: 0;
    }
  }
}

.pricing-content {
  display: flex;
  justify-content: space-between;
  background: rgba(37, 37, 50, .81);
  padding-top: 3.438rem;
  padding-left: 2.625rem;

  position: relative;

  &__left {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @include laptop {
      margin-bottom: 5.313rem;
    }
  }

  &__right {
    @include laptop {
      display: flex;
      justify-content: flex-end;
    }
  }

  @include laptop {
    flex-direction: column;
    padding: 2rem 1.375rem 0;
  }
}

.price-start {
  position: absolute;

  bottom: -3rem;
  right: 10.75rem;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: rgb(37, 37, 50);
  padding: 1.25rem 4.375rem;

  @include border-gradient;

  @include laptop {
    bottom: -5.5rem;
    right: unset;
    left: 0.938rem;
  }

  &__text {
    font-size: 0.88rem;
    font-weight: 500;
    line-height: 1.25rem;
  }

  &__price {
    font-size: 3.75rem;
    font-weight: 600;
    line-height: 4.13rem;
    margin-bottom: .87rem;
  }

  &__desc {
    color: $grey_1;
    font-size: .75rem;
    font-weight: 400;
    line-height: 1.25rem;

    margin-top: 0.875rem;
  }
}

.card {
  display: flex;
  gap: 1.125rem;

  max-width: 40rem;
  width: 100%;

  @include laptop {
    max-width: unset;
  }

  &__icon {
    max-width: 2.625rem;
    width: 100%;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: .75rem;
  }

  &__title {
    font-size: 1.13rem;
    font-weight: 400;
    line-height: 1.44rem;
  }

  &__text {
    color: $grey_1;
  }
}

.pricing-main-image {
  max-width: 22.51rem;
  width: 100%;

  @include laptop {
    max-width: 16.01rem;
  }
}


</style>