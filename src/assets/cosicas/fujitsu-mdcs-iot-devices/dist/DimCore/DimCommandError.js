export class DimCommandError {
    constructor(device, originalCommand, error) {
        this.device = device;
        this.originalCommand = originalCommand;
        this.error = error;
        this.type = 'CommandError';
        this.toJsonString = () => JSON.stringify({
            type: this.type,
            device: this.device,
            originalCommand: this.originalCommand,
            error: this.error,
        });
    }
}
//# sourceMappingURL=DimCommandError.js.map