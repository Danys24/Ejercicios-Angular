export enum LEVELS{
  "INFO",
  "URGENT",
  "BLOCKING"
}


export interface Task{
  title: string;
  description: string;
  completed: boolean;
  level: LEVELS;
}
