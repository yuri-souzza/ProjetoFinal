import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

// 1) Importa dependências
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo
} from '@angular/fire/auth-guard';

// 2) Redirecionamentos

// Usuário não logado? Vai para login.
const toLogin = () => redirectUnauthorizedTo(['/galeria']);

// Usuário está logado? Vai para a página inicial.
const isLogged = () => redirectLoggedInTo(['/homepage']);

const routes: Routes = [

  // Rota para a página inicial
  {
    path: '',
    redirectTo: 'galeria',
    pathMatch: 'full'
  },

  {
    path: 'galeria',
    loadChildren: () => import('./pages/galeria/galeria.module').then( m => m.GaleriaPageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: isLogged }
  },

  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'user/logout',
    loadChildren: () => import('./user/logout/logout.module').then(m => m.LogoutPageModule),

    // Só pode ser vista se logado
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: toLogin }
  },
  {
    path: 'user/profile',
    loadChildren: () => import('./user/profile/profile.module').then(m => m.ProfilePageModule),

    // Só pode ser vista se logado
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: toLogin }
  },
  {
    // Página de cadastro
    path: 'register',
    loadChildren: () => import('./user/register/register.module').then(m => m.RegisterPageModule),

    // Só pode ser vista se logado
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: toLogin }
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./user/edit/edit.module').then( m => m.EditPageModule)
  },
 
  {
    path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then( m => m.HomepagePageModule),
    canActivate: [AngularFireAuthGuard], data: { authGuardPipe: toLogin }
  },
  {
    path: 'portifolio',
    loadChildren: () => import('./pages/portifolio/portifolio.module').then( m => m.PortifolioPageModule),
    //canActivate: [AngularFireAuthGuard], data: { authGuardPipe: isLogged }

  }
,


  // Página de erro 404
  // '**' TEM QUE SER SEMPRE A ÚLTIMA ROTA
  {
    path: '**',
    loadChildren: () => import('./pages/e404/e404.module').then(m => m.E404PageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
