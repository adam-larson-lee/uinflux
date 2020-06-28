import { InfluxDB } from "influx";
import env from "../env/env";

const influx = new InfluxDB(env.influxdb.address);

export default influx;