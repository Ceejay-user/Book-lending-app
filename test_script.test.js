const { allBooks, borrow, retrieve } = require('./test_script')


// Checking if the returned array of books is exactly as it is here
test('Check all books in the store as an array', () => {
  expect(allBooks()).toEqual([
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
  ]);
})

// Checking if a particular book can be borrowed from the array of books
test('Check if Maths can be borrowed from the array of books using index of 1', () => {
  expect(borrow(1)).toMatch(/You have successfully borrowed Maths/i);
})

test("Check if Economics can be borrowed from the array of books using index of 4", () => {
  expect(borrow(4)).toMatch(/You have successfully borrowed Economics/i);
});

test("Check if English can be borrowed from the array of books using index of 8", () => {
  expect(borrow(8)).toMatch(/You have successfully borrowed English/i);
});

// Checking if a user can return a book without even borrowing it first
test('Check that You will get a message saying "You haven\'t borrowed any book!" when you try to return a book to the store without first borrowing one', () => {
  expect(retrieve(2)).toBeFalsy();
})