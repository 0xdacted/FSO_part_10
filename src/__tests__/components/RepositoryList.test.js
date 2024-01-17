import { render, screen, waitFor } from '@testing-library/react-native';
import RepositoryList from '../../components/RepositoryList';
import useRepositories from '../../hooks/useRepositories';

jest.mock('../../hooks/useRepositories');

const mockRepositories = [
  {
    id: 'repository-1',
    fullName: 'repository-1/fullName',
    description: 'Description 1',
    language: 'Language 1',
    forksCount: 10,
    stargazersCount: 20,
    ratingAverage: 5,
    reviewCount: 2,
    ownerAvatarUrl: 'https://example.com/image1.jpg',
  },
  {
    id: 'repository-2',
    fullName: 'repository-2/fullName',
    description: 'Description 2',
    language: 'Language 2',
    forksCount: 30,
    stargazersCount: 40,
    ratingAverage: 4,
    reviewCount: 3,
    ownerAvatarUrl: 'https://example.com/image2.jpg',
  },
];

describe('RepositoryList', () => {
  it('renders repository information correctly', async () => {
    useRepositories.mockReturnValue({
      repositories: mockRepositories, 
      loading: false, 
      error: null 
    });

    render(<RepositoryList />);

    // Wait for the FlatList items to be rendered
    await waitFor(() => {
      const repositoryItems = screen.getAllByTestId('repositoryItem');
      expect(repositoryItems.length).toBe(2);
    });
  });
});
