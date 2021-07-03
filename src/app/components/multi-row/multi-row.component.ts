import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { FieldArrayType, FormlyField, FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'formly-multi-row',
  templateUrl: './multi-row.component.html',
  styleUrls: ['./multi-row.component.scss']
})
export class MultiRowComponent extends FieldArrayType implements AfterContentInit {
  //Modal button references
  @ViewChild('closeModal') closeModal: any;
  @ViewChild('openModal') openModal: any;

  //UI string defaults
  addButton: string = 'Add Row';
  editButton: string = 'Edit';
  deleteButton: string = 'Delete';

  mdl = {};
  modalForm = new FormGroup({});
  options: FormlyFormOptions = {};
  singleField: FormlyFieldConfig[] = [];
  index: number = -1;

  constructor() {
    super();
  }

  ngAfterContentInit() {
    this.singleField = JSON.parse(JSON.stringify(this.field.fieldArray?.fieldGroup));
  }

  onSave(model: any) {
    if (this.modalForm.invalid) {
      console.log('Please enter required fields');
      return;
    }

    if (this.index == -1) {
      this.add(undefined, this.modalForm.value);
    } else {
      this.model[this.index] = this.modalForm.value;
    }
    this.close();
  }

  close() {
    this.closeModal.nativeElement.click();
    this.mdl = {};
    this.index = -1;
    this.modalForm.markAsUntouched();
  }

  edit(index: number) {
    //Clone the model and edit it.
    var model = JSON.parse(JSON.stringify(this.model));
    this.index = index;
    this.mdl = model[index];
    this.openModal.nativeElement.click();
  }
}
