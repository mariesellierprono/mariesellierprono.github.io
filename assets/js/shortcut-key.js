// Give the search button a clear "Search" label (loupe + text) on all
// platforms, instead of the cryptic OS keyboard shortcut.
document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    const toggle = document.querySelector("#search-toggle");
    const el = toggle && toggle.querySelector(".nav-link");
    if (el) {
      // The button's title carries the label in the page's language
      el.innerHTML = '<i class="ti ti-search"></i> ' + (toggle.title || "Search");
    }
  }
});
