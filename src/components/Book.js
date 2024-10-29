import React from 'react';
import FlipPage from 'react-flip-page';
import './Book.css';

function Book() {
  // Each page now has its own `leftContent` and `rightContent`
  const pages = [
    { 
      leftContent: { text: "Welcome!", image: "images/page1-left.jpg" },
      rightContent: { text: "Explore our art!", image: "images/page1-right.jpg" }
    },
    { 
      leftContent: { text: "Traditional Tattoos", image: "images/page2-left.jpg" },
      rightContent: { text: "Black & Grey", image: "images/page2-right.jpg" }
    },
    { 
      leftContent: { text: "Realism Art", image: "images/page3-left.jpg" },
      rightContent: { text: "Custom Designs", image: "images/page3-right.jpg" }
    },
    // Add more pages as needed
  ];

  return (
    <div className="book-container">
      <FlipPage
        orientation="horizontal"
        uncutPages
        pageBackground="#fafafa"
        animationDuration="800"
        width={800} // Increase width to make the book bigger
        height={500} // Increase height to make the book bigger
      >
        {pages.map((page, index) => (
          <article key={index} className="book-page">
            <div className="left-page">
              <img src={page.leftContent.image} alt={`Left Page ${index + 1}`} className="page-image" />
              <p className="page-text">{page.leftContent.text}</p>
            </div>
            <div className="right-page">
              <img src={page.rightContent.image} alt={`Right Page ${index + 1}`} className="page-image" />
              <p className="page-text">{page.rightContent.text}</p>
            </div>
          </article>
        ))}
      </FlipPage>
    </div>
  );
}

export default Book;