export interface MotionSensor {
    isDetectingMotion(): boolean;
}

export interface VideoRecorder {
    startRecording(): void;

    stopRecording(): void;
}

export class SurveillanceController {
    constructor(private sensor: MotionSensor, private recorder: VideoRecorder) {}

    recordMotion() {
        this.sensor.isDetectingMotion() ? this.recorder.startRecording() : this.recorder.stopRecording();
    }
}