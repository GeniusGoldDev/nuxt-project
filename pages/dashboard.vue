<template>
  <div class="flex-1 flex items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <div class="mt-8">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <!-- Primary column -->
          <section
            aria-labelledby="primary-heading"
            class="
              min-w-0
              flex-1
              h-full
              flex flex-col
              overflow-hidden
              lg:order-last
            "
          >
            <h1 id="primary-heading" class="sr-only">Quick Buttons</h1>
            <!-- working with top quick buttons -->
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div
                class="
                  relative
                  rounded-lg
                  border border-gray-300
                  bg-white
                  px-6
                  py-5
                  shadow-sm
                  flex
                  items-center
                  space-x-3
                  hover:border-gray-400
                  focus-within:ring-2
                  focus-within:ring-offset-2
                  focus-within:ring-indigo-500
                "
              >
                <div class="flex-shrink-0 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <a href="#" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">Tours</p>
                    <p class="text-sm text-gray-500 truncate">
                      Find, promote and sell tours
                    </p>
                  </a>
                </div>
              </div>
              <div
                class="
                  relative
                  rounded-lg
                  border border-gray-300
                  bg-white
                  px-6
                  py-5
                  shadow-sm
                  flex
                  items-center
                  space-x-3
                  hover:border-gray-400
                  focus-within:ring-2
                  focus-within:ring-offset-2
                  focus-within:ring-indigo-500
                "
              >
                <div class="flex-shrink-0 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <a href="#" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">Bookings</p>
                    <p class="text-sm text-gray-500 truncate">
                      Manage customer bookings
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <!-- working with top quick buttons -->
            <!-- Summery reports -->
            <div class="mt-5">
              <h3 class="text-sm leading-5 font-medium text-gray-500">
                Last 30 days
              </h3>
              <div
                class="
                  mt-5
                  grid grid-cols-1
                  gap-5
                  sm:grid-cols-2
                  lg:grid-cols-2
                "
              >
                <dl>
                  <div
                    class="
                      relative
                      bg-white
                      pt-5
                      px-4
                      pb-12
                      sm:pt-6
                      sm:px-6
                      shadow
                      rounded-lg
                      overflow-hidden
                    "
                  >
                    <dt>
                      <div class="absolute bg-indigo-500 rounded-md p-3">
                        <svg
                          class="h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <p
                        class="ml-16 text-sm font-medium text-gray-500 truncate"
                      >
                        Total Sales
                      </p>
                    </dt>
                    <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p class="text-2xl font-semibold text-gray-900">
                        $71,897
                      </p>
                      <p
                        class="
                          ml-2
                          flex
                          items-baseline
                          text-sm
                          font-semibold
                          text-green-600
                        "
                      >
                        <svg
                          class="
                            self-center
                            flex-shrink-0
                            h-5
                            w-5
                            text-green-500
                          "
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="sr-only"> Increased by </span>
                        122
                      </p>
                      <div
                        class="
                          absolute
                          bottom-0
                          inset-x-0
                          bg-gray-50
                          px-4
                          py-4
                          sm:px-6
                        "
                      >
                        <div class="text-sm">
                          <a
                            href="#"
                            class="
                              font-medium
                              text-indigo-600
                              hover:text-indigo-500
                            "
                          >
                            View all Reports<span class="sr-only">
                              Total Sales stats</span
                            ></a
                          >
                        </div>
                      </div>
                    </dd>
                  </div>
                </dl>
                <!-- quick reports -->
                <div>
                  <ul
                    class="
                      mt-1
                      grid grid-cols-1
                      gap-6
                      sm:grid-cols-1
                      lg:grid-cols-1
                    "
                  >
                    <li class="col-span-1 flex shadow-sm rounded-md">
                      <div
                        class="
                          flex-shrink-0 flex
                          items-center
                          justify-center
                          w-16
                          bg-yellow-500
                          text-white text-sm
                          font-medium
                          rounded-l-md
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div
                        class="
                          flex-1 flex
                          items-center
                          justify-between
                          border-t border-r border-b border-gray-200
                          bg-white
                          rounded-r-md
                          truncate
                        "
                      >
                        <div class="flex-1 px-4 py-2 text-sm truncate">
                          <a
                            href="#"
                            class="
                              text-gray-900
                              font-medium
                              hover:text-gray-600
                            "
                            >Latest Bookings</a
                          >
                          <p class="text-gray-500">Latest booking data</p>
                        </div>
                        <div class="flex-shrink-0 pr-2">
                          <button
                            class="
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
                            "
                          >
                            <span class="sr-only">view</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li class="col-span-1 flex shadow-sm rounded-md">
                      <div
                        class="
                          flex-shrink-0 flex
                          items-center
                          justify-center
                          w-16
                          bg-purple-500
                          text-white text-sm
                          font-medium
                          rounded-l-md
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div
                        class="
                          flex-1 flex
                          items-center
                          justify-between
                          border-t border-r border-b border-gray-200
                          bg-white
                          rounded-r-md
                          truncate
                        "
                      >
                        <div class="flex-1 px-4 py-2 text-sm truncate">
                          <a
                            href="#"
                            class="
                              text-gray-900
                              font-medium
                              hover:text-gray-600
                            "
                            >Top Earning Suppliers</a
                          >
                          <p class="text-gray-500">
                            Your best performing suppliers
                          </p>
                        </div>
                        <div class="flex-shrink-0 pr-2">
                          <button
                            class="
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
                            "
                          >
                            <span class="sr-only">view</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- working with bottom quick buttons -->
            <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div
                class="
                  relative
                  rounded-lg
                  border border-gray-300
                  bg-white
                  px-6
                  py-5
                  shadow-sm
                  flex
                  items-center
                  space-x-3
                  hover:border-gray-400
                  focus-within:ring-2
                  focus-within:ring-offset-2
                  focus-within:ring-indigo-500
                "
              >
                <div class="flex-shrink-0 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <a href="#" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">
                      Quick Booking
                    </p>
                    <p class="text-sm text-gray-500 truncate">
                      Make a manual booking sale
                    </p>
                  </a>
                </div>
              </div>
              <div
                class="
                  relative
                  rounded-lg
                  border border-gray-300
                  bg-white
                  px-6
                  py-5
                  shadow-sm
                  flex
                  items-center
                  space-x-3
                  hover:border-gray-400
                  focus-within:ring-2
                  focus-within:ring-offset-2
                  focus-within:ring-indigo-500
                "
              >
                <div class="flex-shrink-0 text-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="flex-1 min-w-0">
                  <a href="#" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">Customers</p>
                    <p class="text-sm text-gray-500 truncate">
                      Manage your customers
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <!-- working with bottom quick buttons -->
          </section>
        </div>
      </div>
    </main>

    <!-- Secondary column (hidden on smaller screens) -->
    <aside
      class="
        hidden
        w-96
        bg-white
        border-l border-gray-200
        overflow-y-auto
        lg:block
      "
    >
      <!-- Your content -->
    </aside>
  </div>
</template>
<script>
export default {
  layout: "default",
};
</script>
<style scoped>
</style>