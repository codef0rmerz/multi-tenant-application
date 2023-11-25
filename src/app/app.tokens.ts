import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface Profile {
    client: string;
}

@Injectable({
    providedIn: 'root',
})
export class ProfileService {
    profile!: Profile;

    constructor(private http: HttpClient){}

    loadProfile(): Observable<any> {
        const profileUrl = `/assets/${window.location.hostname}/profile.json`;

        return this.http.get<Profile>(profileUrl).pipe(
            tap((profile) => this.profile = profile),
        );
    }
}