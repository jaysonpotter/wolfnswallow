// Composables
import { createRouter, createWebHistory } from 'vue-router';

// Layouts
import Default from '@/layouts/default.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes : [
        {
            path     : '/',
            component: Default,
            children : [
                {
                    name     : 'home',
                    path     : '',
                    component: () => import('../pages/home.vue')
                },
                {
                    name     : 'foodMenu',
                    path     : '/food-menu',
                    component: () => import('../pages/food-menu.vue')
                },
                {
                    name     : 'drinkMenu',
                    path     : '/drink-menu',
                    component: () => import('../pages/drink-menu.vue')
                },
                {
                    name     : 'flightClub',
                    path     : '/flight-club',
                    component: () => import('../pages/flight-club.vue')
                },
            ]
        },
        {
            path     : '/:pathMatch(.*)*',
            component: Default,
            children : [
                {
                    path     : '/:pathMatch(.*)*',
                    name     : 'NotFound',
                    component: () => import('../pages/not-found.vue'),
                    meta     : {
                        announcer: {
                            message: 'Page not found.'
                        }
                    }
                }
            ]
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // If a saved position is available, use it (e.g., when using browser back/forward).
        if (savedPosition) {
            return savedPosition;
        }
        // Scroll to top of the page for new route changes.
        return { top: 0 };
    },
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
    if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
        if (!localStorage.getItem('vuetify:dynamic-reload')) {
            console.log('Reloading page to fix dynamic import error');
            localStorage.setItem('vuetify:dynamic-reload', 'true');
            location.assign(to.fullPath);
        } else {
            console.error('Dynamic import error, reloading page did not fix it', err);
        }
    } else {
        console.error(err);
    }
});

router.isReady().then(() => {
    localStorage.removeItem('vuetify:dynamic-reload');
});

export default router;
