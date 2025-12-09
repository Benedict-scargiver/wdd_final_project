export class WishlistService {
    constructor() {
      this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    }
  
    addToWishlist(book) {
      // guard against invalid input
      if (!book || (book.id === undefined || book.id === null)) {
        console.warn('addToWishlist called with invalid book:', book);
        return false;
      }

      const bookId = Number(book.id);
      if (!this.isInWishlist(bookId)) {
        this.wishlist.push(book);
        this.saveWishlist();
        return true;
      }
      return false;
    }
  
    removeFromWishlist(bookIdOrBook) {
      // accept either an id or a book object
      if (!bookIdOrBook && bookIdOrBook !== 0) {
        console.warn('removeFromWishlist called with invalid id/book:', bookIdOrBook);
        return false;
      }

      const id = typeof bookIdOrBook === 'object' ? bookIdOrBook.id : bookIdOrBook;
      const normalizedId = Number(id);
      const originalLength = this.wishlist.length;
      this.wishlist = this.wishlist.filter(book => Number(book.id) !== normalizedId);

      const removed = this.wishlist.length !== originalLength;
      if (removed) this.saveWishlist();
      return removed;
    }
  
    isInWishlist(bookIdOrBook) {
      if (!bookIdOrBook && bookIdOrBook !== 0) return false;
      const id = typeof bookIdOrBook === 'object' ? bookIdOrBook.id : bookIdOrBook;
      const normalizedId = Number(id);
      return this.wishlist.some(book => Number(book.id) === normalizedId);
    }
  
    getWishlist() {
      return this.wishlist;
    }
  
    saveWishlist() {
      localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }
  }