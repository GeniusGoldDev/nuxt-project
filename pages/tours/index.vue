<template>
  <div class="flex-1 flex items-stretch">

    <main class="flex-1 pb-5">
      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <!-- filters -->
        <div class="mt-8">
          <h3 class="text-sm leading-5 font-medium text-gray-500">
            Search Suppliers
          </h3>
          <div class="grid grid-cols-6 gap-5">
            <div class="mt-2
                      sm:col-span-2
                      lg:col-span-2">
              <div class="max-w-full flex rounded-md shadow-sm">
                <span
                  class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  Name
                </span>
                <input type="text" name="username" id="username" autocomplete="username"
                  class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
              </div>
            </div>
            <div class="mt-1
                      sm:col-span-1
                      lg:col-span-1">
              <div class="max-w-full flex rounded-md shadow-sm">
                <select id="location" name="location"
                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option selected>Action Type</option>
                  <option>USA</option>
                  <option >Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
            <div class="mt-1
                      sm:col-span-1
                      lg:col-span-1">
              <div class="max-w-full flex rounded-md shadow-sm">
                <select id="location" name="location"
                  class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option selected>Location</option>
                  <option>USA</option>
                  <option >Canada</option>
                  <option>EU</option>
                </select>
              </div>
            </div>
            <div class="mt-2
                      sm:col-span-1
                      lg:col-span-1">
              <button type="button"
                class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <!-- Heroicon name: solid/mail -->
                <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                  <path fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
                    clip-rule="evenodd" />
                </svg>
                Search Suppliers
              </button>
            </div>
          </div>
        </div>
        <!-- filters -->
        <!-- results component -->
        <div class="mt-8 h-full ">

          <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

            <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->
              <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->
           <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->
             <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->
               <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->
               <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->
               <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->
             <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->
             <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->
             <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->
             <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->
             <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->
             <!-- Items.. -->
            <li class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
              <div class="flex-1 flex flex-col p-8">
                <img class="flex-shrink-0 mx-auto bg-black w-40 h-32 shadow rounded-lg"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
                  alt="">
                <h3 class="mt-6 text-gray-900 text-sm font-medium">Classic - 24 hour BIG BUS</h3>
                <dl class="mt-1 flex-grow flex flex-col justify-between">
                  <dt class="sr-only">Title</dt>
                  <dd class="text-gray-500 text-sm">BIG BUS SYDNEY</dd>
                </dl>
              </div>
              <div>
                <div class="-mt-px flex divide-x divide-gray-200">
                  <!-- button -->
                  <div class="w-0 flex-1 flex">
                    <NuxtLink  to="/tours/tour-details"
                      class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm bg-green-600 text-white font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span class="ml-3">CHECK AVAILABILITY</span>
                    </NuxtLink >
                  </div>
                  <!-- button -->
                </div>
              </div>
            </li>
            <!-- Items.. -->

         

          </ul>
        </div>
        <!-- results -->
      </div>
    </main>
  </div>
</template>
<script>
  export default {
    layout: "default",
  };

</script>
<style scoped>
</style>
