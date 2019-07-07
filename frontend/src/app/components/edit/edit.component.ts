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

}
