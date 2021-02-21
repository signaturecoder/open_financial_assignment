import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'open-financial-assignment';
  cardDetails = [
    {id: 1, avatarUrl: '/assets/images/Get Paid Instantly.png', title: 'Quick cash disbursement', description: 'Get terms loans that your buisness needs within 72 hrs' },
    {id: 2, avatarUrl: '/assets/images/freelancer_feature_icon_6.png', title: 'Ace your buisness finances', description: 'Manage banking, accounting & everything in between, on one platform'},
    {id: 3, avatarUrl: '/assets/images/Low interest rate.png', title: 'Low-interest rate', description: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'},
    {id: 4, avatarUrl: '/assets/images/Covid.png', title: 'Loans to fight COVID-19', description: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'},
    {id: 5, avatarUrl: '/assets/images/Secure Payments.png', title: 'Zero Paperwork', description: 'Get started instantly by submitting only your basic details & bank statements'}
  ]
}
