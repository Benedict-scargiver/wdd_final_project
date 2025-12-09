import { renderBookCard } from '../main.js';

export function homeView(books) {
  return `
    <div class="book-grid">
      ${books.map(book => renderBookCard(book)).join('')}
    </div>
  `;
}