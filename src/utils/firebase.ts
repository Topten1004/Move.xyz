import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	TwitterAuthProvider,
	signOut,
	signInWithEmailAndPassword,
	RecaptchaVerifier,
	signInWithPhoneNumber,
	GoogleAuthProvider,
	GithubAuthProvider,
	signInWithCustomToken,
	type ApplicationVerifier,
	type AuthProvider
} from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

import { derived } from 'svelte/store';
import { getProvider } from '$functions/web3';
import { defaultUser, getUserDataInFirebase, saveUserFirebase, type User } from './users';
import Store from './Store';

const FIREBASE_CONFIG = {
	apiKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
	authDomain: String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
	projectId: String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
	storageBucket: String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
	appId: String(import.meta.env.VITE_FIREBASE_APP_ID),
	messagingSenderId: String(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
	measurementId: String(import.meta.env.VITE_FIREBASE_MEASURMENT_ID),
	databaseURL: String(import.meta.env.VITE_FIREBASE_DATABASE_URL)
};
const firebaseApp = initializeApp(FIREBASE_CONFIG);

const database = getDatabase(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);

const user: Store<User> = new Store<User>(null);

export const changeUserData = async (uid: string) => {
	if (!uid) {
		return user.set(defaultUser);
	}
	const userDataFirebase = await getUserDataInFirebase(uid);
	if (!userDataFirebase) {
		const saved = await saveUserFirebase(uid, defaultUser);
		if (saved) user.set({ ...defaultUser, uid });
	}
	user.update((_user) => ({ ..._user, ...userDataFirebase, uid }));
};

const userdata = derived<Store<User>, User>(user, ($user) => $user);

export type AuthMethod =
	| 'phone_auth'
	| 'google_auth'
	| 'email_password'
	| 'facebook_auth'
	| 'github_auth'
	| 'twitter_auth';

interface AuthOptions {
	email?: string;
	password?: string;
	phone?: string;
	captchaContainer?: string | HTMLElement;
}

async function popupLogin(authMethod: AuthMethod, options?: AuthOptions) {
	let provider: AuthProvider;
	switch (authMethod) {
		case 'phone_auth': {
			globalThis.recaptchaVerifier = new RecaptchaVerifier(
				options.captchaContainer,
				{ size: 'invisible' },
				auth
			);
			const confirmationResult = await signInWithPhoneNumber(
				auth,
				options.phone,
				globalThis.recaptchaVerifier as ApplicationVerifier
			);
			return confirmationResult;
		}
		case 'email_password': {
			const response = await signInWithEmailAndPassword(auth, options.email, options.password);
			console.log(response);
			return response;
		}
		case 'twitter_auth':
			provider = new TwitterAuthProvider();
			break;
		case 'google_auth':
			provider = new GoogleAuthProvider();
			break;
		case 'github_auth':
			provider = new GithubAuthProvider();
			break;
		default:
			throw new Error('Authentication method is not supported.');
	}
	await signInWithPopup(auth, provider);
}

async function twitterLogout() {
	await signOut(auth);
}

// async function saveVerefictaionData(userData: any) {
// 	const snapshot = await get(child(ref(database), `users/${userData.uid}`));
// 	if (snapshot.exists()) {
// 		const snapshotData = snapshot.val();
// 		if (snapshotData.verificationTweetId && snapshotData.verification) {
// 			return Promise.reject('Already exists verification');
// 		}
// 		set(ref(database, `users/${userData?.uid}`), {
// 			wallet: userData.wallet,
// 			verificationTweetId: userData.verificationTweetId,
// 			verification: true,
// 		});
// 		user.set({ ...userData, verification: true });
// 	}
// }

// async function saveRecoveryInfo(userData: any) {
// 	set(ref(database, `users/${userData?.uid}`), {
// 		recovery: true,
// 	});
// 	user.set({ ...userData, recovery: true });
// }

/*
	TODO: Require user signing with wallet for firebase settings add user modal to explain the purpose of connecting wallet. 
*/
async function authWithWallet(connectedAccount: string): Promise<any> {
	const rand = () => Math.random().toString(36).substring(2);
	const generateToken = () => rand() + rand() + rand() + rand();
	const provider = getProvider();
	const token = generateToken();
	const message = { account: connectedAccount, token };
	const signature = await provider?.getSigner().signMessage(JSON.stringify(message));
	const response = await fetch('https://us-central1-identity-concierge.cloudfunctions.net/auth', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ message, signature })
	});
	const json: { token: string } = (await response.json()) as { token: string };
	const credential = await signInWithCustomToken(auth, json.token);
	return credential;
}

const httpHeaders = {
	apikey: String(import.meta.env.VITE_API_KEY)
};

export {
	database,
	storage,
	auth,
	popupLogin,
	twitterLogout,
	userdata,
	user,
	authWithWallet,
	httpHeaders
};
