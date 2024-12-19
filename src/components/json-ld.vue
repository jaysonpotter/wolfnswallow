<template>
    <teleport to="head">
        <component
            :is="'script'"
            type="application/ld+json"
        >
            {
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "Wolf n Swallow",
            "address": {
            "@type": "PostalAddress",
            "streetAddress": "414 Central Ave SE",
            "addressLocality": "Albuquerque",
            "addressRegion": "NM",
            "postalCode": "87102",
            "addressCountry": "US"
            },
            "telephone": "+1-517-667-8355",
            "menu": "https://wolfnswallow.com/food-menu",
            "cuisine": "Comfort Food Restaurant",
            "priceRange": "$$",
            "openingHours": "Mo-Su 11:00-23:00",
            "geo": {
            "@type": "GeoCoordinates",
            "latitude": "35.083469",
            "longitude": "-106.642685"
            }
            }
        </component>
    </teleport>
</template>
