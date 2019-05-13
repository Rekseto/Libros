import React, {Component} from "react";

import BookAdminPanel from "../BookAdminPanel";
import loadingWrapper from "../../../../shared/loadingWrapper";
import {bookSelector} from "../../selectors";
import {formatDate} from "../../../../helpers/dateHelper";

function BookComponent({deleteBook, book}) {
  let fastestTerm;
  if (book.fastestTerm === "Teraz" || book.stock > book.loaned)
    fastestTerm = "Teraz";
  else fastestTerm = formatDate(book.fastestTerm);

  return (
    <section className="Book">
      <header className="Book__header">
        <h2 className="BookHeader__heading">{book.title}</h2>
        <p className="BookHeader__author">{book.author}</p>
      </header>

      <div className="Book__container">
        <p className="Book__paragraph">Data Wydania: {formatDate(book.date)}</p>
        <p className="Book__paragraph">ISBN: {book.isbn}</p>
        <p className="Book__paragraph">Wydawnictwo: {book.publisher.name}</p>
        <p className="Book__paragraph">Kategoria: {book.category.name}</p>
        <p className="Book__paragraph">W bibliotece: {book.stock}</p>
        <p className="Book__paragraph">Wypożyczone: {book.loaned}</p>
        <p className="Book__paragraph">Dostępna od: {fastestTerm}</p>
      </div>

      <BookAdminPanel deleteBook={deleteBook} />
    </section>
  );
}

export default loadingWrapper(bookSelector, BookComponent);
