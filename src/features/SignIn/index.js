import app from 'firebase/app';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import * as firebaseui from 'firebaseui';
import { useCallback, useRef } from 'react';
import { selectors as authSelectors } from '../../app/authSlice';
import 'firebaseui/dist/firebaseui.css';
import { useSelector } from 'react-redux';

const uiConfig = {
  signInFlow: 'popup',
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: (authResult) => {
      console.log('success', authResult);
    },
  },
  signInOptions: [
    app.auth.GoogleAuthProvider.PROVIDER_ID,
    app.auth.EmailAuthProvider.PROVIDER_ID,
  ]
  // tosUrl: 'https://coachyard.io/terms-and-conditions',
  // privacyPolicyUrl: 'https://coachyard.io/privacy-policy'
};

const SignIn = () => {
  const ui = useRef(null);
  const handleNode = useCallback((node) => {
    if (!ui.current) ui.current = new firebaseui.auth.AuthUI(app.auth());
    if (node) ui.current.start(`#${node.id}`, uiConfig);
  }, []);
  const { isSignedIn } = useSelector(authSelectors.select);

  return (
    <Dialog className="sign-in-page" open={!isSignedIn}>
      <DialogContent>
        <div id="firebase-auth" ref={handleNode} />
      </DialogContent>
    </Dialog>
  );
};

export default SignIn;
