import {
    SET_AUDIO_INPUT_DEVICE,
    SET_AUDIO_OUTPUT_DEVICE,
    SET_VIDEO_INPUT_DEVICE,
    UPDATE_DEVICE_LIST
} from './actionTypes';

/**
 * Signals to update the currently used audio input device.
 *
 * @param {string} deviceId - The id of the new audio input device.
 * @returns {{
 *      type: SET_AUDIO_INPUT_DEVICE,
 *      deviceId: string
 * }}
 */
export function setAudioInputDevice(deviceId) {
    return {
        type: SET_AUDIO_INPUT_DEVICE,
        deviceId
    };
}

/**
 * Signals to update the currently used audio output device.
 *
 * @param {string} deviceId - The id of the new audio ouput device.
 * @returns {{
 *      type: SET_AUDIO_OUTPUT_DEVICE,
 *      deviceId: string
 * }}
 */
export function setAudioOutputDevice(deviceId) {
    return {
        type: SET_AUDIO_OUTPUT_DEVICE,
        deviceId
    };
}

/**
 * Signals to update the currently used video input device.
 *
 * @param {string} deviceId - The id of the new video input device.
 * @returns {{
 *      type: SET_VIDEO_INPUT_DEVICE,
 *      deviceId: string
 * }}
 */
export function setVideoInputDevice(deviceId) {
    return {
        type: SET_VIDEO_INPUT_DEVICE,
        deviceId
    };
}

/**
 * Signals to update the list of known audio and video devices.
 *
 * @param {Array<MediaDeviceInfo>} devices - All known available audio input,
 * audio output, and video input devices.
 * @returns {{
 *      type: UPDATE_DEVICE_LIST,
 *      devices: Array<MediaDeviceInfo>
 * }}
 */
export function updateDeviceList(devices) {
    return {
        type: UPDATE_DEVICE_LIST,
        devices
    };
}
