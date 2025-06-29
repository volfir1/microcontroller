export function useFanControl() {
  function turnFan(on) {
    if (on) {
      console.log("[FAN] Fan turned ON via relay");
      // Add GPIO/HTTP/WebSocket trigger here
    } else {
      console.log("[FAN] Fan turned OFF via relay");
    }
  }

  return { turnFan };
}
