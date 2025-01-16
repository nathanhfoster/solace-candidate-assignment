import { ReactNode } from "react";

export type RowDataKey = string | number;

export type RowData<T = Record<RowDataKey, any>> = T;

export interface ColumnConfig<O extends object = any> {
  key: keyof O;
  render?: (rowData: O, index: number, data: RowData<any>[]) => ReactNode;
  title: string;
  width?: string | number;
}

export interface TableProps {
  data: RowData[];
  config: ColumnConfig[];
}
