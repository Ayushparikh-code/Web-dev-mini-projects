// Targeting the parent element
const blogContainer = document.querySelector('.blog__container');
const blogModal = document.querySelector(".blog__modal__body");
const blogCount = document.getElementById("blogCount");
const totalArticles = document.getElementById("totalArticles");
const publishedToday = document.getElementById("publishedToday");
const categoriesCount = document.getElementById("categoriesCount");
const totalViews = document.getElementById("totalViews");
const totalComments = document.getElementById("totalComments");
const activeAuthors = document.getElementById("activeAuthors");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const filterButtons = document.querySelectorAll(".filter-btn");

// Global store for blog data
let globalStore = [];
let currentFilter = "all";

// Function to update blog count in navbar and stats
const updateBlogCount = () => {
    const count = globalStore.length;
    blogCount.textContent = `${count} ${count === 1 ? 'Article' : 'Articles'}`;
    totalArticles.textContent = count;
    
    // Update published today count
    const today = new Date().toDateString();
    const todayCount = globalStore.filter(blog => {
        const blogDate = new Date(parseInt(blog.id)).toDateString();
        return blogDate === today;
    }).length;
    publishedToday.textContent = todayCount;
    
    // Update categories count
    const categories = [...new Set(globalStore.map(blog => blog.blogType))];
    categoriesCount.textContent = categories.length;
    
    // Update views count (simulated)
    const viewsCount = globalStore.reduce((total, blog) => {
        // Simulate views based on article age and length
        const ageInDays = (Date.now() - parseInt(blog.id)) / (1000 * 60 * 60 * 24);
        const contentLength = blog.blogDescription.length;
        const baseViews = Math.max(10, 100 - ageInDays * 2);
        const contentBonus = contentLength > 500 ? 20 : 0;
        return total + Math.floor(baseViews + contentBonus);
    }, 0);
    totalViews.textContent = viewsCount;
    
    // Update comments count (simulated)
    const commentsCount = globalStore.reduce((total, blog) => {
        // Simulate comments based on views
        const ageInDays = (Date.now() - parseInt(blog.id)) / (1000 * 60 * 60 * 24);
        const baseComments = Math.max(1, 10 - ageInDays * 0.5);
        return total + Math.floor(baseComments);
    }, 0);
    totalComments.textContent = commentsCount;
    
    // Update active authors count (simulated)
    // In a real app, this would be based on unique author IDs
    const authorsCount = globalStore.length > 0 ? Math.max(1, Math.floor(globalStore.length / 3)) : 0;
    activeAuthors.textContent = authorsCount;
};

// Function to show empty state when no blogs exist
const showEmptyState = () => {
    if (globalStore.length === 0) {
        blogContainer.innerHTML = `
            <div class="col-12">
                <div class="empty-state">
                    <i class="fas fa-newspaper"></i>
                    <h3>No Articles Published Yet</h3>
                    <p>Get started by creating your first professional article. Share your expertise and insights with our readers!</p>
                    <button type="button" class="btn btn-primary hero-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i class="fas fa-plus-circle me-2"></i>Create Your First Article
                    </button>
                </div>
            </div>
        `;
    }
};

// Function to show loading state
const showLoading = () => {
    blogContainer.innerHTML = `
        <div class="col-12">
            <div class="loading">
                <div class="loading-spinner"></div>
            </div>
        </div>
    `;
};

// Function to create a new blog card
const newCard = ({
    id,
    imageUrl,
    blogTitle,
    blogType,
    blogDescription
}) => `
<div class="col-lg-4 col-md-6 mb-4" id=${id} data-category="${blogType}">
    <div class="card h-100">
        <div class="card-header d-flex justify-content-end gap-2">
            <button type="button" class="btn btn-outline-success" id="${id}" onclick="editCard.apply(this, arguments)" title="Edit Article">
                <i class="fas fa-edit" id="${id}" onclick="editCard.apply(this, arguments)"></i>
            </button>
            <button type="button" class="btn btn-outline-danger" id="${id}" onclick="deleteCard.apply(this, arguments)" title="Delete Article">
                <i class="fas fa-trash-alt" id="${id}" onclick="deleteCard.apply(this, arguments)"></i>
            </button>
        </div>
        <img src="${imageUrl}" class="card-img-top" alt="${blogTitle}" onerror="this.src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80';">
        <div class="card-body">
            <h5 class="card-title">${blogTitle}</h5>
            <p class="card-text">${blogDescription.substring(0, 120)}${blogDescription.length > 120 ? '...' : ''}</p>
            <span class="badge">${blogType}</span>
        </div>
        <div class="card-footer">
            <small class="text-muted">Published on ${new Date(parseInt(id)).toLocaleDateString()}</small>
            <button type="button" id="${id}" class="btn btn-outline-primary float-end" data-bs-toggle="modal" data-bs-target="#showblog" onclick="openBlog.apply(this, arguments)">
                <i class="fas fa-book-open me-1"></i>Read
            </button>
        </div>
    </div>
</div>`;

// Function to load data from localStorage
const loadData = () => {
    showLoading();
    
    // Simulate loading delay for better UX
    setTimeout(() => {
        // Access localStorage
        const getInitialData = localStorage.blog;
        
        if (!getInitialData) {
            globalStore = [];
            showEmptyState();
            updateBlogCount();
            return;
        }

        // Convert stringified-object to object
        const { cards } = JSON.parse(getInitialData);

        // Map around the array to generate HTML card and inject it to DOM
        cards.map((blogObject) => {
            const createNewBlog = newCard(blogObject);
            blogContainer.insertAdjacentHTML("beforeend", createNewBlog);
            globalStore.push(blogObject);
        });
        
        updateBlogCount();
        setupEventListeners();
        
        // Show empty state if no blogs after loading
        if (globalStore.length === 0) {
            showEmptyState();
        }
    }, 500);
};

// Function to update localStorage
const updateLocalStorage = () => {
    localStorage.setItem("blog", JSON.stringify({
        cards: globalStore
    }));
    updateBlogCount();
};

// Function to save new blog
const saveChanges = () => {
    // Get form values
    const imageUrl = document.getElementById('imageurl').value;
    const blogTitle = document.getElementById('title').value;
    let blogType = document.getElementById('type').value;
    const customType = document.getElementById('customType').value;
    const blogDescription = document.getElementById('description').value;
    
    // Use custom type if provided
    if (customType.trim() !== '') {
        blogType = customType;
    }
    
    // Validate form
    if (!imageUrl || !blogTitle || !blogType || !blogDescription) {
        alert("Please fill in all required fields");
        return;
    }
    
    const blogData = {
        id: `${Date.now()}`, // Generating a unique id for each card
        imageUrl: imageUrl,
        blogTitle: blogTitle,
        blogType: blogType,
        blogDescription: blogDescription
    };

    const createNewBlog = newCard(blogData);
    
    // If this is the first blog, remove empty state
    if (globalStore.length === 0) {
        blogContainer.innerHTML = '';
    }
    
    blogContainer.insertAdjacentHTML("beforeend", createNewBlog);
    globalStore.push(blogData);
    
    // Update localStorage
    updateLocalStorage();
    
    // Reset form
    document.getElementById('blogForm').reset();
    
    // Show success message
    showSuccessMessage("Article published successfully!");
    
    // Re-setup event listeners
    setupEventListeners();
};

// Function to show success message
const showSuccessMessage = (message) => {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-success alert-dismissible fade show position-fixed';
    alertDiv.style = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        <i class="fas fa-check-circle me-2"></i>${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Add to body
    document.body.appendChild(alertDiv);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.parentNode.removeChild(alertDiv);
        }
    }, 3000);
};

// Function to delete a blog card
const deleteCard = (event) => {
    event = window.event;
    const targetID = event.target.id;
    const tagname = event.target.tagName; // BUTTON OR I

    // Confirm deletion
    if (!confirm("Are you sure you want to delete this article? This action cannot be undone.")) {
        return;
    }

    // Search the globalStore, remove the object which matches with the id
    globalStore = globalStore.filter((blogObject) => blogObject.id !== targetID);
    updateLocalStorage();

    // Access DOM to remove them
    let parentElement;
    if (tagname === "BUTTON") {
        parentElement = event.target.parentNode.parentNode.parentNode; // col-lg-4
    } else {
        parentElement = event.target.parentNode.parentNode.parentNode.parentNode; // col-lg-4
    }
    
    // Add animation before removing
    parentElement.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    parentElement.style.opacity = "0";
    parentElement.style.transform = "translateX(100px)";
    
    setTimeout(() => {
        if (parentElement.parentNode) {
            parentElement.parentNode.removeChild(parentElement);
        }
        
        // Show empty state if no blogs left
        if (globalStore.length === 0) {
            showEmptyState();
        }
        
        showSuccessMessage("Article deleted successfully!");
        setupEventListeners();
    }, 300);
};

// Function to edit a blog card
const editCard = (event) => {
    event = window.event;
    const targetID = event.target.id;
    const tagname = event.target.tagName;

    let parentElement;
    if (tagname === "BUTTON") {
        parentElement = event.target.parentNode.parentNode;
    } else {
        parentElement = event.target.parentNode.parentNode.parentNode;
    }

    let blogTitle = parentElement.childNodes[5].childNodes[1];
    let blogDescription = parentElement.childNodes[5].childNodes[3];
    let blogType = parentElement.childNodes[5].childNodes[5];
    let submitBtn = parentElement.childNodes[7].childNodes[3];

    // Set attributes for editing
    blogTitle.setAttribute("contenteditable", "true");
    blogTitle.style.outline = "2px solid #3498db";
    blogTitle.style.borderRadius = "5px";
    blogTitle.style.padding = "5px";

    blogDescription.setAttribute("contenteditable", "true");
    blogDescription.style.outline = "2px solid #3498db";
    blogDescription.style.borderRadius = "5px";
    blogDescription.style.padding = "5px";

    blogType.setAttribute("contenteditable", "true");
    blogType.style.outline = "2px solid #3498db";
    blogType.style.borderRadius = "5px";
    blogType.style.padding = "5px";

    submitBtn.setAttribute("onclick", "saveEditChanges.apply(this, arguments)");
    submitBtn.innerHTML = '<i class="fas fa-save me-1"></i>Save Changes';
    submitBtn.classList.remove("btn-outline-primary");
    submitBtn.classList.add("btn-primary");

    // Remove modal attributes
    submitBtn.removeAttribute("data-bs-toggle");
    submitBtn.removeAttribute("data-bs-target");
    
    showSuccessMessage("Editing mode activated. Click 'Save Changes' when done.");
};

// Function to save edited changes
const saveEditChanges = (event) => {
    event = window.event;
    const targetID = event.target.id;
    const tagname = event.target.tagName;

    let parentElement;
    if (tagname === "BUTTON") {
        parentElement = event.target.parentNode.parentNode;
    } else {
        parentElement = event.target.parentNode.parentNode.parentNode;
    }

    let blogTitle = parentElement.childNodes[5].childNodes[1];
    let blogDescription = parentElement.childNodes[5].childNodes[3];
    let blogType = parentElement.childNodes[5].childNodes[5];
    let submitBtn = parentElement.childNodes[7].childNodes[3];

    // Get updated data
    const updatedData = {
        blogTitle: blogTitle.innerHTML,
        blogDescription: blogDescription.innerHTML,
        blogType: blogType.innerHTML,
    };

    // Update globalStore
    globalStore = globalStore.map((blog) => {
        if (blog.id === targetID) {
            return {
                id: blog.id,
                imageUrl: blog.imageUrl,
                blogTitle: updatedData.blogTitle,
                blogType: updatedData.blogType,
                blogDescription: updatedData.blogDescription,
            };
        }
        return blog;
    });

    updateLocalStorage();

    // Remove editing styles
    blogTitle.setAttribute("contenteditable", "false");
    blogTitle.style.outline = "none";
    blogTitle.style.padding = "";
    blogTitle.style.borderRadius = "";

    blogDescription.setAttribute("contenteditable", "false");
    blogDescription.style.outline = "none";
    blogDescription.style.padding = "";
    blogDescription.style.borderRadius = "";

    blogType.setAttribute("contenteditable", "false");
    blogType.style.outline = "none";
    blogType.style.padding = "";
    blogType.style.borderRadius = "";

    // Restore button styles
    submitBtn.setAttribute("onclick", "openBlog.apply(this, arguments)");
    submitBtn.setAttribute("data-bs-toggle", "modal");
    submitBtn.setAttribute("data-bs-target", "#showblog");
    submitBtn.innerHTML = '<i class="fas fa-book-open me-1"></i>Read';
    submitBtn.classList.remove("btn-primary");
    submitBtn.classList.add("btn-outline-primary");
    
    showSuccessMessage("Article updated successfully!");
};

// Function to generate HTML for blog modal
const htmlModalContent = ({
    id,
    blogTitle,
    blogDescription,
    imageUrl,
    blogType
}) => {
    const date = new Date(parseInt(id));
    return `
    <div id=${id}>
        <img src="${imageUrl}" alt="${blogTitle}" class="img-fluid place__holder__image mb-4" onerror="this.src='https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80';">
        <div class="text-sm text-muted mb-3">
            <i class="fas fa-calendar-alt me-1"></i>Published on ${date.toLocaleDateString()}
        </div>
        <h2 class="my-4">${blogTitle}</h2>
        <span class="badge mb-4">${blogType}</span>
        <div class="blog-content">
            <p class="lead">
                ${blogDescription}
            </p>
        </div>
    </div>`;
};

// Function to open blog in modal
const openBlog = (event) => {
    event = window.event;
    const targetID = event.target.id;

    const getBlog = globalStore.filter(({ id }) => id === targetID);
    blogModal.innerHTML = htmlModalContent(getBlog[0]);
};

// Function to filter blogs
const filterBlogs = (category) => {
    currentFilter = category;
    
    // Update active filter button
    filterButtons.forEach(btn => {
        if (btn.dataset.filter === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Filter and display blogs
    renderBlogs();
};

// Function to search blogs
const searchBlogs = (query) => {
    renderBlogs(query);
};

// Function to sort blogs
const sortBlogs = (criteria) => {
    renderBlogs(null, criteria);
};

// Function to render blogs with filtering, searching, and sorting
const renderBlogs = (searchQuery = null, sortCriteria = null) => {
    // Clear container
    blogContainer.innerHTML = '';
    
    // Filter blogs
    let filteredBlogs = globalStore;
    
    if (currentFilter !== "all") {
        filteredBlogs = globalStore.filter(blog => blog.blogType === currentFilter);
    }
    
    // Search blogs
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredBlogs = filteredBlogs.filter(blog => 
            blog.blogTitle.toLowerCase().includes(query) || 
            blog.blogDescription.toLowerCase().includes(query) ||
            blog.blogType.toLowerCase().includes(query)
        );
    }
    
    // Sort blogs
    if (sortCriteria) {
        switch(sortCriteria) {
            case 'newest':
                filteredBlogs.sort((a, b) => parseInt(b.id) - parseInt(a.id));
                break;
            case 'oldest':
                filteredBlogs.sort((a, b) => parseInt(a.id) - parseInt(b.id));
                break;
            case 'title':
                filteredBlogs.sort((a, b) => a.blogTitle.localeCompare(b.blogTitle));
                break;
        }
    } else {
        // Default sort by newest
        filteredBlogs.sort((a, b) => parseInt(b.id) - parseInt(a.id));
    }
    
    // Display blogs
    if (filteredBlogs.length === 0) {
        blogContainer.innerHTML = `
            <div class="col-12">
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <h3>No Articles Found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                </div>
            </div>
        `;
        return;
    }
    
    filteredBlogs.forEach(blog => {
        const createNewBlog = newCard(blog);
        blogContainer.insertAdjacentHTML("beforeend", createNewBlog);
    });
    
    // Re-setup event listeners
    setupEventListeners();
};

// Function to setup event listeners
const setupEventListeners = () => {
    // Search input
    searchInput.removeEventListener('input', handleSearch);
    searchInput.addEventListener('input', handleSearch);
    
    // Sort select
    sortSelect.removeEventListener('change', handleSort);
    sortSelect.addEventListener('change', handleSort);
    
    // Filter buttons
    filterButtons.forEach(btn => {
        btn.removeEventListener('click', handleFilter);
        btn.addEventListener('click', handleFilter);
    });
};

// Event handler functions
const handleSearch = (e) => {
    searchBlogs(e.target.value);
};

const handleSort = (e) => {
    sortBlogs(e.target.value);
};

const handleFilter = (e) => {
    filterBlogs(e.target.dataset.filter);
};

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
    const blogForm = document.getElementById('blogForm');
    if (blogForm) {
        blogForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveChanges();
        });
    }
    
    // Setup initial event listeners
    setupEventListeners();
});