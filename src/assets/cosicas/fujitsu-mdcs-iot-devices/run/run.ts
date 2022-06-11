import {Xfs4IotServiceDiscovery} from 'fujitsu-xfs4iot-service-discovery';
import {MdcsIotDevices} from '../src/main/MdcsIotDevices';
import {TraceFactory} from '../src/main/Tracer';

const log = TraceFactory.getLogger('MAIN');

const discovery = new Xfs4IotServiceDiscovery(process.env.IP_HOSTNAME_TARGET || 'localhost');
// Creamos la clase principal encargada de enroutar las conexiones del puerto 3100 a los distintos dispositivos.
const mdcsIotDevices = new MdcsIotDevices(discovery, false);

mdcsIotDevices.start().then(() => {
    log.debug('Started mdcsIotDevices');
});
