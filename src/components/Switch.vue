<template>
    <button class="vt-switch" type="button" role="switch">
        <span class="vt-switch-check">
            <span class="vt-switch-icon" v-if="$slots.default">
                <slot />
            </span>
        </span>
    </button>
</template>

<style>
.vt-switch-icon{
    position: relative;
    display: block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    overflow: hidden;
}
.vt-switch-check{
    position: absolute;
    top: 1px;
    left: 1px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--vt-c-white);
    box-shadow: var(--vt-shadow-1);
    transition: background-color .25s,transform .25s;
}
</style>