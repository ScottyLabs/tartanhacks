
export enum ScheduleItemPlatform {
  IN_PERSON = "IN_PERSON",
  ZOOM = "ZOOM",
  HOPIN = "HOPIN",
  DISCORD = "DISCORD",
  YOUTUBE = "YOUTUBE",
  OTHER = "OTHER",
}


/**
 * Type for the ScheduleItem model
 */

export interface ScheduleItem {
  _id: string;
  event: string;
  name: string;
  description?: string;
  startTime: number;
  endTime: number;
  location: string;
  lat?: number;
  lng?: number;
  platform: ScheduleItemPlatform;
  platformUrl?: string;
  active: boolean;
  createdAt: Date;
  updatedAt?: Date;
}
