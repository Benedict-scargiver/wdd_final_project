import { BookApi } from '../services/BookApi.js';

export function bookDetailView(book, isInWishlist) {
  return `
    <div class="book-detail-page">
      <button class="back-btn" onclick="window.history.back()">← Back</button>
      <div class="book-detail-content">
        <img src="${book.image}" alt="${book.title}">
        <div class="book-info">
          <h1>${book.title}</h1>
          <p class="year-rating">${book.year} • ⭐ ${book.url}</p>
          <p class="description">${book.description}</p>
          <button class="wishlist-btn ${isInWishlist ? 'added' : ''}" data-id="${book.id}">
            ${isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
          </button>
        </div>
      </div>
    </div>
  `;
}

export async function view(params) {
  const id = params?.id ?? params?.bookId ?? null;
  if (!id) {
    console.error('book-detail: missing id', params);
    return '<p>Book not found</p>';
  }

  const book = await BookApi.getBookById(id);
  if (!book) {
    return '<p>Book not found</p>';
  }

  // safe to use book.id and render
  return bookDetailView(book);

}
