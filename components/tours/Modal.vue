<template>

  <div
    class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="fixed inset-0 overflow-hidden" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
      <div class="absolute inset-0 overflow-hidden">
        <!-- Background overlay, show/hide based on slide-over state. -->
        <div class="absolute inset-0" aria-hidden="true">
          <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
            <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        -->
            <div class="w-screen max-w-2xl">
              <div class="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
                <div class="px-4 sm:px-6">
                  <div class="flex items-start justify-between">
                    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                      Check Availability
                    </h2>
                    <div class="ml-3 h-7 flex items-center">
                      <button type="button" v-on:click="toggleModal()"
                        class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span class="sr-only">Close panel</span>
                        <!-- Heroicon name: outline/x -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="mt-6 relative flex-1 px-4 sm:px-6">
                  <!-- Replace with your content -->
                  <div class="absolute inset-0 px-4 sm:px-6">
                    <div class="flex items-start justify-between">
                      <div>
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
                      <div>
                        <button type="button"
                          class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <!-- Heroicon name: solid/mail -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                              d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                          </svg>
                          <span class="px-4">
                            Qubick Booking
                          </span>
                        </button>
                      </div>
                    </div>

                    <!-- start date part  -->
                    <div class="mt-5 flex items-start justify-between">
                      <div class="mt-2  sm:col-span-1  lg:col-span-1">
                        <div class="max-w-full flex rounded-md shadow-sm px-2">
                          <span
                            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            Start
                          </span>
                          <input type="text" name="username" id="username" autocomplete="username" placeholder="Start Date"
                            class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                        </div>
                      </div>
                      <div class="mt-2 px-2 sm:col-span-1 lg:col-span-1">
                        <div class="max-w-full flex rounded-md shadow-sm">
                          <span
                            class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            End
                          </span>
                          <input type="text" name="username" id="username" autocomplete="username" placeholder="End Date"
                            class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
                        </div>

                      </div>

                      <div class="mt-2 px-2   sm:col-span-2 lg:col-span-2">
                        <button type="button"
                          class="inline-flex items-center px-2 py-2 whitespace-nowrap border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <!-- Heroicon name: solid/mail -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                            <path fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                              clip-rule="evenodd" />
                          </svg>
                          Search Availability
                        </button>
                      </div>
                    </div>
                    <!-- steps part -->
                    <div class="mt-5 px-2">
                       <nav aria-label="Progress">
                        <ol role="list" class="space-y-4 md:flex md:space-y-0 md:space-x-8">
                          <li v-for="step in steps" :key="step.name" class="md:flex-1 ">
                            <a v-if="step.status === 'complete'" :href="step.href" class="group pl-4 py-2 flex flex-col border-l-4 border-indigo-600 hover:border-indigo-800 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                              <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase group-hover:text-indigo-800">{{ step.id }}</span>
                              <span class="text-sm font-medium">{{ step.name }}</span>
                            </a>
                            <a v-else-if="step.status === 'current'" :href="step.href" class="pl-4 py-2 flex flex-col border-l-4 border-indigo-600 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4" aria-current="step">
                              <span class="text-xs text-indigo-600 font-semibold tracking-wide uppercase">{{ step.id }}</span>
                              <span class="text-sm font-medium">{{ step.name }}</span>
                            </a>
                            <a v-else :href="step.href" class="group pl-4 py-2 flex flex-col border-l-4 border-gray-200 hover:border-gray-300 md:pl-0 md:pt-4 md:pb-0 md:border-l-0 md:border-t-4">
                              <span class="text-xs text-gray-500 font-semibold tracking-wide uppercase group-hover:text-gray-700">{{ step.id }}</span>
                              <span class="text-sm font-medium">{{ step.name }}</span>
                            </a>
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <!-- Booking Part -->
                    <div class="mt-5 border-t border-gray-200">
                      
                    </div>
                  </div>

                  <!-- /End replace -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  const steps = [
  { id: 'Step 1', name: 'Check Availablity', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'Select Guests', href: '#', status: 'currents' },
  { id: 'Step 3', name: 'Add to Cart', href: '#', status: 'upcoming' },
]
  export default {
    name: 'Modal',
     data() {
        return {
          steps,
        }
      },
    methods: {
      toggleModal() {
        this.$emit('toggleModal');
      },
    },
  };

</script>
