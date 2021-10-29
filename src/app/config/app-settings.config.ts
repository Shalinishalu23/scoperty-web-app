import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
/**
 *
 *
 * @export
 * @class Configuration
 */
@Injectable()
export class Configuration {
  // workOrderId = sessionStorage.getItem("id");

  //login
  public login = environment.baseUrl + 'account/login'

  //common dropdown
  // public getPriority = environment.baseUrl + 'workload/getpriorities';
  public getPriority = environment.baseUrl + 'common/getpriorities';
  public getInputFrom = environment.baseUrl + 'common/getinputfrom'; // not working

  // Main expand work load api's for dropdown
  public getBeingWorkBy = environment.baseUrl + 'common/getworkby'; // not mention that moved to common
  public getScheduledays = environment.baseUrl + 'workload/getscheduledays';
  public getTeamID = environment.baseUrl + 'workload/getteamids';
  public getProductCategory =
    environment.baseUrl + 'common/getproductcategories';
  public getProgramModel = environment.baseUrl + 'common/getprogram';
  public getTask = environment.baseUrl + 'workload/gettasklist';
  public getStatus = environment.baseUrl + 'common/getstatuses';
  public getAnsComScore = environment.baseUrl + 'workload/getaacs';
  public getAnsDataScore = environment.baseUrl + 'workload/getads';
  // public addMainExpandedForm = environment.baseUrl + 'workload/postworkload/';
  public addmainexpand = environment.baseUrl + 'workload/postworkload/';
  public getmainexpand = environment.baseUrl + 'workload/getallworkload';
  public deletemainexpand = environment.baseUrl + 'workload/deleteworkload/';
  public updatemainexpand = environment.baseUrl + 'workload/putworkload/';

  // lab works
  public getRequestedBy = environment.baseUrl + 'labrequest/getrequestby';
  public getEngineer = environment.baseUrl + 'labrequest/getengineers';
  public getTechnicians = environment.baseUrl + 'labrequest/gettechnicians';
  public getJobCategoryId =
    environment.baseUrl + 'labrequest/getrequestjobcategories';
  public getParts = environment.baseUrl + 'labrequest/getrequestparts';
  public getAllLabRequest = environment.baseUrl + 'labrequest/getlabrequests';
  public addLabRequest = environment.baseUrl + 'labrequest/postlabrequest';
  public updateLabRequest = environment.baseUrl + 'labrequest/putlabrequest/';
  public deleteLabRequest =
    environment.baseUrl + 'labrequest/deletelabrequest/';

  //Drawing Review Form
  public adddrawingreview =
    environment.baseUrl + 'drawingreview/postdrawingreview/';
  public getdrawingreview =
    environment.baseUrl + 'drawingreview/getalldrawingreview';
  public deletedrawingreview =
    environment.baseUrl + 'drawingreview/deletedrawingreview/';
  public updatedrawingreview =
    environment.baseUrl + 'drawingreview/putdrawingReview/';

  //Failure Form
  public addfailureanalysis = environment.baseUrl + 'failureanalysis/postfailureanalysis/';
  public getfailureanalysis = environment.baseUrl + 'failureanalysis/getallfailureanalysis';
  public deletefailureanalysis =
    environment.baseUrl + 'failureanalysis/deletefailureanalysis/';
  public updatefailureanalysis = environment.baseUrl + 'failureanalysis/putfailureanalysis/';

  //Metallic Design Form
  public addmetallicdesign =
    environment.baseUrl + 'metallicdesignlimits/postmetallicdesign/';
  public getmetallicdesign =
    environment.baseUrl + 'metallicdesignlimits/getallmetallicdesign';
  public deletemetallicdesign =
    environment.baseUrl + 'metallicdesignlimits/deletemetallicdesign/';
  public updatemetallicdesign =
    environment.baseUrl + 'metallicdesignlimits/putmetallicdesign/';

  //design review Design Form
  public adddesignreview =
    environment.baseUrl + 'designreview/postdesignreview/';
  public getdesignreview =
    environment.baseUrl + 'designreview/getalldesignreview';
  public deletedesignreview =
    environment.baseUrl + 'designreview/deletedesignreview/';
  public updatedesignreview =
    environment.baseUrl + 'designreview/putdesignReview/';

  //component specification review Design Form
  public addcomponentspecific = environment.baseUrl + 'componentspecific/postcomponentspecific/';
  public getcomponentspecific =
    environment.baseUrl + 'componentspecific/getallcomponentspecific';
  public deletecomponentspecific =
    environment.baseUrl + 'componentspecific/deletecomponentspecific/';
  public updatecomponentspecific =
    environment.baseUrl + 'componentspecific/putcomponentspecific/';

  //Supplier request Design Form
  public addsupplierrequest = environment.baseUrl + 'sri/postsri/';
  public getsupplierrequest = environment.baseUrl + 'sri/getallsri';
  public deletesupplierrequest = environment.baseUrl + 'sri/deletesri/';
  public updatesupplierrequest = environment.baseUrl + 'sri/putsri/';

  // tools specification
  public addspecification = environment.baseUrl + 'workload/postworkload/';
  public getspecification = environment.baseUrl + 'workload/getallworkload';
  public deletespecification = environment.baseUrl + 'workload/deleteworkload/';
  public updatespecification = environment.baseUrl + 'workload/putworkload/';

  // turnbacks
  public addturnbacks = environment.baseUrl + 'workload/postworkload/';
  public getturnbacks = environment.baseUrl + 'workload/getallworkload';
  public deleteturnbacks = environment.baseUrl + 'workload/deleteworkload/';
  public updateturnbacks = environment.baseUrl + 'workload/putworkload/';

  // heatexchange
  public addheatexchange =
    environment.baseUrl + 'heatexchanger/postheatexchanger/';
  public getheatexchange =
    environment.baseUrl + 'heatexchanger/getallheatexchanger';
  public deleteheatexchange =
    environment.baseUrl + 'heatexchanger/deleteheatexchanger/';
  public updateheatexchange =
    environment.baseUrl + 'heatexchanger/putheatexchanger/';

  // UTRC
  public addutrc = environment.baseUrl + 'workload/postworkload/';
  public getutrc = environment.baseUrl + 'workload/getallworkload';
  public deleteutrc = environment.baseUrl + 'workload/deleteworkload/';
  public updateutrc = environment.baseUrl + 'workload/putworkload/';

  // memos
  public addmemos = environment.baseUrl + 'workload/postworkload/';
  public getmemos = environment.baseUrl + 'workload/getallworkload';
  public deletememos = environment.baseUrl + 'workload/deleteworkload/';
  public updatememos = environment.baseUrl + 'workload/putworkload/';

  // Lab work request
  public addlwr = environment.baseUrl + 'workload/postworkload/';
  public getlwr = environment.baseUrl + 'workload/getallworkload';
  public deletelwr = environment.baseUrl + 'workload/deleteworkload/';
  public updatelwr = environment.baseUrl + 'workload/putworkload/';

  // Micro request
  public addmicro = environment.baseUrl + 'workload/postworkload/';
  public getmicro = environment.baseUrl + 'workload/getallworkload';
  public deletemicro = environment.baseUrl + 'workload/deleteworkload/';
  public updatemicro = environment.baseUrl + 'workload/putworkload/';

  // POC request
  public addpoc = environment.baseUrl + 'workload/postworkload/';
  public getpoc = environment.baseUrl + 'workload/getallworkload';
  public deletepoc = environment.baseUrl + 'workload/deleteworkload/';
  public updatepoc = environment.baseUrl + 'workload/putworkload/';
}
