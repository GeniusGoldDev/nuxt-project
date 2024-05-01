<template>
  <div class="flex-1 flex items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Quick buttons -->
        <div class="mt-5">
          <div class="
                  mt-5
                  grid
                  gap-3
                  sm:grid-cols-2
                  lg:grid-cols-2
                ">

            <!-- quick reports -->
            <div>
              <ul class="
                      mt-1
                      grid
                      gap-2
                      sm:grid-cols-1
                      lg:grid-cols-1
                    ">
                <li class="col-span-1 flex shadow-sm rounded-md">
                  <div class="
                          flex-shrink-0 flex
                          items-center
                          justify-center
                          w-16
                          bg-yellow-500
                          text-white text-sm
                          font-medium
                          rounded-l-md
                        ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="
                          flex-1 flex
                          items-center
                          justify-between
                          border-t border-r border-b border-gray-200
                          bg-white
                          rounded-r-md
                          truncate
                        ">
                    <div class="flex-1 px-4 py-2 text-sm truncate">
                      <a href="#" class="
                              text-gray-900
                              font-medium
                              hover:text-gray-600
                            ">Latest Bookings</a>
                      <p class="text-gray-500">Latest booking data</p>
                    </div>
                    <div class="flex-shrink-0 pr-2">
                      <button class="
                              w-8
                              h-8
                              bg-white
                              inline-flex
                              items-center
                              justify-center
                              text-gray-400
                              rounded-full
                              bg-transparent
                              hover:text-gray-600
                            ">
                        <span class="sr-only">view</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
                <li class="col-span-1 flex shadow-sm rounded-md">
                  <div class="
                          flex-shrink-0 flex
                          items-center
                          justify-center
                          w-16
                          bg-yellow-500
                          text-white text-sm
                          font-medium
                          rounded-l-md
                        ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="
                          flex-1 flex
                          items-center
                          justify-between
                          border-t border-r border-b border-gray-200
                          bg-white
                          rounded-r-md
                          truncate
                        ">
                    <div class="flex-1 px-4 py-2 text-sm truncate">
                      <a href="#" class="
                              text-gray-900
                              font-medium
                              hover:text-gray-600
                            ">Latest Bookings</a>
                      <p class="text-gray-500">Latest booking data</p>
                    </div>
                    <div class="flex-shrink-0 pr-2">
                      <button class="
                              w-8
                              h-8
                              bg-white
                              inline-flex
                              items-center
                              justify-center
                              text-gray-400
                              rounded-full
                              bg-transparent
                              hover:text-gray-600
                            ">
                        <span class="sr-only">view</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
                <li class="col-span-1 flex shadow-sm rounded-md">
                  <div class="
                          flex-shrink-0 flex
                          items-center
                          justify-center
                          w-16
                          bg-purple-500
                          text-white text-sm
                          font-medium
                          rounded-l-md
                        ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div class="
                          flex-1 flex
                          items-center
                          justify-between
                          border-t border-r border-b border-gray-200
                          bg-white
                          rounded-r-md
                          truncate
                        ">
                    <div class="flex-1 px-4 py-2 text-sm truncate">
                      <a href="#" class="
                              text-gray-900
                              font-medium
                              hover:text-gray-600
                            ">Top Earning Suppliers</a>
                      <p class="text-gray-500">
                        Your best performing suppliers
                      </p>
                    </div>
                    <div class="flex-shrink-0 pr-2">
                      <button class="
                              w-8
                              h-8
                              bg-white
                              inline-flex
                              items-center
                              justify-center
                              text-gray-400
                              rounded-full
                              bg-transparent
                              hover:text-gray-600
                            ">
                        <span class="sr-only">view</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- quick reports row 2 -->
            <div>
              <ul class="
                      mt-1
                      grid
                      gap-2
                      sm:grid-cols-1
                      lg:grid-cols-1
                    ">
                <li class="col-span-1 flex shadow-sm rounded-md">
                  <div class="
                          flex-shrink-0 flex
                          items-center
                          justify-center
                          w-16
                          bg-yellow-500
                          text-white text-sm
                          font-medium
                          rounded-l-md
                        ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="
                          flex-1 flex
                          items-center
                          justify-between
                          border-t border-r border-b border-gray-200
                          bg-white
                          rounded-r-md
                          truncate
                        ">
                    <div class="flex-1 px-4 py-2 text-sm truncate">
                      <a href="#" class="
                              text-gray-900
                              font-medium
                              hover:text-gray-600
                            ">Latest Bookings</a>
                      <p class="text-gray-500">Latest booking data</p>
                    </div>
                    <div class="flex-shrink-0 pr-2">
                      <button class="
                              w-8
                              h-8
                              bg-white
                              inline-flex
                              items-center
                              justify-center
                              text-gray-400
                              rounded-full
                              bg-transparent
                              hover:text-gray-600
                            ">
                        <span class="sr-only">view</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
                <li class="col-span-1 flex shadow-sm rounded-md">
                  <div class="
                          flex-shrink-0 flex
                          items-center
                          justify-center
                          w-16
                          bg-yellow-500
                          text-white text-sm
                          font-medium
                          rounded-l-md
                        ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div class="
                          flex-1 flex
                          items-center
                          justify-between
                          border-t border-r border-b border-gray-200
                          bg-white
                          rounded-r-md
                          truncate
                        ">
                    <div class="flex-1 px-4 py-2 text-sm truncate">
                      <a href="#" class="
                              text-gray-900
                              font-medium
                              hover:text-gray-600
                            ">Latest Bookings</a>
                      <p class="text-gray-500">Latest booking data</p>
                    </div>
                    <div class="flex-shrink-0 pr-2">
                      <button class="
                              w-8
                              h-8
                              bg-white
                              inline-flex
                              items-center
                              justify-center
                              text-gray-400
                              rounded-full
                              bg-transparent
                              hover:text-gray-600
                            ">
                        <span class="sr-only">view</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
                <li class="col-span-1 flex shadow-sm rounded-md">
                  <div class="
                          flex-shrink-0 flex
                          items-center
                          justify-center
                          w-16
                          bg-purple-500
                          text-white text-sm
                          font-medium
                          rounded-l-md
                        ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div class="
                          flex-1 flex
                          items-center
                          justify-between
                          border-t border-r border-b border-gray-200
                          bg-white
                          rounded-r-md
                          truncate
                        ">
                    <div class="flex-1 px-4 py-2 text-sm truncate">
                      <a href="#" class="
                              text-gray-900
                              font-medium
                              hover:text-gray-600
                            ">Top Earning Suppliers</a>
                      <p class="text-gray-500">
                        Your best performing suppliers
                      </p>
                    </div>
                    <div class="flex-shrink-0 pr-2">
                      <button class="
                              w-8
                              h-8
                              bg-white
                              inline-flex
                              items-center
                              justify-center
                              text-gray-400
                              rounded-full
                              bg-transparent
                              hover:text-gray-600
                            ">
                        <span class="sr-only">view</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                          stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Quick buttons -->
        <!-- filters -->

        <div class="mt-8">
          <h3 class="text-sm leading-5 font-medium text-gray-500">
            Search Reports
          </h3>
          <div class="grid grid-cols-3 gap-5">
            <div class="mt-1
                      sm:grid-colspan-3
                      lg:grid-colspan-1">
              <div class="max-w-full flex rounded-md shadow-sm">
                <span
                  class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  Start Date
                </span>
                <input type="text" name="username" id="username" autocomplete="username"
                  class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
              </div>
            </div>
            <div class="mt-1
                      sm:grid-colspan-3
                      lg:grid-colspan-1">
              <div class="max-w-full flex rounded-md shadow-sm">
                <span
                  class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                  End Date
                </span>
                <input type="text" name="username" id="username" autocomplete="username"
                  class="flex-1 block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
              </div>
            </div>
            <div class="mt-1
                      sm:grid-colspan-3
                      lg:grid-colspan-1">
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
                Search Reports
              </button>
            </div>
          </div>
        </div>

        <!-- filters -->
        <!-- table -->
        <div class="mt-8 grid grid-cols-1">
          <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Title
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Email
                        </th>
                        <th scope="col"
                          class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Role
                        </th>
                        <th scope="col" class="relative px-6 py-3">
                          <span class="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <!-- Odd row -->
                      <tr class="bg-white">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Jane Cooper
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Regional Paradigm Technician
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          jane.cooper@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Admin
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                      </tr>

                      <!-- Even row -->
                      <tr class="bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Cody Fisher
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Product Directives Officer
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          cody.fisher@example.com
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          Owner
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                      </tr>

                      <!-- More people... -->
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
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
