import { Component } from '@angular/core';

@Component({
  selector: 'app-cardcode',
  templateUrl: './cardcode.component.html',
  styleUrls: ['./cardcode.component.scss']
})
export class CardcodeComponent {
code = ` 
<mat-card class="card-container">
    <mat-card-header>
      <mat-card-title ><p class="title">Code generated</p></mat-card-title>
      <mat-card-subtitle>
        <mat-chip-listbox class="chips-info" aria-label="code generated info">
        <mat-chip>Python</mat-chip>
        <mat-chip>Class</mat-chip>
      </mat-chip-listbox>
    </mat-card-subtitle>

    </mat-card-header>
    <mat-divider></mat-divider>

        <pre class="code-view"><code class="language-python">{{this.code}}</code></pre>

    
    <div class="cards-footer">
        
        <mat-divider></mat-divider>
        <mat-card-actions align="end">
            <button  mat-icon-button aria-label="Copy in clipboard icon button">
                <mat-icon>file_copy</mat-icon>
            </button>
            <button mat-icon-button aria-label="Save file icon button">
                <mat-icon>save_alt</mat-icon>
            </button>
        </mat-card-actions>
    </div>
  </mat-card>`

}
