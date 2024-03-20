import { Component } from '@angular/core';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  isChecked = false;

  public links = [
    { path: '../profile', icon: 'fa-solid fa-user', text: 'translate_profile' },
    {
      path: 'offers',
      icon: 'fa-solid fa-clipboard-check',
      text: 'translate_offers',
      special: true,
    },
    { path: 'ads', icon: 'fa-solid fa-bullhorn', text: 'translate_my_ads' },
    {
      path: 'custumer-requests',
      icon: 'fa-sharp fa-solid fa-people-group',
      text: 'translate_customer_requests',
    },
    {
      path: 'my-requests',
      icon: 'fa-solid fa-clipboard-list',
      text: 'translate_my_requests',
    },
    {
      path: 'notifications',
      icon: 'fa-solid fa-message-captions',
      text: 'translate_notifications',
    },
    {
      path: 'edit',
      icon: 'fa-solid fa-user-pen',
      text: 'translate_edit_profile',
    },
    { path: 'wallet', icon: 'fa-solid fa-wallet', text: 'translate_wallet' },
    { path: 'settings', icon: 'fa-solid fa-gear', text: 'translate_settings' },
    {
      path: 'log-out',
      icon: 'fa-solid fa-right-from-bracket',
      text: 'translate_log_out',
    },
  ];
}
