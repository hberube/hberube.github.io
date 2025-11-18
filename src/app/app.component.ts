import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule
  ],
  template: `
    <!-- Banner -->
    <div class="banner">
      <img src="assets/img/pool_hugo_banner.png" alt="Pool Bérubé Roy" class="banner-image">
    </div>
    
    <main class="main-content" role="main">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .banner {
      max-width: 1200px;
      margin: 16px auto;
      position: relative;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      border-radius: 16px;
      transition: all 0.3s ease;
      animation: fadeIn 0.8s ease-out;
      display: flex;
      justify-content: center;
      padding: 16px;
    }

    .banner:hover {
      box-shadow: 0 6px 16px rgba(0,0,0,0.25);
      transform: translateY(-2px);
    }

    .banner-image {
      width: 100%;
      height: auto;
      max-height: 360px;
      object-fit: contain;
      border-radius: 16px;
      transition: transform 0.3s ease;
    }

    .banner:hover .banner-image {
      transform: scale(1.02);
    }

    .toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      display: flex;
      justify-content: center;
    }

    .toolbar-content {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 800px;
      padding: 0 16px;
    }

    .logo {
      height: 40px;
      margin-right: 16px;
    }

    .title {
      font-size: 20px;
      font-weight: 500;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .nav-links {
      display: flex;
      gap: 8px;
    }

    .nav-links a {
      color: white;
    }

    .nav-links a.active {
      background-color: rgba(255, 255, 255, 0.2);
    }

    .mobile-nav {
      display: none;
    }

    .main-content {
      padding: 24px;
      max-width: 800px;
      margin: 0 auto;
      animation: fadeIn 0.6s ease-out 0.2s backwards;
    }

    @media (max-width: 768px) {
      /* Disable all animations on mobile */
      .banner {
        margin: 8px;
        border-radius: 12px;
        position: relative;
        animation: none !important;
        transition: none !important;
      }

      .banner:hover {
        transform: none;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }

      .banner-image {
        border-radius: 12px;
        transition: none !important;
      }

      .banner:hover .banner-image {
        transform: none;
      }

      .main-content {
        animation: none !important;
      }

      .desktop-nav {
        display: none !important;
      }

      .title {
        font-size: 16px;
      }

      .logo {
        height: 32px;
        margin-right: 8px;
      }

      .mobile-nav {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(25, 118, 210, 0.98);
        backdrop-filter: blur(10px);
        box-shadow: 0 -2px 8px rgba(0,0,0,0.2);
        z-index: 1000;
        justify-content: space-around;
        padding: 8px 0;
      }

      .mobile-nav-item {
        display: flex !important;
        flex-direction: column;
        align-items: center;
        color: white !important;
        min-width: 60px;
        padding: 4px 8px !important;
      }

      .mobile-nav-item mat-icon {
        font-size: 24px;
        width: 24px;
        height: 24px;
        margin-bottom: 2px;
      }

      .mobile-nav-item span {
        font-size: 11px;
      }

      .mobile-nav-item.active {
        background-color: rgba(255, 255, 255, 0.2);
        border-radius: 8px;
      }

      .main-content {
        padding: 12px;
      }
    }
  `]
})
export class AppComponent {
  title = 'Pool Bérubé Roy';
}
