export const ExtraApi = {
  async fetchCover(isbn) {
    if (!isbn) return null;
    // Open Library covers: https://covers.openlibrary.org/b/isbn/{ISBN}-L.jpg
    return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
  }
};