export interface eventConfig {
  eventTitle: string;
  eventItems: eventItems[];
}

export interface eventItems {
  eventName: string,
  desc: string,
  param: string,
  paramType: string,
}