/*
 *   Copyright (c) 2024 Dmantz Technologies private limited
 *   All rights reserved.
 */
import { Component, ElementRef, EventEmitter, HostListener, Inject, Output, SimpleChanges, ViewChild } from '@angular/core';

import { MenuItem } from './menu.model';
import { EmployeeMenu, MENU, MENU1, ManagerMenu } from './menu';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { any } from '@amcharts/amcharts5/.internal/core/util/Array';
import { TopbarComponent } from '../topbar/topbar.component';
import { DOCUMENT } from '@angular/common';
import { MenuitemsService } from 'src/app/menuitems.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @ViewChild(TopbarComponent)
  topbarComponent!: TopbarComponent;

  menu: any;
  toggle: any = true;
  menuItems: MenuItem[] = [];
  @ViewChild('sideMenu') sideMenu!: ElementRef;
  @Output() mobileMenuButtonClicked = new EventEmitter();
  lastroute: any;
  @ViewChild('center') centerModal: any;

  // getperm: { id: number; navigationId: number; navigation: string; roleId: null; roleName: null; create: boolean; read: boolean; write: boolean; isActive: null; delete: boolean; admin: null; sequence: number; group: null; loginUserId: null; }[];
  menuItems1: MenuItem[] = [];
  permissiondata: any;
  role: any;
  verticalid: any;
  roledata: any;
  selectedrole: any;
  Empverticalid: any;
  constructor(@Inject(DOCUMENT) private document: any, private router: Router, public translate: TranslateService, private menuitemsService: MenuitemsService) {
    translate.setDefaultLang('en');

  }

  ngOnInit(): void {
    debugger;
    this.role = localStorage.getItem('Rolename');
    console.log('role ',this.role)
    this.selectedrole = localStorage.getItem('Select Rolename');
    this.Empverticalid = localStorage.getItem('vericalid');

    const storedroledata = localStorage.getItem('Rolenamedata');
    if (storedroledata) {
      try {
        this.roledata = JSON.parse(storedroledata);
        console.log("roledata", this.roledata);
      } catch (error) {
        console.error("Error parsing roledata from localStorage:", error);
      }
    } else {
      console.error("No roledata found in localStorage.");
    }

    this.router.events.subscribe((event) => {
      if (document.documentElement.getAttribute('data-layout') == 'vertical' || document.documentElement.getAttribute('data-layout') == 'horizontal') {
        if (event instanceof NavigationEnd) {
          this.initActiveMenu();
          this.SidebarHide();
        }
      }
    });
    
    // Move the logic of processing MENU to a function to avoid potential async issues
    if (this.role === "Agent" || this.selectedrole === "Agent") {
      localStorage.setItem('rolepermissionjson', "null");

       localStorage.setItem('Select Rolename', this.role);

      this.menuItems = MENU1;
      this.topbarComponent.rolename();

    }
    if (this.role == "Employee") {
      localStorage.setItem('rolepermissionjson', "null");

       localStorage.setItem('Select Rolename', this.role);

      this.menuItems = EmployeeMenu;
      //  this.topbarComponent.rolename();

    }
    if (this.role == "Manager" || this.role == "Branch Manager") {
      localStorage.setItem('rolepermissionjson', "null");

      localStorage.setItem('Select Rolename', this.role);

      this.menuItems = ManagerMenu;
      this.topbarComponent.rolename();

    }

  }

  ngOnChanges(changes: any): void {
    if (changes.role || changes.Empverticalid) {
    
      this.menuItems = EmployeeMenu; // Update menuItems after EmployeeMenu is configured
    }
  }
  // filterMenuItemsByVerticalId(tempItems2: any[]): any[] {
  //   const menuItems: any[] = [];

  //   if (this.verticalid == "1") {
  //     for (let item of tempItems2) {
  //       if (item.label === "Chits") {
  //         menuItems.push(item);
  //         menuItems[0].subItems = menuItems[0].subItems.filter((item: any) => {
  //           return !(item.subItems && item.subItems.length === 0);
  //         });
  //         break;
  //       }
  //     }
  //   } else if (this.verticalid == "2") {
  //     for (let item of tempItems2) {
  //       if (item.label === "Real Estate") {
  //         menuItems.push(item);
  //         menuItems[0].subItems = menuItems[0].subItems.filter((item: any) => {
  //           return !(item.subItems && item.subItems.length === 0);
  //         });
  //         break;
  //       }
  //     }
  //   } else if (this.verticalid == "0") {
  //     return tempItems2;
  //   }

  //   return menuItems;
  // }




  selectMenu(selectedLabel: string): void {
    this.menuitemsService.setSelectedLabel(selectedLabel);
    console.log('selectMenu', selectedLabel);
  }
  selectMenu1(selectedLabel: string): void {
    this.menuitemsService.setSelectedLabel(selectedLabel);
    console.log('selectMenu1', selectedLabel);
  }
  selectMenu2(selectedLabel: any): void {
    this.menuitemsService.setSelectedLabel(selectedLabel);
    console.log('selectMenu2', selectedLabel);
  }
  selectMenu3(selectedLabel: any): void {
    this.menuitemsService.setSelectedLabel(selectedLabel);
    console.log('selectMenu3', selectedLabel);
  }
  selectMenu4(selectedLabel: any): void {
    this.menuitemsService.setSelectedLabel(selectedLabel);
    console.log('selectMenu4', selectedLabel);
  }
  selectMenu5(selectedLabel: any): void {
    this.menuitemsService.setSelectedLabel(selectedLabel);
    console.log('selectMenu5', selectedLabel);
  }
  selectMenu6(selectedLabel: any): void {
    this.menuitemsService.setSelectedLabel(selectedLabel);
    console.log('selectMenu6', selectedLabel);
  }
  selectMenu7(selectedLabel: any): void {
    this.menuitemsService.setSelectedLabel(selectedLabel);
    console.log('selectMenu7', selectedLabel);
  }




  /***
   * Activate droup down set
   */
  ngAfterViewInit() {
    setTimeout(() => {
      this.initActiveMenu();
    }, 0);

    this.roles = localStorage.getItem('Select Rolename')
    if (this.role == "Super Admin") {
      localStorage.setItem('rolepermissionjson', "null");

      // localStorage.setItem('Select Rolename', this.role);

      this.menuItems = MENU;
      //  this.topbarComponent.rolename();

    }
     if (this.roles) {

      this.centerModal.hide();

      const foundRole = this.roledata.find((role: any) => role.roleName === this.roles);
      this.verticalid = foundRole.verticalId
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
            // if (permissionItem) {
            //   // Add label property with the value of navigation property
            //   permissionItem.label = permissionItem.navigation;
            //   permissionItem.id = permissionItem.navigationId;
            //   permissionItem.link = si.link;

            //   tempMenuItem.subItems.push(si);
            // }
            if (permissionItem) {
              tempMenuItem.subItems.push(si);
            }

          }
        });

        tempItems2.push(tempMenuItem);
        console.log("tempItems2", tempItems2)
      });
      // if (this.verticalid == "1") {

      //   for (let item of tempItems2) {
      //     if (item.label === "Chits") {
      //       this.menuItems.push(item);
      //       this.menuItems[0].subItems = this.menuItems[0].subItems.filter((item: any) => {
      //         if (item.subItems && item.subItems.length === 0) {
      //           return false; // Remove items with empty subItems
      //         }
      //         return true;
      //       });
      //       break; // Stop after finding the "Chits" array
      //     }
      //   }
      // }
      // else if (this.verticalid == "2") {
      //   for (let item of tempItems2) {
      //     if (item.label === "Real Estate") {

      //       this.menuItems.push(item);

      //       this.menuItems[0].subItems = this.menuItems[0].subItems.filter((item: any) => {
      //         if (item.subItems && item.subItems.length === 0) {
      //           return false; // Remove items with empty subItems
      //         }
      //         return true;
      //       });
      //       break; // Stop after finding the "Chits" array
      //     }
      //   }
      // }
      console.log("menuItems", this.menuItems)
      // this.topbarComponent.rolename();


    }
    else {
      if (this.roledata.length > 1) {
        if (this.centerModal) {
          debugger
          this.centerModal.show();
        }
      }
      // else {

      //   let tempTempItems = MENU;
      //   let tempItems2: any[] = [];
      //   localStorage.setItem('Select Rolename', this.roledata[0].roleName);

      //   this.permissiondata = this.roledata[0].rolePermissions
      //   localStorage.setItem('rolepermissionjson', JSON.stringify(this.permissiondata));

      //   this.verticalid = this.roledata[0].verticalId


      //   tempTempItems.forEach((mi) => {
      //     const tempMenuItem: any = { label: mi.label, subItems: [], icon: mi.icon };
      //     mi.subItems.forEach((si: any) => {
      //       if (si.subItems) {
      //         const tempSubMenuItem: any = { label: si.label, subItems: [] };
      //         si.subItems.forEach((ssi: any) => {
      //           const permissionItem = this.permissiondata.find((gp: any) => gp.navigationId === ssi.id);
      //           if (permissionItem) {
      //             // Add label property with the value of navigation property
      //             permissionItem.label = permissionItem.navigation;
      //             tempSubMenuItem.subItems.push(ssi);
      //           }
      //         });
      //         if (tempSubMenuItem.subItems.length > 0) {
      //           tempMenuItem.subItems.push(tempSubMenuItem);
      //         }
      //       } else {

      //         const permissionItem = this.permissiondata.find((gp: any) => gp.navigationId === si.id);
      //         if (permissionItem) {
      //           tempMenuItem.subItems.push(si);
      //         }

      //       }
      //     });

      //     tempItems2.push(tempMenuItem);
      //     console.log("tempItems2", tempItems2)
      //   });
      //   // if (this.verticalid == "1") {

      //   //   for (let item of tempItems2) {
      //   //     if (item.label === "Chits") {
      //   //       this.menuItems.push(item);
      //   //       this.menuItems[0].subItems = this.menuItems[0].subItems.filter((item: any) => {
      //   //         if (item.subItems && item.subItems.length === 0) {
      //   //           return false; // Remove items with empty subItems
      //   //         }
      //   //         return true;
      //   //       });
      //   //       break; // Stop after finding the "Chits" array
      //   //     }
      //   //   }
      //   // }
      //   // else if (this.verticalid == "2") {
      //   //   for (let item of tempItems2) {
      //   //     if (item.label === "Real Estate") {

      //   //       this.menuItems.push(item);

      //   //       this.menuItems[0].subItems = this.menuItems[0].subItems.filter((item: any) => {
      //   //         if (item.subItems && item.subItems.length === 0) {
      //   //           return false; // Remove items with empty subItems
      //   //         }
      //   //         return true;
      //   //       });
      //   //       break; // Stop after finding the "Chits" array
      //   //     }
      //   //   }
      //   // }
      //   console.log("menuItems", this.menuItems)

      //   this.topbarComponent.rolename();

      // }
    }
    // }


  }



  roles: any
  //Dropdown select role Method
  submitrole(roles: any) {
    debugger;

    this.centerModal.hide();
    const roleName = roles; // This can be dynamically assigned
    localStorage.setItem('Select Rolename', roleName);

    // Find the role in the JSON data based on roleName
    const foundRole = this.roledata.find((role: any) => role.roleName === roleName);
    if (foundRole) {
      this.verticalid = foundRole.verticalId;
      this.permissiondata = foundRole.rolePermissions;
      console.log('Role Permissions:', this.permissiondata);
    } else {
      console.log('Role not found.');
      return;
    }
    localStorage.setItem('rolepermissionjson', JSON.stringify(this.permissiondata));

    let tempTempItems = MENU;
    let tempItems2: any[] = [];

    tempTempItems.forEach((mi) => {
      const tempMenuItem: any = { label: mi.label, subItems: [], icon: mi.icon };

      if (mi.subItems) {
        mi.subItems.forEach((si: any) => {
          const tempSubMenuItem: any = { label: si.label, subItems: [] };

          if (si.subItems) {
            si.subItems.forEach((ssi: any) => {
              const permissionItem = this.permissiondata.find((gp: any) => gp.navigationId === ssi.id);
              if (permissionItem) {
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
      }

      tempItems2.push(tempMenuItem);
      console.log("tempItems2", tempItems2);
    });

    if (this.verticalid == "1") {
      this.filterAndAddMenuItems(tempItems2, "Chits");
    } else if (this.verticalid == "2") {
      this.filterAndAddMenuItems(tempItems2, "Real Estate");
    } else if (this.verticalid == "0") {
      this.menuItems = tempItems2;
    }

    console.log("menuItems", this.menuItems);
    this.topbarComponent.rolename();
  }

  filterAndAddMenuItems(tempItems: any[], label: string) {
    for (let item of tempItems) {
      if (item.label === label) {
        this.menuItems.push(item);
        this.menuItems[0].subItems = this.menuItems[0].subItems.filter((item: any) => {
          return !(item.subItems && item.subItems.length === 0);
        });
        break; // Stop after finding the specified label array
      }
    }
  }


  removeActivation(items: any) {
    items.forEach((item: any) => {
      if (item.classList.contains("menu-link")) {
        if (!item.classList.contains("active")) {
          item.setAttribute("aria-expanded", false);
        }
        (item.nextElementSibling) ? item.nextElementSibling.classList.remove("show") : null;
      }
      if (item.classList.contains("nav-link")) {
        if (item.nextElementSibling) {
          item.nextElementSibling.classList.remove("show");
        }
        item.setAttribute("aria-expanded", false);
      }
      item.classList.remove("active");
    });
  }


  toggleItem(event: any) {
    let isCurrentMenuId = event.target.closest('a.nav-link');
    let isMenu = isCurrentMenuId.nextElementSibling as any;
    if (isMenu.classList.contains("show")) {
      isMenu.classList.remove("show");
      isCurrentMenuId.setAttribute("aria-expanded", "false");
    } else {
      let dropDowns = Array.from(document.querySelectorAll('#navbar-nav .show'));
      dropDowns.forEach((node: any) => {
        node.classList.remove('show');
      });
      (isMenu) ? isMenu.classList.add('show') : null;
      const ul = document.getElementById("navbar-nav");

      const pathName = window.location.pathname;
      if (ul) {
        const items = Array.from(ul.querySelectorAll("a.nav-link"));
        let activeItems = items.filter((x: any) => x.classList.contains("active"));
        this.removeActivation(activeItems);

        let matchingMenuItem = items.find((x: any) => {
          return x.pathname === pathName;
        });
        if (matchingMenuItem) {
          this.activateParentDropdown(matchingMenuItem);
        }
      }

      isCurrentMenuId.setAttribute("aria-expanded", "true");
      if (isCurrentMenuId) {
        this.activateParentDropdown(isCurrentMenuId);
      }
    }
  }

  toggleSubItem(event: any) {
    let isCurrentMenuId = event.target.closest('a.nav-link');
    let isMenu = isCurrentMenuId.nextElementSibling as any;

    if (isMenu.classList.contains("show")) {
      isMenu.classList.remove("show");
      isCurrentMenuId.setAttribute("aria-expanded", "false");
    } else {
      let dropDowns = Array.from(document.querySelectorAll('.sub-menu'));
      dropDowns.forEach((node: any) => {
        node.classList.remove('show');
      });
      let subDropDowns = Array.from(document.querySelectorAll('.menu-dropdown .nav-link'));
      subDropDowns.forEach((submenu: any) => {
        submenu.setAttribute('aria-expanded', "false");
      });

      if (event.target && event.target.nextElementSibling) {
        isCurrentMenuId.setAttribute("aria-expanded", "true");
        event.target.nextElementSibling.classList.toggle("show");
      }
    }
  };

  toggleExtraSubItem(event: any) {
    let isCurrentMenuId = event.target.closest('a.nav-link');
    let isMenu = isCurrentMenuId.nextElementSibling as any;
    if (isMenu.classList.contains("show")) {
      isMenu.classList.remove("show");
      isCurrentMenuId.setAttribute("aria-expanded", "false");
    } else {
      let dropDowns = Array.from(document.querySelectorAll('.extra-sub-menu'));
      dropDowns.forEach((node: any) => {
        node.classList.remove('show');
      });

      let subDropDowns = Array.from(document.querySelectorAll('.menu-dropdown .nav-link'));
      subDropDowns.forEach((submenu: any) => {
        submenu.setAttribute('aria-expanded', "false");
      });

      if (event.target && event.target.nextElementSibling) {
        isCurrentMenuId.setAttribute("aria-expanded", "true");
        event.target.nextElementSibling.classList.toggle("show");
      }
    }
  };

  // Click wise Parent active class add
  toggleParentItem(event: any) {

    let isCurrentMenuId = event.target.closest('a.nav-link');
    let dropDowns = Array.from(document.querySelectorAll('#navbar-nav .show'));
    dropDowns.forEach((node: any) => {
      node.classList.remove('show');
    });
    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const iconItems = Array.from(ul.getElementsByTagName("a"));
      let activeIconItems = iconItems.filter((x: any) => x.classList.contains("active"));
      activeIconItems.forEach((item: any) => {
        item.setAttribute('aria-expanded', "false")
        item.classList.remove("active");
      });
    }
    isCurrentMenuId.setAttribute("aria-expanded", "true");
    if (isCurrentMenuId) {
      this.activateParentDropdown(isCurrentMenuId);
    }
  }

  activateParentDropdown(item: any) {
    item.classList.add("active");
    let parentCollapseDiv = item.closest(".collapse.menu-dropdown");
    if (parentCollapseDiv) {
      // to set aria expand true remaining
      parentCollapseDiv.classList.add("show");
      parentCollapseDiv.parentElement.children[0].classList.add("active");
      parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
      if (parentCollapseDiv.parentElement.closest(".collapse.menu-dropdown")) {
        parentCollapseDiv.parentElement.closest(".collapse").classList.add("show");
        if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling)
          parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.classList.add("active");
        if (parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.closest(".collapse")) {
          parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.closest(".collapse").classList.add("show");
          parentCollapseDiv.parentElement.closest(".collapse").previousElementSibling.closest(".collapse").previousElementSibling.classList.add("active");
        }
      }
      return false;
    }
    return false;
  }

  updateActive(event: any) {
    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a.nav-link"));
      this.removeActivation(items);
    }

    this.activateParentDropdown(event.target);
  }

  initActiveMenu() {
    const pathName = window.location.pathname;
    const ul = document.getElementById("navbar-nav");
    if (ul) {
      const items = Array.from(ul.querySelectorAll("a.nav-link"));
      let activeItems = items.filter((x: any) => x.classList.contains("active"));
      this.removeActivation(activeItems);

      let matchingMenuItem = items.find((x: any) => {
        return x.pathname === pathName;
      });

      if (matchingMenuItem) {
        this.activateParentDropdown(matchingMenuItem);
      }
    }
  }

  /**
   * Returns true or false if given menu item has child or not
   * @param item menuItem
   */
  hasItems(item: MenuItem) {
    return item.subItems !== undefined ? item.subItems.length > 0 : false;
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    var sidebarsize = document.documentElement.getAttribute("data-sidebar-size");
    if (sidebarsize == 'sm-hover-active') {
      document.documentElement.setAttribute("data-sidebar-size", 'sm-hover')
    } else {
      document.documentElement.setAttribute("data-sidebar-size", 'sm-hover-active')
    }

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }


  /**
   * SidebarHide modal
   * @param content modal content
   */
  SidebarHide() {
    document.body.classList.remove('vertical-sidebar-enable');
  }


}
