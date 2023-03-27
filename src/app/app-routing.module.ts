import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailsComponent } from './component/album/album-details/album-details.component';
import { AlbumEditComponent } from './component/album/album-edit/album-edit.component';
import { AlbumComponent } from './component/album/album.component';
import { PhotoComponent } from './component/photo/photo.component';
import { PhotosDetailsComponent } from './component/photo/photos-details/photos-details.component';
import { PhotosEditComponent } from './component/photo/photos-edit/photos-edit.component';


import { UserDetailsComponent } from './component/user/user-details/user-details.component';
import { UserEditComponent } from './component/user/user-edit/user-edit.component';
import { UserComponent } from './component/user/user.component';


const routes: Routes = [
  { path: 'user',component: UserComponent, pathMatch: 'full' },
  {
    path:"user",component:UserComponent,children:[
      {path: ':id', component: UserDetailsComponent},
      {path:'new',component: UserEditComponent},
      {path:':id/edit',component : UserEditComponent}
    ]
  },
  {
    path:"album",component:AlbumComponent,children:[
      {path: ':id', component: AlbumDetailsComponent},
      {path:'new',component: AlbumEditComponent},
      {path:':id/edit',component : AlbumEditComponent}
    ]
  },
  {
    path:"photo",component:PhotoComponent,children:[
      {path: ':id', component: PhotosDetailsComponent},
      {path:'new',component: PhotosEditComponent},
      {path:':id/edit',component : PhotosEditComponent}
    ]
  },  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
