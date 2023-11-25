import { constants } from 'ethers';
import { child, get, ref, update } from 'firebase/database';
import { database, user } from '$utils/firebase';
import { deepCopy } from './object';

export interface User {
	uid: string;
	name: string;
	displayName: string;
	description: string;
	avatar: string;
	banner: string;
	links: string[];
	externalLink?: string;
	twitter?: string;
	discord?: string;
	github?: string;
	instagram?: string;
	collections: any[];
	created?: number;
	legalContent?: string;
	hashtags?: string;
}

export const defaultUser: User = {
	uid: '',
	name: constants.AddressZero,
	displayName: constants.AddressZero,
	description: '',
	avatar: '',
	banner: '',
	links: [],
	collections: [],
	legalContent: '',
	hashtags: ''
};

function fixIfLegacyUser(_user: User) {
	// Meaning a user that has specific links and not a link array.
	let migratedUser: User;
	if (!Object.prototype.hasOwnProperty.call(_user, 'links')) {
		migratedUser = deepCopy(_user);
		migratedUser.links = [
			_user.externalLink,
			_user.twitter,
			_user.discord,
			_user.github,
			_user.instagram
		].filter((l) => l);
		return migratedUser;
	}
	return _user;
}

async function getUserDataInFirebase(account: string) {
	const snapshotUser = await get(child(ref(database), `users/${account.toLowerCase()}`));
	if (!snapshotUser.exists()) return null;
	let jsonUser: User = snapshotUser.toJSON() as User;
	jsonUser = fixIfLegacyUser(jsonUser);
	jsonUser.links = Object.values(jsonUser.links);

	return {
		...jsonUser,
		uid: account
	};
}

async function saveUserFirebase(uid: string, u: User) {
	if (!uid) return null;
	try {
		const userRef = ref(database, `users/${uid.toLowerCase()}`);
		await update(userRef, {
			name: u.name,
			displayName: u.displayName,
			description: u.description,
			avatar: u.avatar,
			banner: u.banner,
			links: u.links,
			legalContent: u.legalContent || '',
			hashtags: u.hashtags || '',
			created: new Date().getTime()
		});
		const userDataFirebase = await getUserDataInFirebase(uid);
		user.set(userDataFirebase);
		return true;
	} catch (error) {
		console.error('[Save user firebase] :', error);
		throw error;
	}
}

export { saveUserFirebase, getUserDataInFirebase };
