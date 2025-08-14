
export function scrollToTop() {
    window.scrollTo(0, 0);
}

// export function scrollFunction() {
//     const navbar = document.getElementById('navbar');
//     const sticky = navbar.offsetTop;

//     if (window.scrollY >= sticky) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

export function login() {
    // const analytics = getAnalytics();
    // logEvent(analytics, 'login-button-clicked');
    window.open('https://app.egodziny.pl/', '_blank');
}

export function tryFree() {
    // const analytics = getAnalytics();
    // logEvent(analytics, 'try-free-button-clicked');
    window.open('https://forms.gle/ZkoYF2NbbtYCDbMe7', '_blank');
}

// export function appStoreClick() {
//     const analytics = getAnalytics();
//     logEvent(analytics, 'appstore-badge-clicked');
// }

// export function playStoreClick() {
//     const analytics = getAnalytics();
//     logEvent(analytics, 'playstore-badge-clicked');
// }
