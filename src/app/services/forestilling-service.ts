import { inject, Service, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Forestilling } from '../models/forestilling.model';

@Service()
export class ForestillingService
{
  private readonly apiUrl = `${environment.apiUrl}/Forestillinger`;

  private http = inject(HttpClient);

  private readonly forestillinger = signal<Forestilling[]>([]);
  readonly readonlyForestillinger = this.forestillinger.asReadonly();

  private readonly loading = signal(false);
  readonly readonlyLoading = this.loading.asReadonly();

  private readonly error = signal<string | null>(null);
  readonly readonlyError = this.error.asReadonly();

  loadAll(): void {
    this.loading.set(true);
    this.error.set(null);

    this.http.get<Forestilling[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.forestillinger.set(data);
        this.loading.set(false);
      },

      error: (err: HttpErrorResponse) => {
        this.error.set(this.toMessage(err));
        this.loading.set(false);
      },
    });
  }

  private toMessage(err: HttpErrorResponse): string {
    if (err.status === 0) {
      return 'Fejl: Kunne ikke forbinde til serveren.';
    }

    if (err.status === 404) {
      return 'Forestillingen findes ikke.';
    }

    if (err.status >= 500) {
      return 'Serverfejl. Prøv igen senere.';
    }

    return `Der opstod en ukendt fejl (${err.status}).`;
  }
}
