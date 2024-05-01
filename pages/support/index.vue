<template>
    <!-- Actions panel -->
    <section aria-labelledby="quick-links-title">
        <div class=" p-20 rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
            <h2 class="sr-only" id="quick-links-title">Quick links</h2>

            <div class="rounded-tl-lg rounded-tr-lg sm:rounded-tr-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
            <div>
                <span class="rounded-lg inline-flex p-3 bg-teal-50 text-teal-700 ring-4 ring-white">
                <!-- Heroicon name: outline/clock -->
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="8" fill="#F0FDFA"/>
                    <path d="M21 24L23 26L27 22M33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15C28.9706 15 33 19.0294 33 24Z" stroke="#0F766E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                </span>
            </div>
            <div class="mt-8">
                <h3 class="text-lg font-medium">
                <a href="#" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Request time off
                </a>
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                </p>
            </div>
            <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
            </span>
            </div>

            <div class="sm:rounded-tr-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
            <div>
                <span class="rounded-lg inline-flex p-3 bg-purple-50 text-purple-700 ring-4 ring-white">
                <!-- Heroicon name: outline/badge-check -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                </span>
            </div>
            <div class="mt-8">
                <h3 class="text-lg font-medium">
                <a href="#" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Benefits
                </a>
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                </p>
            </div>
            <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
            </span>
            </div>

            <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
            <div>
                <span class="rounded-lg inline-flex p-3 bg-sky-50 text-sky-700 ring-4 ring-white">
                <!-- Heroicon name: outline/users -->
                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="8" fill="#F0F9FF"/>
                    <path d="M24 16.3542C24.7329 15.5238 25.8053 15 27 15C29.2091 15 31 16.7909 31 19C31 21.2091 29.2091 23 27 23C25.8053 23 24.7329 22.4762 24 21.6458M27 33H15V32C15 28.6863 17.6863 26 21 26C24.3137 26 27 28.6863 27 32V33ZM27 33H33V32C33 28.6863 30.3137 26 27 26C25.9071 26 24.8825 26.2922 24 26.8027M25 19C25 21.2091 23.2091 23 21 23C18.7909 23 17 21.2091 17 19C17 16.7909 18.7909 15 21 15C23.2091 15 25 16.7909 25 19Z" stroke="#0369A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                </span>
            </div>
            <div class="mt-8">
                <h3 class="text-lg font-medium">
                <a href="#" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Schedule a one-on-one
                </a>
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                </p>
            </div>
            <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
            </span>
            </div>

            <div class="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
            <div>
                <span class="rounded-lg inline-flex p-3 bg-yellow-50 text-yellow-700 ring-4 ring-white">
                <!-- Heroicon name: outline/cash -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </span>
            </div>
            <div class="mt-8">
                <h3 class="text-lg font-medium">
                <a href="#" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Payroll
                </a>
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                </p>
            </div>
            <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
            </span>
            </div>

            <div class="sm:rounded-bl-lg relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
            <div>
                <span class="rounded-lg inline-flex p-3 bg-rose-50 text-rose-700 ring-4 ring-white">
                        <!-- Heroicon name: outline/receipt-refund -->
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="8" fill="#FFF1F2"/>
                        <path d="M32 33L31.5528 33.8944C31.8628 34.0494 32.2309 34.0329 32.5257 33.8507C32.8205 33.6684 33 33.3466 33 33H32ZM16 33H15C15 33.3466 15.1795 33.6684 15.4743 33.8507C15.7691 34.0329 16.1372 34.0494 16.4472 33.8944L16 33ZM24 33L23.5528 33.8944C23.8343 34.0352 24.1657 34.0352 24.4472 33.8944L24 33ZM20 31L20.4472 30.1056C20.1657 29.9648 19.8343 29.9648 19.5528 30.1056L20 31ZM28 31L28.4472 30.1056C28.1657 29.9648 27.8343 29.9648 27.5528 30.1056L28 31ZM27 27C27 27.5523 27.4477 28 28 28C28.5523 28 29 27.5523 29 27H27ZM20 22L19.2929 21.2929C18.9024 21.6834 18.9024 22.3166 19.2929 22.7071L20 22ZM22.2929 25.7071C22.6834 26.0976 23.3166 26.0976 23.7071 25.7071C24.0976 25.3166 24.0976 24.6834 23.7071 24.2929L22.2929 25.7071ZM23.7071 19.7071C24.0976 19.3166 24.0976 18.6834 23.7071 18.2929C23.3166 17.9024 22.6834 17.9024 22.2929 18.2929L23.7071 19.7071ZM18 16H30V14H18V16ZM31 17V33H33V17H31ZM17 33V17H15V33H17ZM24.4472 32.1056L20.4472 30.1056L19.5528 31.8944L23.5528 33.8944L24.4472 32.1056ZM19.5528 30.1056L15.5528 32.1056L16.4472 33.8944L20.4472 31.8944L19.5528 30.1056ZM32.4472 32.1056L28.4472 30.1056L27.5528 31.8944L31.5528 33.8944L32.4472 32.1056ZM27.5528 30.1056L23.5528 32.1056L24.4472 33.8944L28.4472 31.8944L27.5528 30.1056ZM30 16C30.5523 16 31 16.4477 31 17H33C33 15.3431 31.6569 14 30 14V16ZM18 14C16.3431 14 15 15.3431 15 17H17C17 16.4477 17.4477 16 18 16V14ZM29 27V26H27V27H29ZM24 21H20V23H24V21ZM29 26C29 23.2386 26.7614 21 24 21V23C25.6569 23 27 24.3431 27 26H29ZM23.7071 24.2929L20.7071 21.2929L19.2929 22.7071L22.2929 25.7071L23.7071 24.2929ZM20.7071 22.7071L23.7071 19.7071L22.2929 18.2929L19.2929 21.2929L20.7071 22.7071Z" fill="#BE123C"/>
                    </svg>
                </span>
            </div>
            <div class="mt-8">
                <h3 class="text-lg font-medium">
                <a href="#" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Submit an expense
                </a>
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                </p>
            </div>
            <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
            </span>
            </div>

            <div class="rounded-bl-lg rounded-br-lg sm:rounded-bl-none relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
            <div>
                <span class="rounded-lg inline-flex p-3 bg-indigo-50 text-indigo-700 ring-4 ring-white">
                <!-- Heroicon name: outline/academic-cap -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                </span>
            </div>
            <div class="mt-8">
                <h3 class="text-lg font-medium">
                <a href="#" class="focus:outline-none">
                    <!-- Extend touch target to entire panel -->
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Training
                </a>
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit repellendus qui ut at blanditiis et quo et molestiae.
                </p>
            </div>
            <span class="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
            </span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    layout: "default",
}
</script>

<style>

</style>