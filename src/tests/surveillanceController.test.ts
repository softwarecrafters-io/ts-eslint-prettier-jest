import {MotionSensor, SurveillanceController, VideoRecorder} from "../core/surveillanceController";

describe('The Surveillance Controller', () => {
    it('asks the recorder to stop recording when the sensor detects no motion', () => {
        let called = false;
        const saveCall = () => {
            called = true;
        };
        const sensor = new FakeSensor();
        const recorder = new FakeRecorder();
        recorder.stopRecording = saveCall;
        const controller = new SurveillanceController(sensor, recorder);

        controller.recordMotion();

        expect(called).toBeTruthy();
    });

    it('asks the recorder to start recording when the sensor detects motion', () => {
        let called = false;
        const saveCall = () => {
            called = true;
        };
        const sensor = new FakeSensor();
        sensor.isDetectingMotion = () => true;
        const recorder = new FakeRecorder();
        recorder.startRecording = saveCall;
        const controller = new SurveillanceController(sensor, recorder);

        controller.recordMotion();

        expect(called).toBeTruthy();
    });
});

class FakeSensor implements MotionSensor {
    isDetectingMotion(): boolean {
        return false;
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