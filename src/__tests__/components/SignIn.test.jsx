import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../components/SignInContainer'; 

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const mockOnSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(
        <SignInContainer onSubmit={mockOnSubmit} />
      );

      fireEvent.changeText(getByPlaceholderText('Username'), 'testuser');
      fireEvent.changeText(getByPlaceholderText('Password'), 'password');
      fireEvent.press(getByText('Sign In'));

      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);

        const calledWith = mockOnSubmit.mock.calls[0][0]; 
        expect(calledWith.username).toBe('testuser');
        expect(calledWith.password).toBe('password');
      });
    });
  });
});
