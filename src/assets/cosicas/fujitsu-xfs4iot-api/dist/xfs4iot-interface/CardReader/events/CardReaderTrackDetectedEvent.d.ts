import { CardReaderEventType } from '.';
import { XfsEventMessage } from '../../Core';
export interface CardReaderTrackDetectedEventPayload {
    /**
     * The card has track 1.
     *
     * default: false
     */
    track1?: boolean;
    /**
     * The card has track 2.
     *
     * default: false
     */
    track2?: boolean;
    /**
     * The card has track 3.
     *
     * default: false
     */
    track3?: boolean;
    /**
     * The card has the Swedish watermark track.
     *
     * default: false
     */
    watermark?: boolean;
    /**
     * The card has front track 1.
     *
     * default: false
     */
    frontTrack1?: boolean;
}
/**
 * This event notifies the application what track data the inserted card has, before the reading of the data has completed. This event will be posted once when tracks are detected during card insertion.
 */
export interface CardReaderTrackDetectedEvent extends XfsEventMessage<CardReaderEventType.TrackDetectedEvent, CardReaderTrackDetectedEventPayload> {
}
