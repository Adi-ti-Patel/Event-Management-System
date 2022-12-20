import { Time } from "@angular/common";

export class Talkdetails {
  public id: number = 0;
  public speakerId: number = 0;
  public title: string = '';
  public room: string = '';
  public description: string = '';
  public talkTime: string = '';
  public startTime?: Time;
 public endTime?: Time;
}
