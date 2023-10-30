import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LayoutService } from '../../core/layout.service';
import { DataService } from 'src/app/modules/auth/services/data.service';
import { AuthService } from 'src/app/modules/auth';
import { Router } from '@angular/router';
import { PageInfoService } from '../../core/page-info.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, AfterViewInit {
  @ViewChild('ktPageTitle', { static: true }) ktPageTitle: ElementRef;
  pageTitleAttributes: {
    [attrName: string]: string | boolean;
  };
  toolbarContainerCssClasses: string = '';
  pageTitleCssClasses: string = '';
  user: any;
  showFilter: boolean = true;
  currentRoute = '';
  selectedItem: string = '';
  filterItems: any[] = [
    { label: 'Date', key: 'date' },
    // { label: 'Hired', key: 'hired' },
    // { label: 'Fixed', key: 'fixed' },
    // { label: 'Verified', key: 'verified' },
    { label: 'Total Connects', key: 'total_connects_count' },
    { label: 'Price', key: 'price' },
  ];

  filterOrders: any[] = ['ASC', 'DESC'];

  filterItem: any = '';
  filterOrder: any = '';

  filters: any = {};

  constructor(
    private layout: LayoutService,
    private dataService: DataService,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private pageInfo: PageInfoService
  ) {}

  ngOnInit(): void {
    this.toolbarContainerCssClasses =
      this.layout.getStringCSSClasses('toolbarContainer');
    this.pageTitleCssClasses = this.layout.getStringCSSClasses('pageTitle');
    this.pageTitleAttributes = this.layout.getHTMLAttributes('pageTitle');
    this.user = this.authService.getAuthFromLocalStorage();
    this.router.events.subscribe((event) => {
      const currentPathname = this.router.url;
      const splitPathname = currentPathname.split('/');
      // const urlSegments = splitPathname.split('?')[0];

      this.currentRoute = splitPathname[1].split('?')[0];
      this.pageInfo.setTitle(this.currentRoute);
      console.log('currentRoute ', this.currentRoute);
      this.cdr.detectChanges();
    });

    this.dataService.showFilter.subscribe((res: any) => {
      console.log('>>>', res);
      this.showFilter = res;
      this.cdr.detectChanges();
    });
    this.cdr.detectChanges();
  }

  onItemSelected(item: string) {
    this.selectedItem = item;
  }
  showForm() {
    this.dataService.addForm.next(true);
    this.dataService.showFilter.next(false);
    this.cdr.detectChanges();
  }

  applyFiters() {
    this.filters = {
      item: this.filterItem,
      order: this.filterOrder,
    };
    this.dataService.filter.next({
      item: this.filterItem,
      order: this.filterOrder,
    });
  }

  ngAfterViewInit() {
    if (this.ktPageTitle) {
      for (const key in this.pageTitleAttributes) {
        if (
          this.pageTitleAttributes.hasOwnProperty(key) &&
          this.ktPageTitle.nativeElement
        ) {
          this.ktPageTitle.nativeElement.attributes[key] =
            this.pageTitleAttributes[key];
        }
      }
    }
  }
}
