import { MessageAction } from '@tw-did/core';
import { CredentialScreen, useCredentials, CredentialType } from '@tw-did/react-library';

export function CredentialSelection() {
  const { sendCredential } = useCredentials();
  
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
  // if (isConnected)
    return (
      <div>
        <CredentialScreen
          credentials={credentials}
          actionLabels={['select']}
          onAction={(index, label) => {
            if (label !== 'select') return;
            sendCredential(MessageAction.SELECT_CREDENTIAL, credentials[index]);
          }}
          checkLogin={()=>true}
        />
      </div>
    );
}
