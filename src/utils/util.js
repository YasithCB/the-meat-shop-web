export const getImageUrl = (path) => {
    if (!path) return `${import.meta.env.VITE_API_BASE_URL}/uploads/default-image.png`;

    // If it's a blob URL, return it directly
    if (path.startsWith("blob:")) return path;

    // Normalize path
    let cleanPath = path.replace(/\\/g, "/"); // convert backslashes
    if (cleanPath.startsWith("/")) cleanPath = cleanPath.slice(1); // remove leading slash

    return `${import.meta.env.VITE_API_BASE_URL}/${cleanPath}`;
};


// utils/date.js
export const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);

    // Format: Month Day, Year (e.g., Nov 5, 2025)
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

export const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth", // smooth scroll
    });
};

// src/utils/randomRating.js
export function getRandomRating(min = 3.5, max = 5.0, decimals = 1) {
    const rating = Math.random() * (max - min) + min;
    return parseFloat(rating.toFixed(decimals));
}
