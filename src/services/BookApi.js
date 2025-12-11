const BASE_URL = 'https://www.dbooks.org/api';

export class BookApi {
  static async getPopularBooks() {
    try {
      const response = await fetch(
        `${BASE_URL}/recent`
      );
      const data = await response.json();


      return data.books.map(book => ({
        id: book.id,
        title: book.title,
        subtitle: book.subtitle,
        image: book.image,
        authors: book.authors,
        url: book.url
      }));
    } catch (error) {
      console.error('Error fetching popular books:', error);
      return [];
    }
  }

  static async searchBooks(query) {
    if (!query) return [];

    try {
      const response = await fetch(`${BASE_URL}/search/${encodeURIComponent(query)}`);
      const data = await response.json();

      if (data.status !== 'ok' || !data.books) return [];

      return data.books.map(book => ({
        id: book.id,
        title: book.title,
        subtitle: book.subtitle, // Note: API subtitle seems to be used as subtitle/subtitle text
        image: book.image,
        authors: book.authors, // Note: API authors seems to be used as authors
        url: book.url // Note: API url seems to be used as url
      }));
    } catch (error) {
      console.error(`Error searching for books with query "${query}":`, error);
      return [];
    }
  }
}