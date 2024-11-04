import React from 'react';
import { render } from '@testing-library/react';
//import '@testing-library/jest-dom/extend-expect'; // для дополнительных совпадений
import Tracks from './Track';
import ReduxProvider from '@/store/ReduxProvider';


describe('Tracks Component', () => {
  it('renders correctly', () => {
    const tracks = [
      { _id: 1, title: 'Track 1', author: 'Artist 1', album: 'Album 1', duration_in_seconds: 225 },
      { _id: 2, title: 'Track 2', author: 'Artist 2', album: 'Album 2', duration_in_seconds: 260 },
    ];

    const title = 'My Playlist';

    const { asFragment } = render(
        <ReduxProvider>
                 <Tracks filteredTracks={tracks} tracks={tracks} title={title} />
        </ReduxProvider>
);

    // снимок визуализированного компонента
    expect(asFragment()).toMatchSnapshot();
  });
});
