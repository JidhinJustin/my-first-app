export interface User{
    idToken: string;
    email: string;
    refreshToken: string;
    expiry: Date;
    localId: string;
}