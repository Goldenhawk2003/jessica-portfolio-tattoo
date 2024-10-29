import React from 'react';
import FlipPage from 'react-flip-page';
import './Book.css';

function Book() {
  const pages = [
    { text: "Welcome to our Tattoo Gallery!", image: "images/page1.jpg" },
    { text: "Explore different styles and designs", image: "images/page2.jpg" },
    { text: "Traditional Tattoos", image: "images/page3.jpg" },
    { text: "Black & Grey Tattoos", image: "images/page4.jpg" },
    // Add more pages as desired
  ];

  return (
    <div className="book-container">
      <FlipPage
        orientation="horizontal"
        uncutPages
        pageBackground="#fafafa"
        animationDuration="800"
      >
        {pages.map((page, index) => (
          <article key={index} className="book-page">
            <img src={page.image} alt={`Page ${index + 1}`} className="page-image" />
            <p className="page-text">{page.text}</p>
          </article>
        ))}
      </FlipPage>
    </div>
  );
}

export default Book;