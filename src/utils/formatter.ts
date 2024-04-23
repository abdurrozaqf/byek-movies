import { format } from "date-fns";

export const formatDate = (date: Date | string): string => {
  if (date !== "" && date !== undefined) {
    return format(new Date(date), "dd MMM, yyyy");
  } else {
    return "~";
  }
};

export const formatRuntime = (total_time: number): string => {
  if (total_time !== undefined) {
    const hours = Math.floor(total_time / 60);
    const minutes = total_time % 60;
    return `${hours}H, ${minutes}Min`;
  } else {
    return "~";
  }
};
