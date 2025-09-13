// Utility function to scroll to top of page
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
};

// Utility function to scroll to top and navigate
export const navigateAndScrollToTop = (navigate: (path: string) => void, path: string) => {
  navigate(path);
  setTimeout(() => {
    scrollToTop();
  }, 100);
};
