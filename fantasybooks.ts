type Writers = {
  id: number;
  name: string;
};

type Books = {
  writerId: number;
  title: string;
  type: string;
  numberOfWords: number;
};

let writer:Writers | undefined ={
  id:0,
  name:""
}

function getAmountPublishedInFantasy(  writers: Writers[],  books: Books[],  authorName: string): number {
 writer = writers.find((w) => w.name === authorName)

  if (!writer) {
    throw new Error(`Writer with name ${authorName} not found.`);
  }
  let fantasyBooks = books.filter(  (book) => book.writerId === writer!.id && book.type === "fantasy"  )
  let sumOfWords = fantasyBooks.reduce(
    (total, book) => total + book.numberOfWords,  0 );

  return sumOfWords
}
