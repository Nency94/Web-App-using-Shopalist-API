import { Component, OnInit, Input, Inject } from '@angular/core';
import { ImageModalComponent } from '../image-model/image-model.component';
import { MatDialog, MatDialogRef } from '@angular/material';

import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  // host: { '(window:scroll)': 'track($event)' }
})
export class ProductListComponent {
  @Input() list = [];
  closeResult: string;

  view: any = 'grid';
  constructor(private matDialog: MatDialog,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() { }

  ScrollToTop() {
    window.scrollTo(0, 0);
  }

  open(content) {

    const dialogRef = this.matDialog.open(ImageModalComponent, {
      maxWidth: "750px",
      width: "100%",
      data: content,
    });
    dialogRef.afterClosed().subscribe((data) => {
    });
  }

}
