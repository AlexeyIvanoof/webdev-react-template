import { render } from '@testing-library/react';
import TrackListTitle from './trackListTitle';
import { TrackType } from '@/types/types';
import ReduxProvider from '@/store/ReduxProvider';

// Mock data for tracks
const mockTracks: TrackType[] = [
  {
    _id: 1,
    name: 'Track 1',
    author: 'Artist 1',
    album: 'Album 1',
    duration_in_seconds: 225,
    release_date: '',
    genre: '',
    logo: null,
    track_file: '',
    stared_user: []
  },
  {
    _id: 2,
    name: 'Track 2',
    author: 'Artist 2',
    album: 'Album 2',
    duration_in_seconds: 260,
    release_date: '',
    genre: '',
    logo: null,
    track_file: '',
    stared_user: []
  },
];

describe('TrackListTitle', () => {
  it('renders correctly', () => {
    const { container } = render(
        <ReduxProvider>
              <TrackListTitle tracks={mockTracks} />
       </ReduxProvider>
  );
    expect(container).toMatchSnapshot();
  });
});