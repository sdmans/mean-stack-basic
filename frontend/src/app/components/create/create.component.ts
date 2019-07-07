import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IssueService } from '../../services/issue.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(
    private issueService: IssueService, 
    private fb: FormBuilder, 
    private router: Router
    ) { 
      this.createForm = this.fb.group({
        title: ['', Validators.required],//Specifies that title is a required field in the form
        responsible: '',
        description: '',
        severity: ''
      });//Status not included because its default is set to open
    }

  ngOnInit() {
  }

  addIssue(title, responsible, description, severity) {
    this.issueService.addIssue(title, responsible, description, severity)
      .subscribe(() => {
        this.router.navigate(['/list']);
      });
  }

}
