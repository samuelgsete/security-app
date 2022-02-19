import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { KeycloakAuthGuard, KeycloakService } from "keycloak-angular";

export class AuthGuard extends KeycloakAuthGuard {

    public constructor( 
        protected readonly router: Router,
        protected readonly keycloak: KeycloakService) 
    {
        super(router, keycloak);
    }

    public async isAccessAllowed(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Promise<boolean | UrlTree> 
    {
        if (!this.authenticated) {
            await this.keycloak.login({
                redirectUri: window.location.origin + state.url,
            });
        }
        return this.authenticated;
    }
}