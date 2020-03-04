import { Component, OnInit, Input } from '@angular/core';
import { OrganizationInfo } from '../../Model/Organizations/organizationInfo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { OrganizationService } from '../../Services/organization.service';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modal-for-org',
  templateUrl: './modal-for-org.component.html',
  styleUrls: ['./modal-for-org.component.css']
})
export class ModalForOrgComponent implements OnInit {

  @Input()
  organization: OrganizationInfo;
  organizationFormGroup: FormGroup;
  orgForm = [ '学校组织', '社会组织'];
  constructor(
    private fb: FormBuilder,
    private message: NzMessageService,
    private service: OrganizationService
  ) { }

  ngOnInit() {
    const $this = this;
    const organizerName = $this.organization === undefined || null ? null : $this.organization.organizerName;
    const from = $this.organization === undefined ? null : $this.organization.from;
    const description = $this.organization === undefined ? null : $this.organization.description;
    const contact = $this.organization === undefined ? null : $this.organization.contact;
    this.organizationFormGroup = this.fb.group({
      organizerName: [ organizerName, [Validators.required]],
      from: [ from, [Validators.required]],
      description: [ description, [Validators.required]],
      contact: [contact, [Validators.required]],
    });
  }
  submitForm(): Observable<boolean> {
    if (this.organizationFormGroup.valid) {
      const formValue =   this.organizationFormGroup.value;
      const parmas = new OrganizationInfo(
        this.organization === undefined ? 0 : this.organization.id,
        formValue.organizerName,
        null,
        formValue.from,
        null,
        formValue.description,
        formValue.contact,
        null,
        null,
        null
      );
      if (this.organization) {
        // 修改
        return this.service.modifyOrgInfo(parmas);
      } else {
        // 添加
        return this.service.addOrgInfo(parmas);
      }
    } else {
      this.message.create('error', '请按照要求填写');
      return of(false);
    }
  }
}
