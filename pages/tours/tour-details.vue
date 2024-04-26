<template>
  <div class="flex-1 flex items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto pl-6 pr-6">
      <div class="mt-8">
        <!-- product title -->
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
          <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-nowrap">
            <div class="ml-4 mt-4">
              <div class="flex items-center">
                <div class="flex ml-4">
                  <div class="mt-1">
                    <img class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                      alt="">
                  </div>
                  <div class="px-5">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                      Product Name
                    </h3>
                    <p class="text-sm text-gray-500 uppercase">
                      <a href="#">
                        Supplier Name
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="ml-4 mt-4 flex-shrink-0 flex">
              <button type="button"
                class="relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <!-- Heroicon name: solid/phone -->
                <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>
                  Phone
                </span>
              </button>
              <button type="button"
                class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <!-- Heroicon name: solid/mail -->
                <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                  fill="currentColor" aria-hidden="true">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>
                  Message
                </span>
              </button>
              <button type="button" v-on:click="toggleModal()"
                class="ml-3 relative bg-green-600 text-white inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <!-- Heroicon name: solid/mail -->
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span class="ml-3">
                  Check Availability
                </span>
              </button>
            </div>
          </div>
        </div>
        <!-- product title /-->
        <!-- product tabs -->
        <div>
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select a tab</label>
            <select id="tabs" name="tabs"
              class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
              <option selected>Product Detailsss</option>

              <option>Media</option>

              <option>Supplier Information</option>

              <option>Other Products</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <nav class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200" aria-label="Tabs">
              <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" -->
              <a href="#" v-on:click="toggleTabs(1)"
                class="text-gray-900 rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                aria-current="page">
                <span>Product Details</span>
                <span aria-hidden="true"
                  v-bind:class="{'bg-transparent': openTab !== 1, 'bg-indigo-500': openTab === 1}"
                  class="absolute inset-x-0 bottom-0 h-0.5"></span>
              </a>

              <a href="#" v-on:click="toggleTabs(2)"
                class="text-gray-500 hover:text-gray-700   rounded-l-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                <span>Media</span>
                <span aria-hidden="true"
                  v-bind:class="{'bg-transparent': openTab !== 2, 'bg-indigo-500': openTab === 2}"
                  class=" absolute inset-x-0 bottom-0 h-0.5"></span>
              </a>

              <a href="#" v-on:click="toggleTabs(3)"
                class="text-gray-500 hover:text-gray-700 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                <span>Supplier Information</span>
                <span aria-hidden="true"
                  v-bind:class="{'bg-transparent': openTab !== 3, 'bg-indigo-500': openTab === 3}"
                  class="absolute inset-x-0 bottom-0 h-0.5">
                </span>
              </a>

              <a href="#" v-on:click="toggleTabs(4)"
                class="text-gray-500 hover:text-gray-700 rounded-r-lg group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10">
                <span>Other Products</span>
                <span aria-hidden="true"
                  v-bind:class="{'bg-transparent': openTab !== 4, 'bg-indigo-500': openTab === 4}"
                  class="absolute inset-x-0 bottom-0 h-0.5"></span>
              </a>
            </nav>
          </div>
        </div>
        <!-- product tabs /-->
        <!-- tab data -->
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="bg-white mt-8 shadow overflow-hidden sm:rounded-lg">
          <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
            <div class="flex justify-between px-4 py-5 sm:px-6">
              <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                  Pricied From : $100.00
                </h3>
                <p class="text-lg leading-6 font-medium text-gray-800">
                  Product Details
                </p>
                <p class="mt-1 max-w-2xl text-sm text-gray-500">
                  Personal information.
                </p>
              </div>
              <div>
                <select id="location" name="location"
                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option selected>Change Language</option>
                  <option>USA</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">
                    Duration
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    1.5hrs
                  </dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-medium text-gray-500">
                    Salary Expectation
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    $120,000
                  </dd>
                </div>

              </dl>
              <div class="mt-6 sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">
                  About
                </dt>
                <dd class="mt-1 text-sm text-gray-900">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                  Excepteur qui ipsum aliquip consequat sint.
                  Sit id mollit nulla mollit nostrud in ea officia proident.
                  Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                  Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident.
                  Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                  Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident.
                  Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                  Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident.
                  Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                </dd>
              </div>
            </div>
          </div>
        </div>
        <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
          <p>
            This is a media part
            <br />
            <br />
            Dynamically innovate resource-leveling customer service for
            state of the art customer service.
          </p>
        </div>
        <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
          <p>
            tab3
            Efficiently unleash cross-media information without
            cross-media value. Quickly maximize timely deliverables for
            real-time schemas.
            <br />
            <br />
            Dramatically maintain clicks-and-mortar solutions
            without functional solutions.
          </p>
        </div>
        <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
          <p>
            tab4
            Efficiently unleash cross-media information without
            cross-media value. Quickly maximize timely deliverables for
            real-time schemas.
            <br />
            <br />
            Dramatically maintain clicks-and-mortar solutions
            without functional solutions.
          </p>
        </div>

        <!-- tab data /-->
      </div>
    </main>
    <!-- modal part start-->

    <!-- <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black" v-on:click="toggleModal()"></div> -->
      <Modal 
      v-show="showModal"
      @toggleModal="toggleModal()"
    />
    <!-- modal part end-->

    <!-- Secondary column (hidden on smaller screens) -->
    <aside class="
        hidden
        w-96
        bg-white
        border-l border-gray-200
        overflow-y-auto
        lg:block
      ">
      <!-- Your content -->
      <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
        <ActivityFeed />
      </div>
      <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
        <p>
          Tab2
        </p>
      </div>
      <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
        <p>
          Tab3
        </p>
      </div>
      <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
        <p>
          Tab4
        </p>
      </div>
    </aside>
  </div>
</template>
<script>
  import ActivityFeed from '@/components/tours/ActivityFeed.vue'
  import Modal from '@/components/tours/Modal.vue'

  export default {
    layout: "default",
    name: "tour-details",
    components: {
      ActivityFeed,
      Modal
    },
    data() {
      return {
        openTab: 1,
        showModal: false
      }
    },
    methods: {
      toggleTabs: function (tabNumber) {
        this.openTab = tabNumber
      },
      toggleModal: function () {
        this.showModal = !this.showModal;
      }
    }

  };

</script>
<style scoped>
</style>
