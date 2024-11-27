import React from 'react';
import { render } from '@testing-library/react';
import Tracks from './Track';
import ReduxProvider from '@/store/ReduxProvider';


describe('Tracks Component', () => {
  it('renders correctly', () => {
    const tracks = [
      { _id: 1, title: 'Track 1', author: 'Artist 1', album: 'Album 1', duration_in_seconds: 225,  name: "name 1", genre: "genre 1",  release_date: "", logo: "", track_file : "", stared_user: []},
      { _id: 2, title: 'Track 2', author: 'Artist 2', album: 'Album 2', duration_in_seconds: 260,  name: "name 2", genre: "genre 2",  release_date: "", logo: "", track_file : "", stared_user: [] },
    ];

    const title = 'My Playlist';

    const { asFragment } = render(
        <ReduxProvider>
                 <Tracks  tracks={tracks} title={title} filteredTracks={[]} error={''} />
        </ReduxProvider>
);

    
    expect(asFragment()).toMatchSnapshot();
  });
});
