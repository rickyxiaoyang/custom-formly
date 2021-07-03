import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'custom-formly';

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
      },
    },
    {
      key: 'shipping_address',
      fieldGroup: [
        {
          key: 'add',
          type: 'address',
          templateOptions: {
            title: 'Shipping Address',
          },
        },
      ],
    },
    {
      key: 'billing_address',
      fieldGroup: [
        {
          key: 'add',
          type: 'address',
          templateOptions: {
            title: 'Billing Address',
          },
        },
      ],
    },
    {
      key: 'multi-row-example',
      type: 'multi-row',
      fieldArray: {
        fieldGroup: [
          {
            key: 'first_name',
            type: 'input',
            templateOptions: {
              label: 'First Name',
            },
          },
          {
            key: 'last_name',
            type: 'input',
            templateOptions: {
              label: 'Last Name',
            },
          },
        ],
      },
    },
  ];

  onSubmit() {
    alert(JSON.stringify(this.model));
    console.log(this.model);
  }
}
