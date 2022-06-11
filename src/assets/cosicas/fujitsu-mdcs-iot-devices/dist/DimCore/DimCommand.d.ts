import { Xfs4IotDevicesType } from '../Xfs4IotDevicesType';
export interface DimCommand<T extends string> {
    device: Xfs4IotDevicesType;
    type: T;
    toJsonString: () => string;
}
