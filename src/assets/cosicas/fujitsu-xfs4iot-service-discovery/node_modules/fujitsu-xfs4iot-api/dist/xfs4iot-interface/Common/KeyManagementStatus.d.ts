export interface KeyManagementStatus {
    /** Specifies the state of the encryption module. */
    encryptionState: string;
    /** Specifies the state of the public verification or encryption key in the PIN certificate modules. */
    certificateState: string;
}
