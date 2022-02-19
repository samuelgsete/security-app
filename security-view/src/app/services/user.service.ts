import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class UserService {

    private readonly resource = "user";

    public constructor(private readonly http: HttpClient) {}

    public getUser(): Observable<any> {

        return this.http.get(environment.urlBase.concat(this.resource), {responseType: 'text'});
    }
}