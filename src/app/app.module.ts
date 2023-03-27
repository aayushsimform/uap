import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { UserComponent } from './component/user/user.component';
import { UserEditComponent } from './component/user/user-edit/user-edit.component';
import { UserListComponent } from './component/user/user-list/user-list.component';
import { UserDetailsComponent } from './component/user/user-details/user-details.component';
import { UserItemComponent } from './component/user/user-list/user-item/user-item.component';
import { UserService } from './component/user/users.service';
import { PhotosDetailsComponent } from './component/photo/photos-details/photos-details.component';
import { PhotosEditComponent } from './component/photo/photos-edit/photos-edit.component';
import { PhotosItemComponent } from './component/photo/photos-details/photos-item/photos-item.component';
import { AlbumComponent } from './component/album/album.component';
import { AlbumDetailsComponent } from './component/album/album-details/album-details.component';
import { AlbumEditComponent } from './component/album/album-edit/album-edit.component';
import { PhotoComponent } from './component/photo/photo.component';
import { PhotosListComponent } from './component/photo/photos-list/photos-list.component';
import { PhotoItemComponent } from './component/photo/photos-list/photo-item/photo-item.component';
import { PhotoService } from './component/photo/photo.service';
import { AlbumListComponent } from './component/album/album-list/album-list.component';
import { AlbumService } from './component/album/album.service';
import { AlbumItemssComponent } from './component/album/album-list/album-itemss/album-itemss.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    UserComponent,
    UserEditComponent,
    UserListComponent,
    UserDetailsComponent,
    UserItemComponent,
    PhotosDetailsComponent,
    PhotosEditComponent,
    PhotosItemComponent,
    AlbumComponent,
    AlbumDetailsComponent,
    AlbumEditComponent,
    PhotoComponent,
    PhotosListComponent,
    PhotoItemComponent,
    AlbumListComponent,
    AlbumItemssComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [UserService,PhotoService,AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
