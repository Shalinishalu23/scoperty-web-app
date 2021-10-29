import { Injectable } from '@angular/core';

/**
 *
 *
 * @export
 * @class GlobalVariableService
 */
@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {

  _beingWorkedBy: any;
  _priority: any;
  _inputFrom: any;
  _productCategory: any;
  _programModel: any;
  _teamId: any;
  _task: any;
  _status: any;
  _scheduledDays: any;
  _answerComScore: any;
  _answerDataScore: any;
  _investigationType: any;
  _wpiActive: any;

  /**
   * Creates an instance of GlobalVariableService.
   * @memberof GlobalVariableService
   */
  constructor() { }

  //Setter/Getter

  /**
   *
   *
   * @param {object} val
   * @memberof GlobalVariableService
   */
  setBeingWorkedByDD(val: object){ 
    this._beingWorkedBy = val; 
    localStorage.setItem("beingWorkedByDD", JSON.stringify(this._beingWorkedBy));
  }

  getBeingWorkedByDD(){ 
    this._beingWorkedBy = localStorage.getItem("beingWorkedByDD"); 
    return JSON.parse(this._beingWorkedBy);
  }

  setPriorityDD(val: object){ 
    this._priority = val; 
    localStorage.setItem("priorityDD", JSON.stringify(this._priority));
  }
  getPriorityDD(){ 
    this._priority = localStorage.getItem("priorityDD"); 
    return JSON.parse(this._priority); 
  }

  setInputFromDD(val: object){ 
    this._inputFrom = val; 
    localStorage.setItem("inputFromDD", JSON.stringify(this._inputFrom));
  }
  getInputFromDD(){ 
    this._inputFrom = localStorage.getItem("inputFromDD"); 
    return JSON.parse(this._inputFrom); 
  }

  setProductCategoryDD(val: object){ 
    this._productCategory = val; 
    localStorage.setItem("productCategoryDD", JSON.stringify(this._productCategory));
  }
  getProductCategoryDD(){ 
    this._productCategory = localStorage.getItem("productCategoryDD"); 
    return JSON.parse(this._productCategory); 
  }

  setProgramModelDD(val: object){ 
    this._programModel = val; 
    localStorage.setItem("programModelDD", JSON.stringify(this._programModel));
  }
  getProgramModelDD(){ 
    this._programModel = localStorage.getItem("programModelDD"); 
    return JSON.parse(this._programModel); 
  }

  setTeamIdDD(val: object){ 
    this._teamId = val; 
    localStorage.setItem("teamIdDD", JSON.stringify(this._teamId));
  }
  getTeamIdDD(){ 
    this._teamId = localStorage.getItem("teamIdDD"); 
    return JSON.parse(this._teamId); 
   }

  setTaskDD(val: object){ 
    this._task = val; 
    localStorage.setItem("taskDD", JSON.stringify(this._task));
  }
  getTaskDD(){ 
    this._task = localStorage.getItem("taskDD"); 
    return JSON.parse(this._task); 
  } 

  setStatusDD(val: object){ 
    this._status = val; 
    localStorage.setItem("statusDD", JSON.stringify(this._status));
  }
  getStatusDD(){ 
    this._status = localStorage.getItem("statusDD"); 
    return JSON.parse(this._status); 
   }

  setScheduledDaysDD(val: object){ 
    this._scheduledDays = val; 
    localStorage.setItem("scheduledDaysDD", JSON.stringify(this._scheduledDays));
  }
  getScheduledDaysDD(){ 
    this._scheduledDays = localStorage.getItem("scheduledDaysDD"); 
    return JSON.parse(this._scheduledDays); 
  }

  setAnsComScoreDD(val: object){ 
    this._answerComScore = val; 
    localStorage.setItem("ansComScoreDD", JSON.stringify(this._answerComScore));
  }
  getAnsComScoreDD(){ 
    this._answerComScore = localStorage.getItem("ansComScoreDD"); 
    return JSON.parse(this._answerComScore); 
   }

  setAnsDataScoreDD(val: object){ 
    this._answerDataScore = val; 
    localStorage.setItem("ansDataScoreDD", JSON.stringify(this._answerDataScore));
  }
  getAnsDataScoreDD(){ 
    this._answerDataScore = localStorage.getItem("ansDataScoreDD"); 
    return JSON.parse(this._answerDataScore); 
  }

  setInvestigationTypeDD(val: object){ 
    this._investigationType = val; 
    localStorage.setItem("investigationTypeDD", JSON.stringify(this._investigationType));
  }
  getInvestigationTypeDD(){ 
    this._investigationType = localStorage.getItem("investigationTypeDD"); 
    return JSON.parse(this._investigationType); 
  }
  
  setWpiActiveDD(val: object){ 
    this._wpiActive = val; 
    localStorage.setItem("wpiActiveDD", JSON.stringify(this._wpiActive));
  }
  getWpiActiveDD(){ 
    this._wpiActive = localStorage.getItem("wpiActiveDD"); 
    return JSON.parse(this._wpiActive); 
  }

}
