<template>
  <fieldset class="py-1 md:w-lg block md:py-0 mt-8">
    <div>
      <label
        v-for="plan in plans"
        :key="plan.name"
        :value="plan.name"
        class="w-full border-b border-gray-300 group flex justify-between items-center cursor-pointer border-b-sm p-4 focus:outline-hidden has-checked:relative has-checked:bg-white hover:bg-gray-50"
      >
        <div class="flex items-center">
          <input
            name="privacy-plan"
            :value="plan.name"
            type="radio"
            :checked="plan.selected"
            class="relative mt-0.5 mr-3.5 size-4 shrink-0 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-black not-checked:before:hidden checked:border-black focus-visible:outline-2 focus-visible:outline-offset-2 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
          />
          <span class="flex items-center">
            <span class="flex flex-col">
              <span class="sm:text-lg text-base font-semibold text-gray-900">{{
                plan.name
              }}</span>
              <span class="text-gray-500">
                <span class="block font-normal sm:text-xs text-lg sm:inline">{{
                  plan.offer
                }}</span>
              </span>
            </span>
          </span>
        </div>

        <span class="mt-2 flex text-sm sm:mt-0 sm:ml-4 flex-col sm:text-right">
          <span class="text-lg font-semibold text-gray-900">{{
            plan.price
          }}</span>
          <span class="ml-1 line-through text-gray-500 sm:ml-0">{{
            plan.originalPrice
          }}</span>
        </span>
        <span
          :class="[
            active ? 'border' : 'border-2',
            checked ? 'border-indigo-600' : 'border-transparent',
            'pointer-events-none absolute -inset-px rounded-lg',
          ]"
        />
      </label>
    </div>
  </fieldset>
</template>

<script setup>
import { ref } from "vue";

const plans = [
  {
    name: "One-Time Order",
    offer: "Save 10% on one-time items added to a subscription.",
    price: "$52.99",
    originalPrice: "$64.99",
  },
];

const selected = ref(plans[0]);
</script>
