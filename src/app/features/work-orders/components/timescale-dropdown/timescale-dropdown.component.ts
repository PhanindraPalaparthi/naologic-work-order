import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ElementRef,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-timescale-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timescale-dropdown.component.html',
  styleUrl: './timescale-dropdown.component.scss',
})
export class TimescaleDropdownComponent {
  private readonly elementRef = inject(ElementRef);

  @Input() options: string[] = ['Hour', 'Day', 'Week', 'Month'];
  @Input() selected = 'Month';
  @Output() selectedChange = new EventEmitter<string>();

  open = false;

  toggle(): void {
    this.open = !this.open;
  }

  close(): void {
    this.open = false;
  }

  select(opt: string): void {
    this.selected = opt;
    this.selectedChange.emit(opt);
    this.close();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const el = this.elementRef.nativeElement as HTMLElement;
    if (this.open && !el.contains(event.target as Node)) {
      this.close();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
