// animations.js
function toggleNested(element) {
    var nested = element.nextElementSibling;
    if (nested) {
        if (nested.classList.contains("show")) {
            nested.classList.remove("show");
            nested.style.maxHeight = '0'; // Collapse the content
        } else {
            nested.classList.add("show");
            nested.style.maxHeight = nested.scrollHeight + 'px'; // Expand to content height
            autoScrollToElement(nested); // Scroll to the expanded element
        }
    }
}

function autoScrollToElement(element) {
    // Delay scrolling to ensure the height adjustment animation completes
    setTimeout(() => {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = rect.bottom + window.scrollY;
        const viewportHeight = window.innerHeight;
        const scrollPadding = 50; // Padding for better visibility

        let scrollTo = elementTop - scrollPadding;

        // Adjust scrolling if the bottom of the element is outside the viewport
        if (elementBottom > window.scrollY + viewportHeight - scrollPadding) {
            scrollTo = elementBottom - viewportHeight + scrollPadding;
        }

        // Perform the scroll if necessary
        if (scrollTo !== window.scrollY) {
            window.scrollTo({
                top: scrollTo,
                behavior: 'smooth'
            });
        }
    }, 300); // Adjust timeout to match the animation duration
}

// Export functions if using a module system
// export { toggleNested, autoScrollToElement };
