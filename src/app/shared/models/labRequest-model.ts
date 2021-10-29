/**
 *
 *
 * @export
 * @interface LabResult
 */
export interface LabResult {
  sl: number;
  date: Date;
  userName: string;
  testNumber: string;
  results: string;
  disposition: string;
  partNumber: string;
  processNumber: string;
  specNumber: string;
  LabRequestId: number;
}