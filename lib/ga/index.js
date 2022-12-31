// log the pageview with their URL
export const pageview = (url) => {
    window.gtag('config', 'G-1TF4MX71FE', {
        page_path: url,
    })
}

// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag('event', action, params)
}