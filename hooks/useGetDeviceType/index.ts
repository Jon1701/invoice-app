import { useState, useEffect, useCallback } from 'react';

import { breakpoints } from '@utils/breakpoints';

export enum DeviceTypes {
  Mobile = 'mobile',
  Tablet = 'tablet',
  Laptop = 'laptop',
  Desktop = 'desktop',
  TV = 'tv',
}

/**
 * Custom hook to get the device type.
 */
const useGetDeviceType = (): DeviceTypes | undefined => {
  // Tracks the current device type.
  const [deviceType, setDeviceType] = useState<DeviceTypes | undefined>(
    undefined
  );

  /**
   * Resize event handler function.
   */
  const handleResize = useCallback(() => {
    // Get viewport dimensions.
    const { innerWidth } = window;

    // Set the correct layout based on viewport dimensions.
    if (innerWidth <= breakpoints.mobile.max) {
      setDeviceType(DeviceTypes.Mobile);
    } else if (
      innerWidth >= breakpoints.tablet.min &&
      innerWidth <= breakpoints.tablet.max
    ) {
      setDeviceType(DeviceTypes.Tablet);
    } else if (
      innerWidth >= breakpoints.laptop.min &&
      innerWidth <= breakpoints.laptop.max
    ) {
      setDeviceType(DeviceTypes.Laptop);
    } else if (
      innerWidth >= breakpoints.desktop.min &&
      innerWidth <= breakpoints.desktop.max
    ) {
      setDeviceType(DeviceTypes.Desktop);
    } else if (innerWidth >= breakpoints.tv.min) {
      setDeviceType(DeviceTypes.TV);
    }
  }, [window.innerWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
};

export default useGetDeviceType;
