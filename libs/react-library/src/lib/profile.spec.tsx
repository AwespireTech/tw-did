import { Mock, vi, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Profile } from './profile';
import { useAccount } from 'wagmi';

vi.mock('wagmi', () => ({
  useAccount: vi.fn(),
  useConnect: vi.fn().mockReturnValue({ connect: vi.fn() }),
  useDisconnect: vi.fn().mockReturnValue({ disconnect: vi.fn() }),
}));

describe('Profile', () => {
  it('renders connect button when not connected', () => {
    (useAccount as Mock).mockReturnValue({
      address: null,
      isConnected: false,
    });

    render(<Profile />);

    expect(screen.getByTestId('connect-button')).toBeTruthy();
  });

  it('renders disconnect button and address when connected', () => {
    const mockAddress = '0x1234567890abcdef';

    (useAccount as Mock).mockReturnValue({
      address: mockAddress,
      isConnected: true,
    });

    render(<Profile />);

    expect(screen.getByTestId('disconnect-button')).toBeTruthy();
    expect(screen.getByTestId('address').textContent).toEqual(mockAddress);
  });
});