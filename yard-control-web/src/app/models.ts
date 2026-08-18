export type Role = 'security' | 'dock';
export type AssetStatus = 'arriving' | 'loading' | 'ready' | 'departed';
export type CheckResult = 'pass' | 'fail' | 'unset';

export interface Trailer {
  id: string;
  trailerNumber: string;   // e.g. 'VT-48392'
  status: AssetStatus;
  spot: string;            // yard location, e.g. 'A-14'
  driver?: string;
  carrier?: string;
  loadRef?: string;        // BOL / load reference
  updatedAt: string;       // human readable, e.g. '12m ago'
  checklist?: ChecklistItem[];
}

export interface ChecklistItem {
  key: string;
  label: string;
  result: CheckResult;
  note?: string;
}