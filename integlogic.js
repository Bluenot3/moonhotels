async function grantAccess() {
    const wallet = await initNear();

    if (!wallet.isSignedIn()) {
        wallet.requestSignIn(); // Redirect to NEAR wallet for authentication
        return;
    }

    const hasAccess = await verifyOwnership(wallet);
    if (hasAccess) {
        console.log("Access granted");
        // Provide access to the platform
    } else {
        console.log("Access denied");
        // Deny access to the platform
    }
}

grantAccess();
