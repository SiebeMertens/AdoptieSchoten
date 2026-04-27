import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './features/home/home.component';
import { ContactComponent } from './features/contact/contact.component';
import { AdoptionProcedureComponent } from './features/adoption-procedure/adoption-procedure.component';
import { GodparentComponent } from './features/godparent/godparent.component';
import { SupportComponent } from './features/support/support.component';
import { TrooperComponent } from './features/trooper/trooper.component';
import { PhotosComponent } from './features/photos/photos.component';
import { TipsComponent } from './features/tips/tips.component';
import { StrayCatsComponent } from './features/stray-cats/stray-cats.component';
import { SterilizationComponent } from './features/sterilization/sterilization.component';
import { LinksComponent } from './features/links/links.component';
import { SponsorsComponent } from './features/sponsors/sponsors.component';
import { TaxCertificateComponent } from './features/tax-certificate/tax-certificate.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'adoption-procedure', component: AdoptionProcedureComponent },
      { path: 'godparent', component: GodparentComponent },
      { path: 'support', component: SupportComponent },
      { path: 'trooper', component: TrooperComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'tips', component: TipsComponent },
      { path: 'stray-cats', component: StrayCatsComponent },
      { path: 'sterilization', component: SterilizationComponent },
      { path: 'links', component: LinksComponent },
      { path: 'sponsors', component: SponsorsComponent },
      { path: 'tax-certificate', component: TaxCertificateComponent }
    ]
  }
];
