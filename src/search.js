// Sample product data - in a real application, this would come from an API or database
const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: "৳2,999",
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: "৳1,999",
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Fiddle Leaf Fig",
    price: "৳3,499",
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Peace Lily",
    price: "৳1,499",
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

// Services data
const services = [
  {
    id: 1,
    name: "Garden Design",
    description:
      "Professional landscape design tailored to your space and preferences.",
    icon: "fas fa-paint-brush",
  },
  {
    id: 2,
    name: "Plant Maintenance",
    description:
      "Regular care and maintenance to keep your plants healthy and thriving.",
    icon: "fas fa-leaf",
  },
  {
    id: 3,
    name: "Plant Installation",
    description: "Professional installation of plants and garden features.",
    icon: "fas fa-seedling",
  },
];

// Initialize search functionality
export function initializeSearch() {
  const searchButton = document.querySelector('[aria-label="Search"]');
  const searchModal = document.getElementById("searchModal");
  const closeSearch = document.getElementById("closeSearch");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const defaultSuggestions = document.getElementById("defaultSuggestions");

  // Function to close the search modal
  function closeSearchModal() {
    searchModal.classList.add("hidden");
    searchInput.value = "";
    searchResults.innerHTML = "";
    // Restore default suggestions
    searchResults.innerHTML = defaultSuggestions.outerHTML;
  }

  // Function to show default suggestions
  function showDefaultSuggestions() {
    searchResults.innerHTML = defaultSuggestions.outerHTML;

    // Add click event listeners to suggestion items
    const suggestionItems = searchResults.querySelectorAll("li");
    suggestionItems.forEach((item) => {
      item.addEventListener("click", () => {
        searchInput.value = item.textContent;
        performSearch(item.textContent);
      });
    });
  }

  // Function to perform search
  function performSearch(query) {
    query = query.toLowerCase().trim();

    if (query.length < 2) {
      showDefaultSuggestions();
      return;
    }

    // Search in products and services
    const productResults = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query)
    );

    const serviceResults = services.filter(
      (service) =>
        service.name.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query)
    );

    // Display results
    let resultsHTML = "";

    if (productResults.length > 0) {
      resultsHTML +=
        '<div class="mb-4"><h3 class="text-lg font-semibold mb-2">Products</h3>';
      productResults.forEach((product) => {
        resultsHTML += `
          <div class="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <img src="${product.image}" alt="${product.name}" class="w-16 h-16 object-cover rounded-lg">
            <div>
              <h4 class="font-medium">${product.name}</h4>
              <p class="text-orange-600">${product.price}</p>
            </div>
          </div>
        `;
      });
      resultsHTML += "</div>";
    }

    if (serviceResults.length > 0) {
      resultsHTML +=
        '<div><h3 class="text-lg font-semibold mb-2">Services</h3>';
      serviceResults.forEach((service) => {
        resultsHTML += `
          <div class="flex items-center gap-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <div class="w-16 h-16 rounded-full bg-orange-200 flex items-center justify-center">
              <i class="${service.icon} text-2xl text-orange-500"></i>
            </div>
            <div>
              <h4 class="font-medium">${service.name}</h4>
              <p class="text-gray-600">${service.description}</p>
            </div>
          </div>
        `;
      });
      resultsHTML += "</div>";
    }

    if (productResults.length === 0 && serviceResults.length === 0) {
      resultsHTML =
        '<p class="text-gray-500 text-center py-4">No results found</p>';
    }

    searchResults.innerHTML = resultsHTML;
  }

  // Open search modal
  searchButton.addEventListener("click", () => {
    searchModal.classList.remove("hidden");
    searchInput.focus();
    showDefaultSuggestions();
  });

  // Close search modal
  closeSearch.addEventListener("click", closeSearchModal);

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !searchModal.classList.contains("hidden")) {
      closeSearchModal();
    }
  });

  // Close when clicking outside the modal content
  searchModal.addEventListener("click", (e) => {
    // Check if the click was on the modal backdrop (not on the modal content)
    if (e.target === searchModal) {
      closeSearchModal();
    }
  });

  // Handle search input
  searchInput.addEventListener("input", (e) => {
    performSearch(e.target.value);
  });
}
