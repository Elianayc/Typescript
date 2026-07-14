import { SurveillanceService } from "../business/SurveillanceService";

const service = new SurveillanceService();
const detections = service.fetchSurveillanceData();
service.printInfo(detections);