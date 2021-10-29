/**
 *
 *
 * @export
 * @class mainExpandModel
 */
export class mainExpandModel {
  BeingWorkedBy: any;
  Priority: any;
  InputDate: any;
  ScheduleDays: any;
  WorkStartDate: any;
  TeamTaskID: any;
  CompleteDate: any;
  Requester: any;
  InputFrom: any;
  RequestedDueDate: any;
  ProductCategory: any;
  ProgramModelNumber: any;
  PartNumber: any;
  Task: any;
  Status: any;
  PartSerialNumber: any;
  JobDescription: any;
  WpiNumber: any;
  WpiActive: any;
  HoursWorked: any;
  AnswerCompletenessScore: any;
  AnswerDataScore: any;
  CommentsList: any;
}

/**
 *
 *
 * @export
 * @class failureAnalysisModel
 */
export class failureAnalysisModel {
  id: string;
  beingWorkedBy: string;
  RequestedBy: string;
  status: string;
  PartName: string;
  requestedDueDate: string;
  Telephone: string;
  ChargeNumber: string;
  Priority: number;
  DateStarted: string;
  RequestedByDate: string;
  DateCompleted: string;
  Engineer: string;
  Quantity: number;
}

/**
 *
 *
 * @export
 * @class drawingReviewModel
 */
export class drawingReviewModel {
  id: string;
  beingWorkedBy: string;
  RequestedBy: string;
  status: string;
  PartName: string;
  requestedDueDate: string;
  Telephone: string;
  ChargeNumber: string;
  Priority: number;
  DateStarted: string;
  RequestedByDate: string;
  DateCompleted: string;
  Engineer: string;
  Quantity: number;
}

/**
 *
 *
 * @export
 * @class metallicDesignModel
 */
export class metallicDesignModel {
  id: string;
  beingWorkedBy: string;
  RequestedBy: string;
  status: string;
  PartName: string;
  requestedDueDate: string;
  Telephone: string;
  ChargeNumber: string;
  Priority: number;
  DateStarted: string;
  RequestedByDate: string;
  DateCompleted: string;
  Engineer: string;
  Quantity: number;
}

/**
 *
 *
 * @export
 * @class DesignReviewModel
 */
export class DesignReviewModel {
  id: string;
  beingWorkedBy: string;
  RequestedBy: string;
  status: string;
  PartName: string;
  requestedDueDate: string;
  Telephone: string;
  ChargeNumber: string;
  Priority: number;
  DateStarted: string;
  RequestedByDate: string;
  DateCompleted: string;
  Engineer: string;
  Quantity: number;
}

/**
 *
 *
 * @export
 * @class supplierRequestModel
 */
export class supplierRequestModel {
  id: string;
  beingWorkedBy: string;
  RequestedBy: string;
  status: string;
  PartName: string;
  requestedDueDate: string;
  Telephone: string;
  ChargeNumber: string;
  Priority: number;
  DateStarted: string;
  RequestedByDate: string;
  DateCompleted: string;
  Engineer: string;
  Quantity: number;
}

/**
 *
 *
 * @export
 * @class componentSpecificModel
 */
export class componentSpecificModel {
  id: string;
  beingWorkedBy: string;
  RequestedBy: string;
  status: string;
  PartName: string;
  requestedDueDate: string;
  Telephone: string;
  ChargeNumber: string;
  Priority: number;
  DateStarted: string;
  RequestedByDate: string;
  DateCompleted: string;
  Engineer: string;
  Quantity: number;
}

/**
 *
 *
 * @export
 * @interface UserComment
 */
export interface UserComment {
  sl: number;
  date: Date;
  userName: string;
  comments: string;
}

// export interface UserTask {
//   sl: number;
//   component: string,
//   reviewType: string,
//   task: string,
//   supportedReview: string,
//   segment: string;
//   dateStart: Date;
//   dateEnd: Date;
//   dueDate: Date;
//   reviewDate: Date;
// }

export interface UserDesignReviewTask {
  sl: number;
  component: string;
  reviewType: string;
  task: string;
  supportedReview: string;
  segment: string;
  dateStart: Date;
  dateEnd: Date;
  dueDate: Date;
  reviewDate: Date;
}

export interface UserComponentTask {
  sl: number;
  segment: string;
  dateStart: Date;
  dateEnd: Date;
}

export interface UserHeatExchangeTask {
  sl: number;
  task: string;
  dateStart: Date;
  dateEnd: Date;
}

export interface UserDoc {
  sl: number;
  partNumber: string;
  docNote: string;
  MOCStatus: string;
  MOC: string;
  reviewedBy: string;
}
