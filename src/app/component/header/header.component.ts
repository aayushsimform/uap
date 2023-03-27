import { Component, OnInit, Output , EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{
  isAuthenticated = false;
  private userSub!: Subscription;
  // @Output() featureSelected = new EventEmitter<string>();
  // onSelect(feature: string){
  //       this.featureSelected.emit(feature);
  // }
  constructor() { }
   
   ngOnInit() {
      // this.userSub = this.authServise.user.subscribe(user =>{
      //       this.isAuthenticated= !!user ;
      //       console.log(!user);
      //       console.log(!!user);
      //       console.log(this.isAuthenticated);
            

            
      // });
   }
   onSaveData(){
    
    
  }
  onLogout(){
    
    
  }
   onFetchData(){
    
   }
   ngOnDestroy() {
   }
 
}
