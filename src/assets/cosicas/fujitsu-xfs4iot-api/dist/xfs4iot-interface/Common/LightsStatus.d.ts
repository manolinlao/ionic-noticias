import { CommonLightStatus } from './CommonLightStatus';
/**
 * cardReader?:Card Reader Light.
 *
 * pinPad?: Pin Pad Light.
 *
 * notesDispenser?: Notes Dispenser Light.
 *
 * coinDispenser?: Coin Dispenser Light.
 *
 * receiptPrinter?: Receipt Printer Light.
 *
 * passbookPrinter?: Passbook Printer Light.
 *
 * envelopeDepository?: Envelope Depository Light.
 *
 * billAcceptor?: Bill Acceptor Light.
 *
 * envelopeDispenser?: Envelope Dispenser Light.
 *
 * documentPrinter?: Document Printer Light.
 *
 * coinAcceptor?: Coin Acceptor Light.
 *
 * scanner?: Scanner Light.
 *
 * contactless?: Contactless Reader Light.
 *
 * cardReader2?: Card Reader 2 Light.
 *
 * notesDispenser2?: Notes Dispenser 2 Light.
 *
 * billAcceptor2?: Bill Acceptor 2 Light.
 *
 * statusGood?: Status Indicator light - Good.
 *
 * statusWarning?: Status Indicator light - Warning.
 *
 * statusBad?: Status Indicator light - Bad.
 *
 * statusSupervisor?: Status Indicator light - Supervisor.
 *
 * statusInService?: Status Indicator light - In Service.
 *
 * fasciaLight?: Fascia Light.
 *
 */
export interface LightsStatus {
    /**
     * Additional vendor specific lights
     *
     * See {@link CommonLightStatus}
     */
    [key: string]: CommonLightStatus;
}
