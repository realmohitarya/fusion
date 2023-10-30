import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { getCSSVariableValue } from '../../../../../kt/_utils';
import { DataService } from 'src/app/modules/auth/services/data.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-mixed-widget11',
  templateUrl: './mixed-widget11.component.html',
})
export class MixedWidget11Component implements OnInit {
  @Input() chartColor: string = '';
  @Input() chartHeight: string;
  @Input() chartMonths: any;
  @Input() chartData: any;
  @Input() totalBids: any;
  @Input() year: any;

  @Output() selectedYearChange = new EventEmitter<any>();

  chartOptions: any = {};
  // Inside your component class
  yearsList: number[] = [];
  currentYear: any = '';

  // You can populate this array with the years you need, for example:

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.currentYear = this.year;
    this.chartOptions = this.getChartOptions(this.chartHeight, this.chartColor);

    for (let year = 1990; year <= new Date().getFullYear(); year++) {
      this.yearsList.push(year);
    }

    this.cdr.detectChanges();
  }
  onYearSelect(e: Event) {
    const selectedYear = (e.target as HTMLSelectElement).value;
    // this.dataService.selectedYear.next(selectedYear);
    this.selectedYearChange.emit(selectedYear);
    this.currentYear = selectedYear;
    console.log('Selected Year:', this.currentYear);
    this.cdr.detectChanges();
  }
  getChartOptions(chartHeight: string, chartColor: string) {
    console.log('chartMonths', this.chartMonths);
    this.cdr.detectChanges();
    const labelColor = getCSSVariableValue('--bs-gray-500');
    const borderColor = getCSSVariableValue('--bs-gray-200');
    const secondaryColor = getCSSVariableValue('--bs-gray-300');
    const baseColor = getCSSVariableValue('--bs-' + chartColor);

    return {
      series: [
        {
          name: 'Bids',
          data: this.chartData,
        },
      ],
      chart: {
        fontFamily: 'inherit',
        type: 'bar',
        height: chartHeight,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 5,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: this.chartMonths,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: labelColor,
            fontSize: '12px',
          },
        },
      },
      fill: {
        type: 'solid',
      },
      states: {
        normal: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        hover: {
          filter: {
            type: 'none',
            value: 0,
          },
        },
        active: {
          allowMultipleDataPointsSelection: false,
          filter: {
            type: 'none',
            value: 0,
          },
        },
      },
      tooltip: {
        style: {
          fontSize: '12px',
        },
        y: {
          formatter: function (val: number) {
            return val + ' Bids';
          },
        },
      },
      colors: [baseColor, secondaryColor],
      grid: {
        padding: {
          top: 10,
        },
        borderColor: borderColor,
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
    };
  }
}
