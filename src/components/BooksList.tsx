import React from 'react';
import { Flex } from 'antd';
import { useAppSelector } from '../hooks/hooks';
import { useAppDispatch } from '../hooks/hooks';
import { choseBook } from '../redux/slices/modalSlice';

function BooksList() {
  const filter = useAppSelector((state) => state.mutation.filter);
  const booksSlice = useAppSelector((state) => state.books);
  const dispatch = useAppDispatch();

  // const books = booksSlice.books;
  // console.log(books[0]?.volumeInfo?.categories[0].toLowerCase());
  const books = Boolean(filter)
    ? booksSlice.books?.filter((item) =>
        item.volumeInfo.categories?.[0].toLowerCase()?.includes(filter)
      )
    : booksSlice.books;
  return (
    <div>
      {Boolean(booksSlice.totalBooks) && (
        <div className="app-amount-container">
          Total quantity: {booksSlice.totalBooks}
        </div>
      )}
      <Flex justify="center" gap="100px" wrap="wrap">
        {books.map((item) => {
          return (
            <div
              className="app-card"
              onClick={() => {
                dispatch(
                  choseBook({
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo.authors,
                    publisher: item.volumeInfo.publisher,
                    publishedDate: item.volumeInfo.publishedDate,
                    img: item.volumeInfo.imageLinks.thumbnail,
                    description: item.volumeInfo.description,
                  })
                );
              }}
            >
              <img
                src={
                  item.volumeInfo.imageLinks.thumbnail ||
                  item.volumeInfo.smallThumbnail
                }
                alt=""
                className="app-card-img"
              ></img>
              {/* <div className="app-card-bottom"> */}
              {/* </div> */}
              <p className="app-card-title">{item.volumeInfo.title}</p>
              <p className="app-card-price">
                <strong>by </strong>
                {item.volumeInfo.authors}
              </p>
            </div>
          );
        })}
      </Flex>
    </div>
  );
}

export default BooksList;
