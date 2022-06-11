/**
 * The XFS4IoT interface specifications detail the payload content for the command, event, completion and unsolicited messages.
 *
 * Nota: La especificacion permite poner mas campos de los que especificados, pero sugiere usarlos para cosas triviales para no romper el standard.
 * Además sugiere que cada empresa que implemente esta especificacion le ponga el prefijo de la empresa a los campos que se inventa, por ejemplo "fujistuTrace": "traza especifica que fujitsu aniuade a sus mensajes"
 */
export interface XfsMessagePayload {
    [key: string]: any;
}
