/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, Output, EventEmitter, Inject, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { EventService } from 'src/app/core/services/event.service';
import { LanguageService } from 'src/app/core/services/language.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { cartList } from 'src/app/pages/ecommerce/cart/data';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { notification } from './data';
import { RootReducerState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { changeMode } from 'src/app/store/layouts/layout-action';
import { getLayoutmode } from 'src/app/store/layouts/layout-selector';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { UsersService } from 'src/app/chits/Services/users.service';
import { MENU } from '../sidebar/menu';
import { MenuItem } from '../sidebar/menu.model';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {


  country: any;
  selectedItem!: any;
  menuItems: MenuItem[] = [];

  flagvalue: any;
  valueset: any;
  countryName: any;
  cookieValue: any;
  userData: any;
  cartData: any;

  element: any;
  mode: string | undefined;

  total: any;
  subtotal: any = 0;
  totalsum: any;
  taxRate: any = 0.125;
  shippingRate: any = '65.00';
  discountRate: any = 0.15;
  discount: any;
  tax: any;
  userlist:any;
  notificationList: any;

  @Output() mobileMenuButtonClicked = new EventEmitter();
  @ViewChild('removeNotificationModal', { static: false }) removeNotificationModal?: ModalDirective;
  @ViewChild('removeCartModal', { static: false }) removeCartModal?: ModalDirective;
  deleteid: any;
  totalNotify: number = 0;
  newNotify: number = 0;
  readNotify: number = 0;
  loggedInUser: any;
  userName:any;
  password:any;
  firstName:any;
  roles:any;
  roledata: any;
  permissiondata: any;
  verticalid: any;
  EmpVerticalId:any;
  role:any;
  VerticalName:any;
  showRoles:boolean=true;
  constructor(@Inject(DOCUMENT) private document: any,
    private eventService: EventService,
    public languageService: LanguageService,
    private authService: AuthenticationService,
    private router: Router,
    public _cookiesService: CookieService,
    public store: Store<RootReducerState>,
    private TokenStorageService: TokenStorageService,private usersservice:UsersService) { }

  ngOnInit(): void {
     
    this.authService.loginResponse$.subscribe((response) => {
      // Handle the response in your component
      console.log('Received login response in the component:', response);
        this.firstName = response.data.accountUser.firstName +" "+ response.data.accountUser.lastName;
      console.log('First name:', this.firstName);
      this.roles= response.data.accountUser.roles;
       this.EmpVerticalId=localStorage.getItem('vericalid');
       this.role = localStorage.getItem('Rolename');
      if(this.role ==='Employee' && this.EmpVerticalId == 1){
        this.showRoles=false;
         this.VerticalName='Chits';
      } 
      else
      if(this.role ==='Employee' && this.EmpVerticalId == 2){
        this.showRoles=false;
         this.VerticalName='Real Estate';
      }
      
    const storedroledata = localStorage.getItem('Rolenamedata');
    if (storedroledata) {
        this.roledata = JSON.parse(storedroledata);
        console.log("roledata",this.roledata)
    } else {
        // Handle case where no data is stored in localStorage
        console.error("No permission data found in localStorage.");
    }
      
    });

  



    this.element = document.documentElement;
    this.userData = this.TokenStorageService.getUser();
    this.cartData = cartList
    this.cartData.map((x: any) => {
      x['total'] = (x['qty'] * x['price']).toFixed(2)
      this.subtotal += parseFloat(x['total'])
    })
    this.subtotal = this.subtotal.toFixed(2)
    this.discount = (this.subtotal * this.discountRate).toFixed(2)
    this.tax = (this.subtotal * this.taxRate).toFixed(2);
    this.totalsum = (parseFloat(this.subtotal) + parseFloat(this.tax) + parseFloat(this.shippingRate) - parseFloat(this.discount)).toFixed(2)


    // Cookies wise Language set
    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) { this.valueset = 'assets/images/flags/us.svg'; }
      this.countryName = 'English'
    } else {
      this.flagvalue = val.map(element => element.flag);
    }

    this.notificationList = notification
    this.notificationList.forEach((element: any) => {
      this.totalNotify += element.items.length
      if (element.title == 'New') {
        this.newNotify = element.items.length
      } else {
        this.readNotify = element.items.length
      }
    });
  }
  rolename(){
    this.roles=localStorage.getItem('Select Rolename');

  }
  selectrole(rolename:any){
    // localStorage.setItem('Select Rolename', roleName);

    debugger
    const roleName = rolename; // This can be dynamically assigned
    localStorage.setItem('Select Rolename', roleName);
    
    // Find the role in the JSON data based on roleName
    const foundRole = this.roledata.find((role:any) => role.roleName === roleName);
    this.verticalid=foundRole.verticalId
    // If the role is found, you can access its permissions
    if (foundRole) {
        this.permissiondata = foundRole.rolePermissions;
        console.log('Role Permissions:', this.permissiondata);
    } else {
        console.log('Role not found.');
    }
    localStorage.setItem('rolepermissionjson', JSON.stringify(this.permissiondata));
    
    let tempTempItems = MENU;
    let tempItems2: any[] = [];
    
    tempTempItems.forEach((mi) => {
      const tempMenuItem: any = { label: mi.label, subItems: [], icon: mi.icon };
      mi.subItems.forEach((si: any) => {
        if (si.subItems) {
          const tempSubMenuItem: any = { label: si.label, subItems: [] };
          si.subItems.forEach((ssi: any) => {
            const permissionItem = this.permissiondata.find((gp: any) => gp.navigationId === ssi.id);
            if (permissionItem) {
              // Add label property with the value of navigation property
              permissionItem.label = permissionItem.navigation;
              tempSubMenuItem.subItems.push(ssi);
            }
          });
          if (tempSubMenuItem.subItems.length > 0) {
            tempMenuItem.subItems.push(tempSubMenuItem);
          }
        } else {
          
          const permissionItem = this.permissiondata.find((gp: any) => gp.navigationId === si.id);
         
          if (permissionItem) {
            tempMenuItem.subItems.push(si);
          }
          
        }
      });
    
      tempItems2.push(tempMenuItem);
      console.log("tempItems2",tempItems2)
    });
    if(this.verticalid=="1" ||this.verticalid==null )
    {
             
    for (let item of tempItems2) {
    if (item.label === "Chits") {
      this.menuItems=[]

    this.menuItems.push(item);
    this.menuItems[0].subItems = this.menuItems[0].subItems.filter((item:any) => {
      if (item.subItems && item.subItems.length === 0) {
          return false; // Remove items with empty subItems
      }
      return true;
    });
      break; // Stop after finding the "Chits" array
    }
    }
    }
    else if(this.verticalid=="2")
    {
      for (let item of tempItems2) {
        if (item.label === "Real Estate") {
          this.menuItems=[]
          
          this.menuItems.push(item);
    
          this.menuItems[0].subItems = this.menuItems[0].subItems.filter((item:any) => {
            if (item.subItems && item.subItems.length === 0) {
                return false; // Remove items with empty subItems
            }
            return true;
        });
            break; // Stop after finding the "Chits" array
        }
    }
    }
    console.log("menuItems",this.menuItems)
    window.location.reload();  }

  windowScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      (document.getElementById('back-to-top') as HTMLElement).style.display = "block";
      document.getElementById('page-topbar')?.classList.add('topbar-shadow')
    } else {
      (document.getElementById('back-to-top') as HTMLElement).style.display = "none";
      document.getElementById('page-topbar')?.classList.remove('topbar-shadow');
    }
  }

  // Increment Decrement Quantity
  qty: number = 0;
  increment(qty: any, i: any, id: any) {
    this.subtotal = 0;
    if (id == '0' && qty > 1) {
      qty--;
      this.cartData[i].qty = qty
      this.cartData[i].total = (this.cartData[i].qty * this.cartData[i].price).toFixed(2)
    }
    if (id == '1') {
      qty++;
      this.cartData[i].qty = qty
      this.cartData[i].total = (this.cartData[i].qty * this.cartData[i].price).toFixed(2)
    }

    this.cartData.map((x: any) => {
      this.subtotal += parseFloat(x['total'])
    })

    this.subtotal = this.subtotal.toFixed(2)
    this.discount = (this.subtotal * this.discountRate).toFixed(2)
    this.tax = (this.subtotal * this.taxRate).toFixed(2);
    this.totalsum = (parseFloat(this.subtotal) + parseFloat(this.tax) + parseFloat(this.shippingRate) - parseFloat(this.discount)).toFixed(2)
  }

  removeCart(id: any) {
    this.removeCartModal?.show()
    this.deleteid = id;
  }

  confirmDelete() {
    this.removeCartModal?.hide()

    this.subtotal -= this.cartData[this.deleteid].total
    this.subtotal = this.subtotal.toFixed(2)
    this.discount = (this.subtotal * this.discountRate).toFixed(2)
    this.tax = (this.subtotal * this.taxRate).toFixed(2);
    this.totalsum = (parseFloat(this.subtotal) + parseFloat(this.tax) + parseFloat(this.shippingRate) - parseFloat(this.discount)).toFixed(2)
    this.cartData.splice(this.deleteid, 1)
  }

  /**
* Topbar Light-Dark Mode Change
*/
  changeMode(mode: string) {
    this.mode = mode;
    if (mode == 'auto') {
      document.documentElement.setAttribute('data-bs-theme', 'light')
      document.documentElement.setAttribute('data-topbar', 'light');
      document.documentElement.classList.add('mode-auto')
    } else {
      this.store.dispatch(changeMode({ mode }));
    this.store.select(getLayoutmode).subscribe((mode) => {
      document.documentElement.setAttribute('data-bs-theme', mode);
    })
      document.documentElement.classList.remove('mode-auto')
      document.documentElement.setAttribute('data-topbar', mode);
    }
  }

  /***
   * Language Listing
   */
  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.svg', lang: 'en' },
    { text: 'Española', flag: 'assets/images/flags/spain.svg', lang: 'sp' },
    { text: 'Deutsche', flag: 'assets/images/flags/germany.svg', lang: 'gr' },
    { text: 'Italiana', flag: 'assets/images/flags/italy.svg', lang: 'it' },
    { text: 'русский', flag: 'assets/images/flags/russia.svg', lang: 'ru' },
    { text: '中国人', flag: 'assets/images/flags/china.svg', lang: 'ch' },
    { text: 'français', flag: 'assets/images/flags/french.svg', lang: 'fr' },
    { text: 'Arabic', flag: 'assets/images/flags/ae.svg', lang: 'ar' },
  ];

  /***
  * Language Value Set
  */
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    debugger
    document.querySelector('.hamburger-icon')?.classList.toggle('open')
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
  * Fullscreen method
  */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  // Search Topbar
  Search() {
    var searchOptions = document.getElementById("search-close-options") as HTMLAreaElement;
    var dropdown = document.getElementById("search-dropdown") as HTMLAreaElement;
    var input: any, filter: any, ul: any, li: any, a: any | undefined, i: any, txtValue: any;
    input = document.getElementById("search-options") as HTMLAreaElement;
    filter = input.value.toUpperCase();
    var inputLength = filter.length;

    if (inputLength > 0) {
      dropdown.classList.add("show");
      searchOptions.classList.remove("d-none");
      var inputVal = input.value.toUpperCase();
      var notifyItem = document.getElementsByClassName("notify-item");

      Array.from(notifyItem).forEach(function (element: any) {
        var notifiTxt = ''
        if (element.querySelector("h6")) {
          var spantext = element.getElementsByTagName("span")[0].innerText.toLowerCase()
          var name = element.querySelector("h6").innerText.toLowerCase()
          if (name.includes(inputVal)) {
            notifiTxt = name
          } else {
            notifiTxt = spantext
          }
        } else if (element.getElementsByTagName("span")) {
          notifiTxt = element.getElementsByTagName("span")[0].innerText.toLowerCase()
        }
        if (notifiTxt)
          element.style.display = notifiTxt.includes(inputVal) ? "block" : "none";

      });
    } else {
      dropdown.classList.remove("show");
      searchOptions.classList.add("d-none");
    }
  }

  /**
   * Search Close Btn
   */
  closeBtn() {
    var searchOptions = document.getElementById("search-close-options") as HTMLAreaElement;
    var dropdown = document.getElementById("search-dropdown") as HTMLAreaElement;
    var searchInputReponsive = document.getElementById("search-options") as HTMLInputElement;
    dropdown.classList.remove("show");
    searchOptions.classList.add("d-none");
    searchInputReponsive.value = "";
  }

  // Remove Notification
  checkedValGet: any[] = [];
  onCheckboxChange(event: any, id: any) {
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.notificationList.length; i++) {
      for (var x = 0; x < this.notificationList[i].items.length; x++) {
        if (this.notificationList[i].items[x].state == true) {
          result = this.notificationList[i].items[x].id;
          checkedVal.push(result);
        }
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? (document.getElementById("notification-actions") as HTMLElement).style.display = 'block' : (document.getElementById("notification-actions") as HTMLElement).style.display = 'none';
  }

  notificationDelete() {
    for (var i = 0; i < this.checkedValGet.length; i++) {
      for (var j = 0; j < this.notificationList.length; j++) {
        for (var x = 0; x < this.notificationList[j].items.length; x++) {
          if (this.notificationList[j].items[x].id == this.checkedValGet[i]) {
            this.notificationList[j].items.splice(x, 1)
          }
        }
      }
    }
    this.calculatenotification()
    this.removeNotificationModal?.hide();
  }

  calculatenotification() {
    this.totalNotify = 0;
    this.checkedValGet = []
    this.notificationList.forEach((element: any) => {
      this.totalNotify += element.items.length
      if (element.title == 'New') {
        this.newNotify = element.items.length
      } else {
        this.readNotify = element.items.length
      }
    });
    this.checkedValGet.length > 0 ? (document.getElementById("notification-actions") as HTMLElement).style.display = 'block' : (document.getElementById("notification-actions") as HTMLElement).style.display = 'none';
    if (this.totalNotify == 0) {
      document.querySelector('.empty-notification-elem')?.classList.remove('d-none')
    }
  }

  /**
   * Logout the user
   */
  logout() {
    localStorage.removeItem('Select Rolename');

    this.authService.logout();
    // if (environment.defaultauth === 'firebase') {
    //   this.authService.logout();
    // } else {
    //   this.authFackservice.logout();
    // }
    this.router.navigate(['/auth/login']);
  }

 


}
