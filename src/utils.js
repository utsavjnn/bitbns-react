export function generateRandomString () {
    let array = new Uint8Array(28);
    window.crypto.getRandomValues(array);
    return Array.from(array, (dec) => ("0" + dec.toString(16)).substr(-2)).join(
        ""
    );
}

// Calculate the SHA256 hash of the input text.
export function sha256(code_verifier) {
    const encoder = new TextEncoder();
    const data = encoder.encode(code_verifier);
    return window.crypto.subtle.digest("SHA-256", data);
}

// Base64-urlencodes the input string
export function base64urlencode(hashed) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(hashed)))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
}

// Return the base64-urlencoded sha256 hash for the PKCE challenge
export async function generateCodeChallenge(code_verifier) {
    let hashed = await sha256(code_verifier);
    return base64urlencode(hashed);
}
