import React, { useState } from 'react';
import axios from '../api/axios';
import GiphyPicker from './GiphyPicker';
import EmojiPickerComponent from './EmojiPickerComponent';

function MoodboardCreator({ onMoodboardCreated }) {
  const [color, setColor] = useState('');
  const [image, setImage] = useState('');
  const [text, setText] = useState('');
  const [emojis, setEmojis] = useState([]);
  const [gifUrl, setGifUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleEmojiSelect = (emoji) => {
    if (!emojis.includes(emoji)) {
      setEmojis([...emojis, emoji]);
    }
  };

  const handleSubmit = async () => {
    const hasAnyContent =
      color.trim() ||
      image.trim() ||
      text.trim() ||
      emojis.length > 0 ||
      gifUrl;

    if (!hasAnyContent) {
      alert('Please fill in at least one field to create a moodboard.');
      return;
    }

    const items = [];

    if (color.trim()) items.push({ type: 'color', content: color });
    if (image.trim()) items.push({ type: 'image', content: image });
    if (text.trim()) items.push({ type: 'text', content: text });
    if (emojis.length > 0) {
      emojis.forEach((emoji) =>
        items.push({ type: 'text', content: emoji })
      );
    }
    if (gifUrl) items.push({ type: 'image', content: gifUrl });

    const token = localStorage.getItem('token');

    try {
      await axios.post(
        '/moodboards/create',
        {
          title: `Moodboard ${new Date().toLocaleDateString()}`,
          items,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Clear fields
      setColor('');
      setImage('');
      setText('');
      setEmojis([]);
      setGifUrl('');
      setMessage('Moodboard created!');
      onMoodboardCreated();
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to create moodboard.');
    }
  };

  return (
    <div className="card p-3 mb-4">
      <h5>Create Today’s Moodboard</h5>
      {message && <div className="alert alert-success">{message}</div>}

      <input
        className="form-control mb-2"
        placeholder="Hex Color (e.g. #FFAA00)"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <input
        className="form-control mb-2"
        placeholder="Quote / Note"
        maxLength={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mb-2">
        <strong>Selected Emojis:</strong> {emojis.join(' ')}
      </div>

      <EmojiPickerComponent onEmojiSelect={handleEmojiSelect} />

      <hr />
      <h6>Pick a GIF</h6>
      <GiphyPicker onGifSelect={setGifUrl} />
      {gifUrl && (
        <div className="mt-2">
          <img src={gifUrl} alt="Selected GIF" width="150" />
        </div>
      )}

      <button className="btn btn-success w-100 mt-3" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default MoodboardCreator;
