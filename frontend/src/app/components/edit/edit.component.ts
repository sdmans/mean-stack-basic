import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';

import { IssueService } from '../../services/issue.service';
import { Issue } from '../../shared/models/issue.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

id: string;
issue: any = {};
updateForm: FormGroup;

  constructor(
    private issueService: IssueService, 
    private router: Router, 
    private route: ActivatedRoute, 
    private snackBar: MatSnackBar,
    private fb: FormBuilder
    ) { 
      this.createForm();
    }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        this.id = params.id;
        this.issueService.getIssueById(this.id)
          .subscribe(res => {
            this.issue = res;//Res it the response from getIssueById which returns the retrieved individual object
            this.updateForm.get('title').setValue(this.issue.title);
            this.updateForm.get('responsible').setValue(this.issue.responsible);
            this.updateForm.get('description').setValue(this.issue.description);
            this.updateForm.get('severity').setValue(this.issue.severity);
            this.updateForm.get('status').setValue(this.issue.status);
          })

    })
  }

  createForm() {
    this.updateForm = this.fb.group({
      title: ['', Validators.required],//Specifies that title is a required field in the form
      responsible: '',
      description: '',
      severity: '',
      status:''
    });//Status not included because its default is set to open
  }

  updateIssue(title, responsible, description, severity, status) {
    this.issueService.updateIssue(this.id, title, responsible, description, severity, status)
      .subscribe(() => {
        this.snackBar.open('Issue updated successfully', 'OK', {
          duration: 3000
        });
      });
  }

}
