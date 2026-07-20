// Give the search button a clear "Search" label (loupe + text) on all
// platforms, instead of the cryptic OS keyboard shortcut.
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    const el = document.querySelector("#search-toggle .nav-link");
    if (el) {
      el.innerHTML = '<i class="ti ti-search"></i> Search';
    }
  }
});
