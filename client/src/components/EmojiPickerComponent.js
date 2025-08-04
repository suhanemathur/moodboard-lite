import React from 'react';
import Picker from '@emoji-mart/react';
import emojiData from '@emoji-mart/data';

function EmojiPickerComponent({ onEmojiSelect }) {
  return (
    <div style={{ maxWidth: 350 }}>
      <Picker
        data={emojiData}
        onEmojiSelect={(emoji) => onEmojiSelect(emoji.native)}
      />
    </div>
  );
}

export default EmojiPickerComponent;
