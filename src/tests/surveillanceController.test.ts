import { MotionSensor, SurveillanceController, VideoRecorder } from "../core/surveillanceController";

describe('The Surveillance Controller', () => {
    it('asks the recorder to stop recording when the sensor detects no motion', () => {
        const sensor = new StubSensorDetectingNotMotion();
        const recorder = new SpyVideoRecorder();
        const controller = new SurveillanceController(sensor, recorder);

        controller.recordMotion();

        expect(recorder.stopCalled).toBeTruthy();
    });

    it('asks the recorder to start recording when the sensor detects motion', () => {
        const sensor = new StubSensorDetectingMotion();
        const recorder = new SpyVideoRecorder();
        const controller = new SurveillanceController(sensor, recorder);

        controller.recordMotion();

        expect(recorder.startCalled).toBeTruthy();
    });
});

class StubSensorDetectingNotMotion implements MotionSensor {
    isDetectingMotion(): boolean {
        return false;
    }
}

class StubSensorDetectingMotion implements MotionSensor {
    isDetectingMotion(): boolean {
        return true;
    }
}

class FakeRecorder implements VideoRecorder {
    startRecording(): void {
        console.log('start recording...');
    }

    stopRecording(): void {
        console.log('stop recording...');
    }
}

class SpyVideoRecorder implements VideoRecorder {
    startCalled = false;
    stopCalled = false;

    startRecording(): void {
        this.startCalled = true;
    }

    stopRecording(): void {
        this.stopCalled = true;
    }
}