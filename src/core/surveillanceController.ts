export interface MotionSensor {
    isDetectedMotion(): boolean
}

export interface VideoRecorder {
    startRecording(): void

    stopRecording(): void
}

export class SurveillanceController {
    constructor(private sensor: MotionSensor, private recorder: VideoRecorder) {}

    recordMotion() {
        this.sensor.isDetectedMotion() ? this.recorder.startRecording() : this.recorder.stopRecording()
    }
}