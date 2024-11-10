
export function useDate() {
    const today = new Date().toLocaleDateString("en-us", {
  
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
  
  });
    return `${today}`;
  }