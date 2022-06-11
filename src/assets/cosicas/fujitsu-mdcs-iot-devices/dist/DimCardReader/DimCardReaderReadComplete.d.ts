export interface DimCardReaderReadComplete {
    tracks: {
        track1: string | null;
        track2: string | null;
        track3: string | null;
    };
    chip: {
        protocol: 'chipT0' | 'chipT1';
        data: string | null;
    };
}
