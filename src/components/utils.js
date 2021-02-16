export const getGeoLocation = async (
  success,
  error,
  options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  }
) => {
  await navigator.geolocation.getCurrentPosition(success, error, options);
};
