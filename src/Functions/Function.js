export const handleStartPause = (setIsActive,isActive) => {
    setIsActive(!isActive);
  };


  export const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };


  export const handleReset = (setIsActive,setTime) => {
    setIsActive(false);
    setTime(5 * 60);
  };


  export const logout =()=>{
    localStorage.clear()
    window.location.reload()
}
