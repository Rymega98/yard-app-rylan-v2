import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';
import { TrailerService } from './yard.service';

export const authGuard: CanActivateFn = (route) => {
const service = inject(TrailerService);
const router = inject(Router);

const platformId = inject(PLATFORM_ID);
const target = route.routeConfig?.path;
const lastPage = service.getLastPage();

if (
(lastPage === 'gate' && target === 'dock') ||
(lastPage === 'dock' && target === 'gate')) {
return router.createUrlTree(['/board']);}

if (!isPlatformBrowser(platformId)) {
return true;}
const role = localStorage.getItem('role');
if (role) {
return true;}
return router.createUrlTree(['/signin']);};