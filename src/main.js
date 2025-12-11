import './style.css';
import { BookApi } from './services/BookApi';
import { WishlistService } from './services/wishlist';
import { renderNavigation } from './components/navigation';
import { Router } from './utils/router';
import { homeView } from './views/home';
import { bookDetailView } from './views/book-detail';

const wishlistService = new WishlistService();
let books = [];

// routes for moving to other page
const routes = [
  {
    path: '/',
    view: () => homeView(books)
  },
  {
    path: '/wishlist',
    view: () => homeView(wishlistService.getWishlist())
  },
  {
    path: '/book/:id',
    view: (params) => {
      const book = books.find(b => b.id === parseInt(params.id));
      const isInWishlist = wishlistService.isInWishlist(book.id);
      return bookDetailView(book, isInWishlist);
    }
  }
];

const router = new Router(routes);

async function initializeApp() {
  try {
    books = await BookApi.getPopularBooks();
    renderApp();
  } catch (error) {
    console.error('Failed to initialize app:', error);
    document.querySelector('#app').innerHTML = `
      <div class="error">
        <h2>Failed to load BookS</h2>
        <p>Please try again later</p>
      </div>
    `;
  }
}

function renderApp() {
  const app = document.querySelector('#app');
  app.innerHTML = `
    ${renderNavigation()}
    <div id="content"></div>
  `;

  setupNavigationListeners();
  router.handleLocation();
}

function setupNavigationListeners() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.target.dataset.page;
      if (page === 'home') {
        router.navigate('/');
      } else if (page === 'wishlist') {
        router.navigate('/wishlist');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('wishlist-btn')) {
      e.stopPropagation();
      const bookId = parseInt(e.target.dataset.id);
      // normalize id types when searching
      const book = books.find(b => Number(b.id) === bookId);
      
      if (!book) {
        console.warn('Wishlist action: book not found for id', bookId);
        // optionally update UI state to reflect failure
        return;
      }
      
      if (wishlistService.isInWishlist(bookId)) {
        wishlistService.removeFromWishlist(bookId);
        e.target.textContent = 'Add to Wishlist';
        e.target.classList.remove('added');
      } else {
        wishlistService.addToWishlist(book);
        e.target.textContent = 'Remove from Wishlist';
        e.target.classList.add('added');
      }
    }

    const bookCard = e.target.closest('.book-card');
    if (bookCard && !e.target.classList.contains('wishlist-btn')) {
      const bookId = bookCard.dataset.id;
      router.navigate(`/book/${bookId}`);
    }
  });
}

export function renderBookCard(book) {
  console.log(book) 
  const isInWishlist = wishlistService.isInWishlist(book.id);
  return `
    <div class="book-card" data-id="${book.id}">
    <a href="${book.url}" target="_blank" rel="noopener noreferrer"><img src="${book.image}" alt="${book.title}"></a>
      <h3>${book.title}</h3>
      <p class="year-rating">${book.subtitle}</p>
      <p class="url">
      <a href="${book.url}" target="_blank" rel="noopener noreferrer">${book.authors}</a>
      </p>
      <button class="wishlist-btn ${isInWishlist ? 'added' : ''}" data-id="${book.id}">
        ${isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  `;
}

initializeApp();