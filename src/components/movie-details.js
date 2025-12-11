export function showMovieDetails(movie) {
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div class="modal-overlay" role="dialog" aria-modal="true" aria-label="${movie?.title ?? 'Details'}">
        <div class="movie-details-modal" tabindex="-1">
          <img src="${movie.image}" alt="${movie.title}" style="width:100%;border-radius:8px;">
          <h2>${movie.title} (${movie.year})</h2>
          <p>Rating: ⭐ ${movie.rating}</p>
          <p>${movie.description}</p>
          <button class="close-modal">Close</button>
        </div>
      </div>
    `;
  
    document.body.appendChild(modal);

    const modalDialog = modal.querySelector('.movie-details-modal');
    modalDialog.focus();

    function close() {
      window.removeEventListener('keydown', onKey);
      document.body.removeChild(modal);
    }

    function onKey(e) {
      if (e.key === 'Escape') close();
    }

    modal.querySelector('.close-modal').addEventListener('click', close);
    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) close();
    });
    window.addEventListener('keydown', onKey);
  }