const encoder = new TextEncoder();
const salt = crypto.getRandomValues(new Uint8Array(16)).join("");

// Hash function
export const hash = async (plainPassword: string): Promise<string> => {
	const passwordData = encoder.encode(plainPassword + salt);
	const hashBuffer = await crypto.subtle.digest("SHA-256", passwordData);
	return Array.from(new Uint8Array(hashBuffer))
		.map((b) => b.toString(16).padStart(2, "0"))
		.join("");
};

// Compare function
export const compare = async (
	plainPassword: string,
	encryptedPassword: string
): Promise<boolean> => {
	const hashedPassword = await hash(plainPassword);
	return hashedPassword === encryptedPassword;
};
