import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { TitleComponent } from "../../../shared/title/title.component";
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/req-response';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  private route = inject(ActivatedRoute);
  private userServices = inject(UsersService);
  // public user = signal<User | undefined>(undefined);

  public user = toSignal<User>(
    this.route.params.pipe(
      switchMap( ({id}) => this.userServices.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) return `Información del usuario: ${this.user()!.first_name} ${this.user()!.last_name}`;

    return `Información del usuario: ...`;
  });

  // constructor() {
  //   this.route.params.subscribe(params => {
  //     console.log(params);
  //   });
  // }
}
