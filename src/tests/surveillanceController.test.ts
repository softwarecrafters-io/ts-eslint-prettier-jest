import { MotionSensor, SurveillanceController, VideoRecorder } from "../core/surveillanceController";

describe('The Surveillance Controller', () => {
    let sensor: FakeSensor;
    let recorder: FakeRecorder;
    let controller: SurveillanceController;

    beforeEach(() => {
        sensor = new FakeSensor();
        recorder = new FakeRecorder();
        controller = new SurveillanceController(sensor, recorder);
    })
    it('asks the recorder to stop recording when the sensor detects no motion', () => {
        const spyRecorder = jest.spyOn(recorder, "stopRecording")
        controller.recordMotion();

        expect(spyRecorder).toHaveBeenCalled();
    });

    it('asks the recorder to start recording when the sensor detects motion', () => {
        const spyRecorder = jest.spyOn(recorder, "startRecording")
        const stubSensor = jest.spyOn(sensor, "isDetectingMotion")
        stubSensor.mockImplementation(() => true)
        controller.recordMotion();

        expect(spyRecorder).toHaveBeenCalled();
    });

    it('asks the recorder to stop recording when the sensor throws an unexpected error', () => {
        const spyRecorder = jest.spyOn(recorder, "stopRecording")
        const stubSensor = jest.spyOn(sensor, "isDetectingMotion")
        stubSensor.mockImplementation(() => {
            throw new Error("Unexpected Error: The Video Recording Stop")
        })
        controller.recordMotion();

        expect(spyRecorder).toHaveBeenCalled();
    });

    it('checks the sensor once per second', () => {
        const spySensor = jest.spyOn(sensor, "isDetectingMotion")

        const numberOfSeconds = 3;
        controller.recordMotion(numberOfSeconds)

        expect(spySensor).toHaveBeenCalledTimes(numberOfSeconds);
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
