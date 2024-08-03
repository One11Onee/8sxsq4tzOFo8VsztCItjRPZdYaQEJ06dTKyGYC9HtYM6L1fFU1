// showExtension.js
document.addEventListener("DOMContentLoaded", function() {
    var togglers = document.getElementsByClassName("folder");
    var extensionItem = document.getElementById("extension-item");
    var clickCount = 0;
    var targetClicks = 5;

    // Initialize the Extensions folder as hidden
    extensionItem.style.display = "none";

    function handleFolderClick() {
        // Import and use the toggleNested function from animations.js
        if (typeof toggleNested === 'function') {
            toggleNested(this);
        }
    }

    function handleSpecialClick(event) {
        if (event.ctrlKey && event.shiftKey && event.target.tagName === 'H1' && event.target.textContent === 'Website Links') {
            clickCount++;
            console.log('Click count:', clickCount); // Debugging line
            if (clickCount >= targetClicks) {
                extensionItem.style.display = "block"; // Show Extensions folder
                console.log('Extensions folder should be visible now.'); // Debugging line
            }
        }
    }

    // Attach click event to all folder items
    for (var i = 0; i < togglers.length; i++) {
        togglers[i].addEventListener("click", handleFolderClick);
    }

    // Handle clicks on the H1 element
    document.querySelector("h1").addEventListener("click", handleSpecialClick);
});
