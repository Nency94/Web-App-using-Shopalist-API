import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-image-model',
  templateUrl: './image-model.component.html',
  styleUrls: ['./image-model.component.scss']
})
export class ImageModalComponent implements OnInit {

  index: any = 0;
  constructor(
    private dialogRef: MatDialogRef<ImageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    console.log(this.data, 'images');
  }

  cancel() {
    this.dialogRef.close();
  }

  toggleImages(value) {
    if (value == 'back') {
      if (this.index == 0) {
        this.index = this.data.length - 1;
      } else {
        this.index--;
      }
    } else if (value == 'forward') {
      this.index++;
      this.index %= this.data.length;
    }
    console.log(this.index, 'index');

  }
}
