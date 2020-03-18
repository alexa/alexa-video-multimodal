/**
 * Events to be used to communicate between the device shim and the device emulator
 */
export const DeviceShimEvent = {
  ALEXA_LOAD_CONTENT: 'ALEXA_LOAD_CONTENT',
  ALEXA_PAUSE: 'ALEXA_PAUSE',
  ALEXA_RESUME: 'ALEXA_RESUME',
  ALEXA_SET_SEEK_POSITION: 'ALEXA_SET_SEEK_POSITION',
  ALEXA_ADJUST_SEEK_POSITION: 'ALEXA_ADJUST_SEEK_POSITION',
  ALEXA_CLOSED_CAPTIONS_STATE_CHANGE: 'ALEXA_CLOSED_CAPTIONS_STATE_CHANGE',
  ALEXA_PREPARE_FOR_CLOSE: 'ALEXA_PREPARE_FOR_CLOSE',
  ALEXA_NEXT: 'ALEXA_NEXT',
  ALEXA_PREVIOUS: 'ALEXA_PREVIOUS'
}