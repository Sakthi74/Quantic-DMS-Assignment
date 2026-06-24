import { RecordType } from "./Genraterecord";

//TS SYNTAX FOR CREATING OBJ
export type RecordType = {
  id: number;
  customer: string;
  Created_At: number;
};

//SET TO CREATE UNIQUE ID
const set = new Set();

//FUNCTION TO CREATE UNIQUE ID
export function uniqueId(): number {
  let id: number;
  do {
    id = Math.floor(Math.random() * 100000) + 1;
  } while (set.has(id));
  {
    set.add(id);
    return id;
  }
}

//FUNCTION TO CREATE AND PUSH RECORDS IN TO AN ARRAY
export function genrateRecords(count: number): RecordType[] {
  const arr: RecordType[] = [];

  for (let i = 0; i < count; i++) {
    arr.push({
      id: uniqueId(),
      customer: `Customer ${i}`,
      Created_At: Date.now() - i * 6000,
    });
  }

  return arr;
}
