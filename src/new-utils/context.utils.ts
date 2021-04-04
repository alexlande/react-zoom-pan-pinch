import { ReactZoomPanPinchContext } from "../new-models/context.model";

export const initialState = {
  wrapperComponent: null,
  contentComponent: null,
  previousScale: 1,
  scale: 1,
  positionX: 0,
  positionY: 0,
  options: {
    disabled: false,
    transformEnabled: true,
    minPositionX: null,
    maxPositionX: null,
    minPositionY: null,
    maxPositionY: null,
    minScale: 1,
    maxScale: 8,
    limitToBounds: true,
    limitToWrapper: false,
    centerContent: true,
    wrapperClass: "",
    contentClass: "",
  },
  wheel: {
    disabled: false,
    step: 5,
    wheelEnabled: true,
    touchPadEnabled: true,
    limitsOnWheel: false,
  },
  pan: {
    disabled: false,
    panAnimationType: "linear",
    lockAxisX: false,
    lockAxisY: false,
    velocity: true,
    velocityEqualToMove: true,
    velocitySensitivity: 2,
    velocityActiveScale: 1,
    velocityMinSpeed: 1,
    velocityBaseTime: 1600,
    velocityAnimationType: "easeOutQuart",
    padding: true,
    paddingSize: 30,
    panReturnAnimationTime: 400,
    panReturnAnimationType: "easeOut",
    disableOnTarget: [],
  },
  pinch: {
    disabled: false,
  },
  zoomIn: {
    disabled: false,
    step: 20,
    animation: true,
    animationType: "easeOut",
    animationTime: 200,
  },
  zoomOut: {
    disabled: false,
    step: 20,
    animation: true,
    animationType: "easeOut",
    animationTime: 200,
  },
  doubleClick: {
    disabled: false,
    step: 20,
    mode: "zoomIn",
    animation: true,
    animationType: "easeOut",
    animationTime: 200,
  },
  reset: {
    disabled: false,
    animation: true,
    animationType: "easeOut",
    animationTime: 200,
  },
  scalePadding: {
    disabled: false,
    size: 0.2,
    animationTime: 200,
    animationType: "easeOut",
  },
};

export const contextInitialState = {
  state: initialState,
  setScale: () => undefined,
  setPositionX: () => undefined,
  setPositionY: () => undefined,
  zoomIn: () => undefined,
  zoomOut: () => undefined,
  setTransform: () => undefined,
  resetTransform: () => undefined,
  setDefaultState: () => undefined,
};

export const getContext = (): ReactZoomPanPinchContext => {
  return {};
};
