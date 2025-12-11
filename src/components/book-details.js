export function showBookDetails(book) {
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div class="modal-overlay" role="dialog" aria-modal="true" aria-label="${book?.title ?? 'Details'}">
        <div class="book-details-modal" tabindex="-1">
          <img src="${book.image}" alt="${book.title}" style="width:100%;border-radius:8px;">
          <h2>${book.title} (${book.subtitle})</h2>
          <p>Rating: ⭐ ${book.url}</p>
          <p>${book.authors}</p>
          <button class="close-modal">Close</button>
        </div>
      </div>
    `;
  
    document.body.appendChild(modal);

    const modalDialog = modal.querySelector('.book-details-modal');
    if (modalDialog) modalDialog.focus();

    function close() {
      window.removeEventListener('keydown', onKey);
      document.body.removeChild(modal);
    }

    function onKey(e) {
      if (e.key === 'Escape') close();
    }

    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) closeBtn.addEventListener('click', close);
    const overlay = modal.querySelector('.modal-overlay');
    if (overlay) overlay.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) close();
    });
    window.addEventListener('keydown', onKey);
  }
