import {MotionSensor, SurveillanceController, VideoRecorder} from "../core/surveillanceController";

describe("The Surveillance Controller", () => {
    it("ask the recorder to stop recording when the sensor detects no motion", () => {
        const sensor = new StubSensorDetectingNoMotion()
        const recorder = new SpyRecorder()
        const controller = new SurveillanceController(sensor, recorder)

        controller.recordMotion()

        expect(recorder.stopCalled).toBeTruthy()
    })

    it("ask the recorder to start recording when the sensor detects motion", () => {
        const sensor = new StubSensorDetectingMotion()
        const recorder = new SpyRecorder()
        const controller = new SurveillanceController(sensor, recorder)

        controller.recordMotion()

        expect(recorder.startCalled).toBeTruthy()
    })
})

class StubSensorDetectingNoMotion implements MotionSensor {
    isDetectedMotion(): boolean {
        return false;
    }
}

class StubSensorDetectingMotion implements MotionSensor {
    isDetectedMotion(): boolean {
        return true;
    }
}

class FakeRecorder implements  VideoRecorder {
    startRecording(): void {
        console.log("Start Recording")
    }

    stopRecording(): void {
        console.log("Stop Recording")
    }
}

class SpyRecorder implements  VideoRecorder {
    startCalled = false
    stopCalled = false

    startRecording(): void {
        this.startCalled = true
    }

    stopRecording(): void {
        this.stopCalled = true
    }

}
