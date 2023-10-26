import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataSharingService } from '../../data-sharing.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from '../../modules/auth/services/data.service';
import moment from 'moment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-bid-overview',
  templateUrl: './bid-overview.component.html',
  styleUrls: ['./bid-overview.component.scss'],
})
export class BidOverviewComponent {
  sharedData: any;

  constructor(
    private dataSharingService: DataSharingService,
    private router: Router,
    private route: ActivatedRoute,
    private dataservice: DataService,
    private cdr: ChangeDetectorRef,
    private location: Location
  ) {}
  // Get the shared data
  ngOnInit() {
    // Get the shared data in the ngOnInit hook
    // this.sharedData = this.dataSharingService.getSharedData();
    // console.log('>>>>>>>from bid', this.sharedData);
    this.route.params.subscribe((params) => {
      const id = params['id'];
      console.log('Route parameter id:', id);
      this.dataservice.getBidById(id).subscribe((data) => {
        console.log('data', data);
        this.sharedData = data;

        this.cdr.detectChanges();
      });
    });
  }

  formatTime(time: any) {
    return moment(time, 'HH:mm').format('hh:mm A');
  }

  goBack() {
    if (this.location.getState() && this.location.getState()) {
      // If there's navigation history (navigationId > 1), go back.
      this.location.back();
    } else {
      // If there's no navigation history, navigate to the dashboard.
      this.router.navigate(['/dashboard']);
    }
  }

  formatLargeInteger(value: number) {
    const numfor = Intl.NumberFormat('en-IN');
    return numfor.format(value);
  }
  backToDashboard() {
    this.router.navigate(['/']);
  }
}
