import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-eligibility-calculator',
  templateUrl: './eligibility-calculator.component.html',
  styleUrls: ['./eligibility-calculator.component.scss']
})
export class EligibilityCalculatorComponent implements OnInit {

  monthlyIncome: any = 0;
  monthlyExpense: any = 0;
  repaymentTenure: any = [
    {value: '6', viewValue: '6 months'},
    {value: '12', viewValue: '12 months'},
    {value: '18', viewValue: '18 months'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
