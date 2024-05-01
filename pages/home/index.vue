<template>
  <div class="flex-1 flex items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto m-5">
      <!-- Primary column -->
      <section aria-labelledby="primary-heading" class="min-w-0 ml-5 flex-1 h-full flex flex-col overflow-hidden lg:order-last">
        <div class="flex items-stretch">
          <div class="h-auto w-1/2  md:w-full shadow-sm rounded-md mr-2">
            <div class="h-20 col-span-1 flex  border-t border-r border-b border-gray-200 shadow-sm rounded-md">
              <div   class=" flex-shrink-0 flex items-center justify-center  w-16  bg-white text-white text-smont-medium rounded-l-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 10V11C21.5523 11 22 10.5523 22 10H21ZM21 14H22C22 13.4477 21.5523 13 21 13V14ZM3 14V13C2.44772 13 2 13.4477 2 14H3ZM3 10H2C2 10.5523 2.44772 11 3 11V10ZM5 4C3.34315 4 2 5.34315 2 7H4C4 6.44772 4.44772 6 5 6V4ZM19 4H5V6H19V4ZM22 7C22 5.34315 20.6569 4 19 4V6C19.5523 6 20 6.44772 20 7H22ZM22 10V7H20V10H22ZM20 12C20 11.4477 20.4477 11 21 11V9C19.3431 9 18 10.3431 18 12H20ZM21 13C20.4477 13 20 12.5523 20 12H18C18 13.6569 19.3431 15 21 15V13ZM22 17V14H20V17H22ZM19 20C20.6569 20 22 18.6569 22 17H20C20 17.5523 19.5523 18 19 18V20ZM5 20H19V18H5V20ZM2 17C2 18.6569 3.34315 20 5 20V18C4.44772 18 4 17.5523 4 17H2ZM2 14V17H4V14H2ZM4 12C4 12.5523 3.55228 13 3 13V15C4.65685 15 6 13.6569 6 12H4ZM3 11C3.55228 11 4 11.4477 4 12H6C6 10.3431 4.65685 9 3 9V11ZM2 7V10H4V7H2Z"
                    fill="#2563EB" />
                  <path d="M15 5V7" stroke="#2563EB" stroke-width="2" stroke-linecap="round" />
                  <path d="M15 11V13" stroke="#2563EB" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M15 17V19" stroke="#2563EB" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <div class=" flex-1 flex items-center justify-between  bg-white  rounded-r-md truncate  ">
                <div class="flex-1 px-4 py-2 text-sm truncate">
                  <a href="#" class="text-gray-900 font-medium  hover:text-gray-600 ">Tours</a>
                  <p class="text-gray-500">Find, promote and sell tours</p>
                </div>

              </div>
            </div>
          </div>
          <div class="h-auto w-1/2  md:w-full shadow-sm rounded-md ml-2">
            <div class="h-20 col-span-1 flex  border-t border-r border-b border-gray-200 shadow-sm rounded-md">
              <div class=" flex-shrink-0 flex items-center justify-center  w-16  bg-white text-white text-smont-medium rounded-l-md">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 7V3M16.5 7V3M7.5 11H17.5M5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V7C21.5 5.89543 20.6046 5 19.5 5H5.5C4.39543 5 3.5 5.89543 3.5 7V19C3.5 20.1046 4.39543 21 5.5 21Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class=" flex-1 flex items-center justify-between  bg-white  rounded-r-md truncate  ">
                <div class="flex-1 px-4 py-2 text-sm truncate">
                  <a href="#" class="text-gray-900 font-medium  hover:text-gray-600 "> Bookings</a>
                  <p class="text-gray-500">Manage customer bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5">
           <h3 class="text-lg leading-6 font-medium text-gray-900 ">
              Last 30 days
            </h3>
        </div>
        <div class="flex items-stretch mt-5 ">
          <div class="w-1/2 mr-2">
            <dl class=" grid grid-cols-1 gap-5 ">
              <div class="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden">
                <dt>
                  <div class="absolute bg-indigo-500 rounded-md p-3">
                    <!-- Heroicon name: outline/users -->
                    <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="30" height="30" rx="6" fill="#6366F1"/>
                        <path d="M25.8434 21.6554C26.2053 22.0725 26.8369 22.1173 27.254 21.7553C27.6712 21.3933 27.7159 20.7618 27.354 20.3446L25.8434 21.6554ZM22.1567 26.3446C21.7947 25.9275 21.1631 25.8827 20.746 26.2447C20.3288 26.6067 20.2841 27.2382 20.6461 27.6554L22.1567 26.3446ZM25 19C25 18.4477 24.5523 18 24 18C23.4477 18 23 18.4477 23 19H25ZM23 29C23 29.5523 23.4477 30 24 30C24.5523 30 25 29.5523 25 29L23 29ZM32 24C32 28.4183 28.4183 32 24 32V34C29.5228 34 34 29.5228 34 24H32ZM24 32C19.5817 32 16 28.4183 16 24H14C14 29.5228 18.4772 34 24 34V32ZM16 24C16 19.5817 19.5817 16 24 16V14C18.4772 14 14 18.4772 14 24H16ZM24 16C28.4183 16 32 19.5817 32 24H34C34 18.4772 29.5228 14 24 14V16ZM24 23C23.3415 23 22.7905 22.8202 22.4334 22.5822C22.0693 22.3394 22 22.1139 22 22H20C20 22.9907 20.6023 23.7651 21.324 24.2463C22.0526 24.732 23.0017 25 24 25V23ZM22 22C22 21.8861 22.0693 21.6606 22.4334 21.4178C22.7905 21.1798 23.3415 21 24 21V19C23.0017 19 22.0526 19.268 21.324 19.7537C20.6023 20.2349 20 21.0093 20 22H22ZM24 21C24.9038 21 25.563 21.3323 25.8434 21.6554L27.354 20.3446C26.5969 19.4721 25.3171 19 24 19V21ZM24 25C24.6585 25 25.2095 25.1798 25.5666 25.4178C25.9308 25.6606 26 25.8861 26 26H28C28 25.0093 27.3977 24.2348 26.676 23.7537C25.9474 23.268 24.9983 23 24 23V25ZM23 19V20H25V19H23ZM23 28L23 29L25 29L25 28L23 28ZM24 27C23.0962 27 22.437 26.6677 22.1567 26.3446L20.6461 27.6554C21.4032 28.5279 22.683 29 24 29L24 27ZM26 26C26 26.1139 25.9308 26.3394 25.5666 26.5822C25.2095 26.8202 24.6586 27 24 27V29C24.9983 29 25.9474 28.732 26.676 28.2463C27.3977 27.7651 28 26.9907 28 26H26ZM23 20L23 28L25 28L25 20L23 20Z" fill="white"/>
                    </svg>
                  </div>
                  <p class="ml-16 text-sm font-medium text-gray-500 truncate">Total Sales</p>
                </dt>
                <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
                  <p class="text-2xl font-semibold text-gray-900">
                    71,897
                  </p>
                  <p class="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                    <!-- Heroicon name: solid/arrow-sm-up -->
                    <svg class="self-center flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="sr-only">
                      Increased by
                    </span>
                    122
                  </p>
                  <div class="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                    <div class="text-sm">
                      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> View all reports<span class="sr-only"> Total Subscribers stats</span></a>
                    </div>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
           <div class="w-1/2 ml-2 flex flex-col justify-between ">
              <div class="col-span-1 flex shadow-sm rounded-md ">
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
              </div>
              <div class="col-span-1 flex shadow-sm rounded-md">
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
                      <button class=" w-8 h-8 bg-white inline-flex  items-centerjustify-center text-gray-400 rounded-full  bg-transparent  hover:text-gray-600">
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
              </div>
           </div>
        </div>
        <div class="flex items-stretch mt-5">
          <div class="h-auto w-1/2  md:w-full shadow-sm rounded-md mr-2">
            <div class="h-20 col-span-1 flex  border-t border-r border-b border-gray-200 shadow-sm rounded-md">
              <div   class=" flex-shrink-0 flex items-center justify-center  w-16  bg-white text-white text-smont-medium rounded-l-md">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21 10V11C21.5523 11 22 10.5523 22 10H21ZM21 14H22C22 13.4477 21.5523 13 21 13V14ZM3 14V13C2.44772 13 2 13.4477 2 14H3ZM3 10H2C2 10.5523 2.44772 11 3 11V10ZM5 4C3.34315 4 2 5.34315 2 7H4C4 6.44772 4.44772 6 5 6V4ZM19 4H5V6H19V4ZM22 7C22 5.34315 20.6569 4 19 4V6C19.5523 6 20 6.44772 20 7H22ZM22 10V7H20V10H22ZM20 12C20 11.4477 20.4477 11 21 11V9C19.3431 9 18 10.3431 18 12H20ZM21 13C20.4477 13 20 12.5523 20 12H18C18 13.6569 19.3431 15 21 15V13ZM22 17V14H20V17H22ZM19 20C20.6569 20 22 18.6569 22 17H20C20 17.5523 19.5523 18 19 18V20ZM5 20H19V18H5V20ZM2 17C2 18.6569 3.34315 20 5 20V18C4.44772 18 4 17.5523 4 17H2ZM2 14V17H4V14H2ZM4 12C4 12.5523 3.55228 13 3 13V15C4.65685 15 6 13.6569 6 12H4ZM3 11C3.55228 11 4 11.4477 4 12H6C6 10.3431 4.65685 9 3 9V11ZM2 7V10H4V7H2Z"
                    fill="#2563EB" />
                  <path d="M15 5V7" stroke="#2563EB" stroke-width="2" stroke-linecap="round" />
                  <path d="M15 11V13" stroke="#2563EB" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M15 17V19" stroke="#2563EB" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </div>
              <div class=" flex-1 flex items-center justify-between  bg-white  rounded-r-md truncate  ">
                <div class="flex-1 px-4 py-2 text-sm truncate">
                  <a href="#" class="text-gray-900 font-medium  hover:text-gray-600 ">Quick Booking </a>
                  <p class="text-gray-500">Make a manual booking sale </p>
                </div>
              </div>
            </div>
          </div>
          <div class="h-auto w-1/2  md:w-full shadow-sm rounded-md ml-2">
            <div class="h-20 col-span-1 flex  border-t border-r border-b border-gray-200 shadow-sm rounded-md">
              <div class=" flex-shrink-0 flex items-center justify-center  w-16  bg-white text-white text-smont-medium rounded-l-md">
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.62104 17.8037C7.65267 16.6554 9.9998 16 12.5 16C15.0002 16 17.3473 16.6554 19.379 17.8037M15.5 10C15.5 11.6569 14.1569 13 12.5 13C10.8431 13 9.5 11.6569 9.5 10C9.5 8.34315 10.8431 7 12.5 7C14.1569 7 15.5 8.34315 15.5 10ZM21.5 12C21.5 16.9706 17.4706 21 12.5 21C7.52944 21 3.5 16.9706 3.5 12C3.5 7.02944 7.52944 3 12.5 3C17.4706 3 21.5 7.02944 21.5 12Z" stroke="#2563EB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div class=" flex-1 flex items-center justify-between  bg-white  rounded-r-md truncate  ">
                <div class="flex-1 px-4 py-2 text-sm truncate">
                  <a href="#" class="text-gray-900 font-medium  hover:text-gray-600 "> Customers</a>
                  <p class="text-gray-500">Manage your customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Secondary column (hidden on smaller screens) -->
    <aside class="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block">
      <!-- Your content -->
      <section aria-labelledby="who-to-follow-heading">
        <div class="bg-white rounded-lg shadow m-5">
          <div class="bg-gray-100	 rounded-t-lg  w-auto h-auto">
            <h2 id="who-to-follow-heading " class=" capitalize  text-base p-2 font-medium  text-gray-900">
              Top earning suppliers
            </h2>
          </div>
          <div class="divide-y divide-light-blue-400">
            <div class="flow-root mt-5">
              <ul role="list" class="-my-4 divide-y divide-gray-200">
                <li class="flex items-center py-4 space-x-3 px-4">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#">Leonard Krasner</a>
                    </p>
                    <p class="text-sm text-gray-500">
                      <a href="#">117 Sales</a>
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <button class=" w-8 h-8 bg-white inline-flex  items-centerjustify-center text-gray-400 rounded-full  bg-transparent  hover:text-gray-600">
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
                </li>
                <li class="flex items-center py-4 space-x-3 px-4">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#">Leonard Krasner</a>
                    </p>
                    <p class="text-sm text-gray-500">
                      <a href="#">117 Sales</a>
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <button class=" w-8 h-8 bg-white inline-flex  items-centerjustify-center text-gray-400 rounded-full  bg-transparent  hover:text-gray-600">
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
                </li>
                 <li class="flex items-center py-4 space-x-3 px-4">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#">Leonard Krasner</a>
                    </p>
                    <p class="text-sm text-gray-500">
                      <a href="#">117 Sales</a>
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <button class=" w-8 h-8 bg-white inline-flex  items-centerjustify-center text-gray-400 rounded-full  bg-transparent  hover:text-gray-600">
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
                </li>
                  <li class="flex items-center py-4 space-x-3 px-4">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#">Leonard Krasner</a>
                    </p>
                    <p class="text-sm text-gray-500">
                      <a href="#">117 Sales</a>
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <button class=" w-8 h-8 bg-white inline-flex  items-centerjustify-center text-gray-400 rounded-full  bg-transparent  hover:text-gray-600">
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
                </li>
                  <li class="flex items-center py-4 space-x-3 px-4">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#">Leonard Krasner</a>
                    </p>
                    <p class="text-sm text-gray-500">
                      <a href="#">117 Sales</a>
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <button class=" w-8 h-8 bg-white inline-flex  items-centerjustify-center text-gray-400 rounded-full  bg-transparent  hover:text-gray-600">
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
                </li>
                  <li class="flex items-center py-4 space-x-3 px-4">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#">Leonard Krasner</a>
                    </p>
                    <p class="text-sm text-gray-500">
                      <a href="#">117 Sales</a>
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <button class=" w-8 h-8 bg-white inline-flex  items-centerjustify-center text-gray-400 rounded-full  bg-transparent  hover:text-gray-600">
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
                </li>
                 <li class="flex items-center py-4 space-x-3 px-4 mb-4">
                  <div class="flex-shrink-0">
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                  </div>
                  <div class="min-w-0 flex-1">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#">Leonard Krasner</a>
                    </p>
                    <p class="text-sm text-gray-500">
                      <a href="#">117 Sales</a>
                    </p>
                  </div>
                  <div class="flex-shrink-0">
                    <button class=" w-8 h-8 bg-white inline-flex  items-centerjustify-center text-gray-400 rounded-full  bg-transparent  hover:text-gray-600">
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
                </li>
                <!-- More people... -->
              </ul>
            </div>
            <!-- <div class="mt-6">
              <a href="#" class="w-full block text-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                View all
              </a>
            </div> -->
          </div>
          
        </div>
      </section>
    </aside>
  </div>


</template>

<script>
  export default {
    layout: 'default',
    data() {
      return {
        mountains: []
      }
    },

  }

</script>
