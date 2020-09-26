const library = (() => {
  let booksAvailable = [
    "Physics",
    "Maths",
    "Computer",
    "Biology",
    "Economics",
    "Geography",
    "Chemistry",
    "GST 101",
    "English",
    "Agric",
  ];
  let booksBorrowed = [];

  function onBorrowBook(id) {
    const newBooksAvailable = booksAvailable.filter((_, index) => index != id);
    const bookBorrowed = booksAvailable.filter((_, index) => index == id);
    if (bookBorrowed[0] != undefined) {
      booksAvailable = newBooksAvailable;
      booksBorrowed.push(bookBorrowed[0]);
      return `\n>>> YOU HAVE SUCCESSFULLY BORROWED  ${bookBorrowed[0]}`;
    } else {
      return `\n*** Oops! YOU ENTERED AN INVALID BOOK INDEX ***`;
    }
  }

  function onReturnBook(id) {
    const book = booksBorrowed[id];
    const remove = booksBorrowed.filter((_, index) => index != id);
    if (booksBorrowed.includes(book)) {
      booksBorrowed = remove;
      booksAvailable.push(book);
      return `\n>>> WELL DONE! YOU HAVE RETURNED ${book} TO THE STORE`;
    } else {
      return `\n*** Oops! YOU ENTERED AN INVALID BOOK INDEX ***`;
    }
  }

  function onShowAvailableBooks() {
    return booksAvailable;
  }

  function onShowBorrowedBooks() {
    return booksBorrowed;
  }

  return {
    allBooks: onShowAvailableBooks,
    borrow: onBorrowBook,
    retrieve: onReturnBook,
    borrowedBooks: onShowBorrowedBooks,
  };
})();

console.log(`WELCOME TO CEEJAY'S BOOK STORE !!!`);

for (let i = 0; i < 1; ) {
  let newTask = prompt(
    "\nWhat would you like to do? \n1: View available books \n2: Borrow a book \n3: See your borrowed books \n4: Return borrowed book \n5: Exit \n\n"
  );
  if (newTask == 1) {
    booksHolder = "\n";
    library.allBooks().forEach((book, id) => {
      return (booksHolder += id + 1 + ": " + book.toUpperCase() + "\n");
    });
    console.log(
      "\n\tOUR LIST OF BOOKS ARE:\n---------------------------------" +
        booksHolder
    );
  }

  if (newTask == 2) {
    booksHolder = "\n";
    library.allBooks().forEach((book, id) => {
      return (booksHolder += id + 1 + ": " + book + "\n");
    });
    console.log(
      library.borrow(
        Number(
          prompt("\nWhich book do you want to borrow?\n" + booksHolder + "\n") -
            1
        )
      )
    );
  }

  if (newTask == 3) {
    if (library.borrowedBooks().length <= 0) {
      console.log(
        "\n>>> YOU'VE NOT BORROWED ANY BOOK YET. YOU CAN BORROW A BOOK FROM OUR AVAILABLE BOOKS"
      );
    } else {
      booksHolder = "\n";
      library.borrowedBooks().forEach((book, id) => {
        return (booksHolder += id + 1 + ": " + book + "\n");
      });
      console.log(
        "\n\tYOUR BORROWED BOOKS ARE:\n---------------------------------" +
          booksHolder
      );
    }
  }

  if (newTask == 4) {
    if (library.borrowedBooks().length <= 0) {
      console.log(`\n*** Oops! YOU'VE NOT BORROWED ANY BOOK YET ***`);
    } else {
      booksHolder = "\n";
      library.borrowedBooks().forEach((book, id) => {
        return (booksHolder += id + 1 + ": " + book + "\n");
      });
      console.log(
        library.retrieve(
          Number(
            prompt(
              "\nWhich book do you want to return?\n" + booksHolder + "\n"
            ) - 1
          )
        )
      );
    }
  }

  if (newTask == 5) {
    i = 1;
    console.log(
      "\nTHANKS FOR COMING. HOPE TO SEE YOU AGAIN, SOON. BYE!\n****************************************************\n\n"
    );
  }

  if (newTask > 5 || newTask <= 0 || isNaN(newTask)) {
    console.log(
      `\n*** INVALID SELECTION. PICK A NUMBER FROM THE LIST BELOW ***`
    );
  }
}
