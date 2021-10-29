import { DatePipe, DOCUMENT } from '@angular/common';
import { Component, Input, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { UtilityService } from 'src/app/services/utility.service';

/**
 *
 *
 * @export
 * @class AddLabworkComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-add-labwork',
  templateUrl: './add-labwork.component.html',
  styleUrls: ['./add-labwork.component.scss'],
  providers: [DatePipe],
})
export class AddLabworkComponent implements OnInit {
  @Input() editForm: any;
  @Input() editRowData: any;
  @Input() labResults: any;
  labResultList: any;
  // @Input() requestedBy:any;
  labWorkForm: FormGroup;
  displaySpinner: boolean = false;
  error: string;
  requestedBy: any;
  priority: any;
  update: any;
  engineer: any;
  technician: any;
  labRequestedID: any;
  jobCategoryId: any;
  parts: any;
  labRequestDropdowns = [
    'getRequestedBy',
    'getPriority',
    'getEngineer',
    'getTechnicians',
    'getJobCategoryId',
    'getParts',
  ];
  isDisabledBtn: boolean = true;
  getAllRecords: any;
  validationErrMsg: string = 'Please fill all mandatory fields';
  labresults: any;
  selectedItem: string;

  /**
   * Creates an instance of AddLabworkComponent.
   * @param {FormBuilder} fb
   * @param {UtilityService} utilityService
   * @param {DatePipe} datePipe
   * @memberof AddLabworkComponent
   */
  constructor(
    public fb: FormBuilder,
    public utilityService: UtilityService,
    public datePipe: DatePipe,
    public router: Router,
    @Inject(DOCUMENT) private document: Document

  ) {}

  /**
   *
   *
   * @memberof AddLabworkComponent
   */
  ngOnInit(): void {
    this.labRequestDropdowns.forEach((item) => {
      this.getDropdownData(item);
    });
    this.createFormBuilder();
  }

  /**
   *
   *
   * @memberof AddLabworkComponent
   */
  createFormBuilder() {
    if (this.editForm) {
      this.labRequestedID = this.editRowData.Id;
      this.labResultList = this.editRowData.LabResultsList;
    }

    this.labWorkForm = this.fb.group({
      FromDepartment: [
        this.editRowData ? this.editRowData.FromDepartment : '',
        [Validators.required],
      ],
      RequestedById: [
        this.editRowData ? this.editRowData.RequestedById : null,
        [Validators.required],
      ],
      Telephone: [
        this.editRowData ? this.editRowData.Telephone : '',
        [Validators.required],
      ],
      Priority: this.editRowData ? this.editRowData.Priority : null,
      // Update: this.editRowData ? this.editRowData.Update : '',
      WoNumber: [
        this.editRowData ? this.editRowData.WoNumber : '',
        [Validators.required],
      ],
      DateReceived: [
        this.editRowData ? this.editRowData.DateReceived : '',
        Validators.required,
      ],
      StartDate: [
        this.editRowData ? this.editRowData.StartDate : '',
        Validators.required,
      ],
      RequestedByDate: [
        this.editRowData ? this.editRowData.RequestedByDate : '',
        Validators.required,
      ],
      PartNumber: this.editRowData ? this.editRowData.PartNumber : '',
      PartName: this.editRowData ? this.editRowData.PartName : '',

      PmpSpec: this.editRowData ? this.editRowData.PmpSpec : '',
      LotServiceNumber: this.editRowData
        ? this.editRowData.LotServiceNumber
        : '',
      Quantity: this.editRowData ? this.editRowData.Quantity : null,
      DateCompleted: [
        this.editRowData ? this.editRowData.DateCompleted : '',
        Validators.required,
      ],
      JobCategoryId: [this.editRowData ? this.editRowData.JobCategoryId : null],
      LabEngineerId: [
        this.editRowData ? this.editRowData.LabEngineerId : null,
        Validators.required,
      ],
      LabTechnicianId: [
        this.editRowData ? this.editRowData.LabTechnicianId : null,
        [Validators.required],
      ],
      JobDescription: [this.editRowData ? this.editRowData.JobDescription : ''],
      Comments: [this.editRowData ? this.editRowData.Comments : ''],
      PartId: [this.editRowData ? this.editRowData.PartId : null],
      LabResultsList: [this.editRowData ? this.editRowData.LabResultsList : []],
    });
  }

  /**
   *
   *
   * @param {*} type
   * @memberof AddLabworkComponent
   */
  getDropdownData(type) {
    this.displaySpinner = true;
    this.utilityService.getResponse(type).subscribe(
      (res) => {
        this.displaySpinner = false;
        switch (type) {
          case 'getRequestedBy': {
            this.requestedBy = res.body['Data'];
            break;
          }
          case 'getPriority': {
            this.priority = res.body['Data'];
            break;
          }
          case 'getEngineer': {
            this.engineer = res.body['Data'];
            break;
          }
          case 'getTechnicians': {
            this.technician = res.body['Data'];
            break;
          }
          case 'getJobCategoryId': {
            this.jobCategoryId = res.body['Data'];
            break;
          }
          case 'getParts': {
            this.parts = res.body['Data'];
            break;
          }

          default: {
            break;
          }
        }
      },
      (error) => {
        this.displaySpinner = false;
        this.error = error.statusText;
      }
    );
  }

  /**
   *
   *
   * @memberof AddLabworkComponent
   */
  addLabRequest() {
    const newData = this.labWorkForm.value;
    newData.DateReceived = this.datePipe.transform(
      newData.DateReceived,
      'yyyy-MM-dd'
    );
    newData.StartDate = this.datePipe.transform(
      newData.StartDate,
      'yyyy-MM-dd'
    );

    newData.RequestedByDate = this.datePipe.transform(
      newData.RequestedByDate,
      'yyyy-MM-dd'
    );
    newData.DateCompleted = this.datePipe.transform(
      newData.DateCompleted,
      'yyyy-MM-dd'
    );

    if (this.labresults) {
      this.labresults.forEach((element) => {
        let obj = {
          DateTime: element.date,
          UserName: element.userName,
          TestNumber: element.testNumber,
          Results: element.results,
          Disposition: element.disposition,
          PartNumber: element.partNumber,
          ProcessNumber: element.processNumber,
          SpecNumber: element.specNumber,
          LabRequestId: this.editForm ? this.editRowData.Id : null,
        };
        newData.LabResultsList.push(obj);
      });
    }

    if (this.labWorkForm.valid) {
      //Form Valid. Calling Save API
      let api, successMsg;
      if (this.labRequestedID) {
        newData.Id = this.labRequestedID;
        api = this.utilityService.updateRequest(
          this.labWorkForm.value,
          this.labRequestedID,
          'updateLabRequest'
        );
        successMsg = 'You have updated for Lab work ID :' + this.labRequestedID;
      } else {
        // api = this.labWorksService.addLabRequest(this.labWorkForm.value);
        api = this.utilityService.addRequest(
          this.labWorkForm.value,
          'addLabRequest'
        );
      }
      this.displaySpinner = true;
      api.subscribe(
        (res) => {
          this.displaySpinner = false;
          if (!this.labRequestedID) {
            successMsg = 'You have created Lab Request ID :' + res['Data'].Id;
          }
          this.labRequestedID = res['Id'];
          this.getAllLabRequests();
          this.removeValidators(this.labWorkForm);
          this.isDisabledBtn = false;
          this.utilityService.displayAlert('success', successMsg);
          this.changeLocation(successMsg);
         // if (this.editForm) {
            // this.document.location.reload();
         // }
        },
        (error) => {
          this.displaySpinner = false;
          this.error = error.statusText;
          this.utilityService.displayAlert('error', this.error);
        }
      );
    } else {
      //Form Not Valid.
      this.utilityService.displayAlert('error', this.validationErrMsg);
    }
  }

  changeLocation(msg) {
    this.displaySpinner = true;
      // save current route first
      const currentRoute = this.router.url;
  
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([currentRoute]); // navigate to same route
          this.displaySpinner = false;
      }); 
      setTimeout(() => {
        this.utilityService.displayAlert('success', msg);
      }, 500);
    }

  /**
   *
   *
   * @memberof AddLabworkComponent
   */
  convertToPDF() {
    // window.print();
    var data = document.getElementById('contentToConvert');
    html2canvas(data, { height: 1000 }).then((canvas) => {
      var imgWidth = 208;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('LabRequestId_' + this.labRequestedID + '.pdf'); // Generated PDF
    });
  }

  /**
   *
   *
   * @memberof AddLabworkComponent
   */
  getAllLabRequests() {
    this.displaySpinner = true;
    this.utilityService.getResponse('getAllLabRequest').subscribe(
      (res) => {
        this.displaySpinner = false;
        this.getAllRecords = res.body['Data'];
      },
      (error) => {
        this.displaySpinner = false;
        this.error = error.statusText;
      }
    );
  }

  /**
   *
   *
   * @param {*} type
   * @memberof AddLabworkComponent
   */
  removeValidators(type) {
    this.utilityService.removeValidators(type);
  }

  /**
   *
   *
   * @param {*} event
   * @memberof AddLabworkComponent
   */
  receiveMessage(event) {
    this.labWorkForm.value.LabResultsList = [];
    this.labresults = event;
  }
}
