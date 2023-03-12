export interface MotionSensor {
    isDetectingMotion(): boolean;
}

export interface VideoRecorder {
    startRecording(): void;

    stopRecording(): void;
}

export class SurveillanceController {
    constructor(private sensor: MotionSensor, private recorder: VideoRecorder) {}

    recordMotion(numberOfSeconds = 1) {
        this.range(numberOfSeconds).forEach( () => {
            this.tryToRecordMotion();
            this.waitOneSecond();
        })
    }

    private tryToRecordMotion() {
        try {
            this.sensor.isDetectingMotion() ? this.recorder.startRecording() : this.recorder.stopRecording();
        } catch (error) {
            this.recorder.stopRecording();
        }
    }

    private waitOneSecond() {
        const aSecond = 1000;
        let startTime = new Date().getTime();
        const endTime = startTime + aSecond;

        while(startTime < endTime) {
            startTime = new Date().getTime();
        }
    }

    private range(length: number) {
        return Array.from({ length }, (_, i) => i);
    }
}