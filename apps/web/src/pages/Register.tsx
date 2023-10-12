import { RegisterScreen, useAuth } from '@tw-did/react-library';
import { signMessage } from '@wagmi/core';
import { Identity } from '@semaphore-protocol/identity';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

export function Register() {
  const { ethereumLogin, updateSemaphoreCommitment } = useAuth();

  const [user, setUser] = useState({
    nationalId: 'A123456789',
    ethereumAccount: '',
    semaphoreCommitment: '',
    id: '',
    token: ''
  });

    const handleFidoLogin = async () => {
    /* TODO: handleFidoLogin */
  };

  const handleEthLogin = async () => {
    // await ethereumLogin();
    setUser({
      ...user,
      ethereumAccount: '0x123456789'
    })
  };

  const generateIdentity = async () => {
    const message = `Sign this message to generate your Semaphore identity.`;
    const result = await signMessage({ message });
    const identity = new Identity(result);
    // updateSemaphoreCommitment(identity.commitment.toString());
  };

  const handleBind = async () => {
    // await generateIdentity();
  };

  const navigate = useNavigate();
  function viewCredential() {
    navigate({ to: '/view-credential' });
  }

  return user ? (
    <RegisterScreen
      user={user}
      fidoQR="/sampleQR.jpg" /* TODO: use fido QR code */
      handleFidoLogin={handleFidoLogin}
      handleEthLogin={handleEthLogin}
      handleBind={handleBind}
      viewCredential={viewCredential}
    />
  ) : (
    <></>
  );
}
