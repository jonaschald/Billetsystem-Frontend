import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ForestillingService } from '../../services/forestilling-service';

@Component({
  selector: 'app-forestillinger',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './forestillinger.html',
  styleUrl: './forestillinger.css',
})
export class Forestillinger implements OnInit {
  private forestillingService = inject(ForestillingService);

  readonly forestillinger = this.forestillingService.readonlyForestillinger;
  readonly loading = this.forestillingService.readonlyLoading;
  readonly error = this.forestillingService.readonlyError;

  ngOnInit(): void {
    this.forestillingService.loadAll();
  }
}
