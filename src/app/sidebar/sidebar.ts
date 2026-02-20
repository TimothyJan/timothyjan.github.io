import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  @ViewChild('sidebar') sidebarRef!: ElementRef;

  toggleSidebar() {
    const sidebar = this.sidebarRef.nativeElement;
    sidebar.classList.toggle('active');
  }
}
