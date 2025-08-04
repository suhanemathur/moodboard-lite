import React from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import { Grid } from '@giphy/react-components';

const gf = new GiphyFetch("PqoUZc1HITLfAsjnTkIcddWPaMFXsb7K"); 

function GiphyPicker({ onGifSelect }) {
  const fetchGifs = (offset) => gf.trending({ offset, limit: 10 });

  return (
    <div style={{ width: '100%', maxWidth: 400 }}>
      <Grid
        fetchGifs={fetchGifs}
        width={400}
        columns={2}
        gutter={6}
        onGifClick={(gif) => onGifSelect(gif.images.fixed_height.url)}
      />
    </div>
  );
}

export default GiphyPicker;
