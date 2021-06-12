import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldType, FormlyFormOptions, FormlyFieldConfig, FormlyFormBuilder } from '@ngx-formly/core';
import { countries, states } from './data';

@Component({
  selector: 'custom-formly-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent extends FieldType implements OnInit {
  states = states;
  countries = countries;

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'country',
      type: 'select',
      templateOptions: {
        label: 'Country',
        options: countries.map(country => {
          return { label: country.name, value: country.code }
        })
      }
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-xs-12 col-md-8',
          key: 'address',
          type: 'input',
          templateOptions: {
            label: 'Address #1'
          }
        },
        {
          className: 'col-xs-12 col-md-4',
          key: 'address_2',
          type: 'input',
          templateOptions: {
            label: 'Address #2 (APT #, FL, etc...)'
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-xs-12 col-md-4',
          key: 'city',
          type: 'input',
          templateOptions: {
            label: 'City'
          }
        },
        {
          className: 'col-xs-12 col-md-4',
          key: 'state',
          type: 'select',
          templateOptions: {
            label: 'State',
            options: states.map(state => {
              return { label: state.name, value: state.abbreviation }
            })
          }
        },
        {
          className: 'col-xs-12 col-md-4',
          key: 'zip',
          type: 'input',
          templateOptions: {
            label: 'Zip Code',
          }
        }
      ]
    },

  ]

  constructor(private formlyBuilder: FormlyFormBuilder) {
    super();
  }
  ngOnInit(): void {
    console.log(this.form)
  }

}
