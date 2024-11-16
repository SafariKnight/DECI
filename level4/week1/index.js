function newBook(title, author, genre, isRead) {
  return {
    title: title,
    author: author,
    genre: genre,
    isRead: isRead,
    markAsRead: function() { this.isRead = true },
    markAsUnread: function() { this.isRead = false },
    displayBookInfo: function() {
      console.log(`Title: ${this.title}`)
      console.log(`Author: ${this.author}`)
      console.log(`Genre: ${this.genre}`)
      console.log(`Is Read?: ${this.isRead}`)
    },
  }
}

const theHobbit = newBook("The Hobbit", "J.R.R Tolkien", "Fantasy", false);
theHobbit.markAsRead();
theHobbit.displayBookInfo();
console.log("*********************************")
const atomicHabits = newBook("Atomic Habits", "James Clear", "Self-Development", true);
atomicHabits.markAsUnread();
atomicHabits.displayBookInfo();
