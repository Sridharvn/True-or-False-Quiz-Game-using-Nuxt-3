<template>
    <div class="flex-col ">
        <div
            class="rounded only:transition-shadow flex justify-center items-start p-5 text-3xl text-blue-900 border lg:mx-96 sm:mx-36 md:mx-64 mx-12 text-center shadow-md shadow-inner hover:shadow-lg bg-white h-96 min-h-full">
            <slot></slot>
        </div>
        <div class="flex justify-center mt-5">
            <TrueFalseButton class="p-4" type="true">True</TrueFalseButton>
            <TrueFalseButton class="p-4" type="false">False</TrueFalseButton>
        </div>
    </div>
</template>