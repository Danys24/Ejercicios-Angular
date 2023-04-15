export enum Levels{
  "Info"= "info",
  "Urgent"= "urgent",
  "Blocking"= "blocking"
}

export interface Task{
  title: string;
  description?: string;
  completed: boolean;
  level:Levels;
}
