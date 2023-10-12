import {
  CredentialScreen,
  useAuth,
  useCredentials,
  CredentialType,
} from '@tw-did/react-library';
import { useNavigate } from '@tanstack/react-router';

export function CredentialView() {
  const { logout } = useAuth();
  // const { credentials, sendCredential } = useCredentials();

  const credentials = [
    {
      type: CredentialType.ETHEREUM,
      fields: [
        { key: 'national-id', value: 'A123456789' },
        { key: 'ethereum-account-address', value: '0x1234567890abcdef' },
      ],
    },
    {
      type: CredentialType.SEMAPHORE,
      fields: [
        { key: 'national-id', value: 'A123456789' },
        { key: 'ethereum-account-address', value: '0x1234567890abcdef' },
      ],
      description: 'You are in Taiwan DID sempahore group',
    },
  ]

  const handleDownload = async (data: any) => {
    /* TODO: send to wallet instead of download */
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`;
    const link = document.createElement('a');
    link.href = jsonString;
    link.download = 'data.json';
    link.click();
  };

  const handleRevoke = async () => {
    /* TODO: handle revoke */
  };

  const handleLogout = async () => {
    await logout();
  };

  const navigate = useNavigate();
  const handleClose = async () => {
    navigate({ to: '/' });
  };

  /* TODO: get from AuthContext */
  const checkLogin = () => {
    return true
    // return localStorage.getItem('user') ? true : false;
  }

  const handleExport = async (data: any) => {
    window.open('http://192.168.50.149:4202/', '_blank');
  }

  return (
    <div>
      <CredentialScreen
        credentials={credentials}
        actionLabels={['download', 'export']}
        onAction={(index, label) => {
          if (label == 'download')
            handleDownload(credentials[index]);
          else if (label == 'export')
            handleExport(credentials[index]);
          else return;
        }}
        onRevoke={handleRevoke}
        onLogout={handleLogout}
        onClose={handleClose}
        checkLogin={checkLogin}
      />
    </div>
  );
}
