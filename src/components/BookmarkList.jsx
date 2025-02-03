import React from 'react';
// BookmarkList.jsx
export default function BookmarkList({ bookmarks }) {
  return (
    <ul>
      {bookmarks.map((bookmark) => (
        <li key={bookmark.id}> {/* Unique key */}
          {bookmark.title}
        </li>
      ))}
    </ul>
  );
}