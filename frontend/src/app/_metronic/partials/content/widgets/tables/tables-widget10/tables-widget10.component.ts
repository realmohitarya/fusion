import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { AuthService } from 'src/app/modules/auth';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/modules/auth/services/data.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute, Route, Router } from '@angular/router';
import moment from 'moment';

import { environment } from 'src/environments/environment';
import { DataSharingService } from 'src/app/data-sharing.service';

@Component({
  selector: 'app-tables-widget10',
  templateUrl: './tables-widget10.component.html',
})
export class TablesWidget10Component implements OnInit {
  private apiUrl = 'http://localhost:3000/graphdata';
  public isEditMode = false;
  public showForm = false;
  public showAllData = false;
  isUpdated: boolean = false;
  initialFormValues: any;
  updatedData: any;
  chartMonths: any = [];
  chartData: any = [];
  totalBids: Number = 0;
  isFormSuccess = '';
  localUrl = 'http://localhost:4200/';
  chartId: any = [];
  chartMonth: any = [];
  isFormError = '';
  selecteMyDate: string = '';
  selecteMyTime: string = '';
  successMessage = '';
  selectedItem: any;
  form: FormGroup;
  showStepper = false;
  editingData: any = [];
  isdataLoading: Boolean = false;
  step = 1;
  buttonAction = '';
  field1: string = '';

  field2: string = '';
  items: any[] = [];
  public Editor = ClassicEditor;
  user: any;
  order: '';
  orderBy: '';
  p: number = 1; // Current page for pagination
  itemsPerPage: number = 10; // Number of items per page
  addDataForm: any;
  public customConfig = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        '|',
        'bulletedList',
        'numberedList',
        '|',
        'blockQuote',
        'codeBlock',
        '|',
        'undo',
        'redo',
      ],
    },
    mediaEmbed: {
      previewsInData: true,
    },
  };

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private http: HttpClient,
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private dataSharingService: DataSharingService
  ) {}

  ngAfterViewInit() {
    this.dataService.addForm.subscribe((res) => {
      this.formreset();
      this.isFormError = '';
      this.isFormSuccess = '';

      this.isEditMode = false;
      this.showForm = res;
      this.showAllData = false;
      this.step = 1;
      this.cdr.detectChanges();
    });
    this.dataService.filter.subscribe((res) => {
      this.order = res.item;
      this.orderBy = res.order;
      this.getData();
    });
  }
  formatLargeInteger(value: number) {
    const numfor = Intl.NumberFormat('en-IN');
    return numfor.format(value);
  }
  updateField(fieldName: string, event: any) {
    this.addDataForm.get(fieldName).setValue(event.target.value);
  }
  testTime(time: any) {
    return console.log('time', time);
  }
  formreset() {
    this.addDataForm.reset();
    this.addDataForm.controls.verified.value = '';
    this.addDataForm.controls.hired.value = '';
    this.addDataForm.controls.date.value = 'dd-mm-yyyy';
    this.addDataForm.controls.time.value = 'hh-mm';
  }
  // formatDate(dateString: string) {
  //   const date = new Date(dateString);
  //   const formattedDate = date.toISOString().slice(0, 10);
  //   return formattedDate;
  // }

  previousStep() {
    this.step--;
    this.cdr.detectChanges();
  }

  nextStep() {
    this.step++;
    this.cdr.detectChanges();
  }
  cancelStep() {
    // this.showStepper = !this.showStepper;
    this.isEditMode = false;
    this.showForm = false;
    this.addDataForm.reset();
    this.cdr.detectChanges();
  }

  showData(item: any) {
    this.cdr.detectChanges();
    this.selectedItem = item;
    console.log('data', item);
    console.log('selectedItem', this.selectedItem);

    this.showAllData = true;
  }
  hideData() {
    this.cdr.detectChanges();

    // console.log('data', item);
    this.showAllData = !this.showAllData;
  }

  myDate() {
    console.log('Selected date: ' + this.addDataForm.get('date').value);
    const selectedDate = this.addDataForm.get('date').value;

    localStorage.setItem('selectedDate', selectedDate);
    this.selecteMyDate = selectedDate;
  }
  myTime() {
    // console.log('Selected time: ' + this.addDataForm.get('time').value);
    // localStorage.setItem('selectedTime', this.selecteMyTime);
    // this.selecteMyTime = localStorage.getItem('selectedTime');
    console.log('selectedTime: ' + this.addDataForm.get('time').value);
    const selectedTime = this.addDataForm.get('time').value;

    localStorage.setItem('selectedTime', selectedTime);
    this.selecteMyTime = selectedTime;
  }
  checkInputs() {
    if (this.addDataForm.invalid) {
      this.isFormError = 'All fields are required.';
    } else {
      this.isFormError = '';
    }
  }
  editData(item: any, index: number) {
    this.initialFormValues = item;

    if (item) {
    }

    const localDate = new Date(item.date);
    const converted = moment(localDate).format('YYYY-MM-DD'); // Convert to YYYY-MM-DD format
    console.log('converted', converted);
    this.addDataForm.patchValue({
      id: item.id,
      email: item.email,
      project_title: item.project_title,
      url: item.url,
      proposals_count: item.proposals_count,
      submitted_by: item.submitted_by,
      verified: item.verified,
      time: item.time,
      response: item.response,
      hired: item.hired,
      account: item.account,
      project_description: item.project_description,
      skills_required: item.skills_required,
      submitted_bid_description: item.submitted_bid_description,
      price: item.price,
      fixed: item.fixed,
      remarks: item.remarks,
      total_connects_count: item.total_connects_count,
      user_id: this.user.user.id,
      date: converted,
    });
    // const utcDateString = item.date;

    // Create a Date object from the UTC date string
    // const utcDate = new Date(utcDateString);

    // Get the local date and time
    // const localDate = new Date(utcDate);

    // The localDate object now holds the date and time in the local time zone.
    // console.log('Local Date:', localDate);

    this.isEditMode = true;
    this.isFormError = '';
    this.isFormSuccess = '';
    this.step = 1;
    this.showForm = true;
    this.showAllData = false;
    this.cdr.detectChanges();
    // console.log('>>>>>>>>>>>>>>', i, index);
  }
  formatTime(time: any) {
    return moment(time, 'HH:mm').format('hh:mm A');
  }
  saveChanges(action: string | '') {
    console.log('action', this.buttonAction);
    this.buttonAction = action;
    // this.isUpdated = true;
    this.isFormSuccess = '';
    this.isFormError = '';
    Object.values(this.addDataForm.controls).forEach((control: any) => {
      control.markAsTouched();
    });
    if (this.addDataForm.invalid) {
      this.isFormError = 'All Fields are required';
      return;
    }
    // const localDate = new Date(this.addDataForm.get('date').value);
    let payload = {
      id: this.addDataForm.get('id').value,
      email: this.addDataForm.get('email').value,
      // date: new Date(localDate.toISOString()).toISOString().slice(0, 16),
      date: this.addDataForm.get('date').value,
      time: this.addDataForm.get('time').value,
      project_title: this.addDataForm.get('project_title').value,
      url: this.addDataForm.get('url').value,
      proposals_count: this.addDataForm.get('proposals_count').value,
      submitted_by: this.addDataForm.get('submitted_by').value,
      verified: this.addDataForm.get('verified').value,
      response: this.addDataForm.get('response').value,
      hired: this.addDataForm.get('hired').value,
      account: this.addDataForm.get('account').value,
      project_description: this.addDataForm.get('project_description').value,
      skills_required: this.addDataForm.get('skills_required').value,
      submitted_bid_description: this.addDataForm.get(
        'submitted_bid_description'
      ).value,
      price: this.addDataForm.get('price').value,
      fixed: this.addDataForm.get('fixed').value,
      remarks: this.addDataForm.get('remarks').value,
      total_connects_count: this.addDataForm.get('total_connects_count').value,
      user_id: this.user.user.id,
    };
    console.log('payload', payload);
    if (this.isEditMode) {
      let id = payload.id;
      this.dataService.updateBid(payload, id).subscribe(
        (response) => {
          this.isFormSuccess = 'Bid Updated Successfully';
          this.formreset();
          this.cdr.detectChanges();
          console.log('Item updated:', response);
          const index = this.items.findIndex(
            (item) => item.id === this.editingData.id
          );
          if (index !== -1) {
            // Update the item in the items array with the response data
            this.items[index] = response;
          }

          // If it's a save action

          // else if (action == 'Update') {
          //   // If it's an update action
          //   this.successMessage = 'Data updated successfully';
          // }

          // Automatically clear the success message after 2 seconds

          setTimeout(() => {
            this.isUpdated = false;

            this.cancelStep();
            this.getData();
            this.chartData = [];
            this.chartMonths = [];
            this.getGraphData();
            this.cdr.detectChanges();
          }, 3000);

          // this.showStepper = !this.showStepper;
          // item.isItemEditMode = false; // Exit edit mode
        },
        (error) => {
          console.error('Error updating item:', error);
          this.isFormError = error.error.message;
        }
      );
    } else {
      this.dataService.addBid(payload).subscribe(
        (response) => {
          this.isFormSuccess = 'Bid Saved Successfully';
          this.formreset();

          this.cdr.detectChanges();
          setTimeout(() => {
            console.log('working add', this.isFormSuccess);
            this.isUpdated = false;
            this.cancelStep();
            this.getData();
            this.chartData = [];
            this.chartMonths = [];
            this.getGraphData();
            this.cdr.detectChanges();
          }, 3000);
        },
        (error) => {
          console.error('Error updating item:', error);
          this.isFormError = error.error.message;
        }
      );
    }
  }

  shareBidUrl(id: any) {
    console.log('id', id);
    return this.localUrl + `sharebid/${id}`;
  }
  fetchBidDetails(id: any) {
    const url = this.shareBidUrl(id);
    console.log('<<<<<', url);
    const apiUrl = `http://localhost:3000/sharebid/${id}`;
    this.http.get(apiUrl).subscribe(
      (data) => {
        // Handle the API response data here
        console.log('API Response:', data);
        this.dataSharingService.setSharedData(data);
        this.router.navigate(['/sharebid', id]);
      },
      (error) => {
        // Handle API request error here
        console.error('API Error:', error);
      }
    );
  }

  getGraphData() {
    const is_admin = localStorage.getItem('is_admin');
    console.log('isa_admin', typeof is_admin);
    if (is_admin === '1') {
      this.dataService.getstats().subscribe(
        (data: any) => {
          // Handle the API response data here
          this.chartMonths = data.data.items.map(
            (value: any) => value.month + ' ' + moment().format('YYYY')
          );
          this.totalBids = data.data.totalBids;
          console.log('this.chartMonths', this.chartMonths);
          this.chartData = data.data.items.map((value: any) => value.count);
          this.cdr.detectChanges();
        },
        (error) => {
          // Handle API request error here
          console.error('API Error:', error);
        }
      );
    } else {
      const user_id = localStorage.getItem('user_id');
      this.dataService.getstats(user_id).subscribe(
        (data: any) => {
          this.chartMonths = data.data.items.map(
            (value: any) => value.month + ' ' + moment().format('YYYY')
          );
          this.chartData = data.data.items.map((value: any) => value.count);
          this.totalBids = data.data.totalBids;
          this.cdr.detectChanges();
        },
        (error) => {
          // Handle API request error here
          console.error('API Error:', error);
        }
      );
    }
  }

  deleteItem(id: any) {
    if (confirm('Are you sure you want to delete this item?')) {
      // Send a DELETE request to delete the item
      this.dataService.deleteBid(id).subscribe(
        (res) => {
          console.log('Item deleted', res);

          // Remove the item from the items array
          const index = this.items.findIndex((item) => item.id === id);
          if (index !== -1) {
            this.items.splice(index, 1);
          }
        },
        (error) => {
          console.error('Error deleting item:', error);
        }
      );
      this.cdr.detectChanges();
      this.getData();
    }
  }
  navigateToOverview(id: any) {
    this.router.navigate(['/bid-overview/' + id]);
  }
  ngOnInit(): void {
    this.addDataForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      id: [''],
      date: ['', [Validators.required]],
      time: [''],
      project_title: ['', [Validators.required]],
      url: ['', [Validators.required]],
      proposals_count: ['', [Validators.required]],
      submitted_by: ['', [Validators.required, Validators.maxLength(50)]],
      verified: ['', [Validators.required]],
      response: ['', [Validators.required]],
      hired: ['', [Validators.required]],
      account: ['', [Validators.required]],
      project_description: ['', [Validators.required]],
      skills_required: ['', [Validators.required]],
      submitted_bid_description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      fixed: ['', [Validators.required]],
      remarks: ['', [Validators.required]],
      total_connects_count: ['', [Validators.required]],
    });

    this.user = this.authService.getAuthFromLocalStorage();

    if (this.user) {
      this.getData();
      this.getGraphData();
    }

    console.log('Updated selected date: ' + this.selecteMyDate);
    const storedDate = localStorage.getItem('selectedDate');
    if (storedDate) {
      // If a value is found in localStorage, you can use it
      this.selecteMyDate = storedDate;
      console.log(
        'Retrieved selected date from localStorage: ' + this.selecteMyDate
      );
    } else {
      // Handle the case where no value is found in localStorage
      console.log('No selected date found in localStorage');
    }

    console.log('Updated selectedTime: ' + this.selecteMyTime);
    const storedTime = localStorage.getItem('selectedTime');
    if (storedTime) {
      // If a value is found in localStorage, you can use it
      this.selecteMyTime = storedTime;
      console.log(
        'Retrieved selected date from localStorage: ' + this.selecteMyTime
      );
    } else {
      // Handle the case where no value is found in localStorage
      console.log('No selected date found in localStorage');
    }

    this.dataService.addForm.next(false);
    this.cdr.detectChanges();
  }
  totalItems = 0;
  totalPages = 0;
  currentPage = 1;
  perPage = 10;

  previousPage() {
    if (this.currentPage == 1) {
      return;
    }
    this.currentPage--;
    this.navigateWithQueryParams();
  }

  nextPage() {
    if (this.currentPage == this.totalPages) {
      return;
    }
    this.currentPage++;
    this.navigateWithQueryParams();
  }

  navigateWithQueryParams() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        page: this.currentPage,
        perPage: this.perPage,
      },
      queryParamsHandling: 'merge',
    });
  }

  getData() {
    this.isdataLoading = true;
    this.route.queryParams.subscribe((query: any) => {
      let { page, perPage } = query;
      let queryParams: any = {
        perPage: perPage || this.perPage, // Use the route query parameter if available, or fallback to the default
        page: page || this.currentPage, // Use the route query parameter if available, or use the current page
      };
      if (this.order) {
        queryParams = {
          ...queryParams,
          order: this.order,
          orderBy: this.orderBy,
        };
      }
      this.perPage = queryParams.perPage;
      this.currentPage = queryParams.page;
      this.dataService.getBids(this.user, queryParams).subscribe(
        (res: any) => {
          if (res?.data?.items) {
            this.items = res.data.items;
            console.log('dsadasdsad>>>>', this.items);
            this.dataSharingService.setObject(this.items);
            this.totalItems = res.data.totalItems;
            this.totalPages = res.data.totalPages;
            if (this.items.length > queryParams.perPage) {
              queryParams.page++;
            }
            console.log('res.data', res.data);
          }
          if (this.items.length === 0 && queryParams.page > 1) {
            // Redirect to the previous page
            this.router.navigate(['/dashboard'], {
              queryParams: {
                page: queryParams.page - 1,
                perPage: queryParams.perPage,
              },
            });
          }
          // Trigger change detection manually
          this.cdr.detectChanges();
        },
        (error) => {
          // Handle the error here, e.g., show an error message or log the error.
          console.error('An error occurred:', error);
        },
        () => {
          // The finally block, this code will run whether the request succeeds or fails.
          this.isdataLoading = false;
          this.cdr.detectChanges();
        }
      );
    });
  }
  onKey(item: any) {
    // item[index] = item.target.value;
    console.log('updated date', item.target.value);
  }
  // onKey(item: any) {
  //   // The item.date property has been updated with the user's input
  //   console.log("updated date",item.target.value);
  // }

  cancelEdit(i: any, index: number) {
    // Revert changes or simply exit edit mode
    i.isItemEditMode = true; // Set the edit state to false to exit edit mode
  }
}
