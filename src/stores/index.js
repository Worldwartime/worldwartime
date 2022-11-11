import { writable } from 'svelte/store';

export const cameraX = writable(0);
export const cameraY = writable(0);
export const height = writable();
export const width = writable();
